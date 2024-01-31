import React from 'react'

export default function About() {
  return (
    <>
    <div className='text-center'>
      <h2 className='animate__animated animate__backInUp'>Registeration Method</h2>
      <div className='container text-center text-warning w-50 animate__animated animate__fadeInRight' style={{border:"1px solid black"}}></div>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6 mt-5'>
          <th>1.</th>
          <tr>Enter your phone number</tr>
          <th>2.</th>

          <tr>Enter your password</tr>
          <th>3.</th>

          <tr>Press Register button</tr>
          <th>4.</th>

          <tr>Remember your password</tr>
          
          
        </div>

        <div className='col-12 col-md-6 mt-5'>
        <img id='responsive' src="Img5.png" alt="Img" />
        </div>
      </div>

    </div>
    
    </>
  )
}
