import Curved from '../../assets/images/back_pocket_styles/Curved (1).png'
import Double from '../../assets/images/back_pocket_styles/Double.png'
import Modern from '../../assets/images/back_pocket_styles/Modern.png'
import Single from '../../assets/images/back_pocket_styles/Single.png'
import Square from '../../assets/images/back_pocket_styles/Square.png'

const ChooseBackPocket = () => {
    return (

        <div className='my-5 px-10 border-r-4 border-gray-400'>

            <span className='p-5 text-2xl font-bold'>Choose Your back pocket style</span>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                <button className='bg-gray-200 rounded-lg py-3 px-5 m-1'>Left</button>
                <button className='bg-gray-200 rounded-lg py-3 px-5 m-1'>Right</button>
                <button className='bg-gray-200 rounded-lg py-3 px-5 m-1'>Both</button>

                <div className='flex flex-col items-center p-3 justify-center'>
                    <img alt="Single Opening" className='pb-5' src={Single} />
                    <label className='text-sm'>SINGLE OPENING</label>
                </div>
                <div className='flex flex-col items-center p-3 justify-center'>
                    <img alt="Double Opening" className='pb-5' src={Double} />
                    <label className='text-sm'>DOUBLE OPENING</label>
                </div>
                <div className='flex flex-col items-center p-3 justify-center'>
                    <img alt="Modern" className='pb-5' src={Modern} />
                    <label className='text-sm'>MODERN FLAP <br />WITH BUTTON</label>
                </div>
                <div className='flex flex-col items-center p-3 justify-center'>
                    <img alt="Curved" className='pb-5' src={Curved} />
                    <label className='text-sm'>CURVED FLAP <br />WITH  BUTTON</label>
                </div>
                <div className='flex flex-col items-center p-3 justify-center'>
                    <img alt="Squard" className='pb-5' src={Square} />
                    <label className='text-sm'>SQUARED FLAP <br />WITH BUTTON</label>
                </div>

            </div>

        </div>
    )
}

export default ChooseBackPocket