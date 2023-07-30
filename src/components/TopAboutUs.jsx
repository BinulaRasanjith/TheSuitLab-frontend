import Rectangle243 from '../assets/images/Rectangle243.png'

const TopAboutUs = () => {
  return (
    <div className='pt-10 md:pt-2'>
      <div className='flex items-start justify-start relative'>
        <img alt="" className="bg-cover w-full h-screen" src={Rectangle243} />
      </div>
      <div className='flex flex-col items-start justify-start z-3 top-[3%] sm:top-[3%] md:top-[3%] left-[3%] absolute'>
        <div className='flex flex-col pb-7'>
          <p className='text-2xl sm:text-4xl lg:text-6xl font-bold text-white'>We take the art of sewing</p>
          <p className='text-2xl sm:text-4xl lg:text-6xl font-bold text-white'>in a different direction.</p>
        </div>
        <div className='text-white md:text-2xl'><p>We’re all about making good, quality custom clothing to <br />be worn and loved over time. We’re passionate about<br />
          changing the way you look at clothing and changing<br /> the way they’re made. We want nothing more than for<br /> you to join us. It’s time to start wearing clothes that fit,<br /> for real.</p></div>
      </div>
    </div>
  )
}

export default TopAboutUs