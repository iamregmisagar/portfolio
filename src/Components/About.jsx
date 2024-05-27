import React from 'react'
import Story from './Story'
import Skills from './Skills'
import Projects from "./Projects"

const About = () => {
  return (
    <section id="section-about" className="content-section min-h-full">
      <div className="section-header w-container p-10">
            <div className="column-svg-n-title w-col w-col-9 flex items-center space-x-2">
              <h1 className="heading-5 text-3xl">👨‍💻</h1>
              <h1 className="h2 text-3xl font-bold">About</h1>
            </div>
      </div>
      <Story/>
      <Projects/>
      <Skills/>
      
     
    </section>
  )
}

export default About
