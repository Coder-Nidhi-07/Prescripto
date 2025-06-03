import React from 'react'
import {Route,Routes}
from 'react-router-dom'
 import Home from './pages/Home'
import Doctors from './pages/Doctors'
import MyProfile from './pages/MyProfile'
import Contact from './pages/Contact'
import Login from './pages/Login'
import About from './pages/About'
import MyAppointment from './pages/MyAppointment'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%'>
      <Navbar/>     
      {/* Navbar added outside the browser as it is visible in all pages either home about or any other */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/dotors/:speciality' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
            <Route path='/my-appointments' element={<MyAppointment/>}/>

      </Routes>
     <Footer/>
     {/* footer is mounted in app.jsx so tht it will be visible in all the pages */}
    </div>
  )
}

export default App
