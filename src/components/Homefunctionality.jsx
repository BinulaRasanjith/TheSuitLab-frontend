import React from 'react'
import Accessories1 from '../assets/images/Accessories1.png'
import Accessories2 from '../assets/images/Accessories2.png'
import Accessories3 from '../assets/images/Accessories3.png'
import Accessories4 from '../assets/images/Accessories4.png'

const Homefunctionality = () => {
    return (
        <div className='grid grid-col-1 lg:grid-cols-2 md:grid-rows-1 gap-0 pb-10'>
            <div className='flex flex-col items-start justify-start'>
                <div className='pt-5 mx-5 md:ml-10 md:mr-0 relative'>
                    <img className='max-w-full hover:blur-sm' src={Accessories1} alt="" />
                </div>
                <div className='flex flex-col absolute pt-10 pl-7 sm:pl-20'>
                    <div className='pb-3'>
                        <h1 className='text-white font-bold text-4xl'>Customize Your</h1>
                        <h2 className='text-white font-bold text-4xl'>Suit</h2>

                    </div>
                    <div className='pb-3'>
                        <p className='text-white'>Custom-made Coats, Shirts and</p>
                        <p className='text-white'>Trousers with your favourite designs</p>

                    </div>
                    <button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-3xl text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 w-36 justify-center">
                        Customize Now
                    </button>
                </div>

            </div>
            <div className='flex flex-col flex-wrap gap-10 pt-5'>
                <div className='flex flex-col items-start justify-start'>
                    <div className='flex px-5 md:pr-10 md:pl-5 relative'>
                        <img className='max-w-full h-auto w-screen min-h-64 h-80 hover:blur-sm' src={Accessories2} alt="" />
                    </div>
                    <div className='flex flex-col absolute pt-11 pl-7 sm:pl-20'>
                        <div className='pb-3'>
                            <h1 className='text-white font-bold text-4xl'>Purchase from our</h1>
                            <h2 className='text-white font-bold text-4xl'>collection</h2>

                        </div>
                        <div className='pb-3'>
                            <p className='text-white'>Select Coats, Shirts and Trousers with  </p>
                            <p className='text-white'>from the pre-made collections</p>

                        </div>
                        <button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-3xl text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 w-36 justify-center">
                            Purchase Now
                        </button>
                    </div>

                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex flex-col items-start justify-start'>
                        <div className='flex px-5 md:pl-5 md:pr-0 relative'>
                            <img className='max-w-full h-auto w-screen min-h-64 h-80 bg-cover rounded-2xl hover:blur-sm' src={Accessories3} alt="" />
                        </div>
                        <div className='flex flex-col absolute pt-10 pl-7 sm:pl-10'>
                            <div className='pb-3'>
                                <h1 className='text-white font-bold text-4xl'>Pick Your</h1>
                                <h2 className='text-white font-bold text-4xl'>Suit Now</h2>

                            </div>
                            <div className='pb-3'>
                                <p className='text-white'>Find your dream suit</p>
                                <p className='text-white'>from 50+ designs</p>

                            </div>
                            <button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-3xl text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 w-36 justify-center">
                                Hire Now
                            </button>
                        </div>

                    </div>

                    <div className='flex flex-col items-start justify-start'>
                        <div className='flex px-5 pt-5 md:pt-0 md:pr-10 relative'>
                            <img className='max-w-full h-auto w-screen h-80 hover:blur-sm' src={Accessories4} alt="" />
                        </div>
                        <div className='flex flex-col absolute pt-10 pl-7 sm:pl-10'>
                            <div className='pb-3'>
                                <h1 className='text-white font-bold text-4xl'>Explore</h1>
                                <h2 className='text-white font-bold text-4xl'>Accessories</h2>

                            </div>
                            <div className='pb-3'>
                                <p className='text-white'>Belts, Shoes, Bow</p>
                                <p className='text-white'>Ties and Neck Ties</p>

                            </div>
                            <button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-3xl text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 w-36 justify-center">
                                Place Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homefunctionality