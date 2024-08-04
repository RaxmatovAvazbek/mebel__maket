import React from 'react'
import "../style.css"
import Divan from "../assets/img/divan.png";
import Kravat from "../assets/img/kravat.png"
import Kreslo from "../assets/img/kreslo.png"
// import Bar from "../assets/img/bar.png"
import Stal from "../assets/img/stal.png"
import Table from "../assets/img/table1.png"
// import Table2 from "../assets/img/table2.png"
// import Page1 from "../assets/img/page1.png"
// import Page2 from "../assets/img/page2.png"
// import Page3 from "../assets/img/page3.png"



const Home = () => {
  return (
    <div className='container'>
      <div class="container mx-auto mt-10 p-5">
        <div class="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="lg:w-1/2 p-5">
            <div class="flex  justify-between ">
              <div class="flex space-x-2 flex-col w-[20%] items-center gap-3 flex-wrap">
                <img src={Kravat} alt="Asgaard sofa" class="w-16 h-16" />
                <img src={Stal} alt="Asgaard sofa" class="w-16 h-16" />
                <img src={Kreslo} alt="Asgaard sofa" class="w-16 h-16" />
                <img src={Divan} alt="Asgaard sofa" class="w-16 h-16" />
                <img src={Table} alt="Asgaard sofa" class="w-16 h-16" />
              </div>
              <img src={Divan} alt="Asgaard sofa" class="w-[85%]" />

            </div>
          </div>
          <div class="lg:w-1/2 p-5">
            <h1 class="text-3xl font-bold">Asgaard sofa</h1>
            <div class="flex items-center mt-2 mb-4">
              <span class="text-yellow-500 text-xl">★★★★★</span>
              <span class="text-gray-600 ml-2">(5 Customer Reviews)</span>
            </div>
            <div class="text-3xl text-gray-900 mb-4">Rs. 250,000.00</div>
            <p class="text-gray-700 mb-4">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
            <div class="mb-4">
              <span class="mr-2">Size:</span>
              <button class="bg-gray-200 text-gray-700 px-2 py-1 rounded">L</button>
              <button class="bg-gray-200 text-gray-700 px-2 py-1 rounded">XL</button>
              <button class="bg-gray-200 text-gray-700 px-2 py-1 rounded">XS</button>
            </div>
            <div class="mb-4">
              <span class="mr-2">Color:</span>
              <button class="w-6 h-6 bg-purple-700 rounded-full"></button>
              <button class="w-6 h-6 bg-yellow-500 rounded-full"></button>
              <button class="w-6 h-6 bg-gray-700 rounded-full"></button>
            </div>
            <div class="flex items-center mb-4">
              <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded mr-2">-</button>
              <span class="text-gray-700 mx-2">1</span>
              <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded ml-2">+</button>
            </div>
            <button class="bg-black text-white px-5 py-2 rounded">Add To Cart</button>
            <div class="mt-4 text-gray-600">
              <p>SKU: SS001</p>
              <p>Category: Sofas</p>
              <p>Tags: Sofa, Chair, Home, Shop</p>
            </div>
            <div class="mt-4 flex space-x-3">
              <a href="#" class="text-gray-600"><i class="fab fa-facebook"></i></a>
              <a href="#" class="text-gray-600"><i class="fab fa-twitter"></i></a>
              <a href="#" class="text-gray-600"><i class="fab fa-linkedin"></i></a>
              <a href="#" class="text-gray-600"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className='w-[75%] mx-auto'>
          <div className='text-center justify-center text-3xl flex gap-10 w-full mt-10'>
            <h1>Description</h1>
            <h2>Related Products</h2>
            <h1>Riwis</h1>
          </div>
          <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea qui officia modi, iure quidem voluptatem optio saepe iusto explicabo debitis esse fugit enim eveniet culpa eum quisquam ab? Quam, fuga.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quae, natus cupiditate vitae esse corrupti doloribus laboriosam asperiores temporibus magnam expedita ea aliquid deleniti quas eos velit ipsa. Fugiat, saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dicta!</p>
          <div className='flex justify-around mt-9'>
            <img src={Divan} alt="" />
            <img src={Divan} alt="" />
          </div>

          <div className='text-3xl text-center mt-10'>
            <h1>Reaolat Product</h1>
            <div class="grid grid-cols-4 gap-4 text-center text-[20px] mt-10">
              <div className='text-center'>
                <img src={Divan} className='mx-auto'  />
                <p>Lorem ipsum dolor sit amet.</p>
                <p>narx 1500</p>
              </div>
              <div>
                <img src={Kravat} className='mx-auto' />
                <p>Lorem ipsum dolor sit amet.</p>
                <p>narx 1500</p>
              </div>
              <div>
                <img src={Stal} className='mx-auto' />
                <p>Lorem ipsum dolor sit amet.</p>
                <p>narx 1500</p>
              </div>
              <div>
                <img src={Kreslo} className='mx-auto' />
                <p>Lorem ipsum dolor sit amet.</p>
                <p>narx 1500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home