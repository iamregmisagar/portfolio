import React from 'react'

const Skills = () => {
  return (
    <>
    <div className="section-homepage w-container flex flex-col md:flex-row justify-center  items-start md:space-x-6 space-y-6 md:space-y-0 p-10">
      <div className="div-text-l j-top w-full">
        <h4 className="heading-6 text-xl font-bold text-center">Skills</h4>
        <div className="w-container flex flex-col md:flex-row justify-center items-start md:space-x-6 space-y-6 md:space-y-0 p-10">

    <div className="div-text-l j-top w-full">
      <h4 className="heading-6 text-xl font-bold text-center">Technical Skills</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {[
          { name: 'HTML/CSS', logo: '🔤' }, 
          { name: 'SASS', logo: '🎨' },
          { name: 'Tailwind and Bootstrap CSS', logo: '🌀' },
          { name: 'JavaScript', logo: '📜' },
          { name: 'ReactJS', logo: '⚛️' },
          { name: 'Git', logo: '🔧' },
          { name: 'Restful API', logo: '🌐' },
          { name: 'Responsive Design', logo: '📱' },
          { name: 'Web Accessibility and WCAG Principles', logo: '♿' }, 
          { name: 'Advance Office Skills', logo: '💼' },
          { name: 'SEO', logo: '🔍' },
          { name: 'IP Network and CCNA', logo: '🌐' },
          { name: 'C programming', logo: '💻' },
          { name: 'Python', logo: '🐍' },
          { name: 'Botpress', logo: '🤖' }
        ].map(skill => (
          <div key={skill.name} className="skill-card bg-white p-4 rounded shadow hover:shadow-lg flex items-center space-x-2">
            {/* <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo w-8 h-8" /> this is for images */}
            <span className="skill-logo text-2xl">{skill.logo}</span>
            <span className="skill-name text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="div-text-l j-top w-full">
      <h4 className="heading-6 text-xl font-bold text-center">Other Skills</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {[
          { name: 'Communication Skills', logo: '💬' },
          { name: 'Project Management Skills', logo: '📊' },
          { name: 'Team Management Skills', logo: '👥' },
          { name: 'Collaboration Skills', logo: '🤝' }
        ].map(skill => (
          <div key={skill.name} className="skill-card bg-white p-4 rounded shadow hover:shadow-lg flex items-center space-x-2">
            <span className="skill-logo text-2xl">{skill.logo}</span>
            <span className="skill-name text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
        </div>
    </div>
  
</>

  
  )
}

export default Skills
