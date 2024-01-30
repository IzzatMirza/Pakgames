import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NoPage from './NoPage'

import Login from './Login'
import Signup from './Signup'
import ForgetPassword from './ForgetPassword'
import ResetPassword from './ResetPassword'

export default function Index() {
    return (
        <Routes>

            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='forgetpassword' element={<ForgetPassword />} />
            <Route path='reset' element={<ResetPassword />} />
            <Route path='*' element={<NoPage />} />

        </Routes>
    )
}
