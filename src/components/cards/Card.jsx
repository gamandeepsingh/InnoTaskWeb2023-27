import ar from "../domain/assets/AR_VR.jpg";
import web from "../domain/assets/WEB_D.jpg";
import android from "../domain/assets/AND_D.jpg";
import ml from "../domain/assets/ML.jpg";
import iot from "../domain/assets/IOT.jpg";
import React, { useRef, useState,useEffect } from "react";
import { motion } from "framer-motion";
import { GiSpiderWeb } from "react-icons/gi";
import { BiLogoAndroid } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { FaVrCardboard } from "react-icons/fa6";
import SpringModal from "./CardModal"; // Ensure this import is correct
import aos from "aos"
import "aos/dist/aos.css"

const domain = [
    {
      title: "Web Developer",
      description:
        "Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.",
    },
    {
      title: "Ar/Vr",
      description:
        "(Augmented Reality/Virtual Reality) Refers to computer-generated simulations that integrate the real world (AR) or are entirely self-contained (VR). AR applications let you move around in the real world.",
    },
    {
      title: "Android Development",
      description:
        "Android development is a form of software engineering dedicated specifically to creating applications for devices that run on the Android platform. ",
    },
    {
      title: "IOT",
      description:
        " The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet.",
    },
    {
      title: "Machine Learing",
      description:
        "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy. IBM has a rich history with machine learning",
    },
  ];

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(domain[0]);
  useEffect(()=>{
    aos.init(1800)
  },[])
  
  function handleClick(index){
    setData(domain[index])
    setIsOpen(true)
  }
 

  return (
    <div
      className="flex flex-col text-white w-screen items-center ml-[20px] max-sm:ml-0 pr-[3rem] max-sm:pr-0 fw-bold"
      style={{
        fontFamily: "cabin-sketch-regular",
        fontWeight: "400",
        fontStyle: "normal",
      }}
      id="domains"
    >
      <h1 data-aos="fade-down" className="text-6xl max-md:text-4xl py-4 px-6 text-center ml-[80px] max-md:ml-0">
        Discover Our Digital Realms
      </h1>
      <div className="max-w-[1080px] place-content-center  px-4 py-12 text-body-emphasis w-full flex justify-center flex-wrap gap-10">
        <TiltCard
          data={"Web Development"}
          img={web}
          logo={<GiSpiderWeb fontSize={46} />}
          setIsOpen={setIsOpen}
          onClick={() =>handleClick(0)}
        />
        <TiltCard
          data={"AR/VR"}
          img={ar}
          logo={<FaVrCardboard fontSize={46} />}
          setIsOpen={setIsOpen}
          onClick={() =>handleClick(1)}
        />
        <TiltCard
          data={"Android Development"}
          img={android}
          logo={<BiLogoAndroid fontSize={46} />}
          setIsOpen={setIsOpen}
          onClick={() =>handleClick(2)}
        />
        <TiltCard
          data={"IOT"}
          img={iot}
          logo={<FaNetworkWired fontSize={46} />}
          setIsOpen={setIsOpen}
          onClick={() =>handleClick(3)}
        />
        <TiltCard
          data={"Machine Learning"}
          img={ml}
          logo={<BsRobot fontSize={46} />}
          setIsOpen={setIsOpen}
          onClick={() =>handleClick(4)}
        />
      </div>
      { data &&
        <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
        }
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ data, img, logo, setIsOpen ,onClick}) => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        objectFit: "cover",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-[#17a2b8] to-violet-300
      flex flex-col items-center cursor-pointer
      "
     onClick={onClick}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          background: `url(${img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize:"cover"
        }}
        className="absolute inset-4 grid place-content-center rounded-xl font-extrabold  shadow-lg z-20"
      >
        <div
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl "
        >
          {React.cloneElement(logo, {
            style: { filter: "drop-shadow(0 0 10px red)" },
          })}
        </div>
        <p
          style={{
            transform: "translateZ(50px)",
            color: "linear-gradient(blue 0, purple 100%)",
            textShadow: "0 0 8px red",
            fontSize: "2rem",
          }}
          className="text-center text-2xl font-bold"
        >
          {data}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
