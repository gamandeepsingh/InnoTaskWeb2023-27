import React from 'react'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Card from '../components/cards/Card'
import Stats from '../components/stats/Stats'
import WinnerSection from '../components/winnerSection/WinnerSection'
import Footer from '../components/footer/footer'
import Events from "../components/events/Events"
import Carousel from '../components/carousel/carousel'
import Activities from '../components/activities/Activities'

export default function Homepage() {
  return (
    <div className="flex flex-col w-full">
      <Navbar/>
      <Hero/>
      <About/>
      <Card/>
      <Activities/>
      <Stats/>
      <Events/>
      <Carousel/>
      <WinnerSection/>
      <Footer/>

    </div>
  )
}
