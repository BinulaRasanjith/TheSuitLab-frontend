import React from 'react';
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


const stringData = [
    {
      id: 1,
      image: string1,
      length: '10 meters',
      thickness: 'Medium',
      material: 'Nylon',
      price: '$8',
    },
    {
        id: 1,
        image: string2,
        length: '10 meters',
        thickness: 'Medium',
        material: 'Nylon',
        price: '$8',
      },
      {
        id: 1,
        image: string3,
        length: '10 meters',
        thickness: 'Medium',
        material: 'Nylon',
        price: '$8',
      },
      {
        id: 1,
        image: string4,
        length: '10 meters',
        thickness: 'Medium',
        material: 'Nylon',
        price: '$8',
      },
      {
        id: 1,
        image: string5,
        length: '10 meters',
        thickness: 'Medium',
        material: 'Nylon',
        price: '$8',
      },
      {
        id: 1,
        image: string6,
        length: '10 meters',
        thickness: 'Medium',
        material: 'Nylon',
        price: '$8',
      },
      {
        id: 1,
        image: string7,
        length: '10 meters',
        thickness: 'Medium',
        material: 'Nylon',
        price: '$8',
      },

  ];
  
  
const StringListComponent = () => {
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
                                String Id

                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last updated
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Price
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
                        {stringData.map((item, index) => (
                            <tr
                                key={index}
                                className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium"
                            >
                                <td className="px-4 py-4">
                                    <img alt="image" className="w-16 h-18 object-cover rounded-md shadow-lg" src={item.image} />
                                </td>
                                <td className="px-6 py-4 text-center">{item.quantity}</td>
                                <td className="px-6 py-4">{item.phoneNumber}</td>
                                <td className="px-6 py-4">{item.name}</td>
                                <td className="px-6 py-4">Collected</td>
                                <td className="px-6 py-4 text-right">
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
            </div>    </div>
  );
};

export default StringListComponent;
