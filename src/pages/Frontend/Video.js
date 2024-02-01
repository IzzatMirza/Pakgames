import React from 'react'

export default function Video() {
  return (
    <>
     <div className='container mt-5 animate__animated animate__backInDown animate__delay-1s'>
        <video className='mx-auto d-block' controls width={"250px"} src="Video.mp4"></video>
      </div>

    </>
  )
}
