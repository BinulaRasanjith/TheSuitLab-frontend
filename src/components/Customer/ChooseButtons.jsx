import oneButton from "../../assets/images/button_styles/1Button.png"
import twoButton from "../../assets/images/button_styles/2Button.png"
import threeButton from "../../assets/images/button_styles/3Button.png"
import fourButton from "../../assets/images/button_styles/4Button.png"
import fourDOne from "../../assets/images/button_styles/4D1.png"
import fourDTwo from "../../assets/images/button_styles/4D2.png"
import sixDOne from "../../assets/images/button_styles/6D1.png"
import sixDTwo from "../../assets/images/button_styles/6D2.png"
import sixDThree from "../../assets/images/button_styles/6D3.png"

const ChooseButtons = () => {

    return (
        <div className="flex my-5 flex-col px-3">
            <span className="p-5 text-2xl font-bold">Choose Your Buttons</span>
            <div className="grid grid-cols-3 gap-x-8 ">
                <div className="flex flex-col p-3 items-center">
                    <img alt="" className="pb-3" src={oneButton} />
                    <label className="text-sm">1 BUTTON,SINGLE <br />BREASTED</label>
                </div>
                <div className="flex flex-col p-3 items-center">
                    <img alt="" className="pb-3" src={twoButton} />
                    <label className="text-sm">2 BUTTONS,SINGLE <br />BREASTED</label>
                </div>
                <div className="flex flex-col p-3 items-center">
                    <img alt="" className="pb-3" src={threeButton} />
                    <label className="text-sm">3 BUTTONS,SINGLE <br />BREASTED</label>
                </div>
                <div className="flex flex-col p-3 items-center">
                    <img alt="" className="pb-3" src={fourButton} />
                    <label className="text-sm">4 BUTTONS,SINGLE <br />BREASTED</label>
                </div>
                <div className="flex flex-col p-3 items-center">
                    <img alt="" className="pb-3" src={fourDOne} />
                    <label className="text-sm">4 BUTTONs,DOUBLE <br />BREASTED (1 TO)</label>
                </div>
                <div className="flex flex-col p-3 items-center">
                    <img alt="" className="pb-3" src={fourDTwo} />
                    <label className="text-sm">4 BUTTONs,DOUBLE <br />BREASTED (2 TO)</label>
                </div>
                <div className="flex flex-col p-3 items-center">
                    <img alt="" className="pb-3" src={sixDOne} />
                    <label className="text-sm">6 BUTTONs,DOUBLE <br />BREASTED (1 TO)</label>
                </div>
                <div className="flex flex-col p-3 items-center">
                    <img alt="" className="pb-3" src={sixDTwo} />
                    <label className="text-sm">6 BUTTONs,DOUBLE <br />BREASTED (2 TO)</label>
                </div>
                <div className="flex flex-col p-3 items-center">
                    <img alt="" className="pb-3" src={sixDThree} />
                    <label className="text-sm">6 BUTTONs,DOUBLE <br />BREASTED (3 TO)</label>
                </div>
            </div>
        </div>
    )
}

export default ChooseButtons