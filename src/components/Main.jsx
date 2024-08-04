import React from "react";
// import './style.css'
import Divan from "../assets/img/divan.png";
import Kravat from "../assets/img/kravat.png"
import Kreslo from "../assets/img/kreslo.png"
// import Bar from "../assets/img/bar.png"
import Stal from "../assets/img/stal.png"
import Table from "../assets/img/table1.png"
import Table2 from "../assets/img/table2.png"
import Page1 from "../assets/img/page1.png"
import Page2 from "../assets/img/page2.png"
import Page3 from "../assets/img/page3.png"

const Cards = [
  {
      id: 1,
      title: "Granite dining table with dining chair",
      date: "Rs. 25,000.00",
      image: "src/assets/img/kreslo.png"
  },
  {
    id: 4,
    title: "Going all-in with millennial design",
    date: "Rs. 25,000.00",
    image: "src/assets/img/kravat.png"
},
{
    id: 5,
    title: "Going all-in with millennial design",
    date: "Rs. 25,000.00",
    image: "src/assets/img/table1.png"
},
{
    id: 6,
    title: "Going all-in with millennial design",
    date: "Rs. 25,000.00",
    image: "src/assets/img/stal.png"
}
];


const blogs = [
    {
        id: 1,
        title: "Going all-in with millennial design",
        date: "Read More",
        readTime: "5 min",
        image: "src/assets/img/page2.png"
    },
    {
        id: 2,
        title: "Going all-in with millennial design",
        date: "Read More",
        readTime: "5 min",
        image: "src/assets/img/page3.png"
    },
    {
        id: 3,
        title: "Going all-in with millennial design",
        date: "12th Oct 2022",
        readTime: "5 min",
        image: "src/assets/img/page1.png"
    }
];

const Main = () => {
  return (
    <>
      <div className="container Hero bg-orange-100 ">
        <div className="container hero__box flex items-center justify-between ">
          <div className="text">
            <h1 className="text-7xl mb-6">
              Rocket single <br /> seater
            </h1>
            <>
              {" "}
              <button className="button-class tugma text-base">Shop Now</button>
            </>
          </div>
          <img src={Divan} alt="" />
        </div>
      </div>
      <div className="box">
        <div className="margin-auto max-[1180px]: flex   justify-evenly p-8 card-2 bg-slate-100 mb-8">
          <div className="container hero__box flex flex-col  p-5">
            <img src={Table} className="w-56 " alt="" />
            <div className="text">
              <h1 className="text-5xl mb-6">Side Table</h1>
              <>
                <button className="button-class tugma text-base">
                  Wiew More
                </button>
              </>
            </div>
          </div>
          <div className="container hero__box flex flex-col ">
            <img src={Table2} className="w-56 " alt="" />
            <div className="text">
              <h1 className="text-5xl mb-6">Side Table</h1>
              <>
                {" "}
                <button className="button-class tugma text-base">
                  Wiew More
                </button>
              </>
            </div>
          </div>
        </div>
        <div className="container blog-section text-center  mb-10 h-[100%]">
            <h2 className="text-5xl mb-8">Top Picks For You</h2>
            <p className="text-lg mb-32">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            <div className="m-auto  w-[100%] blogs flex flex-wrap max-sm:text-center justify-between mb-10">
                {Cards.map(blog => (
                    <div className="blog-card text-center" key={blog.id}>
                        <img className="h-60 object-cover mb-5" src={blog.image} alt={blog.title} />
                        <h3 className="text-base font-bold mb-4">{blog.title}</h3>
                        <div className="blog-info">
                            <span>{blog.date}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button className="view-all text-xl mt-5 border-b-8 ">View All Post</button>
        </div>

      <div className="hero kreslo h-[100vh] flex">
      <div className="m-auto  avagard flex items-center justify-between ">
          <div className="asgaard-sofa-image">
            <img src={Kreslo} alt="Asgaard sofa" />
          </div>
          <div className="asgaard-sofa-content text-center">
            <h2 className="text-5xl mb-6">New Arrivals</h2>
            <h1 className="text-5xl mb-6 font-bold">Asgaard sofa</h1>
            <button className="order-now-button tugma-3">Order Now</button>
          </div>
        </div>
      </div>
      </div>
      <div className="container  blog-section text-center">
            <h2 className="text-5xl my-4">Our Blogs</h2>
            <p className="text-lg mb-32">Find a bright idea to suit your taste with our great selection</p>
            <div className="blogs flex justify-evenly my-5">
                {blogs.map(blog => (
                    <div className="blog-card text-center" key={blog.id}>
                        <img className="w-80 object-cover mb-5" src={blog.image} alt={blog.title} />
                        <h3 className="text-base font-bold mb-4">{blog.title}</h3>
                        <button className="mb-3 border-b-2  border-b-zinc-500">Read More</button>
                        <div className="blog-info">
                            <span className="mr-2">{blog.readTime}</span>
                            <span>{blog.date}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button className="view-all">View All Post</button>
        </div>
    </>
  );
};

export default Main;
