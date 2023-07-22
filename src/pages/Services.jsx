import Navbar from '../components/Navbar'
import OurServices from '../components/OurServices'
import OurProducts from '../components/OurProducts'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div>
      <Navbar page="services" />
      <OurServices />
      <OurProducts />
      <Footer />
    </div>
  )
}

export default Services