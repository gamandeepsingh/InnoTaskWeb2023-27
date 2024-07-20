"use client";
// import React from "react";
import { PinContainer } from "../ui/3d-pin";
import aos from "aos"
import "aos/dist/aos.css"
import React,{useEffect} from "react";
import "./Achieve.css";

export default function AnimatedPinDemo() {
    
  useEffect(()=>{
    aos.init(1800)
  },[])

    return (
        <div>
            <h1 data-aos="fade-down" className="text-6xl max-md:text-4xl py-2 px-6 text-center text-white w-screen items-center main-text lg:mb-20">
                ACHIEVERS OF THE MONTH
            </h1>
            <div className="flex flex-col lg:flex-row  p-20 gap-10 mt-10 lg:mt-0 lg:gap-0 ">
            <div data-aos="fade-left" className="flex-1 h-[15rem] flex items-center  justify-center ">
                    <PinContainer
                        title="Linkindin"
                        href="https://www.linkedin.com/in/sakshamjain007"
                    >
                        <div className="playing flex text-center flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem]  ">
                        <div className="waves"></div>
          <div className="waves"></div>
          <div className="waves"></div>
                            <h3 className="main-text max-w-xs  m-0 text-3xl lg:text-3xl  text-slate-100">
                                Saksham Jain
                            </h3>
                            <div className="text-base m-0 p-0 font-normal">
                                <span className="text-[#17A2B8] main-text text-xl">
                                    1st Position from 1st Year (CSE Branch)
                                </span>
                            </div>
                            <div className="  flex items-center justify-center ">
                                <img
                                    src="https://res.cloudinary.com/djc8hwlgb/image/upload/v1721154873/WhatsApp_Image_2024-07-17_at_00.04.04_a90c8279_enkwgh.jpg"
                                    className="rounded-xl w-[90%] h-[70%]"
                                    alt=""
                                />
                            </div>

                        </div>
                    </PinContainer>
                </div>
            <div data-aos="fade-up" className="flex-1 h-[15rem] flex items-center justify-center">
                    <PinContainer
                        title="Linkindin"
                        href="https://www.linkedin.com/in/sakshamjain007"
                    >
                        <div className="playing flex text-center flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[18rem]">
                        <div className="waves"></div>
          <div className="waves"></div>
          <div className="waves"></div>
                            <h3 className="main-text max-w-xs pb-2 m-0 text-3xl lg:text-3xl  text-slate-100">
                                Saksham Jain
                            </h3>
                            <div className="text-base m-0 p-0 font-normal">
                                <span className="text-[#17A2B8] main-text text-xl">
                                    1st Position from 1st Year (CSE Branch)
                                </span>
                            </div>
                            <div className="w-full flex items-center justify-center p-1">
                                <img
                                    src="https://res.cloudinary.com/djc8hwlgb/image/upload/v1721154873/WhatsApp_Image_2024-07-17_at_00.04.04_a90c8279_enkwgh.jpg"
                                    className="rounded-xl mb-[5rem]"
                                    alt=""
                                />
                            </div>

                        </div>
                    </PinContainer>
                </div>
                <div data-aos="fade-left" className="flex-1 h-[15rem] flex items-center justify-center">
                    <PinContainer
                        title="Linkindin"
                        href="https://www.linkedin.com/in/sakshamjain007"
                    >
                        <div className="playing flex text-center flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem]">
                        <div className="waves"></div>
          <div className="waves"></div>
          <div className="waves"></div>
                            <h3 className="main-text max-w-xs  m-0 text-3xl lg:text-3xl  text-slate-100">
                                Saksham Jain
                            </h3>
                            <div className="text-base m-0 p-0 font-normal">
                                <span className="text-[#17A2B8] main-text text-xl">
                                    1st Position from 1st Year (CSE Branch)
                                </span>
                            </div>
                            <div className="  flex items-center justify-center ">
                                <img
                                    src="https://res.cloudinary.com/djc8hwlgb/image/upload/v1721154873/WhatsApp_Image_2024-07-17_at_00.04.04_a90c8279_enkwgh.jpg"
                                    className="rounded-xl w-[90%] h-[70%]"
                                    alt=""
                                />
                            </div>

                        </div>
                    </PinContainer>
                </div>
                
                


            </div>
        </div>
    );
}
