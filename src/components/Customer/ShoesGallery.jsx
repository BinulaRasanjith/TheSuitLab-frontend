import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getSpecificAccessories } from "../../api/accessoryAPI";
import { SHOE } from "../../constants";
import AccessoryCard from "./AccessoryCard"


const ShoesGallery = () => {

    const [shoeData, setShoeData] = useState([]); // Create state variable for shoe data

    useEffect(() => {

        getSpecificAccessories({ accessoryType: SHOE })
            .then((response) => {
                console.log(response.data);
                setShoeData(response.data);
            })
            .catch((error) => {
                console.log(error);
            }
            );
    }, []);


    return (
        <div className="flex items-start justify-around flex-wrap bg-gray-100 p-5 w-full overflow-y-auto h-full">
            {shoeData.length === 0 ? (<p className="flex items-center justify-center m-auto">No Available Data</p>) : (shoeData.map((shoe) => (
                <Link
                    key={shoe.itemId}
                    to={`${shoe.itemId}`}
                    className="block curser-pointer"
                >
                    <AccessoryCard image={shoe.image[0]} label={shoe.itemName} item="Accessory" brand={shoe.brand} price={shoe.price} status={shoe.status} />
                </Link>
            )))}
        </div>
    )
}

export default ShoesGallery

