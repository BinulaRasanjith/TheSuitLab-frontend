import solid_green_texture from '../../assets/images/fabrics/solid/soild - green texture.jpg'
import solid_textured_grey from '../../assets/images/fabrics/solid/solid -  textured grey.jpg'
import solid_black_suit from '../../assets/images/fabrics/solid/solid - black suit.jpg'
import solid_brown_suit from '../../assets/images/fabrics/solid/solid - brown suit.jpg'
import solid_brown_texture from '../../assets/images/fabrics/solid/solid - brown texture.jpg'
import solid_dark_chocolate from '../../assets/images/fabrics/solid/solid - dark chocolate.jpg'
import solid_dark_navy from '../../assets/images/fabrics/solid/solid - dark navy.jpg'
import solid_grey_suit from '../../assets/images/fabrics/solid/solid - grey suit.jpg'
import solid_ligght_navy from '../../assets/images/fabrics/solid/solid - ligght navy.jpg'
import solid_light_khaki_texture from '../../assets/images/fabrics/solid/solid - light khaki texture.jpg'

const Materials_SolidColors = () => {
    return (
        <div className='p-3 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-r-4 border-gray-400 overflow-y-auto h-screen'>

            <button><img alt="" className='h-20 w-24' src={solid_black_suit} /></button>
            <button><img alt="" className='h-20 w-24' src={solid_brown_suit} /></button>
            <button><img alt="" className='h-20 w-24' src={solid_brown_texture} /></button>
            <button><img alt="" className='h-20 w-24' src={solid_dark_chocolate} /></button>
            <button><img alt="" className='h-20 w-24' src={solid_dark_navy} /></button>
            <button><img alt="" className='h-20 w-24' src={solid_green_texture} /></button>
            <button><img alt="" className='h-20 w-24' src={solid_grey_suit} /></button>
            <button><img alt="" className='h-20 w-24' src={solid_ligght_navy} /></button>
            <button><img alt="" className='h-20 w-24' src={solid_light_khaki_texture} /></button>
            <button><img alt="" className='h-20 w-24' src={solid_textured_grey} /></button>

        </div>
    )
}

export default Materials_SolidColors