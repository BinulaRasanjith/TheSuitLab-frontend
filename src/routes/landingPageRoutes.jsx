import Login from '../pages/Login';
import LandingPage from '../pages/LandingPage';

const landingPageRoutes = {
    path: '/',
    element: <LandingPage />,
    children: [
        { path: 'login', element: <Login /> },
    ],
}

export default landingPageRoutes;