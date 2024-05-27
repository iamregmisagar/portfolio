import React, {useState} from 'react'
import logo from "../Content/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
    
    return (
        <header className=" bg-neutral-900 text-white fixed w-full top-0 left-0 z-50 h-[10vh] flex items-center" aria-label="main navigation">
      <div className="container mx-auto flex justify-between items-center px-20 h-full">
        <div className="flex items-center">
          <Link to="/" className="navbar-item" href="/">
            <img
              src={logo}
              alt="Logo"
              className="h-24 md:h-28"
            />
          </Link>
          
        </div>
        <nav className="navbar-menu md:flex  flex-col md:flex-row items-center">
          <a href="https://www.linkedin.com/in/iamregmisagar/" className="navbar-item p-2 md:px-4 hover:underline" >View Linkedin</a>
          <Link to="/contact" className="navbar-item button bg-yellow-500 text-black font-bold p-2 md:px-4 rounded hover:bg-yellow-300">Say Hello 👋</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
