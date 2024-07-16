import React,{useEffect, useState} from "react";
import "./events.css";
import img1 from "./images/Innohacks 3.0 Logo.png";
import img2 from "./images/iwoc logo (1).png";
import img3 from "./images/coderspree.png";
import aos from "aos"
import "aos/dist/aos.css"
import SpringModal from "../cards/CardModal";

const detail =[
  {
    title: "Innohacks",
    description:
      "The largest code fest of Delhi-NCR! Join a 24-Hour Hackathon to hustle and shine through 5 amazing tracks, Embark on an Odyssey to learn new technologies in captivating environment seek guidance from experienced mentors and engrave your name on boards of our esteemed Judges! .",
  },
  {
    title: "IWOC",
    description:
      "The Open Source Contribution event held in every Winters, we have 30+ impactful projects, hosted 4 engaging speaker sessions comprising of speaker like Unnati Chhabra - SDE @zomato, Shashank Srivastava - India Business @Google, and others with garnered registrations from a 350+ students, and actively involved 150+ contributors.",
  },
  {
    title: "Coderspree",
    description:
      "Coderspree 3.0, in partnership with HacktoberFest, brought together the students  of our college for a month-long competitive coding sprint..",
  },
]

const Events = () => {
  const [isOpen,setIsOpen] = useState(false)
  const [data,setData] = useState({})
  useEffect(()=>{
    aos.init(1800)
  },[])

  function handleClick(id){
    setData(detail[id])
    setIsOpen(true)
  }
  return (
    <div className="relative" id="events">
      <h1 data-aos="fade-down" className="text-6xl max-md:text-4xl py-4 px-6 text-center  text-white w-screen items-center main-text">
        OUR MAIN EVENTS
      </h1>
      {/* Card 1 */}
      <div className="events-container relative">
        <div onClick={()=>handleClick(0)} className="e-card playing cursor-pointer hover:scale-110 transition-all duration-300">
          <div className="image"></div>

          <div className="waves"></div>
          <div className="waves"></div>
          <div className="waves"></div>
          <div className="infotop">
            <img
              src={img1}
              alt="can't display at this moment"
              className="card-image"
            />
            <br />
            <br />
          </div>
        </div>

        {/* Card 2 */}
        <div onClick={()=>handleClick(1)} className="e-card playing cursor-pointer hover:scale-110 transition-all duration-300">
          <div className="image"></div>

          <div className="waves"></div>
          <div className="waves"></div>
          <div className="waves"></div>
          <div className="infotop">
            <img
              src={img2}
              alt="can't display at this moment"
              className="card-image"
            />
            <br />
            <br />
          </div>
        </div>

        {/* Card 3 */}
        <div onClick={()=>handleClick(2)} className="e-card playing cursor-pointer hover:scale-110 transition-all duration-300">
          <div className="image"></div>

          <div className="waves"></div>
          <div className="waves"></div>
          <div className="waves"></div>
          <div className="infotop">
            <img
              src={img3}
              alt="can't display at this moment"
              className="card-image-3 mb-1.5"
            />
            <br />
            <br />
          </div>
        </div>
        { data &&
        <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
        }
      </div>
    </div>
  );
};

export default Events;
