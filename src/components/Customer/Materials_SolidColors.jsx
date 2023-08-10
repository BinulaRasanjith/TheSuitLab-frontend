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

const Materials_SolidColors = () => {
    return (
        <div className='mt-5 p-3 grid grid-cols-4 gap-y-5 gap-x-9 border-r-4 border-gray-400'>

            <button><img alt="" className='h-24 w-28' src={blue_texture_1} /></button>
            <button><img alt="" className='h-24 w-28' src={blue_texture_2} /></button>
            <button><img alt="" className='h-24 w-28' src={brown_texture_1} /></button>
            <button><img alt="" className='h-24 w-28' src={charcol_texture_1} /></button>
            <button><img alt="" className='h-24 w-28' src={dark_blue_1} /></button>
            <button><img alt="" className='h-24 w-28' src={dark_blue_2} /></button>
            <button><img alt="" className='h-24 w-28' src={dark_chocolate_1} /></button>
            <button><img alt="" className='h-24 w-28' src={brown_texture_2} /></button>
            <button><img alt="" className='h-24 w-28' src={grey_texture_1} /></button>
            <button><img alt="" className='h-24 w-28' src={gray_texture_2} /></button>
            <button><img alt="" className='h-24 w-28' src={midnight_gray_1} /></button>
            <button><img alt="" className='h-24 w-28' src={navy_suit_1} /></button>
            <button><img alt="" className='h-24 w-28' src={wool_navy_1} /></button>
            <button><img alt="" className='h-24 w-28' src={brown_suit_1} /></button>
            <button><img alt="" className='h-24 w-28' src={purple_texture_1} /></button>
            <button><img alt="" className='h-24 w-28' src={light_khaki_texture_1} /></button>
            <button><img alt="" className='h-24 w-28' src={light_olive_1} /></button>
            <button><img alt="" className='h-24 w-28' src={khaki_texture_1} /></button>
            <button><img alt="" className='h-24 w-28' src={green_texture_1} /></button>
            <button><img alt="" className='h-24 w-28' src={dark_khaki_texture_1} /></button>

        </div>
    )
}

export default Materials_SolidColors