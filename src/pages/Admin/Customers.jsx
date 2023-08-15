import staffCard from "../../components/staffCard";

const ViewCustomers = () => {

    return (

        <div className="flex flex-row">
            <div className="flex-auto">

                <div className='flex flex-col '>
                    <div className='flex-col mt-6  ml-8 shadow-lg sm:rounded-lg'>
                        <div className='flex flex-col m-8 sm:rounded-full'>

                            <div className="flex flex-row ml-4">
                                <span className=' text-xl font-bold text-black p-1'>All Customers</span>

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
                                    {/* <label for="Sort" className="text-sm font-medium text-gray-900 ">Small select</label> */}
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
                                    <table className="w-full text-sm text-left text-gray-400 rounded-3xl ">
                                        <thead className="text-xs text-gray-500 uppercase bg-gray-100 rounded-3xl">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Customer Name
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Phone Number
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Email
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Last Order
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Status
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
                                            <tr className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                                <td className="px-6 py-4">
                                                    Jane Cooper
                                                </td>
                                                <td className="px-6 py-4">
                                                    +91 9876543210
                                                </td>
                                                <td className="px-6 py-4">
                                                    jane@gmail.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    2023-07-07
                                                </td>
                                                <td className="px-6 py-4">
                                                    Active
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <a href="#" className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded
                                                     hover:bg-blue-600 hover:underline hover:text-blue-200">Edit</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                                <td className="px-6 py-4">
                                                    Floyd Miles
                                                </td>
                                                <td className="px-6 py-4">
                                                    +91 3376443210
                                                </td>
                                                <td className="px-6 py-4">
                                                    floyd@yahoo.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    2023-03-17
                                                </td>
                                                <td className="px-6 py-4">
                                                    Active
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <a href="#" className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded
                                                     hover:bg-blue-600 hover:underline hover:text-blue-200">Edit</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                                <td className="px-6 py-4">
                                                    Ronald Richards
                                                </td>
                                                <td className="px-6 py-4">
                                                    +91 987654256
                                                </td>
                                                <td className="px-6 py-4">
                                                    ronald@gmail.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    2023-06-27
                                                </td>
                                                <td className="px-6 py-4">
                                                    Active
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <a href="#" className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded
                                                     hover:bg-blue-600 hover:underline hover:text-blue-200">Edit</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                                <td className="px-6 py-4">
                                                    Marvin Mackiney
                                                </td>
                                                <td className="px-6 py-4">
                                                    +94 9876577210
                                                </td>
                                                <td className="px-6 py-4">
                                                    marvin@gmail.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    2023-05-11
                                                </td>
                                                <td className="px-6 py-4">
                                                    Active
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <a href="#" className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded
                                                     hover:bg-blue-600 hover:underline hover:text-blue-200">Edit</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                                <td className="px-6 py-4">
                                                    Jacob Janes
                                                </td>
                                                <td className="px-6 py-4">
                                                    +94 983343210
                                                </td>
                                                <td className="px-6 py-4">
                                                    jane@gmail.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    2023-07-07
                                                </td>
                                                <td className="px-6 py-4">
                                                    Active
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <a href="#" className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded
                                                     hover:bg-blue-600 hover:underline hover:text-blue-200">Edit</a>
                                                </td>
                                            </tr>
                                            <tr className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                                <td className="px-6 py-4">
                                                    Lristin Watson
                                                </td>
                                                <td className="px-6 py-4">
                                                    +91 9876543210
                                                </td>
                                                <td className="px-6 py-4">
                                                    jane@gmail.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    2022-07-11
                                                </td>
                                                <td className="px-6 py-4">
                                                    Inactive
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <a href="#" className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded
                                                     hover:bg-blue-600 hover:underline hover:text-blue-200">Edit</a>
                                                </td>
                                            </tr>
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

export default ViewCustomers