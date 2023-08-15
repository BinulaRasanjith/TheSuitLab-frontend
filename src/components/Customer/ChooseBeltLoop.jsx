import BuckleSideAdjuster from '../../assets/images/belt_loop_styles/BuckleSideAdjusters.png'
import ButtonSideAdjuster from '../../assets/images/belt_loop_styles/ButtonSideAdjusters.png'
import Double from '../../assets/images/belt_loop_styles/Double (1).png'
import Modern from '../../assets/images/belt_loop_styles/Modern (1).png'
import None from '../../assets/images/belt_loop_styles/None (1).png'
import Single from '../../assets/images/belt_loop_styles/Single (1).png'

const ChooseBeltLoop = () => {
    return (
        <div className='my-5 px-10'>

            <span className='p-5 text-2xl font-bold'>Choose Your back pocket style</span>
            <div className='grid grid-cols-3 gap-8 mt-10'>
                <button className='bg-gray-200 rounded-lg py-3 px-5 m-1'>Normal</button>
                <button className='bg-gray-200 rounded-lg py-3 px-5 m-1'>Round</button>
                <button className='bg-gray-200 rounded-lg py-3 px-5 m-1'>Square</button>
                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="None" className='pb-5' src={None} />
                    <label className='text-sm'>NONE</label>
                </div>

                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="Single" className='pb-5' src={Single} />
                    <label className='text-sm'>SINGLE</label>
                </div>
                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="Double" className='pb-5' src={Double} />
                    <label className='text-sm'>DOUBLE</label>
                </div>
                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="Modern" className='pb-5' src={Modern} />
                    <label className='text-sm'>MODERN</label>
                </div>
                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="NONE-BUTTON SIDE" className='pb-5' src={ButtonSideAdjuster} />
                    <label className='text-sm'>NONE-BUTTON <br />SIDE</label>
                </div>
                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="NONE-BUTTON SIDE" className='pb-5' src={BuckleSideAdjuster} />
                    <label className='text-sm'>NONE-BUCKLE<br /> SIDE</label>
                </div>

            </div>

        </div>
    )
}

export default ChooseBeltLoop