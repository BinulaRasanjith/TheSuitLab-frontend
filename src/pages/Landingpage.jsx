import React from 'react'
import Navbar from '../components/Navbar'
import Slideshow from '../components/Slideshow'
import Footer from '../components/Footer'
import Slideshow2 from '../components/Slideshow2'
import Landingfunpart from '../components/Landingfunpart'
import Recentdesigns from '../components/Recentdesigns'
import Customertestimonials from '../components/Customertestimonials'
import Feedback from '../components/Feedback'

const Landingpage = () => {
    return (
        <div>
            <Navbar page="home" />
            <Slideshow />
            <Landingfunpart />
            <Slideshow2 />
            <Recentdesigns />
            <Customertestimonials />
            <Feedback />
            <Footer />
        </div>
    )
}

export default Landingpage