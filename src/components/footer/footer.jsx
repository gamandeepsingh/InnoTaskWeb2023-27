import React,{useEffect} from "react";
import "./style.css";
import aos from "aos"
import "aos/dist/aos.css"
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { MdGesture } from "react-icons/md";
import kiet from "./assets/kiet-logo.png"
import innogeeks from "./assets/innologo1.png"
import { HashLink } from "react-router-hash-link";

export default function Footer() {

  useEffect(()=>{
    aos.init(1800)
  },[])
  return (
    <div className="relative h-full min-h-[500px] bg-black text-white w-screen  flex flex-col items-center justify-between gap-6 footer-main overflow-hidden py-6 max-sm:mb-[80px] ml-[20px] max-sm:ml-0">
      {/* Social Links */}
      <div  className="fixed right-6 top-[50%] -translate-y-[50%] flex flex-col justify-center gap-6 max-md:hidden z-[999]">
        <div className="group relative" data-aos="fade-left">
          <HashLink smooth to="https://www.linkedin.com/company/innogeeks/mycompany/">
            <LuLinkedin
              fontSize={32}
              className="w-8 hover:scale-125 duration-200 hover:text-[#0A66C2]"
            />
          </HashLink>
          <span
            className="absolute -left-[100px] top-[50%] -translate-y-[50%] 
                z-20 origin-left scale-0 px-3 rounded-lg border 
                border-gray-300 bg-white py-2 text-sm font-bold
                shadow-md transition-all duration-300 ease-in-out 
                group-hover:scale-100 text-[#0A66C2]"
          >
            LinkedIn<span></span>
          </span>
        </div>
        <div className="group relative  insta">
          <HashLink smooth to="https://www.instagram.com/innogeeks.kiet/">
            <FaInstagram
              fontSize={32}
              className=" hover:scale-125 duration-200 text-white ig-color"
            />
          </HashLink>
          <span
            className="absolute -left-[100px] top-[50%] -translate-y-[50%] 
                z-20 origin-left scale-0 px-3 rounded-lg border 
                border-gray-300 bg-white py-2 text-sm font-bold
                shadow-md transition-all duration-300 ease-in-out 
                group-hover:scale-100 text-[#f77321]"
          >
            Instagram<span></span>
          </span>
        </div>
        <div className="group relative  ">
          <HashLink smooth to="https://twitter.com/InnogeeksKiet">
            <FaXTwitter
              fontSize={32}
              className="w-8 hover:scale-125 duration-200 hover:text-[white]"
            />
          </HashLink>
          <span
            className="absolute -left-[100px] top-[50%] -translate-y-[50%] 
                z-20 origin-left scale-0 px-3 rounded-lg border 
                border-gray-300 bg-white py-2 text-sm font-bold
                shadow-md transition-all duration-300 ease-in-out 
                group-hover:scale-100 text-[black]"
          >
            Twitter<span></span>
          </span>
        </div>
        <div className="group relative  ">
          <HashLink smooth to="https://www.youtube.com/@innogeekskiet3679">
            <SlSocialYoutube
              fontSize={32}
              className="scale-110 w-8 hover:scale-150 duration-200 hover:text-red-500"
            />
          </HashLink>
          <span
            className="absolute -left-[100px] top-[50%] -translate-y-[50%] 
                z-20 origin-left scale-0 px-3 rounded-lg border 
                border-gray-300 bg-white py-2 text-sm font-bold
                shadow-md transition-all duration-300 ease-in-out 
                group-hover:scale-100 text-red-500"
          >
            Youtube<span></span>
          </span>
        </div>
      </div>
      <MdGesture
        fontSize={600}
        color="grey"
        className="absolute top-0 -left-[5%] -z-1 opacity-20 "
      />
      <MdGesture
        fontSize={600}
        color="grey"
        className="absolute bottom-0 right-[-10%] z-10 opacity-20 max-md:hidden"
      />
      {/* footer above section */}
      <div data-aos="zoom-in-up" className="footer-contact w-4/5 min-h-[150px] h-full  z-[20] rounded-full max-sm:rounded-xl px-8 text-black flex flex-wrap justify-around items-center top-[-150px] max-sm:p-4 " id="contact">
        <div className="flex flex-col max-sm:items-center max-md:text-center">
          <h1 className="text-[2.5rem] max-md:mb-5 text-[#17A2B8] font-mono tracking-tight">Ready to get Started</h1>
          <h2 className="text-[2rem] text-white max-md:hidden ">Collab with Us</h2>
        </div>
        <div>
          <HashLink smooth to="mailto:innogeeks@kiet.edu">
          <button className="footer-button text-xl font-extrabold hover:scale-110">Contact with Us</button>
          </HashLink>
        </div>
      </div>
      {/* mobile view social links */}
      <div className="  justify-center gap-6 hidden max-md:flex ">
        <div className="group relative  ">
          <HashLink smooth to="https://www.linkedin.com/company/innogeeks/mycompany/">
            <LuLinkedin
              fontSize={32}
              className="w-8 hover:scale-125 duration-200 hover:text-[#0A66C2]"
            />
          </HashLink>
          <span
            className="absolute -top-[50px] left-[50%] -translate-x-[50%] 
                z-20 origin-left scale-0 px-3 rounded-lg border 
                border-gray-300 bg-white py-2 text-sm font-bold
                shadow-md transition-all duration-300 ease-in-out 
                group-hover:scale-100 text-[#0A66C2]"
          >
            LinkedIn<span></span>
          </span>
        </div>
        <div className="group relative  insta">
          <HashLink smooth to="https://www.instagram.com/innogeeks.kiet/">
            <FaInstagram
              fontSize={32}
              className=" hover:scale-125 duration-200 text-white ig-color"
            />
          </HashLink>
          <span
            className="absolute -top-[50px] left-[50%] -translate-x-[50%]
                z-20 origin-left scale-0 px-3 rounded-lg border 
                border-gray-300 bg-white py-2 text-sm font-bold
                shadow-md transition-all duration-300 ease-in-out 
                group-hover:scale-100 text-[#f77321]"
          >
            Instagram<span></span>
          </span>
        </div>
        <div className="group relative  ">
          <HashLink smooth to="https://twitter.com/InnogeeksKiet">
            <FaXTwitter
              fontSize={32}
              className="w-8 hover:scale-125 duration-200 hover:text-[white]"
            />
          </HashLink>
          <span
            className="absolute -top-[50px] left-[50%] -translate-x-[50%]
                z-20 origin-left scale-0 px-3 rounded-lg border 
                border-gray-300 bg-white py-2 text-sm font-bold
                shadow-md transition-all duration-300 ease-in-out 
                group-hover:scale-100 text-[black]"
          >
            Twitter<span></span>
          </span>
        </div>
        <div className="group relative  ">
          <HashLink smooth to="https://www.youtube.com/@innogeekskiet3679">
            <SlSocialYoutube
              fontSize={32}
              className="scale-110 w-8 hover:scale-150 duration-200 hover:text-red-500"
            />
          </HashLink>
          <span
            className="absolute -top-[50px] left-[50%] -translate-x-[50%]
                z-20 origin-left scale-0 px-3 rounded-lg border 
                border-gray-300 bg-white py-2 text-sm font-bold
                shadow-md transition-all duration-300 ease-in-out 
                group-hover:scale-100 text-red-500"
          >
            Youtube<span></span>
          </span>
        </div>
      </div>

      {/* footer */}
      <div className="relative w-screen max-w-[1080px]  h-full z-[25] flex flex-wrap">
        {/* left */}
        <div className="w-[38%] max-sm:w-full flex flex-col justify-center items-center gap-4 hover:cursor-pointer" >
          <HashLink smooth to="#" ><img src={innogeeks} className="w-1/2 max-md:w-[55%] mx-auto h-auto max-h-[35vh]" alt="" />

</HashLink>
          <HashLink smooth to="https://www.kiet.edu/" target="_blank" rel="noreferrer"> <img src={kiet} className="w-1/2 max-md:w-[30%] mx-auto h-[30vh]" alt="" /></HashLink>
        </div>
        {/* line */}
         <div className="w-[2px] h-[200px] max-sm:w-[200px] max-sm:h-[2px] max-sm:mx-auto bg-white z-50 mt-5 rounded-lg opacity-40 max-sm:my-6"></div>
        {/* right */}
        <div className="max-sm:w-screen justify-around mx-6 flex w-[53%] items-center max-sm:justify-around flex-wrap max-sm:ml-14">
          <div className="flex flex-col gap-5">
            <h1 className="font-mono font-bold text-xl max-sm:text-sm max-sm:-translate-x-3">Back to</h1>
            <ul className="list-disc">
              <HashLink smooth to="#" className="hover:text-current hover:no-underline" >
              <li className="hover:translate-x-4 hover:cursor-pointer transition-translate duration-200 ease-in">Home</li>
              </HashLink>
              <HashLink smooth to="#about" className="hover:text-current hover:no-underline">
              <li className="hover:translate-x-4 hover:cursor-pointer transition-translate duration-200 ease-in">About</li>
              </HashLink>
              <HashLink smooth to="#contact" className="hover:text-current hover:no-underline">
              <li className="hover:translate-x-4 hover:cursor-pointer transition-translate duration-200 ease-in">Contact</li>
              </HashLink>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="font-mono font-bold text-xl max-sm:text-sm max-sm:-translate-x-3">Why Us</h1>
            <ul className="list-disc">
              <HashLink smooth to="#stats" className="hover:text-current hover:no-underline">
              <li className="hover:translate-x-4 hover:cursor-pointer transition-translate duration-200 ease-in">Stats</li>
              </HashLink>
              <HashLink smooth to="#acheivers" className="hover:text-current hover:no-underline">
              <li className="hover:translate-x-4 hover:cursor-pointer transition-translate duration-200 ease-in">Achievers</li>
              </HashLink>
              <HashLink smooth to="#activities" className="hover:text-current hover:no-underline">
              <li className="hover:translate-x-4 hover:cursor-pointer transition-translate duration-200 ease-in">Activities</li>
              </HashLink>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="font-mono font-bold text-xl max-sm:text-sm max-sm:-translate-x-3">Explore</h1>
            <ul className="list-disc">
              <HashLink to="#events" smooth className="hover:text-current hover:no-underline">
              <li className="hover:translate-x-4 hover:cursor-pointer transition-translate duration-200 ease-in">Events</li>
              </HashLink>
              <HashLink to="#testimonial" smooth className="hover:text-current hover:no-underline">
              <li className="hover:translate-x-4 hover:cursor-pointer transition-translate duration-200 ease-in">Testimonial</li>
              </HashLink>
              <HashLink smooth to="#domains" className="hover:text-current hover:no-underline">
              <li className="hover:translate-x-4 hover:cursor-pointer transition-translate duration-200 ease-in">Domains</li>
              </HashLink>
            </ul>
          </div>
        </div>
      </div>

      {/* footer last */}
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="">Crafted with passion by Team-<span className="text-[#17A2B8]">INNOGEEKS</span> !</h1>
        <HashLink smooth to="mailto:innogeeks@kiet.edu">innogeeks@kiet.edu</HashLink>
      </div>
    </div>
  );
}
