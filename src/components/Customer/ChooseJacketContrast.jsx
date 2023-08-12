import Foursevenonesevensix from '../../assets/images/colours/4717-6.png'
import Foursevenfourzeroone from '../../assets/images/colours/4740-1.png'
import None from '../../assets/images/colours/None.png'
import blue_texture_1 from '../../assets/images/materials/blue texture 1.png'
import blue_texture_2 from '../../assets/images/materials/blue texture 2.png'
import brown_suit_1 from '../../assets/images/materials/brown suit 1.png'
import brown_texture_1 from '../../assets/images/materials/brown texture 1.png'
import brown_texture_2 from '../../assets/images/materials/brown texture 2.png'
import charcol_texture_1 from '../../assets/images/materials/charcol texture 1.png'
import dark_blue_1 from '../../assets/images/materials/dark blue 1.png'
import dark_blue_2 from '../../assets/images/materials/dark blue 2.png'
import dark_chocolate_1 from '../../assets/images/materials/dark chocolate 1.png'
import dark_khaki_texture_1 from '../../assets/images/materials/dark khaki texture 1.png'
import green_texture_1 from '../../assets/images/materials/green texture 1.png'
import grey_texture_1 from '../../assets/images/materials/grey texture 1.png'
import gray_texture_2 from '../../assets/images/materials/grey texture 2.png'
import khaki_texture_1 from '../../assets/images/materials/khaki texture 1.png'
import light_khaki_texture_1 from '../../assets/images/materials/light khaki texture 1.png'
import light_olive_1 from '../../assets/images/materials/light olive 1.png'
import midnight_gray_1 from '../../assets/images/materials/midnight grey 1.png'
import navy_suit_1 from '../../assets/images/materials/navy suit 1.png'
import purple_texture_1 from '../../assets/images/materials/purple texture 1.png'
import wool_navy_1 from '../../assets/images/materials/wool navy 1.png'
import CustomCheckbox from './CustomCheckBox'




const ChooseJacketContrast = () => {

    return (
        <div className='flex flex-col overflow-y-auto h-screen gap-y-5 border-r-2 border-gray-400'>
            <div className="flex flex-col items-start">
                <span className="p-5 text-xl sm:text-2xl font-bold">Choose Your Jacket Contrast</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-5">
                    <CustomCheckbox label="Lapels" />

                    <CustomCheckbox label="Chest Pocket" />

                    <CustomCheckbox label="Pockets" />

                    <CustomCheckbox label="Elbow" />
                </div>
            </div>
            <div className='flex flex-col'>
                <span className="p-5 text-xl sm:text-2xl font-bold">Choose Your Contrast Fabrics</span>
                <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-5 gap-x-5'>

                    <button><img alt="" src={None} /></button>
                    <button><img alt="" src={Foursevenonesevensix} /></button>
                    <button><img alt="" src={Foursevenfourzeroone} /></button>
                    <button><img alt="" src={blue_texture_1} /></button>
                    <button><img alt="" src={blue_texture_2} /></button>
                    <button><img alt="" src={brown_texture_1} /></button>
                    <button><img alt="" src={charcol_texture_1} /></button>
                    <button><img alt="" src={dark_blue_1} /></button>
                    <button><img alt="" src={dark_blue_2} /></button>
                    <button><img alt="" src={dark_chocolate_1} /></button>
                    <button><img alt="" src={brown_texture_2} /></button>
                    <button><img alt="" src={grey_texture_1} /></button>
                    <button><img alt="" src={gray_texture_2} /></button>
                    <button><img alt="" src={midnight_gray_1} /></button>
                    <button><img alt="" src={navy_suit_1} /></button>
                    <button><img alt="" src={wool_navy_1} /></button>
                    <button><img alt="" src={brown_suit_1} /></button>
                    <button><img alt="" src={purple_texture_1} /></button>
                    <button><img alt="" src={light_khaki_texture_1} /></button>
                    <button><img alt="" src={light_olive_1} /></button>
                    <button><img alt="" src={khaki_texture_1} /></button>
                    <button><img alt="" src={green_texture_1} /></button>
                    <button><img alt="" src={dark_khaki_texture_1} /></button>

                </div>
            </div>
        </div>
    )
}

export default ChooseJacketContrast