
import React from 'react'


export default function Footer() {

  const year = new Date().getFullYear()

  return (
    <>
      <div className='mt-5 container bg-dark rounded-pill'>
        <h1 className='text-danger text-center'>Note!
        </h1>
        <p className='text-white text-center'>You can do contact with us on  Telegram <br />
          <h2>Go and search "@Stonebeer000" on Telegram</h2>  </p>
      </div>
      <footer className='py-4 bg-secondary mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='mb-0 text-center text-white' style={{ fontFamily: "cursive", fontSize: "30px" }}>&copy; {year} . All Right Reserved By PakGames</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
