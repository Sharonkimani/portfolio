import React from 'react'
import {About, Footer, Skills, Header } from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Footer />
     </div>
  )
}

export default App