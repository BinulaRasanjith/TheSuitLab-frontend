import React from 'react';
import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import string1 from '../assets/images/strings/string1.webp'
import string2 from '../assets/images/strings/string2.webp'
import string3 from '../assets/images/strings/string3.webp'
import string4 from '../assets/images/strings/string4.webp'
import string5 from '../assets/images/strings/beige.jpg'
import string6 from '../assets/images/strings/gray.jpg'
import string7 from '../assets/images/strings/maroon.jpg'
import string8 from '../assets/images/strings/mint 1.jpg'
import string9 from '../assets/images/strings/mint 2.jpg'
import string10 from '../assets/images/strings/mint 3.jpg'
import string11 from '../assets/images/strings/purple.jpg'
import { HiCheck, HiX } from "react-icons/hi";


const stringData = [
    {
        id: 1,
        image: string1,
        length: '10 meters',
        quantity: 20,
        color: 'purple',
        price: 70,
        updatedate: '2023/08/15',

    },
    {
        id: 2,
        image: string2,
        length: '10 meters',
        quantity: 24,
        color: 'green',
        price: 25,
        updatedate: '2023/08/15',

    },
    {
        id: 3,
        image: string3,
        length: '10 meters',
        quantity: 30,
        color: 'light green',
        price: 50,
        updatedate: '2023/09/15',

    },
    {
        id: 4,
        image: string4,
        length: '10 meters',
        quantity: 35,
        color: 'black',
        price: 90,
        updatedate: '2023/08/15',

    },
    {
        id: 5,
        image: string5,
        length: '10 meters',
        quantity: 15,
        color: 'beige',
        price: 35,
        updatedate: '2023/09/29',

    },
    {
        id: 6,
        image: string6,
        length: '10 meters',
        quantity: 10,
        color: 'grey',
        price: 40,
        updatedate: '2023/09/21',

    },
    {
        id: 7,
        image: string7,
        length: '10 meters',
        quantity: 40,
        color: 'red',
        price: 30,
        updatedate: '2023/10/15',

    },
];


const StringListComponent = ({ sortByPrice, searchInput }) => {

    const [quantityValues, setQuantityValues] = useState(stringData.map((item) => 0));
    const [sortedStringData, setButtonData] = useState([...stringData]);

    const toast = useToast();
    const [isSaveDisabled, setIsSaveDisabled] = useState(true);
    const [originalQuantities, setOriginalQuantities] = useState([]);

    useEffect(() => {
        const sortedData = [...stringData].sort((a, b) => {
            const priceA = parseFloat(a.price);
            const priceB = parseFloat(b.price);
            if (sortByPrice === 'ASC') {
                return priceA - priceB;
            } else if (sortByPrice === 'DSC') {
                return priceB - priceA;
            }
            return 0;
        });
        console.log(sortedData);
        setButtonData(sortedData);
    }, [sortByPrice]);

    useEffect(() => {
        setOriginalQuantities([...stringData.map((item) => item.quantity)]);
    }, []);

    useEffect(() => {
        // Check if any quantity is negative or not entered
        const isNegativeQuantity = quantityValues.some((value) => value < 0 || isNaN(value));
        setIsSaveDisabled(isNegativeQuantity);
    }, [quantityValues]);

    const handleQuantityChange = (index, value) => {
        const newQuantityValues = [...quantityValues];
        newQuantityValues[index] = value;
        setQuantityValues(newQuantityValues);
    };

    const handleUndoChanges = (index) => {
        const newQuantityValues = [...quantityValues];
        newQuantityValues[index] = 0;
        setQuantityValues(newQuantityValues);
    };

    const handleSaveChanges = () => {
        // Check if any final quantity becomes negative after modification
        const isNegativeQuantity = quantityValues.some((value, index) => {
            const modifiedQuantity = originalQuantities[index] - value;
            return modifiedQuantity < 0;
        });

        if (isNegativeQuantity) {
            // Show error toast message if any final quantity becomes negative
            toast({
                title: 'Final quantity cannot be negative',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'bottom',
            });
        } else {
            // Implement save logic here, for example, send data to an API
            console.log('Saved Changes:', quantityValues);
            setQuantityValues(stringData.map((item) => 0));

        }
    };

    const filteredStrings = sortedStringData.filter((string) => {
        const idMatch = string.id && string.id.toString().includes(searchInput);
        const nameMatch = string.name && string.name.toLowerCase().includes(searchInput.toLowerCase());
        const lengthMatch = string.size && string.size.toLowerCase().includes(searchInput.toLowerCase());
        const colorMatch = string.color && string.color.toLowerCase().includes(searchInput.toLowerCase());
        const quantityMatch = string.quantity && string.quantity.toString().toLowerCase().includes(searchInput.toLowerCase());
        const materialMatch = string.material && string.material.toLowerCase().includes(searchInput.toLowerCase());
        const priceMatch = string.price && string.price.toString().toLowerCase().includes(searchInput.toLowerCase());
        const dateMatch = string.updatedate && string.updatedate.toLowerCase().includes(searchInput.toLowerCase());

        return nameMatch || lengthMatch || materialMatch || colorMatch || idMatch || priceMatch || quantityMatch || dateMatch;
    });

    return (
        <div className="min-h-screen bg-white m-5">
            <div className="relative overflow-x-hidden shadow-md">
                <table className="w-full text-sm text-left text-gray-400 rounded-3xl">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-100 rounded-3xl">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                String Pic
                            </th>
                            <th scope="col" className="px-6 py-3">
                                String Code
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last updated
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Used Quantity
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStrings.map((item, index) => (
                            <tr
                                key={index}
                                className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium"
                            >
                                <td className="px-4 py-4">
                                    <img alt="image" className="w-16 h-18 object-cover rounded-md shadow-lg" src={item.image} />
                                </td>
                                <td className="px-6 py-4 text-center">{item.id}</td>
                                <td className="px-6 py-4">{item.color}</td>
                                <td className="px-4 py-4">
                                    {/*  (initial quantity + changes) */}
                                    {quantityValues[index] || quantityValues[index] === 0 ? item.quantity - quantityValues[index] : item.quantity}
                                </td>
                                <td className="px-6 py-4">{item.updatedate}</td>

                                <td className="px-4 py-4">
                                    <input
                                        type="number"
                                        className="w-16 h-8 text-center border border-gray-300 rounded-md"
                                        value={quantityValues[index]}
                                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                    />

                                    {/* Undo and Save Buttons */}
                                    <button
                                        className="px-3 py-2 ml-2 bg-red-500 text-white rounded hover:bg-yellow-600"
                                        onClick={() => handleUndoChanges(index)}
                                    >
                                        <HiX />
                                    </button>
                                    <button

                                        className="px-3 py-2 ml-2 bg-green-500 text-white rounded hover:bg-green-600"
                                        onClick={handleSaveChanges}
                                    >
                                        <HiCheck />

                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>    </div>
    );
};

export default StringListComponent;
