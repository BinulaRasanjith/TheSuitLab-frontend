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

	// State to track sorting order
	const [sortOrder, setSortOrder] = useState('');

	// Function to toggle sorting order
	const toggleSortOrder = () => {
		const newSortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending';
		setSortOrder(newSortOrder);
	};


	// Automatically sort the array when the sorting order changes
	useEffect(() => {
		const sortedItems = [...jacketData]; // Create a copy of the original array to avoid mutation
		if (sortOrder === 'ascending') {
			sortedItems.sort((a, b) => a.price - b.price); // Ascending order
		} else if (sortOrder === 'descending') {
			sortedItems.sort((a, b) => b.price - a.price); // Descending order
		} else {
			// Do nothing
		}
		setJacketData(sortedItems); // Update the state with the sorted array
	}, [sortOrder]);

	return (
		<div className="flex flex-col w-full">

			<div className="p-4">
				<label>Sort Order:</label>
				<select onChange={toggleSortOrder} value={sortOrder}>
					<option value="ascending">Ascending</option>
					<option value="descending">Descending</option>
				</select>
			</div>
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
		</div>
	);
};

export default JacketsGallery;
