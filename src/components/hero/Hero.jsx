import React,{useEffect} from "react";
import "./hero.css"
import aos from "aos"
import "aos/dist/aos.css"
import img1 from "./assets/React like.png"
import img2 from "./assets/VR headset.png"
import img3 from "./assets/Wifi.png"
import img4 from "./assets/circle with dot.png"
import img5 from "./assets/circle.png"
import img6 from "./assets/code.png"
import img7 from "./assets/controller.png"

const Hero = () => {
  useEffect(()=>{
    aos.init(1800)
  },[])
    return (
      <div className="relative z-[10] grid h-full min-h-[670px] place-content-center bg-black pl-[60px] max-sm:pl-0 w-screen overflow-x-hidden" >
        <div data-aos="zoom-in-up">
          <BubbleText />
        </div>
        <img data-aos="zoom-in" data-aos-delay="400" src={img1} className="animateup absolute right-[8%]  top-[28%] max-md:-right-2 max-md:top-[40%] max-sm:top-[50%]  max-md:w-1/5 z-10" alt="" />
        <img data-aos="zoom-in" data-aos-delay="300" src={img2} className="animateup absolute right-[20%]  max-md:w-1/5 max-md:top-[30%] max-md:right-[15%] max-sm:right-[14%]" alt="" />
        <img data-aos="zoom-in" data-aos-delay="900" src={img3} className="animateup absolute left-[30%] bottom-[10%] max-sm:bottom-[24%]   max-md:w-1/5" alt="" />
        <img data-aos="zoom-in" data-aos-delay="800" src={img4} className="animateup absolute left-[12%] bottom-[25%] max-md:bottom-[40%] max-md:left-0  max-md:w-1/5" alt="" />
        <img data-aos="zoom-in" data-aos-delay="700" src={img5} className="animateup absolute top-8 max-md:w-1/5 left-[40%] max-md:top-[25%] " alt="" />
        <img data-aos="zoom-in" data-aos-delay="500" src={img6} className="animateup absolute right-[25%] bottom-[10%] max-sm:bottom-[24%] max-md:w-1/5 " alt="" />
        <img data-aos="zoom-in" data-aos-delay="800" src={img7} className="animateup absolute top-6 left-[20%] max-md:top-[30%] max-md:left-[15%] max-md:w-1/5 " alt="" />
      </div>
    );
  };
  
  const BubbleText = () => {
    return (
    <>
      <h2 className="text-center text-[10rem] font-thin text-indigo-300 max-lg:text-[6rem] max-md:text-[4rem] max-sm:text-[3.5rem] z-50 p-0 m-0 ">
        {"INNOGEEKS".split("").map((child, idx) => (
          <span className="hoverText" key={idx}>
            {child}
          </span>
        ))}
        
      </h2>

      <h1 className="text-center text-indigo-300 font-thin font-size text-[1.5rem] max-md:text-[1rem] max-sm:text-[0.99rem] z-50">
      {"We Teach, We Learn, We Conquer!".split("").map((child, idx) => (
          <span className="hoverText motto" key={idx}>
            {child}
          </span>
        ))}
      </h1>
    </>
    );
  };
  
  export default Hero;