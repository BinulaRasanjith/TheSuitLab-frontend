import ShoeOne from '../../assets/images/shoes/shoe1 1.png'
import ShoeTwo from '../../assets/images/shoes/shoe2 1.png'
import ShoeThree from '../../assets/images/shoes/shoe3 1.png'
import ShoeFour from '../../assets/images/shoes/shoe4 1.png'
import ShoeFive from '../../assets/images/shoes/shoe5 1.png'
import ShoeSix from '../../assets/images/shoes/shoe6 1.png'
import AccessoryCard from "./AccessoryCard"
import { Link, useParams } from 'react-router-dom'; // Import Link from React Router


const jacketData = [
    { id: 1, image: ShoeOne, label: "Clarks Men's Tilden Cap Oxford", to: "1" },    // "/hire-suit/:suitId" format
    { id: 2, image: ShoeTwo, label: "Tuxedo Shoe Slip-on Classic Patent Leather Loafers", to: "2" },
    { id: 3, image: ShoeThree, label: "Plain Toe Genuine Leather Dress Shoes", to: "3" },
    { id: 4, image: ShoeFour, label: "Clarks Men's Tilden Cap Oxford", to: "4" },
    { id: 5, image: ShoeFive, label: "Plain Toe Genuine Leather Dress Shoes", to: "5" },
    { id: 6, image: ShoeSix, label: "Clarks Men's Tilden Cap Oxford", to: "6" },
];

const JacketsGallery = () => {

    const { suitId } = useParams();

    return (
        <div className="flex items-start flex-wrap gap-4 bg-gray-200 p-5 overflow-y-auto h-screen">
            {jacketData.map((jacket) => (
                <Link key={jacket.id} to={`${jacket.to}`} className='block'>
                    <AccessoryCard image={jacket.image} label={jacket.label} />
                </Link>
            ))}
        </div>
    );
}
export default JacketsGallery


