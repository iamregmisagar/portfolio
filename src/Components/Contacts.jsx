import React from 'react'
import { FaMapMarkerAlt,FaPhone,FaEnvelope } from 'react-icons/fa'
const Contacts = () => {
  return (
    <div className="h-min-screen bg-neutral-900 pt-24">
        <h1 className="lg:text-6xl text-5xl font-bold text-white dark:text-white text-center mb-10">
            👋 Hey, Let's discuss?
        </h1>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-12 gap-6 px-12">
            <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-md">
                <div className="flex items-center space-x-2 mb-4">
                    <div className="bg-yellow-500 text-black px-3 py-1 rounded-lg flex items-center justify-center text-xl font-bold w-10 h-10">
                        1
                    </div>
                    <p className="font-bold">You arrange a phone or email conversation via contact details.</p>
                </div>
            </div>
            <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-md">
                <div className="flex items-center space-x-2 mb-4">
                    <div className="bg-yellow-500 text-black px-3 py-1 rounded-lg flex items-center justify-center text-xl font-bold w-10 h-10">
                        2
                    </div>
                    <p className="font-bold">I will conduct an exploratory meeting.</p>
                </div>
            </div>
            <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-md">
                <div className="flex items-center space-x-2 mb-4">
                    <div className="bg-yellow-500 text-black px-3 py-1 rounded-lg flex items-center justify-center text-xl font-bold w-10 h-10">
                        3
                    </div>
                    <p className="font-bold">I will prepare a work proposal.</p>
                </div>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mt-8 mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Details</h2>
            <div className="flex items-center mb-4 justify-center">
                <FaEnvelope className="text-yellow-500 mr-4" />
                <span className="text-gray-700">iamregmisagar@gmail.com</span>
            </div>
            <div className="flex items-center mb-4 justify-center">
                <FaPhone className="text-yellow-500 mr-4" />
                <span className="text-gray-700">+358 453272287</span>
            </div>
            <div className="flex items-center justify-center">
                <FaMapMarkerAlt className="text-yellow-500 mr-4" />
                <span className="text-gray-700">Porslahdentie 24 Helsinki Finland</span>
            </div>
        </div>

    </div>
      /* <WavyBackground>
        <h1 className="text-6xl font-bold text-white dark:text-white text-center mb-10">
            Lets Work Together?
        </h1>
       
        <div className="flex space-x-4">
            <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-md">
                <div className="flex items-center space-x-2 mb-4">
                    <div className="bg-yellow-500 text-black px-3 py-1 rounded-lg flex items-center justify-center text-xl font-bold w-10 h-10">
                        1
                    </div>
                    <p className="font-bold">You arrange a phone or email conversation via contact details.</p>
                </div>
            </div>
            <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-md">
                <div className="flex items-center space-x-2 mb-4">
                    <div className="bg-yellow-500 text-black px-3 py-1 rounded-lg flex items-center justify-center text-xl font-bold w-10 h-10">
                        2
                    </div>
                    <p className="font-bold">I will conduct an exploratory meeting and advisoy session.</p>
                </div>
            </div>
            <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-md">
                <div className="flex items-center space-x-2 mb-4">
                    <div className="bg-yellow-500 text-black px-3 py-1 rounded-lg flex items-center justify-center text-xl font-bold w-10 h-10">
                        3
                    </div>
                    <p className="font-bold">I will prepare a proposal.</p>
                </div>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mt-8 mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Details</h2>
            <div className="flex items-center mb-4 justify-center">
                <FaEnvelope className="text-yellow-500 mr-4" />
                <span className="text-gray-700">iamregmisagar@gmail.com</span>
            </div>
            <div className="flex items-center mb-4 justify-center">
                <FaPhone className="text-yellow-500 mr-4" />
                <span className="text-gray-700">+358 453272287</span>
            </div>
            <div className="flex items-center justify-center">
                <FaMapMarkerAlt className="text-yellow-500 mr-4" />
                <span className="text-gray-700">Porslahdentie 24 Helsinki Finland</span>
            </div>
        </div>
    </WavyBackground> */
    
  )
}

export default Contacts
