import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Chat from './pages/Chat'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}
