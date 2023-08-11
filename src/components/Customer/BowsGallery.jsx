import BowOne from '../../assets/images/bows/bow 1 1.png'
import BowTwo from '../../assets/images/bows/bow 2 1.png'
import BowThree from '../../assets/images/bows/bow 3 1.png'
import BowFour from '../../assets/images/bows/bow 4 1.png'
import BowFive from '../../assets/images/bows/bow 5 1.png'
import BowSix from '../../assets/images/bows/bow 6 1.png'
import AccessoryCard from "./AccessoryCard"


const BowsGallery = () => {
    return (
        <div className="flex items-start flex-wrap gap-4 bg-gray-200 p-5 overflow-y-auto h-screen">
            <AccessoryCard image={BowOne} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={BowTwo} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={BowThree} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={BowFour} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={BowFive} label="Micro Adjustable Belt" />
            <AccessoryCard image={BowSix} label="Genuine Leather Dress Belt" />

        </div>
    )
}

export default BowsGallery