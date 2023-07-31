import LandingPageLayout from '../layouts/LandingPageLayout';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import AboutUs from '../pages/AboutUs';
import Signup from '../pages/Signup';
import Services from '../pages/Services';
import ContactUs from '../pages/ContactUs';
import Dashboard from '../pages/Dashboard';
import Admin from '../pages/Admin/Dashboard';


const landingPageRoutes = {
    path: '/',
    element: <LandingPageLayout />,
    children: [
        { path: '', element: <LandingPage /> },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
        { path: 'about-us', element: <AboutUs /> },
        { path: 'services', element: <Services /> },
        { path: 'contact-us', element: <ContactUs /> },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'admin', element: <Admin /> }
    ],
}

export default landingPageRoutes