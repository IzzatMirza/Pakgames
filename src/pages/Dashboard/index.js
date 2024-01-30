import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from './Dashboard'
import NoPage from './NoPage'

export default function Index() {
  return (
    <Routes>
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='*' element={<NoPage />} />


    </Routes>
  )
}
