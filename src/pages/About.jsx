import React from 'react'

// import Blog from "../components/Blog"
import Main from '../components/Main'
import Devan from '../assets/img/divan.png'

const About = () => {
  return (
    <div>
      <div>
       <Main/>
       {/* <Blog/> */}
       <div className='text-3xl text-center mt-10'>
            <h1>Reaolat Product</h1>
            <div class="grid grid-cols-4 gap-4 text-center text-[20px] mt-10">
              <div className='text-center'>
                <img src={Devan} className='mx-auto'  />
                <p>Lorem ipsum dolor sit amet.</p>
                <p>narx 1500</p>
              </div>
              <div>
                <img src={Devan} className='mx-auto' />
                <p>Lorem ipsum dolor sit amet.</p>
                <p>narx 1500</p>
              </div>
              <div>
                <img src={Devan} className='mx-auto' />
                <p>Lorem ipsum dolor sit amet.</p>
                <p>narx 1500</p>
              </div>
              <div>
                <img src={Devan} className='mx-auto' />
                <p>Lorem ipsum dolor sit amet.</p>
                <p>narx 1500</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
