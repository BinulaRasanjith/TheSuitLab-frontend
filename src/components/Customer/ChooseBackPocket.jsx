// import Curved from '../../assets/images/back_pocket_styles/Curved (1).png'
// import Square from '../../assets/images/back_pocket_styles/Square.png'
import { useDispatch } from 'react-redux'

import Double from '../../assets/images/back_pocket_styles/Double.png'
// import Modern from '../../assets/images/back_pocket_styles/Modern.png'
import Single from '../../assets/images/back_pocket_styles/Single.png'
import { setJacket } from '../../store/slices/jacketCustomizationSlice'
import { setRotation } from "../../store/slices/rotationHandleSlice"


const ChooseBackPocket = () => {
    const dispatch = useDispatch()

    return (

        <div className='my-5 px-10'>

            <span className='p-5 text-2xl font-bold'>Choose Your back pocket style</span>
            <div className='grid grid-cols-3 gap-5 mt-5'>

                <div onClick={() => {
                    dispatch(setJacket({ backPocket: "no-btn" }))
                    dispatch(setRotation(Math.PI));
                }} className='flex flex-col items-center p-3 justify-center cursor-pointer rounded-lg border border-black-2  shadow'>
                    <img alt="Single Opening" className='pb-5' src={Single} />
                    <label className='text-sm'>SINGLE OPENING</label>
                </div>
                <div onClick={() => {
                    dispatch(setJacket({ backPocket: "with-btn" }))
                    dispatch(setRotation(Math.PI));
                }} className='flex flex-col items-center p-3 justify-center cursor-pointer rounded-lg border border-black-2  shadow'>
                    <img alt="Double Opening" className='pb-5' src={Double} />
                    <label className='text-sm'>DOUBLE OPENING</label>
                </div>

            </div>

        </div>
    )
}

export default ChooseBackPocket