import React from 'react'
import regmiImg from "../Content/regmi.png"
const IntroSection = () => {
  return (
    <div className="section-hero bg-neutral-900 p-8 md:p-20 h-[70vh] md:-[70vh] lg:h-[65vh] mt-14 md:mt-5 lg:mt-0">
    <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-center">
      <div className="text-center md:w-1/2 md:text-left text-white mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2"><strong>👋</strong></h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"><strong>Hello, I'm Regmi</strong></h1>
        <p className="text-base md:text-lg lg:text-xl">
          A continuous learner with tech experience. I understand projects, code logics, designing and marketing. Successful at
          managing projects and operations. Solution oriented mindset with a passion of becoming Entrepreneur.
        </p>
      </div>
      <div className="flex justify-center md:w-1/2">
        <img
          src={regmiImg}
          alt="Vance Banks"
          className="w-full max-w-md"
        />
      </div>
    </div>
  </div>
  );
}

export default IntroSection
