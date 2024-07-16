import React, {useEffect} from 'react'
import './carousel.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aos from "aos"
import "aos/dist/aos.css"

const openLink = (url) => {
  window.open(url, '_blank');
};

const data =[
  {
    name: 'Tejash Seth',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Tejash+Seth.jpg',
    review: 'Core Lead',
    link: ['https://linktr.ee/tejash11']
  },
  {
    name: 'Anvash Singh',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Anvansh+Singh.png',
    review: 'Core Lead',
    link: ['https://www.linkedin.com/in/anvansh/']
  },
  {
    name: 'Anshul Nigam',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Anshul+Nigam.jpg',
    review: 'Core Lead',
    link: ['https://linktr.ee/anshul_13j']
  },
  {
    name: 'Anjuman Hasan',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/AnjumanHasan.jpeg',
    review: 'Core Lead',
    link: ['https://www.linkedin.com/in/anjuman-hasan/']
  },
  {
    name: 'Anshul Gurjar',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Anshul+Gurjar.JPG',
    review: 'Core Lead',
    link: ['https://www.linkedin.com/in/anshul-gurjar-88b872257/']
  },
  {
    name: 'Ayush Dubey',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/AyushDubey.jpeg',
    review: 'Core Lead',
    link: ['http://ayushdubey.carrd.co']
  },
  {
    name: 'Anupam Tiwari',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Anupam.jpeg',
    review: 'Core Lead',
    link:['https://www.linkedin.com/in/anupam1603/']
  },
  {
    name: 'Ambuj Kulshrestha',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Ambuj+Kulshreshtha.jpg',
    review: 'Core Lead',
    link:['https://linktr.ee/ambuj1211']
  },
  {
    name: 'Arjit Goyal',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Arjit+Goyal.jpg',
    review: 'Core Lead',
    link:['https://linktr.ee/iamarjitgoyal']
  },
  {
    name: 'Jyoti Ojha',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Jyoti+Ojha.jpg',
    review: 'Core Lead',
    link:['https://linktr.ee/jyoti0802']
  },
  {
    name: 'Abhinav Saxena',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/IMG_7524.JPG',
    review: 'Core Lead',
    link:['https://www.linkedin.com/in/abhinav-saxena-dev/']
  },
  {
    name: 'Kritish Shukla',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Kritish.jpg',
    review: 'Core Lead',
    link:['https://www.linkedin.com/in/kritish-shukla-805902210/']
  },
  {
    name: ' Soumen Paul',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/SoumenPaul.jpg',
    review: 'Core Lead',
    link:['https://linktr.ee/soumenpaul7']
  },
  {
    name: 'Vishesh Kumar Singh',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/VisheshKumarSingh.jpg',
    review: 'Core Lead',
    link: ['https://linktr.ee/visheshks04']
  },
  {
    name: 'Vidushi Pandey',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Vidushi+Pandey.jpg',
    review: 'Core Lead',
    link: ['https://tr.ee/BOpXu3cXly']
  }
]

const settings={
  dots:true,
  
  infinite:true,
  speed:500,
  slidesToShow: 3, 
  slidesToScroll:1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 950,
      settings: { 
        dots: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}




export default function Carousel() {
//  const [setLink] = useState('');
 useEffect(()=>{
   aos.init(1800)
 },[]) 
 return (
  <div className ="w-3/4 m-auto" id='testimonial'>
    <h1 data-aos="fade-down" className="text-6xl max-md:text-4xl py-4 px-4 text-center ml-[80px] max-md:ml-0"  style={{
        fontFamily: "cabin-sketch-regular",
        fontWeight: "400",
        fontStyle: "normal",
        color: "white",
      }}>
        Meet the Team 
      </h1>
    <div className="mt-20" data-aos="fade-down">
    <Slider{...settings}>
      {data.map((d,index) =>(
        <div key={index} className=" h-[450px] text-black rounded-xl">
          <div className="h-56 rounded-t-xl footer-contact flex justify-center items-center">
            <img key={d.name} src={d.img} alt="" className="h-44 w-44 rounded-full object-cover"/>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 p-4 font-[maiandra] rounded-xl bg-white">
            <p className='text-xl font-semibold'>{d.name}</p>
            <p className='font-bold'>{d.review}</p>
            <button key={d.name} className='footer-button hover:bg-[#17A2C9] hover:scale-110' onClick={()=> openLink(d.link)}>Connect</button>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  </div>
 );
}
