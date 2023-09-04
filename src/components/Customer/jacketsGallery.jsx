import jacket1 from '../../assets/images/rentsuits/black suit/1.webp'
import jacket2 from '../../assets/images/rentsuits/black paisley suit/1.webp'
import jacket3 from '../../assets/images/rentsuits/burgandy strech/1.webp'
import jacket4 from '../../assets/images/rentsuits/burgundy suit/1.webp'
import jacket5 from '../../assets/images/rentsuits/cafe brown suit/1.webp'
import jacket6 from '../../assets/images/rentsuits/caremal suit/1.webp'
import jacket7 from '../../assets/images/rentsuits/white palma suit/1.webp'
import jacket8 from '../../assets/images/rentsuits/cobolt blue suit/1.webp'
import jacket9 from '../../assets/images/rentsuits/dark blue suit/1.webp'
import jacket10 from '../../assets/images/rentsuits/green slim suit/1.webp'
import jacket11 from '../../assets/images/rentsuits/dark green/1.webp'
import jacket12 from '../../assets/images/rentsuits/light brown suit/1.webp'
import jacket13 from '../../assets/images/rentsuits/marine blue suit/1.webp'
import jacket14 from '../../assets/images/rentsuits/maroon suit/1.webp'
import jacket15 from '../../assets/images/rentsuits/rose pink venice suit/1.webp'
import jacket16 from '../../assets/images/rentsuits/white n black suit/1.webp'
import jacket17 from '../../assets/images/rentsuits/green suit/1.webp'


import AccessoryCard from "./AccessoryCard"
import { Link, useParams } from 'react-router-dom'; // Import Link from React Router


const jacketData = [
    { id: 1, image: jacket1, label: "Clarks Men's Tilden Cap Oxford", to: "1" },    // "/hire-suit/:suitId" format
    { id: 2, image: jacket2, label: "Tuxedo Shoe Slip-on Classic Patent Leather Loafers", to: "2" },
    { id: 3, image: jacket3, label: "Plain Toe Genuine Leather Dress Shoes", to: "3" },
    { id: 4, image: jacket4, label: "Clarks Men's Tilden Cap Oxford", to: "4" },
    { id: 5, image: jacket5, label: "Plain Toe Genuine Leather Dress Shoes", to: "5" },
    { id: 6, image: jacket6, label: "Clarks Men's Tilden Cap Oxford", to: "6" },
    { id: 7, image: jacket7, label: "Tuxedo Shoe Slip-on Classic Patent Leather Loafers", to: "7" },
    { id: 8, image: jacket8, label: "Plain Toe Genuine Leather Dress Shoes", to: "8" },
    { id: 9, image: jacket8, label: "Plain Toe Genuine Leather Dress Shoes", to: "9" },
    { id: 10, image: jacket8, label: "Plain Toe Genuine Leather Dress Shoes", to: "10" },
    { id: 11, image: jacket8, label: "Plain Toe Genuine Leather Dress Shoes", to: "11" },
    { id: 12, image: jacket8, label: "Plain Toe Genuine Leather Dress Shoes", to: "12" },
    { id: 13, image: jacket8, label: "Plain Toe Genuine Leather Dress Shoes", to: "13" },
    { id: 14, image: jacket8, label: "Plain Toe Genuine Leather Dress Shoes", to: "14" },
    { id: 15, image: jacket8, label: "Plain Toe Genuine Leather Dress Shoes", to: "15" },
    { id: 16, image: jacket8, label: "Plain Toe Genuine Leather Dress Shoes", to: "16" },

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


