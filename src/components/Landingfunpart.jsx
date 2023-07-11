import React from 'react'
import Bg1 from '../assets/images/Bg1.png'
import Bg2 from '../assets/images/Bg2.png'
import Bg3 from '../assets/images/Bg3.png'

const Landingfunpart = () => {
    return (
        <div className='flex flex-col items-center bg-white'>
            <div  className='flex flex-col items-start justify-start'>
                <div className='flex  pt-5 px-5 relative'>
                    <img className='max-h-72 w-screen max-w-full h-screen bg-cover' src={Bg1} alt="" />
                </div>
                <div className='flex flex-col absolute pt-11 pl-7 sm:pl-20'>
                    <div className='pb-3'>
                        <h1 className='text-white font-bold text-4xl'>Customize Your</h1>
                        <h2 className='text-white font-bold text-4xl'>Suit</h2>

                    </div>
                    <div className='pb-3'>
                        <p className='text-white'>Custom-made Coats, Shirts and</p>
                        <p className='text-white'>Trousers with</p>

                    </div>
                    <button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-3xl text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 w-36 justify-center">
                        Customize Now
                    </button>
                </div>

            </div>
            <div className='flex flex-col md:justify-around md:flex-row py-5 '>
                <div className='flex flex-col items-start justify-start'>
                    <div className='px-5 pb-5 md:pb-0 relative'>
                        <img className='max-h-72 w-screen max-w-full h-screen bg-cover' src={Bg2} alt="" />
                    </div>

                    <div className='flex flex-col absolute p-10'>
                        <div className='pb-3'>
                            <h1 className='text-white font-bold text-4xl'>Pick Your</h1>
                            <h2 className='text-white font-bold text-4xl'>Now</h2>

                        </div>
                        <div className='pb-3'>
                            <p className='text-white'>Find your choice from 50+</p>
                            <p className='text-white'>designs</p>

                        </div>
                        <button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-3xl text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 w-32 justify-center">
                            Hire Now
                        </button>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start'>
                    <div className='md:pr-5 md:pl-0 px-5'>
                        <img className='max-h-72 w-screen max-w-full h-screen bg-cover' src={Bg3} alt="" />
                    </div>

                    <div className='flex flex-col absolute p-10'>
                        <div className='pb-3'>
                            <h1 className='text-white font-bold text-4xl'>Explore</h1>
                            <h2 className='text-white font-bold text-4xl'>Accessories</h2>

                        </div>
                        <div className='pb-3'>
                            <p className='text-white'>Belts, Shoes, Bow Ties and</p>
                            <p className='text-white'> Neck Ties</p>

                        </div>
                        <button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-3xl text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 mb-2 w-32 justify-center">
                            Place Now
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Landingfunpart