import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./styles/app.scss";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Navigation from './components/layout/Navigation';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import Space from "./components/common/Space";
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <div id='app'>
      <Navigation/>
      <Sidebar/>
      <div id='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      <Space/>
      <Footer/>
    </div>
  );
}

export default App;