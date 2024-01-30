import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Frontend from "./Frontend"
import Auth from "./Auth"
import Dashboard from "./Dashboard"


export default function Index() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/Auth/*' element={<Auth />} />
        <Route path='/Dashboard/*' element={<Dashboard/>}/>
        {/* <Route path='*' element={<>Page Not Found</> }/> */}


      </Routes>

    </BrowserRouter>
  )
}
