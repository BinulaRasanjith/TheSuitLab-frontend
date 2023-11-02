import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getHireCostumes } from "../../api/hireCostumesAPI";
import { AVAILABLE, PANT } from "../../constants";
import AccessoryCard from "./AccessoryCard";

const PantsGallery = () => {
	const [pantData, setPantData] = useState([]); // Create state variable for jacket data

	useEffect(() => {
		// getHireCostumes({ costumeType: PANT })
		// 	.then((response) => {
		// 		setPantData(response.data);
		// 	})
		// 	.catch((error) => {
		// 		// TODO: Handle error
		// 		console.log(error);
		// 	});
		getHireCostumes({ costumeType: PANT, rentStatus: AVAILABLE })
			.then((response) => {
				setPantData(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				// TODO: Handle error
				console.log(error);
			});
	}, []);

	// State to track sorting order
	const [sortOrder, setSortOrder] = useState("");

	// Function to toggle sorting order
	const toggleSortOrder = () => {
		const newSortOrder = sortOrder === "ascending" ? "descending" : "ascending";
		setSortOrder(newSortOrder);
	};

	// Automatically sort the array when the sorting order changes
	useEffect(() => {
		const sortedItems = [...pantData]; // Create a copy of the original array to avoid mutation
		if (sortOrder === "ascending") {
			sortedItems.sort((a, b) => a.price - b.price); // Ascending order
		} else if (sortOrder === "descending") {
			sortedItems.sort((a, b) => b.price - a.price); // Descending order
		} else {
			// Do nothing
		}
		setPantData(sortedItems); // Update the state with the sorted array
	}, [sortOrder]);

	const [searchInput, setSearchInput] = useState("");

	let filteredOrder = pantData.filter((order) => {
		const itemIdMatch =
			order.itemId &&
			order.itemId.toString().includes(searchInput.toLowerCase());
		const itemNameMatch =
			order.itemName &&
			order.itemName
				.toString()
				.toLowerCase()
				.includes(searchInput.toLowerCase());
		const statusMatch =
			order.status &&
			order.status.toString().toLowerCase().includes(searchInput.toLowerCase());
		const priceMatch =
			order.price &&
			order.price.toString().toLowerCase().includes(searchInput.toLowerCase());
		const colorMatch =
			order.color &&
			order.color.toString().toLowerCase().includes(searchInput.toLowerCase());

		return (
			itemIdMatch || itemNameMatch || priceMatch || statusMatch || colorMatch
		);
	});

	return (
		<div className="flex flex-col w-full">
			<div className="flex items-start md:items-center flex-col md:flex-row gap-x-2 w-56">
				<div className="p-4">
					<select
						className="text-xl w-60 py-2.5 pl-5 rounded-lg border-2 border-gray-500 "
						onChange={toggleSortOrder}
						value={sortOrder}
					>
						<option className="py-2.5 text-gray-400" value="">
							Sort By Price
						</option>
						<option className="py-2.5" value="ascending">
							Asc
						</option>
						<option className="py-2.5" value="descending">
							Des
						</option>
					</select>
				</div>

				<div className="flex">
					<input
						type="text"
						id="table-search"
						className="block p-2 pl-5 text-xl w-60 text-black border-2 border-gray-500 rounded-lg focus:border-gray-400"
						placeholder="Search Anything"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
					/>
				</div>
			</div>

			<div className="flex items-start flex-wrap gap-4 bg-gray-100 p-5 w-full overflow-y-auto h-screen">
				{filteredOrder.length === 0 ? (
					<p className="flex items-center justify-center m-auto">
						No Available Data
					</p>
				) : (
					filteredOrder.map((pant) => (
						<Link
							key={pant.itemId}
							to={`${pant.itemId}`}
							className="block cursor-pointer"
						>
							<AccessoryCard
								image={pant.images[0]}
								label={pant.itemName}
								tem="Hire-Costume"
								price={pant.price}
								status={pant.status}
								brand=""
								rating={pant.rating}
							/>
						</Link>
					))
				)}
			</div>
		</div>
	);
};

export default PantsGallery;
