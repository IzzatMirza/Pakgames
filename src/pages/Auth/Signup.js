import React, { useState } from 'react';
import { auth } from 'config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const initialstate = {
  email: "",
  password: "",
  confirmPassword: "",
}

export default function Signup() {

  const [state, setState] = useState(initialstate)
  const [processing, setProcessing] = useState(false)
  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target

    setState(s => ({ ...s, [name]: value }))
  }

  const handleSubmit = e => {

    e.preventDefault()

    let { email, password, confirmPassword } = state



    if (confirmPassword !== password) {
      return window.toastify("Password doesn't match", "error")
    }


    console.log(email, password, confirmPassword)

    setProcessing(true)

    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.toastify("User SignUp", "success")
        navigate("/")
        console.log(user)
        // ...
      })
      .catch((err) => {
        window.toastify("Already Signup", "error")
        console.log(err)

        // ..
      })
      .finally(() => {
        setProcessing(false)

      })



  }


  return (
    <>
      <div className='container pt-5 auth'>
        <div className='row'>
          <div className='col'>
            <div className='card p-4 text-center'>

              <h2 className='mb-4'>SignUp</h2>

              <form onSubmit={handleSubmit}>
                <div className='row '>
                  <div className='col-12 mb-3 '>
                    <input className='form-control ' onChange={handleChange} type="email" name='email' placeholder=' Email' />
                  </div>

                  <div className='col-12 mb-3'>
                    <input className='form-control ' onChange={handleChange} type="password" name='password' placeholder=' Password' />
                  </div>

                  <div className='col-12 mb-3'>
                    <input className='form-control ' onChange={handleChange} type="password" name='confirmPassword' placeholder='Confirm Password' />

                  </div>
                  <div className='text-center'>
                    <button className='btn btn-outline-info w-50 mb-2' disabled={processing}>
                      {!processing
                        ? <span>SignUp</span>
                        : <div className="spinner spinner-grow spinner-grow-sm"><datagrid></datagrid></div>
                      }</button>
                      
                      <Link to="/auth/login" className='mb-0' style={{color:"red", textDecoration:"none"}} >Already Signup</Link>
                       <br />
                    
                      

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
      {/* <button className='btn btn-secondary w-50'>{navigate("/")} Back to home</button> */}
    
    </>



  )
}
