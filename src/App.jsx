import Navbar from './components/Navbar'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import Services from './pages/Services'
import Contactus from './pages/Contactus'
import Aboutus from './pages/Aboutus'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Forgotpassword from './pages/Forgotpassword'


const App = () => {
  return (
    <div>
      {/* <Landingpage /> */}
      {/* <Home /> */}
      {/* <Services /> */}
      {/* <Contactus /> */}
      {/* <Aboutus /> */}
      {/* <DropDown/> */}
      <Login />
      <Forgotpassword />
      <Signup />
    </div>
  )
}

export default App