import { Button } from "@chakra-ui/button";
import { useNavigate } from 'react-router-dom'

import measurement from '../assets/images/measurement.png'

const AddMeasurements = () => {
    const navigate = useNavigate()
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

                <Button className="p-3" onClick={() => navigate("/customer/current-measurements")}>
                    View Current Measurements
                </Button>

            </div>
        </div>
    )
}


export default AddMeasurements