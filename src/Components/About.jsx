import React from 'react'
import Story from './Story'
import Skills from './Skills'
import Projects from "./Projects"

const About = () => {
  return (
    <section id="section-about" className="content-section mt-12 min-h-full">
      <div className="section-header w-container p-10">
        <div className="div-section-header">
          <div className="section-header-column w-row flex flex-wrap justify-between items-center">
            <div className="column-svg-n-title w-col w-col-9 flex items-center space-x-2">
              <h1 className="heading-5 text-3xl">👨‍💻</h1>
              <h1 className="h2 text-3xl font-bold">About</h1>
            </div>
            <div className="column-view-more w-col w-col-3 flex items-center space-x-2">
              <a
                href="https://www.linkedin.com/in/iamregmisagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-block w-inline-block flex items-center"
              >
                <div className="section-header-link text-blue-600 hover:underline">
                  View Linkedin
                </div>
                
              </a>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
             
            </div>
          </div>
        </div>
      </div>
      <Story/>
      <Projects/>
      <Skills/>
      
     
    </section>
  )
}

export default About
