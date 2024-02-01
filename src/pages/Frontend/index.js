import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nopage from './Nopage'
import Video from './Video'
import Header from 'components/Frontend/Header';
import Footer from 'components/Frontend/Footer'
import Contact from './Contact'

export default function Index() {
  return (

    <>
      <Header />
      <main>
      <Routes>



        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact/>} />
        <Route path='video' element={<Video/>}/>
        <Route path='*' element={<Nopage />} />

      </Routes>
      </main>
      <Footer/>

    </>
  )
}
