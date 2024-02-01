import { Button } from 'bootstrap/dist/js/bootstrap.bundle'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className='container mt-5'>
                <div className='row mt-5'>
                    <div className='col-12 col-md-6'>
                        <h1 className='mt-5 animate__animated animate__backInLeft animate__delay-1s'>Welcome to the Future
                            <span className='text-danger'>....</span></h1>

                        <div style={{ border: "1px solid black" }}></div>

                        <h4 className='mt-5 animate__animated animate__flash animate__delay-2s'>We bring to you a very awesome money <br />making plateform , that is actually  very <br /> good . click on below button 
                            for free <br /> registration , Watch the Video to 
                            <br />know the complete method</h4>

                        <button id='shadow' className='btn btn-warning mt-5 animate__animated animate__swing animate__delay-4s'>
                            <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="https://pakgames.net/#/register?invitationCode=8552295284">Free Register</Link>

                        </button>

                        <button id='shadow' className='btn btn-danger mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                            <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="video">Video</Link>

                        </button>



                    </div>

                    <div className=' col-12 col-md-6 mt-5' >
                        <img  className='responsive' src="Img1.png" alt="" />
                    </div>




                </div>
            </div>

            <div className='container mt-4' style={{ border: "1px solid black" }}></div>

            <div className='container mt-5'>

                <div className='row mt-5'>
                    <div  className=' col-12 col-md-6'>
                        <img id='shadow' className=' rounded responsive mt-5' src="Img2.avif" alt="Img" />
                    </div>



                    <div className='mt-5 col-12 col-md-6 animate__animated animate__backInRight'>
                        <h3>We are giving to very good opportunity to <br /> earn money don't miss this opportunity And  we will give also give you a nice <br /> BONUS over time. <br />
                            BEST OF LUCK
                        </h3>

                        <h2><p><span className='text-danger'>!</span>Safe Deposit, Safe and Fast Withdraw <span className='text-danger'>!</span></p></h2>


                    </div>
                </div>
            </div>

        </>
    )
}
