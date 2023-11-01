import { useDispatch, useSelector } from 'react-redux'

import StandardTwo from '../../assets/images/sleeve_button_styles/2-button-1.png'
import StandardOne from '../../assets/images/sleeve_button_styles/standard (1).png'
import Standard from '../../assets/images/sleeve_button_styles/standard.png'
import { setJacket, selectJacket } from "../../store/slices/jacketCustomizationSlice"
import { setRotation } from "../../store/slices/rotationHandleSlice"
import { MdDoneOutline } from "react-icons/md";

const ChooseSleeveButtons = () => {
    const dispatch = useDispatch();
    const sleeveButtonSelected = useSelector(selectJacket).sleeveButtons;

    return (
        <div className='my-5 px-5 '>
            <span className='p-5 text-2xl font-bold'>Choose your sleeve button</span>
            <div className='grid grid-cols-3 gap-6 mt-10'>

                <div onClick={() => {
                    dispatch(setJacket({ sleeveButtons: "2-standard" }))
                    dispatch(setRotation(Math.PI / 1.5))
                }} className='flex relative flex-col items-center p-2 justify-center cursor-pointer rounded-lg border border-black-2  shadow'>
                    {sleeveButtonSelected === '2-standard' && (
                        <div className="absolute z-5 top-2 right-2">
                            <MdDoneOutline size={24} color="black" />
                        </div>
                    )}
                    <img alt="" className="pb-3" src={StandardTwo} />
                    <label>5 STANDARD <br />BUTTONS</label>
                </div>
                <div onClick={() => {
                    dispatch(setJacket({ sleeveButtons: "3-standard" }))
                    dispatch(setRotation(Math.PI / 1.5))
                }} className='flex relative flex-col items-center p-8 justify-center cursor-pointer rounded-lg border border-black-2  shadow'>
                    {sleeveButtonSelected === '3-standard' && (
                        <div className="absolute z-5 top-2 right-2">
                            <MdDoneOutline size={24} color="black" />
                        </div>
                    )}
                    <img alt="" className="pb-3" src={Standard} />
                    <label>3 STANDARD <br />BUTTONS</label>
                </div>
                <div onClick={() => {
                    dispatch(setJacket({ sleeveButtons: "4-standard" }))
                    dispatch(setRotation(Math.PI / 1.5))
                }} className='flex relative flex-col items-center p-8 justify-center cursor-pointer rounded-lg border border-black-2  shadow'>
                    {sleeveButtonSelected === '4-standard' && (
                        <div className="absolute z-5 top-2 right-2">
                            <MdDoneOutline size={24} color="black" />
                        </div>
                    )}
                    <img alt="" className="pb-3" src={StandardOne} />
                    <label>4 STANDARD <br />BUTTONS</label>
                </div>

            </div>
        </div>
    )
}

export default ChooseSleeveButtons