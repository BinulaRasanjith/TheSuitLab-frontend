import Slideshow from '../components/Slideshow'
import Footer from '../components/Footer'
import Slideshow2 from '../components/Slideshow2'
import LandingFunPart from '../components/LandingFunPart'
import RecentDesigns from '../components/RecentDesigns'
import CustomerTestimonials from '../components/CustomerTestimonials'
import Feedback from '../components/Feedback'

const LandingPage = () => {
    return (
        <div className="block w-full">
            <Slideshow />
            <LandingFunPart />
            <Slideshow2 />
            <RecentDesigns />
            <CustomerTestimonials />
            <Feedback />
            <Footer />
        </div>
    )
}

export default LandingPage