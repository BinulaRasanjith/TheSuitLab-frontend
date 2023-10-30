import React from 'react';
import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import button1 from '../assets/images/buttons/button1.jpg';
import button2 from "../assets/images/buttons/button2.jpg"
import button3 from "../assets/images/buttons/button3.jpg"
import button4 from "../assets/images/buttons/button4.jpg"
import { HiCheck, HiX } from "react-icons/hi";

const buttonData = [
    {
        id: 1,
        image: button1,
        size: 'Small',
        color: 'Brown',
        quantity: 20,
        material: 'Plastic',
        price: 40,
        updatedate: '2023/08/15',
    },
    {
        id: 2,
        image: button2,
        size: 'Medium',
        color: 'Gold',
        quantity: 34,
        material: 'Plastic',
        price: 50,
        updatedate: '2023/10/22',
    },
    {
        id: 3,
        image: button3,
        size: 'Small',
        color: 'Black-Silver',
        quantity: 40,
        material: 'Plastic',
        price: 25,
        updatedate: '2023/10/20',
    },
    {
        id: 4,
        image: button4,
        size: 'Small',
        color: 'Black',
        quantity: 23,
        material: 'Plastic',
        price: 34,
        updatedate: '2023/09/20',
    },
];

const ButtonListComponent = ({ sortByPrice }) => {

    const [quantityValues, setQuantityValues] = useState(buttonData.map((item) => 0));
    const [sortedButtonData, setButtonData] = useState([...buttonData]);

    const toast = useToast();
    const [isSaveDisabled, setIsSaveDisabled] = useState(true);
    const [originalQuantities, setOriginalQuantities] = useState([]);

    useEffect(() => {
        const sortedData = [...buttonData].sort((a, b) => {
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
        setOriginalQuantities([...buttonData.map((item) => item.quantity)]);
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
            setQuantityValues(buttonData.map((item) => 0));

        }
    };


    return (
        <div className="min-h-screen bg-white m-5">
            <div className="relative overflow-x-hidden shadow-md">
                <table className="w-full text-sm text-left text-gray-400 rounded-3xl">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-100 rounded-3xl">
                        <tr>
                            <th scope="col" className="px-3 py-3">
                                Button Pic
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Size
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Material
                            </th>
                            {/* <th scope="col" className="px-3 py-3">
                                Unit Price
                            </th> */}
                            <th scope="col" className="px-1 py-3">
                                Last updated
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Used Quantity
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedButtonData.map((item, index) => (
                            <tr
                                key={index}
                                className="bg-white items-center border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium"
                            >
                                <td className="px-4 py-4">
                                    <img alt="image" className="w-16 h-18 object-cover rounded-md shadow-lg" src={item.image} />
                                </td>
                                <td className="px-4 py-4">{item.size}</td>
                                <td className="px-4 py-4">{item.color}</td>
                                <td className="px-4 py-4">
                                    {/*  (initial quantity + changes) */}
                                    {quantityValues[index] || quantityValues[index] === 0 ? item.quantity - quantityValues[index] : item.quantity}
                                </td>
                                <td className="px-4 py-4">{item.material}</td>
                                {/* <td className="px-4 py-4">{item.price}</td> */}
                                <td className="px-4 py-2">{item.updatedate}</td>
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

export default ButtonListComponent;
