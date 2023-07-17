import React from 'react'
import Navbar from '../components/Navbar'
import Slideshow from '../components/Slideshow'
import Homefunctionality from '../components/Homefunctionality'
import Instructions from '../components/Instructions'
import Addmeasurements from '../components/Addmeasurements'
import Recentdesigns from '../components/Recentdesigns'
import Slideshow2 from '../components/Slideshow2'
import Customertestimonials from '../components/Customertestimonials'
import Footer from '../components/Footer'
import Fitness from '../components/Fitness'

const Home = () => {
  return (
    <div>
      <Navbar page="home" />
      <Slideshow />
      <Homefunctionality />
      <Instructions />
      <Addmeasurements />
      <Recentdesigns />
      <Slideshow2 />
      <Fitness />
      <Customertestimonials />
      <Footer />
    </div>
  )
}

export default Home