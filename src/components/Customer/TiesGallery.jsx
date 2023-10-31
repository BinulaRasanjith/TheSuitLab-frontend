import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getSpecificAccessories } from "../../api/accessoryAPI";
import { TIE } from "../../constants";
import AccessoryCard from "./AccessoryCard"


const TiesGallery = () => {

    const [tieData, setTieData] = useState([]); // Create state variable for shoe data

    useEffect(() => {

        getSpecificAccessories({ accessoryType: TIE })
            .then((response) => {
                setTieData(response.data.map((tie) => tie));
                // console.log(shoeData);
            })
            .catch((error) => {
                console.log(error);
            }
            );
    }, [tieData]);


    return (
        <div className="flex items-start justify-around flex-wrap bg-gray-100 p-5 w-full overflow-y-auto h-full">
            {tieData.length === 0 ? (<p className="flex items-center justify-center m-auto">No Available Data</p>) : (tieData.map((tie) => (
                <Link
                    key={tie.itemId}
                    to={`${tie.itemId}`}
                    className="block curser-pointer"
                >
                    <AccessoryCard image={tie.image[0]} label={tie.itemName} item="Accessory" />
                </Link>
            )))}
        </div>
    )
}

export default TiesGallery;