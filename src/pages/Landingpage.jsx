import CustomerTestimonials from '../components/CustomerTestimonials'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'
import LandingFunPart from '../components/LandingFunPart'
import RecentDesigns from '../components/RecentDesigns'
import Slideshow from '../components/Slideshow'
import Slideshow2 from '../components/Slideshow2'

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