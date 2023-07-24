import Slideshow from '../components/Slideshow'
import HomeFunctionality from '../components/HomeFunctionality'
import Instructions from '../components/Instructions'
import AddMeasurements from '../components/AddMeasurements'
import RecentDesigns from '../components/RecentDesigns'
import Slideshow2 from '../components/Slideshow2'
import CustomerTestimonials from '../components/CustomerTestimonials'
import Footer from '../components/Footer'
import Fitness from '../components/Fitness'

const Home = () => {
  return (
    <div className='block w-full'>
      <Slideshow />
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