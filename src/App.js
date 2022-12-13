import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import About from './About'

import Resume from './Resume'
import Contact from './Contact'
import Menu from './Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner'
import Project from './Project'
import Footer from './Footer';




function App() {
  return (
    <>
      <div>

        <Menu />

        <Banner />
        <br />
        <br />



        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/project' element={<Project />}></Route>
          {/* <Route path='/resume' element={<Resume />}></Route> */}
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>

        <br />

        <br />


        <Footer />



      </div>
    </>
  )
}

export default App;