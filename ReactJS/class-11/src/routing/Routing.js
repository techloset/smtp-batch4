import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// navbar
import Navbar from '../components/navbar/Navbar'



// pages
import Home from '../pages/home/Home'
import Services from '../pages/services/Services'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'


export default function Routing() {
  return (
    <div>
        <BrowserRouter>

        <Navbar/>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />

        </Routes>

        </BrowserRouter>
    
    </div>
  )
}



// store = {
//   a:{
//     email:'sdfasdf'
//   }
//   b: {
//     userName:'sdfa'

//   }
//   c:{
//     id:'wsad',
//     count:234
//   }
// }

// useSelector(store)

// useSelector(store.c)

// useSelector(store.c.count)