import React from 'react'
import Navbar from './components/Navbar'
import Slideshow from './components/Slideshow'
import Landingbottomdetails from './components/Landingbottomdetails'
import Slideshow2 from './components/Slideshow2'

const App = () => {
  return (
    <div>
      <Navbar />

      <Slideshow />
      <Slideshow2 />
      <Landingbottomdetails />
      
    </div>
  )
}

export default App