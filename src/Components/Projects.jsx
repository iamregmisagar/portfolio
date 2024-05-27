import React from 'react';
import ProjectCard from './ProjectCard';

const App = () => {
  const projects = [
    {
      title: "AI Coolbots",
      url:"https://ai-cool-bots.vercel.app/",
      techUsed: ["HTML", "Tailwind CSS", "JavaScript", "Botpress", "OpenAI"],
      description:
        "These bots can interact with users. Created these bots with the help of custom GPT and Botpress. I have trained these bots with the individual knowledge base using Tailwind CSS and should be responsive."
    },
    {
      title: "Building a Responsive Website",
      url:"https://www.theseus.fi/bitstream/handle/10024/780939/Regmi_Sagar.pdf?sequence=2&isAllowed=y",
      techUsed: ["HTML", "SASS"],
      description:
        "Project based thesis on building a responsive website. I have discussed concepts of creating responsive web pages and elements to create adaptive design, including Flexible text grid, adaptive media and media queries."
    },
    {
      title: "Tip Calculator",
      url:"https://tip-calculator-one-eosin.vercel.app/",
      techUsed: ["HTML", "CSS", "Vanilla JavaScript"],
      description:
        "It calculates total bill per person which include tips."
    },

   
  ];

  return (
    <div className="section-homepage w-container flex flex-col md:flex-row justify-center  items-start md:space-x-6 space-y-6 md:space-y-0 p-10">
      <div className="div-text-l j-top w-full">
        <h4 className="heading-6 text-xl font-bold text-center">Projects</h4>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {projects.map((project, index) => (
    <ProjectCard
      key={index}
      title={project.title}
      url={project.url}
      techUsed={project.techUsed}
      description={project.description}
    />
  ))}
</div>
        </div>
        </div>
  );
};

export default App;