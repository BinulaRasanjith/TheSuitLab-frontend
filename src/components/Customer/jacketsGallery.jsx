import { Link } from "react-router-dom";

import { getHireCostumes } from "../../api/hireCostumesAPI";
import AccessoryCard from "./AccessoryCard"; // Import Link from React Router
import { useEffect, useState } from "react";

import { AVAILABLE, JACKET } from "../../constants";

const JacketsGallery = () => {
	const [jacketData, setJacketData] = useState([]); // Create state variable for jacket data

	useEffect(() => {
		getHireCostumes({ costumeType: JACKET, rentStatus: AVAILABLE })
			.then((response) => {
				setJacketData(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				// TODO: Handle error
				console.log(error);
			});
	}, []);

	return (
		<div className="flex items-start flex-wrap gap-4 bg-gray-100 p-5 w-full overflow-y-auto h-screen">

			{jacketData.length === 0 ? (<p className="flex items-center justify-center m-auto">No Available Data</p>) : (jacketData.map((jacket) => (
				<Link
					key={jacket.itemId}
					to={`${jacket.itemId}`}
					className="block curser-pointer"
				>
					<AccessoryCard image={jacket.image[0]} label={jacket.itemName} item="Hire-Costume" price={jacket.price} status={jacket.status} brand="" />
				</Link>
			)))}
		</div>
	);
};

export default JacketsGallery;
