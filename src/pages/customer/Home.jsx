import AddMeasurements from '../../components/AddMeasurements'
import CustomerTestimonials from '../../components/CustomerTestimonials'
import Fitness from '../../components/Fitness'
import Footer from '../../components/Footer'
import HomeFunctionality from '../../components/HomeFunctionality'
import Instructions from '../../components/Instructions'
import RecentDesigns from '../../components/RecentDesigns'
import Slideshow2 from '../../components/Slideshow2'

const Home = () => {
  return (
    <div className='block w-full'>
      <HomeFunctionality />
      <Instructions />
      <AddMeasurements />
      <RecentDesigns />
      <Slideshow2 />
      <Fitness />
      <CustomerTestimonials />
      <Footer />
    </div>
  )
}

export default Home