import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Chat from './pages/Chat'
import SignUp from './pages/SignUp'
import SetAvatar from './pages/SetAvatar'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<SignUp />} />
        <Route path='/setAvatar' element={<SetAvatar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}
