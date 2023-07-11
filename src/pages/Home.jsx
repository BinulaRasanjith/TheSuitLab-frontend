import React from 'react'
import Navbar from '../components/Navbar'
import Slideshow from '../components/Slideshow'
import Homefunctionality from '../components/Homefunctionality'
import Instructions from '../components/Instructions'
import Addmeasurements from '../components/Addmeasurements'
import Recentdesigns from '../components/Recentdesigns'
import Slideshow2 from '../components/Slideshow2'
import Customertestimonials from '../components/Customertestimonials'
import Landingbottomdetails from '../components/Landingbottomdetails'

const Home = () => {
  return (
    <div>
        <Navbar page="home"/>
        <Slideshow />
        <Homefunctionality />
        <Instructions />
        <Addmeasurements />
        <Recentdesigns />
        <Slideshow2 />
        <Customertestimonials />
        <Landingbottomdetails/>
    </div>
  )
}

export default Home