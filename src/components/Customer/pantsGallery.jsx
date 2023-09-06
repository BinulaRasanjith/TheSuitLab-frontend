import pant1 from '../../assets/images/rentsuits/pants/burgandy strech.webp'
import pant2 from '../../assets/images/rentsuits/pants/white suit.webp'
import pant3 from '../../assets/images/rentsuits/pants/cafe brown suit.webp'
import pant4 from '../../assets/images/rentsuits/pants/caramel suit.webp'
import pant5 from '../../assets/images/rentsuits/pants/cobalt blue.webp'
import pant6 from '../../assets/images/rentsuits/pants/dark blue.webp'
import pant7 from '../../assets/images/rentsuits/pants/black suit.webp'
import pant8 from '../../assets/images/rentsuits/pants/black paisley suit.webp'
import pant9 from '../../assets/images/rentsuits/pants/rose pink.webp'
import pant10 from '../../assets/images/rentsuits/pants/green slim suit.webp'
import AccessoryCard from "./AccessoryCard"

const PantsGallery = () => {
    return (
        <div className="flex items-start flex-wrap gap-4 bg-gray-200 p-5 overflow-y-auto h-screen">
            <AccessoryCard image={pant1} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={pant2} label="Tuxedo  Slip-on Classic Patent Leather Loafers" />
            <AccessoryCard image={pant3} label="Plain Toe Genuine Leather Dress " />
            <AccessoryCard image={pant4} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={pant5} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={pant6} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={pant7} label="Plain Toe Genuine Leather Dress " />
            <AccessoryCard image={pant8} label="Plain Leather Dress Pant" />
            <AccessoryCard image={pant9} label="Plain Toe Genuine Leather Dress " />
            <AccessoryCard image={pant10} label="Plain Toe Genuine Leather Dress " />

            {/* <AccessoryCard image={ShoeOne} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={ShoeTwo} label="Tuxedo Shoe Slip-on Classic Patent Leather Loafers" />
            <AccessoryCard image={ShoeThree} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={ShoeThree} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={ShoeFour} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={ShoeFive} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={ShoeSix} label="Clarks Men's Tilden Cap Oxford" /> */}

        </div>
    )
}

export default PantsGallery

