import React from 'react'
import { useState } from 'react';
import { auth } from 'config/firebase';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



const initialstate = {
  email: "",
  password: "",
}


export default function Login() {
  const [state, setState] = useState(initialstate)
  const [processing, setProcessing] = useState(false)
  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target

    setState(s => ({ ...s, [name]: value }))
  }

  const handleSubmit = e => {

    e.preventDefault()

    let { email, password } = state


    setProcessing(true)

    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.toastify("Logged In", "success")
        navigate("/")

        console.log(user)
        // ...
      })
      .catch((err) => {
        window.toastify("Error in Email Or PASSWORD", "error")
        console.log(err)

        // ..
      })
      .finally(() => {
        setProcessing(false)

      })

  }
  return (
    <>
      <div className='container pt-5 auth animate__animated animate__backInDown'>
        <div className='row'>
          <div className='col'>
            <div className='card p-4 text-center'>

              <h2 className='mb-4'>Login</h2>

              <form onSubmit={handleSubmit}>
                <div className='row '>
                  <div className='col-12  mb-3 '>
                    <input className='form-control ' onChange={handleChange} type="email" name='email' placeholder=' Email' />
                  </div>
                  <div className='col-12  mb-3'>
                    <input className='form-control ' onChange={handleChange} type="password" name='password' placeholder=' Password' />
                  </div>

                  <div className='text-center'>
                    <button className='btn btn-outline-info w-50 mb-2' disabled={processing}>
                      {!processing
                        ? <span>Login</span>
                        : <div className="spinner spinner-grow spinner-grow-sm"><datagrid></datagrid></div>
                      }</button>
                      <br />
                      {/* <button className='btn btn-secondary w-50'>{navigate("/")} Back to home</button> */}


                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

