import measurement from '../assets/images/measurement.png'

const AddMeasurements = () => {
    return (
        <div className='flex items-center justify-center opacity-75 bg-gradient-to-r from-gray-25 via-transparent to-gray-25 bg-opacity-75 my-10 sm:my-0 '>
            <div className='relative'>
                <img alt="measurement" className=' w-screen h-80 sm:h-auto bg-cover brightness-50' src={measurement} />
            </div>
            <div className='absolute flex flex-col items-center justify-center'>
                <div className=' flex flex-col p-3'>
                    <h1 className='text-2xl sm:text-4xl md:text-6xl text-bold text-white'>It is all about the</h1>
                    <h1 className='text-2xl sm:text-4xl md:text-6xl text-bold text-white'>measurements</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-white'>A great place for those who want a grow and</p>
                    <p className='text-white'>succeed in their life.</p>
                </div>
                <div className='p-3'>
                    <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" type="button">Add measurements</button>
                </div>
            </div>
        </div>
    )
}

export default AddMeasurements