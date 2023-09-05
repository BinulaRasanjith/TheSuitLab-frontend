import ShoeOne from '../../assets/images/shoes/shoe1 1.png'
import ShoeTwo from '../../assets/images/shoes/shoe2 1.png'
import ShoeThree from '../../assets/images/shoes/shoe3 1.png'
import ShoeFour from '../../assets/images/shoes/shoe4 1.png'
import ShoeFive from '../../assets/images/shoes/shoe5 1.png'
import ShoeSix from '../../assets/images/shoes/shoe6 1.png'
import AccessoryCard from "./AccessoryCard"

const PantsGallery = () => {
    return (
        <div className="flex items-start flex-wrap gap-4 bg-gray-200 p-5 overflow-y-auto h-screen">
            <AccessoryCard image={ShoeOne} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={ShoeTwo} label="Tuxedo Shoe Slip-on Classic Patent Leather Loafers" />
            <AccessoryCard image={ShoeThree} label="Plain Toe Genuine Leather Dress Shoes" />
            <AccessoryCard image={ShoeFour} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={ShoeFive} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={ShoeSix} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={ShoeOne} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={ShoeTwo} label="Tuxedo Shoe Slip-on Classic Patent Leather Loafers" />
            <AccessoryCard image={ShoeThree} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={ShoeThree} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={ShoeFour} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={ShoeFive} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={ShoeSix} label="Clarks Men's Tilden Cap Oxford" />
        </div>
    )
}

export default PantsGallery

