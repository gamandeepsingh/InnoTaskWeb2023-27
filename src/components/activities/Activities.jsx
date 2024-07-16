import React, { useEffect, useState } from 'react'
import "./activities.css"
import img1 from "./images/innogeeks-about.jpg"
import img2 from "./images/classes.jpg"
import img3 from "./images/bootcamp.jpg"
import SpringModal from '../cards/CardModal'
import aos from "aos"
import "aos/dist/aos.css"

const data =[ 
  {
    title:"Mentoring Sessions",
    description:"At Innogeeks, we're dedicated to your growth. Our expert mentors offer tailored guidance in various tech domains, ensuring you receive the support you need to excel. From one-on-one consultations to group discussions, our mentoring sessions empower you to overcome challenges and achieve your goals."
  },
  {
    title:"Classes",
    description:"At Innogeeks, we offer a diverse array of daily classes covering topics ranging web development, machine learning, AR/VR, IoT and Android development elevating skills every day."
  },
  {
    title:"Bootcamps",
    description:"Innogeeks has already curated over 35 dynamic sessions on a diverse range of tech topics, empowering  enthusiasts like you to delve deep into the world of innovation. our sessions have sparked creativity and fueled curiosity and upcoming bootcamps and be part of our next groundbreaking adventure in tech!"
  },

]



const Activities = () => {
  const [isOpen,setIsOpen] = useState(false)
  const [detailSend,setDetailSend] = useState({})
  useEffect(()=>{
    aos.init(1800)
  },[])
  function handleClick(data){
    setIsOpen(true)
    setDetailSend(data)
  }
  return (
    <div id='activities' className='activities-cards ml-[80px] max-md:ml-0'>
         <h1 data-aos="fade-down" className="mt-[120px] text-6xl max-md:text-4xl py-4 px-6 text-center max-md:ml-0  text-white w-screen items-center"
    style={{
      fontFamily: "cabin-sketch-regular",
      fontWeight: "400",
      fontStyle: "normal",
      color: "white",
    }}>
    Activities We Do
    </h1>
    <div data-aos="flip-left" className="package">
  <div className="package2 ">
    <img src={img1} alt="haha" className='activities-image1 object-cover'/>
    <h2 className='activities-heading mt-4 text-[#17a2b2]'>{data[0].title}</h2>
    <p className='activities-desc font-[maiandra]'>{ data[0].description.substring(0,100)}...
    <span className='font-[maiandra] text-[#17A2B8] cursor-pointer' onClick={()=>handleClick(data[0])}>Know More</span></p>
    </div>
</div>

<div data-aos="flip-right" className="package">
  <div className="package2 ">
  <img src={img2} alt="haha" className='activities-image2 object-cover'/>
  <h2 className='activities-heading mt-3 text-[#17a2b2]'>{data[1].title}</h2>
    <p className='activities-desc font-[maiandra]'>{ data[1].description.substring(0,100)}...
    <span className='font-[maiandra] text-[#17A2B8] cursor-pointer' onClick={()=>handleClick(data[1])}>Know More</span></p>
  </div>
</div>

<div data-aos="flip-left" className="package">
  <div className="package2 ">
  <img src={img3} alt="haha" className='activities-image3 object-cover'/>
  <h2 className='activities-heading mt-3 text-[#17a2b2]'>{data[2].title}</h2>
    <p className='activities-desc font-[maiandra]'>{ data[2].description.substring(0,100)}...
    <span className='font-[maiandra] text-[#17A2B8] cursor-pointer'onClick={()=>handleClick(data[2])}>Know More</span></p>
  </div>
</div>
    <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} data={detailSend}/>
    </div>
  )
}

export default Activities
