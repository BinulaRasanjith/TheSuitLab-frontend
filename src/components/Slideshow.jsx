import { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'


const Slideshow = () => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  useEffect(() => {
    setTimeout(() => {
      // Increment the current slide index
      setCurrent(current === length - 1 ? 0 : current + 1)
    }, 5000); // 5 seconds
  }, [current, length]);

  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
    },
    {
      url: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
    },
    {
      url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    },
    {
      url: "https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4="
    },
    {
      url: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
    }

  ]

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex)

  }



  return (
    <div className='max-w-[1580px] h-[500px] w-full m-auto pt-10 relative group flex items-center justify-center'>
      <div style={{ backgroundImage: `url(${slides[current].url})` }} className='w-full h-full bg-center bg-cover duration-500'></div>

      {/* left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='absolute flex top-[80%] right-[50%] left-[50%] justify-center py-2'>
        {slides.map((slide, slideIndex) => {
          return (
            <div key={slideIndex}
              onClick={() => goToSlide(slideIndex)} className='text-2xl justify-center py-2'>
              <RxDotFilled />

            </div>
          )
        })
        }
      </div>

      <div className='flex flex-col items-center absolute '>
        <p className='text-xl sm:text-2xl md:text-5xl text-white font-bold'>Welcome to the world of</p>
        <p className='text-xl sm:text-2xl md:text-5xl text-white font-bold py-3'>Gentleman</p>
        <button type="button" className="py-2.5 bg-opacity-50 px-5 mr-2 mb-2 text-sm font-medium text-white rounded-lg border border-white border-4">Shop Now</button>
      </div>

    </div>
  )
}

export default Slideshow