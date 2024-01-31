import React from 'react'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { firestore } from 'config/firebase';
import {  doc, serverTimestamp, setDoc } from 'firebase/firestore';


const initialstate = {
    fullName : "" ,
    email : "" ,
    city : "" ,
    phone: "" ,
    subject : "" ,
    // message:"",
}

export default function Contact() {

  const [state, setState] = useState(initialstate)
  const [processing  , setProcessing] = useState (false)
  const navigate = useNavigate()


  const handleChange = e => {
    const { name, value } = e.target
    setState(s => ({ ...s, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()



    let {fullName, email , city , phone , subject  } = state

    fullName = fullName.trim()
    subject = subject.trim()
    // message = message.trim()


    if (fullName.length < 3) {
        return window.toastify("Enter Correct Name", "error")
    }
    if (subject.length < 8) {
        return window.toastify("Enter Correct Subject", "error")
    }
    
    if (!window.isEmail(email)) {
        return window.toastify("Enter Correct Email", "error")
    }
  
     

    let formData = {
        fullName, email, city, phone, subject,
        id: window.getRandomId(),
        dateCreated: serverTimestamp()
    }

    setProcessing(true) 

    try {
         await setDoc(doc(firestore, "messages", formData.id), formData);
        // console.log("Document written with ID: ", docRef.id);
        window.toastify("Msg Sent", "success")
        navigate("/")
    } 
    catch (e) {
        console.error("Something Wrong While Sent Message: ", e);
        window.toastify("Error in Email Or PASSWORD", "error")
    }
    setProcessing(false)
}

  return (
    <>
      <div className='container pt-5 animate__animated animate__shakeY'>
                <h2 className='mb-4 text-center'>Submit Your Issue Here </h2>

                <div className='row'>
                    <div className='col'>

                        <div className='card p-4 text-center'>

                            <form onSubmit={handleSubmit}>
                                <div className='row '>
                                    <div className='col-12 col-md-6 mb-2 '>
                                        <input className='form-control ' onChange={handleChange} type="text" name='fullName' placeholder='Full Name' />
                                    </div>

                                    <div className='col-12 col-md-6 mb-2 '>
                                        <input className='form-control ' onChange={handleChange} type="email" name='email' placeholder=' Email' />
                                    </div>


                                    <div className='col-12 col-md-6 mb-2 '>
                                        <input className='form-control ' onChange={handleChange} type="Phone" name='city' placeholder='City' />
                                    </div>


                                    <div className='col-12 col-md-6 mb-2'>
                                        <input className='form-control ' onChange={handleChange} type="text" name='phone' placeholder='Phone' />
                                    </div>

                                    <div className='col-12 mb-3'>
                                        <input className='form-control ' onChange={handleChange} type="text" name='subject' placeholder='Subject' />
                                    </div>

                                    {/* <div className='col-12 mb-3'>
                                        <textarea  className='form-control' placeholder='Message / Query' name='message' ></textarea>
                                    </div> */}


                                    <div className='col-12 col-md-6 offset-md-3'>
                                        <button className='btn btn-outline-info w-50' disabled={processing}>
                                            {!processing
                                                ? <span>Submit</span>
                                                : <div className="spinner spinner-grow spinner-grow-sm"><datagrid></datagrid></div>
                                            }</button>

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

