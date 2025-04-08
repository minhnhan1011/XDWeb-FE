import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Homepage'

import Login from './Login'
import Signup from './Signup'
import Booking from './Bookingj'
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/booking' element={<Booking/>}></Route>
            
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>

        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App