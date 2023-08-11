const customers = [
    {
        orderId: '#007324786345',
        phoneNumber: '(225) 555-0118',
        customer: 'Heshan Cooray',
        OrderedDate: '2023-07-07',
        status: 'Collected',
    },
    {
        orderId: '#007783264383',
        phoneNumber: '(205) 555-0100',
        customer: 'Janaka Ishan',
        OrderedDate: '2023-03-17',
        status: 'Collected',
    },
    {
        orderId: '#007373652345',
        phoneNumber: '(302) 555-0107',
        customer: 'Kushan Dias',
        OrderedDate: '2023-07-07',
        status: 'Collected',
    },
    {
        orderId: '#007376876554',
        phoneNumber: '(252) 555-0126',
        customer: 'Malin Perera',
        OrderedDate: '2023-06-27',
        status: 'Collected',
    },
    {
        orderId: '#007908322342',
        phoneNumber: '(208) 555-0112',
        customer: 'Shyam Fernando',
        OrderedDate: '2023-05-11',
        status: 'Collected',
    },
    {
        orderId: '#007083473634',
        phoneNumber: '(704) 555-0127',
        customer: 'Gihan Nawagamuwa',
        OrderedDate: '2023-07-07',
        status: 'Collected',
    }

];


const ViewOrders = () => {

    return (
        <div className="flex flex-row">
            <div className="flex-auto">

                <div className='flex flex-col '>
                    <div className='flex-col mt-6 ml-8 shadow-lg sm:rounded-lg'>
                        <div className='flex flex-col m-8 sm:rounded-full'>

                            <div className="flex flex-row ml-4">
                                <span className=' text-xl font-bold text-black p-1'>All Orders</span>

                                <div className=" ml-96">
                                    <label className="sr-only">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-4 h-4  dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-3xl w-60
                                         focus:border-gray-400 " placeholder="Search" />
                                    </div>
                                </div>
                                <div className=" ml-9 flex">
                                    <select id="Sort" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                                        <option selected>Sort By</option>
                                        <option value="US">All</option>
                                        <option value="CA">ASC</option>
                                        <option value="FR">DSC</option>
                                    </select>
                                </div>
                            </div>

                            <div className=" min-h-screen bg-white m-5">

                                <div className="relative overflow-x-hidden shadow-md">
                                <table className="w-full text-sm text-left text-gray-400 rounded-3xl">
                                        <thead className="text-xs text-gray-500 uppercase bg-gray-100 rounded-3xl">
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
                                            {customers.map((customer, index) => (
                                                <tr
                                                    key={index}
                                                    className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium"
                                                >
                                                    <td className="px-6 py-4">{customer.orderId}</td>
                                                    <td className="px-6 py-4">{customer.phoneNumber}</td>
                                                    <td className="px-6 py-4">{customer.customer}</td>
                                                    <td className="px-6 py-4">{customer.OrderedDate}</td>
                                                    <td className="px-6 py-4">{customer.status}</td>
                                                    <td className="px-6 py-4 text-right">
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
                    </div>
                </div>
            </div>

        </div >


    )
}

export default ViewOrders