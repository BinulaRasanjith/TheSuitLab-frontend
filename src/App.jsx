
import Login from "./pages/Login"
import Dashboard from "./pages/dashboard";
import Forgotpassword from "./pages/Forgotpassword";
import Setnewpassword from "./pages/Setnewpassword";
import Verifyemail from "./pages/Verifyemail";
import Signup from "./pages/Signup";
import Slideshow from "./components/Slideshow";
import Navbar from "./components/Navbar";
import Slideshow2 from "./components/Slideshow2";
import Landingbottomdetails from "./components/Landingbottomdetails";
const App=() =>{

  return (  
    <div>
        {/* <Forgotpassword/> */}
        {/* <Verifyemail/> */}
        {/* <Dashboard /> */}
        {/* <Login /> */}
        {/* <Setnewpassword/> */}
        {/* <Signup/> */}
        <Navbar/>
        <Slideshow/>
        <Slideshow2/>
        <Landingbottomdetails/>
    </div>

  )
}

export default App;
