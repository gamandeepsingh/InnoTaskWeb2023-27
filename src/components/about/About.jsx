import React, { useEffect } from "react";
import "./about.css";
import img from "./innogeeks-about.png"
import ques from "./ques.png"
import aos from "aos"
import "aos/dist/aos.css"

export default function About() {
  useEffect(()=>{
    aos.init(1800)
  },[])
  return (
    <div className="inno-abt  relative bg-black text-white w-screen min-h-[670px] h-full flex justify-center items-center max-xl:pl-[5vw] max-sm:ml-0 " id="about">
      {/* wave */}
      {/* <div className="ocean ">
        <div className="wave"></div>
        <div className="wave wave2"></div>
      </div> */}
      {/* ques */}
      <div >
        <img data-aos="zoom-out"  src={ques} className="absolute w-1/12 max-md:hidden z-[999] top-[12%] right-[10%] max-xl:right-10 animate-bounce"  alt="" loading="lazy"/>
      </div>
      <div className="w-full max-w-[1020px]  h-4/5 mx-3 px-4 max-md:mb-0 max-sm:mb-[200px] flex items-center max-md:flex-col ">
        {/* left */}
        <div data-aos="fade-right" className="w-1/2 flex flex-col h-full justify-center gap-5 max-md:w-full max-md:text-center">
            <h1 className="text-5xl tracking-wide max-lg:text-3xl">Who Are We?</h1>
            <p className=""><span className="text-[#015871] font-mono">Innogeeks</span>, a remarkable joint initiative by both faculty and students, strives to elevate our institution and aligns it with esteemed national and international counterparts. - Focussing on empowering students to excel beyond their academic knowledge, honing their skills for real-world challenges. The club strives to empower students with technical prowess across diverse fields of Technology, preparing them to thrive in a competitive landscape. Our space offers great resources, guidance from seniors, and a mission to ignite the innovator in each individual.</p>
        </div>
        {/* right */}
        <div data-aos="fade-left" className="w-1/2 max-md:w-full p-10 max-md:p-6 max-md:pl-[0] flex justify-center">
            <img src={img} className=" rounded-xl overflow-hidden hover:scale-110 transition-all duration-200" alt="" />
        </div>
      </div>
    </div>
  );
}
