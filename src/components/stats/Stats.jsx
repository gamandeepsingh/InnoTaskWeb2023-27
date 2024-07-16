import React, { useEffect, useRef } from 'react';
import './stats.css';
import aos from "aos"
import "aos/dist/aos.css"

const Stats = () => {
  const countersRef = useRef(null);
  useEffect(()=>{
    aos.init(1800)
  },[])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(countersRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const startCounting = () => {
    const counters = countersRef.current.querySelectorAll('.counter');

    counters.forEach(counter => {
      const countTo = parseInt(counter.getAttribute('data-count'));
      const duration = 3000;
      let startTime;

      function animateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const increment = Math.floor((progress / duration) * countTo);

        if (increment < countTo) {
          counter.textContent = increment;
          requestAnimationFrame(animateCounter);
        } else {
          counter.textContent = countTo + "+";
        }
      }

      requestAnimationFrame(animateCounter);
    });
  };

  return (
    <div id='stats'>
    <h1 data-aos="fade-down" className="mt-[120px] text-6xl max-md:text-4xl py-4 px-6 text-center max-md:ml-0  text-white w-screen items-center"
    style={{
      fontFamily: "cabin-sketch-regular",
      fontWeight: "400",
      fontStyle: "normal",
      color: "white",
    }}>
    AND THE COUNT SAYS..
    </h1>
    <div ref={countersRef} className="count-up">

      <div data-aos="fade-left" className="wrapper">
        
        <i className="fas fa-users"></i>
        <div className='statsName'> Active members </div>
        <div className="counter" data-count="250">0</div>
      </div>

      <div data-aos="fade-right"  className="wrapper">
        <i className="fas fa-newspaper"></i>
        <div className='statsName'> National events </div>
        <div className="counter" data-count="4">0</div>
      </div>
      
      <div data-aos="fade-left"  className="wrapper">
        <i className="fas fa-clock"></i>
        <div className='statsName'> Bootcamps </div>
        <div className="counter" data-count="35">0</div>
      </div>
    </div>
    </div>
  );
};

export default Stats;