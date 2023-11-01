import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getSpecificAccessories } from "../../api/accessoryAPI";
import { BELT } from "../../constants";
import AccessoryCard from "./AccessoryCard"
const BeltsGallery = () => {

    const [beltData, setBeltData] = useState([]); // Create state variable for shoe data

    useEffect(() => {

        getSpecificAccessories({ accessoryType: BELT })
            .then((response) => {
                setBeltData(response.data.map((tie) => tie));
                // console.log(shoeData);
            })
            .catch((error) => {
                console.log(error);
            }
            );
    }, [beltData]);

    return (
        <div className="flex items-start justify-around flex-wrap bg-gray-100 p-5 w-full overflow-y-auto h-full">
            {beltData.length === 0 ? (<p className="flex items-center justify-center m-auto">No Available Data</p>) : (beltData.map((belt) => (
                <Link
                    key={belt.itemId}
                    to={`${belt.itemId}`}
                    className="block curser-pointer"
                >
                    <AccessoryCard image={belt.image[0]} label={belt.itemName} item="Accessory" />
                </Link>
            )))}
        </div>
    )
}

export default BeltsGallery