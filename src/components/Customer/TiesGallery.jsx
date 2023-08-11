import Black_tie from '../../assets/images/ties/black_tie.png'
import Blue_tie from '../../assets/images/ties/blue_tie.png'
import Brown_tie from '../../assets/images/ties/brown_tie.png'
import Dark_Blue_tie from '../../assets/images/ties/dark_blue_tie.png'
import Green_tie from '../../assets/images/ties/green_tie.png'
import Red_tie from '../../assets/images/ties/red_tie.png'
import AccessoryCard from "./AccessoryCard"


const TiesGallery = () => {
    return (
        <div className="flex items-start flex-wrap gap-4 bg-gray-200 p-5 overflow-y-auto h-screen">
            <AccessoryCard image={Black_tie} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={Blue_tie} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={Brown_tie} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={Dark_Blue_tie} label="Clarks Men's Tilden Cap Oxford" />
            <AccessoryCard image={Green_tie} label="Micro Adjustable Belt" />
            <AccessoryCard image={Red_tie} label="Genuine Leather Dress Belt" />

        </div>
    )
}

export default TiesGallery