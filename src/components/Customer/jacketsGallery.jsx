import { Link } from "react-router-dom";

import { getHireCostumes } from "../../api/hireCostumesAPI";
import AccessoryCard from "./AccessoryCard"; // Import Link from React Router
import { useEffect, useState } from "react";

import { AVAILABLE, JACKET } from "../../constants";

const JacketsGallery = () => {
	const [jacketData, setJacketData] = useState([]); // Create state variable for jacket data

	useEffect(() => {
		getHireCostumes({ costumeType: JACKET, status: AVAILABLE })
			.then((response) => {
				setJacketData(response.data.map((jacket) => jacket));
			})
			.catch((error) => {
				// TODO: Handle error
				console.log(error);
			});
	}, [jacketData]);

	return (
		<div className="flex items-start flex-wrap gap-4 bg-gray-100 p-5 w-full overflow-y-auto h-screen">
			{jacketData.map((jacket) => (
				<Link
					key={jacket.hireCostumeId}
					to={`${jacket.hireCostumeId}`}
					className="block"
				>
					<AccessoryCard image={jacket.images[0]} label={jacket.name} />
				</Link>
			))}
		</div>
	);
};

export default JacketsGallery;
