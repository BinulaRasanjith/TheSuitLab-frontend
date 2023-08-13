import OnePleat from '../../assets/images/pleat_styles/1Pleats.png'
import TwoPleat from '../../assets/images/pleat_styles/2Pleats.png'
import ThreePleat from '../../assets/images/pleat_styles/3Pleats.png'
import BoxPleat from '../../assets/images/pleat_styles/BoxPleats.png'
import NoPleats from '../../assets/images/pleat_styles/NoPleats.png'
import ScissorPleat from '../../assets/images/pleat_styles/ScissorPleats.png'



const ChoosePantPleat = () => {
    return (
        <div className='my-5 px-10'>
            <span className='p-5 text-2xl font-bold'>Choose Your pant pleat style</span>
            <div className='grid grid-cols-3 gap-4 mt-5'>

                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="No Pleat" className='pb-5' src={NoPleats} />
                    <label className='text-sm'>NO PLEATS</label>
                </div>
                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="Single Pleats" className='pb-5' src={OnePleat} />
                    <label className='text-sm'>SINGLE PLEATS</label>
                </div>
                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="Double Pleats" className='pb-5' src={TwoPleat} />
                    <label className='text-sm'>DOUBLE PLEATS</label>
                </div>
                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="Center Vent" className='pb-5' src={ThreePleat} />
                    <label className='text-sm'>CENTER VENT</label>
                </div>
                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="Box Pleats" className='pb-5' src={BoxPleat} />
                    <label className='text-sm'>BOX PLEATS</label>
                </div>
                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="Scissor Pleats" className='pb-5' src={ScissorPleat} />
                    <label className='text-sm'>SCISSOR PLEATS</label>
                </div>
            </div>

        </div>
    )
}

export default ChoosePantPleat