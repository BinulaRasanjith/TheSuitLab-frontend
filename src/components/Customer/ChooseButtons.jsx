import { useDispatch } from "react-redux"

import oneButton from "../../assets/images/button_styles/1Button.png"
import twoButton from "../../assets/images/button_styles/2Button.png"
import fourDTwo from "../../assets/images/button_styles/4D2.png"
import sixDThree from "../../assets/images/button_styles/6D3.png"
import { setJacket } from "../../store/slices/jacketCustomizationSlice"
import { setRotation } from "../../store/slices/rotationHandleSlice"

const ChooseButtons = () => {
    const dispatch = useDispatch()

    return (
        <div className="flex my-5 flex-col px-3">
            <span className="p-5 text-2xl font-bold">Choose Your Buttons</span>
            <div className="grid grid-cols-3 gap-x-8 ">
                <div onClick={() => {
                    dispatch(setJacket({ button: '1S' }))
                    dispatch(setRotation(2 * Math.PI));
                }} className="flex flex-col p-3 items-center cursor-pointer rounded-lg border border-black-2 shadow">
                    <img alt="" className="pb-3" src={oneButton} />
                    <label className="text-sm">1 BUTTON,SINGLE <br />BREASTED</label>
                </div>
                <div onClick={() => {
                    dispatch(setJacket({ button: '2S' }))
                }} className="flex flex-col p-3 items-center cursor-pointer rounded-lg border border-black-2 shadow">
                    <img alt="" className="pb-3" src={twoButton} />
                    <label className="text-sm">2 BUTTONS,SINGLE <br />BREASTED</label>
                </div>

                <div onClick={() =>
                    dispatch(setJacket({ button: '4D2' }))
                } className="flex flex-col p-3 items-center cursor-pointer rounded-lg border border-black-2 shadow">
                    <img alt="" className="pb-3" src={fourDTwo} />
                    <label className="text-sm">4 BUTTONs,DOUBLE <br />BREASTED (2 TO)</label>
                </div>

                <div onClick={() =>
                    dispatch(setJacket({ button: '6D3' }))
                } className="flex flex-col p-3 items-center cursor-pointer rounded-lg border border-black-2  shadow">
                    <img alt="" className="pb-3" src={sixDThree} />
                    <label className="text-sm">6 BUTTONs,DOUBLE <br />BREASTED (3 TO)</label>
                </div>
            </div>
        </div>
    )
}

export default ChooseButtons