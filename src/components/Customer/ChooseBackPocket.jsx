// import Curved from '../../assets/images/back_pocket_styles/Curved (1).png'
// import Square from '../../assets/images/back_pocket_styles/Square.png'
import { useDispatch, useSelector } from 'react-redux'

import Single from '../../assets/images/back_pocket_styles/Single.png'
import Double from '../../assets/images/back_pocket_styles/withbtn.png'
// import Modern from '../../assets/images/back_pocket_styles/withbtn.png'
import { setJacket, selectJacket } from '../../store/slices/jacketCustomizationSlice'
import { setRotation } from "../../store/slices/rotationHandleSlice"
import { MdDoneOutline } from "react-icons/md";


const ChooseBackPocket = () => {
    const dispatch = useDispatch()
    const backPocketSelected = useSelector(selectJacket).backPocket;

    return (

        <div className='my-5 px-10'>

            <span className='p-5 text-2xl font-bold'>Choose Your back pocket style</span>
            <div className='grid grid-cols-3 gap-5 mt-5'>

                <div onClick={() => {
                    dispatch(setJacket({ backPocket: "no-btn" }))
                    dispatch(setRotation(Math.PI));
                }} className='flex relative flex-col items-center p-3 justify-center cursor-pointer rounded-lg border border-black-2  shadow'>
                    {backPocketSelected === 'no-btn' && (
                        <div className="absolute z-5 top-2 right-2">
                            <MdDoneOutline size={24} color="white" />
                        </div>
                    )}
                    <img alt="Single Opening" className='pb-5' src={Single} />
                    <label className='text-sm'>POCKET</label>
                </div>
                <div onClick={() => {
                    dispatch(setJacket({ backPocket: "with-btn" }))
                    dispatch(setRotation(Math.PI));
                }} className='flex relative flex-col items-center p-3 justify-center cursor-pointer rounded-lg border border-black-2  shadow'>
                    {backPocketSelected === 'with-btn' && (
                        <div className="absolute z-5 top-2 right-2">
                            <MdDoneOutline size={24} color="white" />
                        </div>
                    )}
                    <img alt="Double Opening" className='' src={Double} />
                    <label className='text-sm'>POCKET WITH BUTTON</label>
                </div>

            </div>

        </div>
    )
}

export default ChooseBackPocket