import React from 'react'
import logo from "../Content/logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-10">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-20">
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
        <Link to="/"><img
          src={logo}
          alt="Logo"
          className="h-16 mb-4"
        /></Link>
        <p className="text-sm text-gray-400">&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center md:items-start mb-6 md:mb-0">
        <div className="flex flex-col md:mr-8 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <Link to="/" className="text-gray-400 hover:underline mb-1" href="/">Home</Link>
          <Link to="/contact" className="text-gray-400 hover:underline mb-1" href="/contact">Contact</Link>
          <a href="https://github.com/iamregmisagar?tab=repositories" className="text-gray-400 hover:text-white">
              Github <i className="fab fa-github"></i>
            </a>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/sagar.regmi.5876/" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/iamregmisagar/" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/iamregmisagar/" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
           
          </div>
        </div>
      </div>
    </div>
  </footer>
  

  )
}

export default Footer
