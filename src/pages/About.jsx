import React from 'react'

import Main from '../components/Main'
import Fon from '../assets/img/page3.png'

const About = () => {
  return (
    <div>
      <div>
       <Main/>
       {/* <Blog/> */}
       <div 
            className="flex flex-col items-center justify-center bg-gray-50 h-16 relative overflow-hidden" 
            style={{ backgroundImage: `url(${Fon})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}
        >
            <div className="absolute inset-0 bg-black opacity-50 filter blur-sm"></div>
            <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold mb-2 text-white">Our Instagram</h2>
                <p className="text-gray-300 mb-4">Follow our store on Instagram</p>
                <button className="bg-white text-black font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 opacity-75 hover:opacity-100">
                    Follow Us
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
