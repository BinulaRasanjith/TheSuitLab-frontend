import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getHireCostumes } from "../../api/hireCostumesAPI";
import { AVAILABLE, PANT } from "../../constants";
import AccessoryCard from "./AccessoryCard"





const PantsGallery = () => {

    const [pantData, setPantData] = useState([]); // Create state variable for jacket data

    useEffect(() => {
        getHireCostumes({ costumeType: PANT, rentStatus: AVAILABLE })
            .then((response) => {
                setPantData(response.data.map((pant) => pant));
            })
            .catch((error) => {
                // TODO: Handle error
                console.log(error);
            });
    }, [pantData]);

    return (
        <div className="flex items-start flex-wrap gap-4 bg-gray-100 p-5 w-full overflow-y-auto h-screen">

            {pantData.length === 0 ? (
                <p className="flex items-center justify-center m-auto">No Available Data</p>
            ) : (
                pantData.map((pant) => (
                    <Link key={pant.itemId} to={`${pant.itemId}`} className="block cursor-pointer">
                        <AccessoryCard image={pant.images[0]} label={pant.name} />
                    </Link>
                ))
            )}
        </div>
    )
}

export default PantsGallery

