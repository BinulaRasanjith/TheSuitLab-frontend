import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getPreDesignedCostumes } from "../../api/preDesignedCostumesAPI";
import { JP } from "../../constants";
import PreDesignedItemCard from "./PreDesignedItemCard";

const PreDesignedJacketGallery = () => {
    const [jacketData, setJacketData] = useState([]); // Create state variable for jacket data

    useEffect(() => {
        getPreDesignedCostumes({ costumeType: JP })
            .then((response) => {
                setJacketData(response.data);
                // console.log(response.data);
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

    const [searchInput, setSearchInput] = useState('');

    let filteredOrder = jacketData.filter((order) => {

        const itemIdMatch = order.itemId && order.itemId.toString().includes(searchInput.toLowerCase());
        const itemNameMatch = order.itemName && order.itemName.toString().toLowerCase().includes(searchInput.toLowerCase());
        const statusMatch = order.status && order.status.toString().toLowerCase().includes(searchInput.toLowerCase());
        const priceMatch = order.price && order.price.toString().toLowerCase().includes(searchInput.toLowerCase());
        const colorMatch = order.color && order.color.toString().toLowerCase().includes(searchInput.toLowerCase());

        return itemIdMatch || itemNameMatch || priceMatch || statusMatch || colorMatch;
    });



    return (
        <div className="flex flex-col w-full">

            <div className="flex items-start md:items-center flex-col md:flex-row gap-x-2 w-56">
                <div className="p-4">
                    <select
                        className="text-xl w-60 py-2.5 pl-5 rounded-lg border-2 border-gray-500"
                        onChange={toggleSortOrder}
                        value={sortOrder}
                    >
                        <option value="" disabled hidden>Sort by price</option>
                        <option value="ascending">Asc</option>
                        <option value="descending">Des</option>
                    </select>
                </div>
                <input
                    type="text"
                    id="table-search"
                    className="block p-2 pl-5 text-xl w-60 text-black border-2 border-gray-500 rounded-lg"
                    placeholder="Search Anything"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />

            </div>

            <div className="flex items-start flex-wrap gap-4 bg-gray-100 p-5 w-full overflow-y-auto h-screen">

                {filteredOrder.length === 0 ? (<p className="flex items-center justify-center m-auto">No Available Data</p>) : (filteredOrder.map((jacket) => (
                    <Link
                        key={jacket.itemId}
                        to={`${jacket.itemId}`}
                        className="block curser-pointer"
                    >
                        <PreDesignedItemCard image={jacket.image[0]} label={jacket.itemName} item="Hire-Costume" price={jacket.price} status={jacket.status} brand="" rating={jacket.rating} />
                    </Link>
                )))}
            </div>
        </div>
    );
};

export default PreDesignedJacketGallery;
