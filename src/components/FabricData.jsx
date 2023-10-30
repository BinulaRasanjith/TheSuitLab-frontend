import React from 'react';

import fabric1 from "../assets/images/fabrics/pattern/pattern- navy blue with red strips.jpg"
import fabric2 from "../assets/images/fabrics/pattern/pattern-ark aegean suit.jpg"
import fabric3 from "../assets/images/fabrics/pattern/pattern-black small square textured.jpg"
import fabric4 from "../assets/images/fabrics/pattern/pattern-blue and navy check.jpg"


const fabricData = [
    {
        id: 10,
        image: fabric1,
        material: 'Cotton',
        color: 'Blue',
        updatedate: '2023-09-24',
        price: 420,
        quantity: 500
    },
    {
        id: 13,
        image: fabric2,
        material: 'Cotton',
        color: 'Blue',
        updatedate: '2023-09-13',
        price: 768,
        quantity: 340
    },
    {
        id: 28,
        image: fabric3,
        material: 'Cotton',
        color: 'Blue',
        updatedate: '2023-10-11',
        price: 890,
        quantity: 770
    },
    {
        id: 90,
        image: fabric4,
        material: 'Cotton',
        color: 'Blue',
        updatedate: '2023-10-18',
        price: 590,
        quantity: 850
    },
];


const FabricListComponent = () => {
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
                                Last updated
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Unit Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Option
                            </th>

                            {/* <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {fabricData.map((item, index) => (
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
                                <td className="px-6 py-4">{item.quantity} m</td>
                                <td className="px-6 py-4">{item.updatedate}</td>
                                <td className="px-6 py-4">{item.price}</td>
                                <td className="px-6 py-4">
                                    <a
                                        className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200"
                                        href="#"
                                    >
                                        Edit
                                    </a>
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