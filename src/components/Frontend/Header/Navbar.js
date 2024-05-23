import React from 'react'
import { Link } from 'react-router-dom'

import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary animate__animated animate__flash animate__delay-0.5s">
        <div className="container">


          {/* <lord-icon
            src="https://cdn.lordicon.com/zfzufhzk.json"
            trigger="loop"
            delay="1500"
            state="in-dynamic"
            style={{ width: "50px", height: "50px" }}>
          </lord-icon> */}

          <lord-icon
            src="https://cdn.lordicon.com/jtiihjyw.json"
            trigger="loop"
            delay="1500"
            state="in-reveal"
            style={{ width: "50px", height: "50px" }}>

          </lord-icon>


          <a className="navbar-brand" href="#" style={{ color: "#e76f51", fontFamily: "sans-serif", fontSize: "28px" }}>PakGames</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarNav">

            <ul className="navbar-nav">

              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link active" >About</Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link active" >Issue</Link>
              </li>
            </ul>

          </div>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

            <ul className="navbar-nav">

              {/* <li className="nav-item ">
                  <Link to="/auth/login" className="nav-link active" >Login</Link>
                </li> */}
              <button className='btn m-1 btn-secondary'>
                <li className="nav-item">
                  <Link to="/auth/signup" className="nav-link active" >SignUp</Link>
                </li>
              </button>

              {/* <button id='shadow' className='btn btn-warning mt-5 animate__animated animate__swing animate__delay-4s'>
                            <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="https://pakgames.net/#/register?invitationCode=8552295284">Free Register</Link>

                        </button> */}


<button className='btn m-1 btn-secondary'>
                <li className="nav-item">
                  <Link to="https://pakgames.net/#/register?invitationCode=8552295284" className="nav-link active" >Free Register</Link>
                </li>
              </button>



              {/* <li className="nav-item">
                <Link to="/dashboard/dashboard" className=" disable" >Dashboard</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
