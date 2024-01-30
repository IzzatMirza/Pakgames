import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Estore</a>
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
                <Link to="contact" className="nav-link active" >Contact</Link>
              </li>
            </ul>

            </div>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

            <ul className="navbar-nav">
              
                <li className="nav-item ">
                  <Link to="/auth/login" className="nav-link active" >Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/auth/signup" className="nav-link active" >SignUp</Link>
                </li>

                <li className="nav-item">
                  <Link to="/dashboard/dashboard" className="nav-link active" >Dashboard</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
