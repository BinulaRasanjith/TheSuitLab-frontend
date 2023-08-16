import { useEffect, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'

const Slideshow2 = () => {
    const navigate = useNavigate()
    const [current, setCurrent] = useState(0)
    const slides = [
        {
            url: "https://images.pexels.com/photos/7506120/pexels-photo-7506120.jpeg",
        },
        {
            url: "https://images.pexels.com/photos/375902/pexels-photo-375902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            url: "https://img.freepik.com/free-photo/front-view-smiling-male-office-worker-suit-holding-documents-pointing-something-right-side-isolated-dark-wall_140725-97201.jpg?w=1480&t=st=1692209222~exp=1692209822~hmac=90e6dddbf4f14bee6ba66d7aadc75ba5dfae357d14bc5eb614cbf0b2fcd0e372"
        },
        {
            url: "https://img.freepik.com/free-photo/cropped-portrait-successful-businessman-buttoning-his-elegant-suit-isolated-dark-background_613910-5505.jpg?w=1800&t=st=1692208781~exp=1692209381~hmac=2fa53a694e0a4ea1e743449d0da12a10978a43b315817bca8dd1cd3105991ef0"
        },
        {
            url: "https://img.freepik.com/free-photo/successful-handsome-business-man-office_1303-20916.jpg?w=1480&t=st=1692208835~exp=1692209435~hmac=d988686c4331eceae58ef3d55f0178d60d84ac7ec78489bd26017a359affbb32"
        }
    ]

    useEffect(() => {
        const length = slides.length
        setTimeout(() => {
            // Increment the current slide index
            setCurrent(current === length - 1 ? 0 : current + 1)
        }, 5000); // Delay in milliseconds (e.g., 3000 = 3 seconds)
    }, [current, slides.length]);

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
        <div className='max-w-[1580px] h-[500px] w-full m-auto relative group  '>
            <div className='w-full h-full bg-center bg-cover duration-500' style={{ backgroundImage: `url(${slides[current].url})` }}></div>

            {/* left Arrow */}
            <div className='hidden group-hover:block absolute top-[85%] -translate-x-0 translate-y-[-50%] left-[30%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[85%] -translate-x-0 translate-y-[-50%] right-[30%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='absolute flex top-[80%] right-[50%] left-[50%] justify-center py-2'>
                {slides.map((slide, slideIndex) => {
                    return (
                        <div className='text-2xl justify-center py-2'
                            key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                            <RxDotFilled />

                        </div>
                    )
                })
                }
            </div>
            <div className='flex flex-col absolute top-[30%] left-[10%]'>
                <p className='text-4xl text-white font-bold pb-3'>Lookbook</p>
                <p className='text-white pb-3'>Step into a world of refined style and unparalleled<br></br> craftsmanship with our Suit Tailorshop Lookbook.<br></br> Discover the artistry behind every suit, where fabric<br></br> Discover the artistry behind every suit, where<br></br> fabric meets precision to create masterpieces that<br></br> embody sophistication and confidence.</p>
                <button onClick={() => navigate('/customer/lookbook')} className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-3xl text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 mb-2 w-32 justify-center" type="button">
                    Visit
                </button>
            </div>

        </div>
    )
}

export default Slideshow2