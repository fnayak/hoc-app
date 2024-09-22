import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserDetailPage from './pages/UserDetailPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = { <HomePage /> } />
        <Route path='/users/:userId' element = {<UserDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
