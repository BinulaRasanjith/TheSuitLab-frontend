import React from 'react'
import Navbar from '../components/Navbar'
import Ourservices from '../components/Ourservices'
import Ourproducts from '../components/Ourproducts'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div>
      <Navbar page="services"/>
      <Ourservices />
      <Ourproducts />
      <Footer />

    </div>
  )
}

export default Services