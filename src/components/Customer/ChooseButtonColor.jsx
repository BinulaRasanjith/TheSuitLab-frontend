
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import None from '../../assets/images/button_colors/None.png'
import black_button from '../../assets/images/button_colors/black.png'
import brown_button from '../../assets/images/button_colors/brown.png'
import deep_brown_button from '../../assets/images/button_colors/deep brown.png'
import light_khaki_button from '../../assets/images/button_colors/light khaki.png'
import maroon_button from '../../assets/images/button_colors/maroon.png'
import navy_button from '../../assets/images/button_colors/navy.png'
import pearl_white_button from '../../assets/images/button_colors/pearl white.png'
import purple_button from '../../assets/images/button_colors/purple.png'
import silver_button from '../../assets/images/button_colors/silver.png'
import sky_blue_button from '../../assets/images/button_colors/sky blue.png'
import white_button from '../../assets/images/button_colors/white.png'
import { setJacket } from "../../store/slices/jacketCustomizationSlice"
import { setRotation } from "../../store/slices/rotationHandleSlice"


const ChooseButtonColor = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    return (
        <div className='flex flex-col'>
            <span className="p-5 text-2xl font-bold">Choose Button Colors</span>
            <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5'>
                <button onClick={() => {
                    dispatch(setJacket({ buttonColor: 'none' }))
                    if (location.pathname.includes('pant')) {
                        dispatch(setRotation(Math.PI));
                    } else {
                        dispatch(setRotation(2 * Math.PI));
                    }
                }}>
                    <img alt="" className="pb-3 h-24" src={None} />
                </button>
                <button onClick={() => {
                    dispatch(setJacket({ buttonColor: 'black' }))
                    if (location.pathname.includes('pant')) {
                        dispatch(setRotation(Math.PI));
                    } else {
                        dispatch(setRotation(2 * Math.PI));
                    }
                }}><img alt="" className='h-20 w-24' src={black_button} /></button>
                <button onClick={() => {
                    dispatch(setJacket({ buttonColor: 'brown' }))
                    if (location.pathname.includes('pant')) {
                        dispatch(setRotation(Math.PI));
                    } else {
                        dispatch(setRotation(2 * Math.PI));
                    }
                }}><img alt="" className='h-20 w-24' src={brown_button} /></button>
                <button onClick={() => {
                    dispatch(setJacket({ buttonColor: 'deepBrown' }))
                    if (location.pathname.includes('pant')) {
                        dispatch(setRotation(Math.PI));
                    } else {
                        dispatch(setRotation(2 * Math.PI));
                    }
                }}><img alt="" className='h-20 w-24' src={deep_brown_button} /></button>
                <button onClick={() => {
                    dispatch(setJacket({ buttonColor: 'lightKhaki' }))
                    if (location.pathname.includes('pant')) {
                        dispatch(setRotation(Math.PI));
                    } else {
                        dispatch(setRotation(2 * Math.PI));
                    }
                }}><img alt="" className='h-20 w-24' src={light_khaki_button} /></button>
                <button onClick={() => {
                    dispatch(setJacket({ buttonColor: 'maroon' }))
                    if (location.pathname.includes('pant')) {
                        dispatch(setRotation(Math.PI));
                    } else {
                        dispatch(setRotation(2 * Math.PI));
                    }
                }}><img alt="" className='h-20 w-24' src={maroon_button} /></button>
                <button onClick={() => {
                    dispatch(setJacket({ buttonColor: 'navy' }))
                    if (location.pathname.includes('pant')) {
                        dispatch(setRotation(Math.PI));
                    } else {
                        dispatch(setRotation(2 * Math.PI));
                    }
                }}><img alt="" className='h-20 w-24' src={navy_button} /></button>
                <button onClick={() => {
                    dispatch(setJacket({ buttonColor: 'pearlWhite' }))
                    if (location.pathname.includes('pant')) {
                        dispatch(setRotation(Math.PI));
                    } else {
                        dispatch(setRotation(2 * Math.PI));
                    }
                }}><img alt="" className='h-20 w-24' src={pearl_white_button} /></button>
                <button onClick={() => {
                    dispatch(setJacket({ buttonColor: 'purple' }))
                    if (location.pathname.includes('pant')) {
                        dispatch(setRotation(Math.PI));
                    } else {
                        dispatch(setRotation(2 * Math.PI));
                    }
                }}><img alt="" className='h-20 w-24' src={purple_button} /></button>
                <button onClick={() => {
                    dispatch(setJacket({ buttonColor: 'silver' }))
                    if (location.pathname.includes('pant')) {
                        dispatch(setRotation(Math.PI));
                    } else {
                        dispatch(setRotation(2 * Math.PI));
                    }
                }}><img alt="" className='h-20 w-24' src={silver_button} /></button>
                <button onClick={() => {
                    dispatch(setJacket({ buttonColor: 'skyBlue' }))
                    if (location.pathname.includes('pant')) {
                        dispatch(setRotation(Math.PI));
                    } else {
                        dispatch(setRotation(2 * Math.PI));
                    }
                }}><img alt="" className='h-20 w-24' src={sky_blue_button} /></button>
                <button onClick={() => {
                    dispatch(setJacket({ buttonColor: 'white' }))
                    if (location.pathname.includes('pant')) {
                        dispatch(setRotation(Math.PI));
                    } else {
                        dispatch(setRotation(2 * Math.PI));
                    }
                }}><img alt="" className='h-20 w-24' src={white_button} /></button>

            </div>
        </div>
    )
}

export default ChooseButtonColor