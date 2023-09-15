import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom';


const orders = [
    {
        orderId: '1',
        phoneNumber: '(225) 555-0118',
        customer: 'Heshan Cooray',
        OrderedDate: '2023-07-07',
        status: 'Collected',
    },
    {
        orderId: '2',
        phoneNumber: '(205) 555-0100',
        customer: 'Janaka Ishan',
        OrderedDate: '2023-03-17',
        status: 'Collected',
    },
    {
        orderId: '3',
        phoneNumber: '(302) 555-0107',
        customer: 'Kushan Dias',
        OrderedDate: '2023-07-07',
        status: 'Collected',
    },
    {
        orderId: '4',
        phoneNumber: '(252) 555-0126',
        customer: 'Malin Perera',
        OrderedDate: '2023-06-27',
        status: 'Collected',
    },
    {
        orderId: '5',
        phoneNumber: '(208) 555-0112',
        customer: 'Shyam Fernando',
        OrderedDate: '2023-05-11',
        status: 'Collected',
    },
    {
        orderId: '6',
        phoneNumber: '(704) 555-0127',
        customer: 'Gihan Nawagamuwa',
        OrderedDate: '2023-07-07',
        status: 'Collected',
    }

];


const Orders = () => {

    return (
        <div className="w-full p-5">
            <div className='shadow-xl rounded-2xl mx-2 mt-8'>
                <div className="flex flex-row m-4 justify-between">
                    <div>
                        <span className=' text-xl font-bold text-black p-1'>All Orders</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <label className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <BiSearch />
                            </div>
                            <input type="text" className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-3xl w-52
                                     focus:border-gray-400 " placeholder="Search" />
                        </div>

                        <select id="Sort" className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                            <option selected>Sort By</option>
                            <option value="US">All</option>
                            <option value="CA">ASC</option>
                            <option value="FR">DSC</option>
                        </select>
                    </div>
                </div>

                <div className="m-4">
                    <table className=" w-full text-sm text-left text-gray-400 ">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Order Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Customer
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ordered Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Option
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr
                                    key={index}
                                    className=" border hover:bg-gray-300 text-black whitespace-nowrap font-medium"
                                >
                                    <td className="px-6 py-4"> <Link to={`${order.orderId}`}>{order.orderId}</Link></td>
                                    <td className="px-6 py-4">{order.phoneNumber}</td>
                                    <td className="px-6 py-4">{order.customer}</td>
                                    <td className="px-6 py-4">{order.OrderedDate}</td>
                                    <td className="px-6 py-4">{order.status}</td>
                                    <td className="px-6 py-4">
                                        <a
                                            href="#"
                                            className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200"
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
        </div>

    )
}

export default Orders