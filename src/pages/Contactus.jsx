import React from 'react'
import Navbar from '../components/Navbar'
import Contactdetails from '../components/Contactdetails'
import Footer from '../components/Footer'

const Contactus = () => {
  return (
    <div>
        <Navbar page="contactus" />
        <Contactdetails />
        <Footer />
    </div>
  )
}

export default Contactus