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
        <div className=' col-12 col-md-6 mt-5'>
          <th>1.</th>
          <tr>Enter your phone number</tr>
          <th>2.</th>

          <tr>Enter your password</tr>
          <th>3.</th>

          <tr>Press Register button</tr>
          <th>4.</th>

          <tr>Remember your password</tr>
          <th>5.</th>

          <tr>Click on check mark is compulsory</tr>
          
          
        </div>

        <div className='col-12 col-md-6 mt-5'>
        <img className="rounded mx-auto d-block  shadow-lg p-1 mb-5 bg-white rounded" id='responsive' src="Img5.png" alt="Img" />
        </div>
      </div>

    </div>

    <div className='text-center mt-4'>
      <h2 className='animate__animated animate__backInUp'>Deposit Method</h2>
      <div className='container text-center text-warning w-50 animate__animated animate__fadeInRight' style={{border:"1px solid black"}}></div>
    </div>

    <div className='container'>
      <div className='row'>
        <div className=' col-12 col-md-6 mt-5'>
          <th>1.</th>
          <tr>Choose Deposit method</tr>
          <th>2.</th>

          <tr>write amount how much you want deposit</tr>
          <th>3.</th>

          <tr>Press Register button</tr>
          <th>4. <span className='text-danger'>Note!</span></th>

          <tr>Remember that Easypaisa and Jazzcash are easiest way for deposit</tr>
          <th>5.</th>

          <tr>You can claim bouns on every deposit</tr>
          
          
        </div>

        <div className='col-12 col-md-6 mt-5'>
        <img className="rounded mx-auto d-block  shadow-lg p-1 mb-5 bg-white rounded" id='responsive' src="Img3.png" alt="Img" />
        </div>
      </div>

    </div>


    
    </>
  )
}
