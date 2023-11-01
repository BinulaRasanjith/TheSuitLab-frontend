// import Larger from '../../assets/images/lapel_styles/Larger 1.png'
import { MdDoneOutline } from 'react-icons/md'
// import Regular from '../../assets/images/lapel_styles/Regular 1.png'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'

import CLOne from '../../assets/images/lapel_styles/CL1 1.png'
import CLTwo from '../../assets/images/lapel_styles/CL2 1.png'
// import CLThree from '../../assets/images/lapel_styles/CL3 1.png'
import CLFour from '../../assets/images/lapel_styles/CL4 1.png'
// import Small from '../../assets/images/lapel_styles/Small 1.png'
import { selectJacket, setJacket } from "../../store/slices/jacketCustomizationSlice"
import { setRotation } from "../../store/slices/rotationHandleSlice"
const ChooseLapels = () => {
    const dispatch = useDispatch()
    const lapelSelected = useSelector(selectJacket).lapel

    return (
        <div className='my-5 px-3 grid grid-rows-3 grid-cols-1 justify-center items-center'>
            <div className='flex-flex-col'>
                <span className='text-2xl font-bold ml-5 '>Choose Your Lapel Style</span>
                <div className='grid grid-cols-4 gap-x-5 mt-5'>
                    <div onClick={() => {
                        dispatch(setJacket({ lapel: 'peak-lapel' }))
                        dispatch(setRotation(2 * Math.PI))
                    }} className='flex p-2 relative flex-col justify-center items-center cursor-pointer rounded-lg border border-black-2  shadow'>
                        <img alt="" className="pb-3" src={CLOne} />
                        <label className='text-sm'>PEAK LAPEL</label>
                        {lapelSelected === 'peak-lapel' && <div className="absolute z-5 top-8 right-2"><MdDoneOutline size={24} color="green" /></div>}
                    </div>
                    <div onClick={() => {
                        dispatch(setJacket({ lapel: 'notch-lapel' }))
                        dispatch(setRotation(2 * Math.PI))
                    }} className='flex p-2 relative flex-col justify-center items-center cursor-pointer rounded-lg border border-black-2  shadow'>
                        <img alt="" className="pb-3" src={CLTwo} />
                        <label className='text-sm'>NOTCH LAPEL</label>
                        {lapelSelected === 'notch-lapel' && <div className="absolute z-5 top-8 right-2"><MdDoneOutline size={24} color="green" /></div>}

                    </div>
                    <div onClick={() => {
                        dispatch(setJacket({ lapel: 'peak-lapel' }))
                        dispatch(setRotation(2 * Math.PI))
                    }} className='flex p-2 flex-col justify-center items-center cursor-pointer rounded-lg border border-black-2  shadow'>
                        <img alt="" className="pb-3" src={CLFour} />
                        <label className='text-sm'>SHAWL LAPEL</label>
                    </div>

                </div>
            </div>
            {/* <div>
                <span className='text-2xl font-bold ml-5'>Buttonhole on Lapel</span>
                <div className='flex flex-col justify-around mt-5'>
                    <button className='bg-gray-200 rounded-lg py-3 px-5 m-1'>With Buttonhole</button>
                    <button className='bg-gray-200 rounded-lg py-3 px-5 m-1'>Without Buttonhole</button>
                </div>

            </div>
            <div>
                <span className='text-2xl font-bold ml-5'>Choose Your Lapel Width</span>
                <div className='grid grid-cols-3 grid-rows-1 gap-x-5 mt-5'>
                    <div className='flex p-3 flex-col justify-center items-center'>
                        <img alt="" className="pb-3" src={Larger} />
                        <label>Larger</label>
                    </div>
                    <div className='flex p-3 flex-col justify-center items-center'>
                        <img alt="" className="pb-3" src={Regular} />
                        <label>Regular</label>
                    </div>
                    <div className='flex p-3 flex-col justify-center items-center'>
                        <img alt="" className="pb-3" src={Small} />
                        <label>Small</label>
                    </div>

                </div>

            </div> */}
        </div>
    )
}

export default ChooseLapels