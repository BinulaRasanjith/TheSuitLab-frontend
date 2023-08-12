import BootCut from '../assets/images/pant_styles/BootCut 1.png'
import Dave from '../assets/images/pant_styles/Dave 1.png'
import Normal from '../assets/images/pant_styles/Normal 1.png'

const ChoosePant = () => {
  return (
    <div className='my-5 px-10 border-r-4 border-gray-400'>
         <span className='p-5 text-2xl font-bold'>Choose Your Vent</span>
        <div className='grid grid-cols-3 gap-5 mt-5'>
            <div className='flex flex-col items-center p-6 justify-center'>
                <img  alt="Center Vent" className='pb-5' src={BootCut}  />
                <label className='text-sm'>CENTER VENT</label>
            </div>
            <div className='flex flex-col items-center p-6 justify-center'>
                <img  alt="SIDE VENT" className='pb-5' src={Dave}  />
                <label className='text-sm'>SIDE VENT</label>
            </div>
            <div className='flex flex-col items-center p-6 justify-center'>
                <img  alt="NO VENT" className='pb-5' src={Normal}  />
                <label className='text-sm'>NO VENT</label>
            </div>
        </div>

    </div>
  )
}

export default ChoosePant