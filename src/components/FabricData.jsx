import React from 'react';
import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import fabric1 from "../assets/images/fabrics/pattern/pattern- navy blue with red strips.jpg"
import fabric2 from "../assets/images/fabrics/pattern/pattern-ark aegean suit.jpg"
import fabric3 from "../assets/images/fabrics/pattern/pattern-black small square textured.jpg"
import fabric4 from "../assets/images/fabrics/pattern/pattern-blue and navy check.jpg"
import { HiCheck, HiX } from "react-icons/hi";

const fabricData = [
    {
        id: 10,
        image: fabric1,
        material: 'Poplin',
        color: 'Blue',
        updatedate: '2023-09-24',
        price: 420,
        quantity: 500,
        name: 'Arg Blue'
    },
    {
        id: 13,
        image: fabric2,
        material: 'Cotton',
        color: 'Blue',
        updatedate: '2023-09-13',
        price: 768,
        quantity: 340,
        name: 'Christ blue',
    },
    {
        id: 28,
        image: fabric3,
        material: 'Velvet',
        color: 'Blue',
        updatedate: '2023-10-11',
        price: 890,
        quantity: 770,
        name: 'Deco blue',
    },
    {
        id: 90,
        image: fabric4,
        material: 'Silk',
        color: 'Blue',
        updatedate: '2023-10-18',
        price: 590,
        quantity: 850,
        name: 'Indi blue',
    },
];


const FabricListComponent = ({ sortByPrice, searchInput }) => {

    
    const [quantityValues, setQuantityValues] = useState(fabricData.map((item) => 0));
    const [sortedFabricData, setButtonData] = useState([...fabricData]);

    const toast = useToast();
    const [isSaveDisabled, setIsSaveDisabled] = useState(true);
    const [originalQuantities, setOriginalQuantities] = useState([]);

    useEffect(() => {
        const sortedData = [...fabricData].sort((a, b) => {
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

    // Store original quantities on component mount
    useEffect(() => {
        setOriginalQuantities([...fabricData.map((item) => item.quantity)]);
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
            setQuantityValues(fabricData.map((item) => 0));

        }
    };

    const filteredFabrics = sortedFabricData.filter((fabric) => {
        const nameMatch = fabric.name && fabric.name.toLowerCase().includes(searchInput.toLowerCase());
        const materialMatch = fabric.material && fabric.material.toLowerCase().includes(searchInput.toLowerCase());
        const colorMatch = fabric.color && fabric.color.toLowerCase().includes(searchInput.toLowerCase());
        const idMatch = fabric.id && fabric.id.toString().includes(searchInput);
        const priceMatch = fabric.price && fabric.price.toString().toLowerCase().includes(searchInput.toLowerCase());
        const quantityMatch = fabric.quantity && fabric.quantity.toString().toLowerCase().includes(searchInput.toLowerCase());
        const dateMatch = fabric.updatedate && fabric.updatedate.toLowerCase().includes(searchInput.toLowerCase());
    
        return nameMatch || materialMatch || colorMatch || idMatch || priceMatch || quantityMatch || dateMatch;
    });

    return (
        <div className="min-h-screen bg-white m-5">
            <div className="relative overflow-x-hidden shadow-md">
                <table className="w-full text-sm text-left text-gray-400 rounded-3xl">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-100 rounded-3xl">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Fabric Code
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fabric Pic
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fabric Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Unit Price
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
                        {filteredFabrics.map((item, index) => (
                            <tr
                                key={index}
                                className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium"
                            >
                                <td className="px-6 py-4">F#{item.id}</td>
                                <td className="px-4 py-4">
                                    <img alt="image" className="w-16 h-18 object-cover rounded-md shadow-lg" src={item.image} />
                                </td>
                                <td className="px-6 py-4">{item.name}</td>
                                <td className="px-6 py-4">{item.color}</td>
                                <td className="px-4 py-4">
                                    {/*  (initial quantity + changes) */}
                                    {quantityValues[index] || quantityValues[index] === 0 ? item.quantity - quantityValues[index] : item.quantity}
                                </td>
                                <td className="px-6 py-4">{item.price}</td>
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
            </div>
        </div>
    );
};

export default FabricListComponent;