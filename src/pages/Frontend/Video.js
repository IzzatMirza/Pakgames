import React from 'react'

export default function Video() {
  return (
    <>
    <h3 className='text-center animate__animated animate__swing animate__delay-3s' style={{fontFamily:"fantasy"}}>Learn here</h3>
    <p className='text-center animate__animated animate__swing animate__delay-3s' style={{fontFamily:"monospace"}}>You can download the video</p>
     <div className='container mt-5 animate__animated animate__backInDown animate__delay-1s'>
        <video className='mx-auto d-block' controls width={"250px"} src="Video.mp4"></video>
      </div>

    </>
  )
}
