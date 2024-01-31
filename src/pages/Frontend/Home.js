import React from 'react'
import {Link}   from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className='container mt-5'>
                <div className='row mt-5'>
                    <div className='col-12 col-md-6'>
                        <h1 className='mt-5 animate__animated animate__backInLeft animate__delay-1s'>Welcome to the Future
                            <span className='text-danger'>....</span></h1>

                        <div style={{ border: "1px solid black" }}></div>

                        <h4 className='mt-5'>We bring to you a very awesome money <br />making plateform , that is actually <br /> very good . click on below button <br />
                        for free registration</h4>

                        <button className='btn btn-warning mt-5'>
                        <Link style={{textDecoration:"none" , color:"black" , fontSize:"20px"}} to="https://pakgames.net/#/register?invitationCode=8552295284">Free Register</Link>
                            
                        </button>
                       

                    </div>

                    <div className=' col-12 col-md-6 mt-5' >
                        <img className='responsive' src="Img1.png" alt="" />
                    </div>


                </div>
            </div>

            <div className='container mt-4' style={{ border: "1px solid black" }}></div>

            <div className='container mt-5'>

                <div className='row mt-5'>
                    <div className=' col-12 col-md-6'>
                        <img className='responsive mt-5' src="Img2.png" alt="Img" />
                    </div>



                    <div className='mt-5 col-12 col-md-6 animate__animated animate__backInRight'>
                        <h3>We are giving to very good opportunit to <br /> earn money don't miss this opportunity And  we will give also give you a nice <br /> BONUS over time. <br />
                            BEST OF LUCK
                        </h3>

                        <h2><p><span className='text-danger'>!</span>Safe Deposit, Safe and Fast Withdraw <span className='text-danger'>!</span></p></h2>
                        

                </div>
                </div>
                </div>

        </>
    )
}
