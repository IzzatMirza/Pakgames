import React, { useState, useEffect, } from 'react'
import { getAuth, onAuthStateChanged , signOut} from 'firebase/auth';
import { auth, firestore } from 'config/firebase';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {


  const [user, setUser] = useState([])
  const [documents, setDocuments] = useState([])
  // const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
        console.log("Sign Out")
      }
    });

  }, [])


  const readDocument = async () => {
    // setLoading(true)

    const querySnapshot = await getDocs(collection(firestore, "messages"));

    let array = []
    querySnapshot.forEach((doc) => {

      let data = doc.data()
      array.push(data)
    });

    setDocuments(array)
    // setLoading(false)

  }

  useEffect(() => {
    readDocument()



  }, [])

  
  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      console.log("LogOUT")
      window.toastify("LogOut" ,"Success")
      setUser({})
      navigate("/")
    })
    .catch(() => {
      window.toastify("No logOut" ,"error")
    })

  }





  // const handleUpadate = async (message) => {
  //   try {
  //     await setDoc(doc(firestore, "messages", message), formData);
  //     // console.log("Document written with ID: ", docRef.id);
  //     window.toastify("Msg Updated", "success")
  //   }
  //   catch (e) {
  //     console.error("Something Wrong While Sent Message: ", e);
  //     window.toastify("Error in Email Or PASSWORD", "error")
  //   }
  //   console.log(message)
  // }

  // const handleDelete = message => {
  //   console.log(message)
  // }

  return (
    <>
      <div className='container text-center my-5'>
        <h2>Data</h2>
        <div style={{ border: "2px solid black" }} className='w-50 offset-3 my-5'></div>
        <h3>User : {user.email}</h3>
        <h3>Uid : {user.uid}</h3>

      </div>


      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className='text-center'>Data Of User</h1>
            <div style={{ border: "2px solid black" }} className='w-50 offset-3 my-5'></div>
            <div className='table-responsive'>
              <table className="table">
                <thead>
                  <tr>
                    <th >S.No</th>
                    <th>Full Name</th>
                    <th >Email</th>
                    <th >City</th>
                    <th >Country</th>
                    <th >Subject</th>
                    {/* <th >Action</th> */}

                  </tr>
                </thead>
                <tbody>

                  {documents.map((doc, i) => {
                    return <tr key={i}>
                      <th>{i + 1}</th>
                      <td>{doc.fullName}</td>
                      <td>{doc.email}</td>
                      <td>{doc.city}</td>
                      <td>{doc.country}</td>
                      <td>{doc.subject}</td>
                      {/* <td>
                        <button className='btn btn-sm btn-info m-1' onClick={() => { handleUpadate(doc) }}>Update</button>
                        <button className='btn btn-sm btn-danger m-1' onClick={() => { handleDelete(doc) }}>Delete</button>
                      </td> */}
                    </tr>
                  })}


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center'>

        <button className='btn btn-danger' onClick={handleLogout}>LogOut</button>
      </div>
    </>
  )
}
