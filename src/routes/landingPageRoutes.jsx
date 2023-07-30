import LandingPageLayout from '../layouts/LandingPageLayout'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'
import Services from '../pages/Services'
import Signup from '../pages/Signup'

const landingPageRoutes = {
    path: '/',
    element: <LandingPageLayout />,
    children: [
        { path: '', element: <LandingPage /> },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
        { path: 'about-us', element: <AboutUs /> },
        { path: 'services', element: <Services /> },
        { path: 'contact-us', element: <ContactUs /> }
    ],
}

export default landingPageRoutes