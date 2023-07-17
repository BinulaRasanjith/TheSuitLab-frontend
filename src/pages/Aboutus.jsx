import Footer from "../components/Footer"
import MiddleAboutUs from "../components/MiddleAboutUs"
import Navbar from "../components/Navbar"
import TopAboutUs from "../components/TopAboutUs"

const Aboutus = () => {
  return (
    <div>
        <Navbar page="aboutus" />
        <TopAboutUs />
        <MiddleAboutUs />
        <Footer />
    </div>
  )
}

export default Aboutus