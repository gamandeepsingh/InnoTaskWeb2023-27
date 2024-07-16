import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./style.css"
import aos from "aos"
import "aos/dist/aos.css"
import img1 from "./assets/img1.jpeg"
import img2 from "./assets/img2.jpeg"
import img3 from "./assets/img3.jpeg"
import img4 from "./assets/img4.jpeg"
import img5 from "./assets/img5.jpeg"
import img6 from "./assets/img6.jpeg"
import img7 from "./assets/img7.jpeg"
import img8 from "./assets/img8.jpeg"
import img9 from "./assets/img9.jpeg"
import img10 from "./assets/img10.jpeg"
import img11 from "./assets/img11.jpeg"
import img12 from "./assets/img12.jpeg"
import img13 from "./assets/img13.jpeg"
import img14 from "./assets/img14.jpeg"
import img15 from "./assets/img15.jpeg"
import img16 from "./assets/img16.jpeg"
import SpringModal from "../cards/CardModal";

const WinnerSection = () => {
  const [isOpen,setIsOpen] =useState(false)
  const data = {
    title:"Sorry Geek",
    description:"We are not Recruting...Right Now!"
  }
  useEffect(()=>{
    aos.init(1800)
  },[])

  
  return (
    <section className="min-h-[680px] w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto "
    style={{
        fontFamily: "cabin-sketch-regular",
        fontWeight: "400",
        fontStyle: "normal",
    }}
    id="acheivers">
      <div data-aos="fade-right" className="pl-[80px] max-md:pl-0 max-md:flex max-md:flex-col max-md:items-center">
        <span className="block mb-4 text-md md:text-lg text-[#17A2B8] font-medium ">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-white max-md:text-center">
          Let's have a look on our star achievers
        </h3>
        <p className="text-sm md:text-md text-white my-4 md:my-6 font-[maiandra] max-md:flex max-md:flex-col max-md:items-center">
          50+ Hackathon Winners <br />
          3+ SIH Winners <br />
          5+ MLH Winning <br />
          2+ GSOC'r
        </p>
        <button className="footer-button hover:bg-[#17A2C9] hover:scale-110"
        onClick={()=>setIsOpen(true)}
        >
          Join Us Now
        </button>
      </div>
      <div data-aos="fade-left">
      <ShuffleGrid />
      </div>
      { data &&
        <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
        }
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: img1,
  },
  {
    id: 2,
    src: img2,
  },
  {
    id: 3,
    src: img3,
  },
  {
    id: 4,
    src: img4,
  },
  {
    id: 5,
    src: img5,
  },
  {
    id: 6,
    src: img6,
  },
  {
    id: 7,
    src: img7,
  },
  {
    id: 8,
    src: img8,
  },
  {
    id: 9,
    src: img9,
  },
  {
    id: 10,
    src: img10,
  },
  {
    id: 11,
    src: img11,
  },
  {
    id: 12,
    src: img12,
  },
  {
    id: 13,
    src: img13,
  },
  {
    id: 14,
    src: img14,
  },
  {
    id: 15,
    src: img15,
  },
  {
    id: 16,
    src: img16,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default WinnerSection;