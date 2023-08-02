import Jeans from '../assets/images/pant_pocket_styles/Jeans.png'
import ModernCurved from '../assets/images/pant_pocket_styles/ModernCurved.png'
import None from '../assets/images/pant_pocket_styles/None.png'
import Slanted from '../assets/images/pant_pocket_styles/Slanted.png'
import SlantedWelt from '../assets/images/pant_pocket_styles/SlantedWelt.png'
import StraightWelt from '../assets/images/pant_pocket_styles/StraightWelt.png'


const ChoosePantPocket = () => {
  return (
    <div className='my-5 px-10 border-r-4 border-gray-400'>
            <span className='p-5 text-2xl font-bold'>Choose Your pant pocket style</span>
            <div className='grid grid-cols-3 gap-3 mt-5'>
                
                <div className='flex flex-col items-center p-4 justify-center'>
                    <img alt="None" className='pb-5' src={None} />
                    <label className='text-sm'>NONE</label>
                </div>
                <div className='flex flex-col items-center p-4 justify-center'>
                    <img alt="Slanted" className='pb-5' src={Slanted} />
                    <label className='text-sm'>SLANTED</label>
                </div>
                <div className='flex flex-col items-center p-4 justify-center'>
                    <img alt="Slanted Welt" className='pb-5' src={SlantedWelt} />
                    <label className='text-sm'>SLANTED WELT</label>
                </div>
                <div className='flex flex-col items-center p-4 justify-center'>
                    <img alt="Straight Welt" className='pb-5' src={StraightWelt} />
                    <label className='text-sm'>STRAIGHT WELT</label>
                </div>
                <div className='flex flex-col items-center p-4 justify-center'>
                    <img alt="Modern Curved" className='pb-5' src={ModernCurved} />
                    <label className='text-sm'>MODERN CURVED</label>
                </div>
                <div className='flex flex-col items-center p-4 justify-center'>
                    <img alt="Jeans" className='pb-5' src={Jeans} />
                    <label className='text-sm'>JEANS</label>
                </div>
            </div>

        </div>
  )
}

export default ChoosePantPocket