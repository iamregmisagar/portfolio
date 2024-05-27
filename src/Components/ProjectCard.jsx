import React from 'react'


const ProjectCard = ({ title, techUsed, description, url }) => {
  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden mb-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="p-6 flex justify-between items-start">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <div>
        <a href={url} className="text-blue-600 hover:underline">View Project</a>
      </div>
    </div>
    <div className="p-6">
      <div className="flex flex-wrap mt-2">
        {techUsed.map((tech, index) => (
          <span
            key={index}
            className="bg-yellow-300 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="mt-4 text-gray-800">{description}</p>
    </div>
  </div>
  )
}

export default ProjectCard
