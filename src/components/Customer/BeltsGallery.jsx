import BeltThree from '../../assets/images/belts/belt 3 1.png'
import BeltFour from '../../assets/images/belts/belt 4 1.png'
import BeltSix from '../../assets/images/belts/belt 6 1.png'
import BeltSeven from '../../assets/images/belts/belt 7 1.png'
import BlackBeltOne from '../../assets/images/belts/black belt 1.png'
import BrownBeltOne from '../../assets/images/belts/brown belt 1.png'
import AccessoryCard from "./AccessoryCard"

const BeltsGallery = () => {
    return (
        <div className="flex items-start flex-wrap gap-4 bg-gray-200 p-5 overflow-y-auto h-screen">
            <AccessoryCard image={BeltThree} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={BeltFour} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={BeltSix} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={BeltSeven} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={BlackBeltOne} label="Micro Adjustable Belt" />
            <AccessoryCard image={BrownBeltOne} label="Genuine Leather Dress Belt" />

        </div>
    )
}

export default BeltsGallery