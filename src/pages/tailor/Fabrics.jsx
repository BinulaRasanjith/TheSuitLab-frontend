
import button1 from "../../assets/images/fabrics/pattern/pattern- navy blue with red strips.jpg"
import button2 from "../../assets/images/fabrics/pattern/pattern-ark aegean suit.jpg"
import button3 from "../../assets/images/fabrics/pattern/pattern-black small square textured.jpg"
import button4 from "../../assets/images/fabrics/pattern/pattern-blue and navy check.jpg"

const ViewButtons = () => {


    return (

        <div className="flex flex-row">

            <div className="flex-auto">

                <div className='flex flex-col '>
                    <div className='flex-col m-3 ml-8 shadow-lg sm:rounded-lg'>
                        <div className='flex flex-col m-8 sm:rounded-full'>

                            <div className="flex flex-row ml-4">
                                <h4 className=' font-bold text-black p-1'>Fabrics</h4>

                                <div className=" ml-96">
                                    <label className="sr-only">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-4 h-4  dark:text-gray-700" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <input className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-3xl w-60
                                         focus:border-gray-400 " id="table-search" placeholder="Search" type="text" />
                                    </div>
                                </div>
                                <div className=" ml-9 flex">
                                    {/* <label for="Sort" className="text-sm font-medium text-gray-900 ">Small select</label> */}
                                    <select className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" id="Sort">
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
                                                <th className="px-6 py-3" scope="col">
                                                    Button Pic
                                                </th>
                                                <th className="px-6 py-3" scope="col">
                                                    Button Id

                                                </th>
                                                <th className="px-6 py-3" scope="col">
                                                    Quantity
                                                </th>
                                                <th className="px-6 py-3" scope="col">
                                                    Last updated
                                                </th>

                                                <th className="px-6 py-3" scope="col">
                                                    Price
                                                </th>
                                                <th className="px-6 py-3" scope="col">
                                                    Option
                                                </th>

                                                {/* <th scope="col" className="px-6 py-3">
                                                    <span className="sr-only">Edit</span>
                                                </th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                                <td className="px-4 py-4">
                                                    <img alt="image" className="w-16 h-18 object-cover rounded-md shadow-lg" src={button1} />
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    3
                                                </td>
                                                <td className="px-6 py-4">
                                                    +91 9876543210
                                                </td>
                                                <td className="px-6 py-4">
                                                    Floyd Miles
                                                </td>

                                                <td className="px-6 py-4">
                                                    Collected
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <a className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded
                                                     hover:bg-blue-600 hover:underline hover:text-blue-200" href="#">Edit</a>
                                                </td>
                                            </tr>

                                            <tr className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                                <td className="px-4 py-4">
                                                    <img alt="image" className="w-16 h-18 object-cover rounded-md shadow-lg" src={button2} />
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    3
                                                </td>
                                                <td className="px-6 py-4">
                                                    +91 9876543210
                                                </td>
                                                <td className="px-6 py-4">
                                                    Floyd Miles
                                                </td>

                                                <td className="px-6 py-4">
                                                    Collected
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <a className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded
                                                     hover:bg-blue-600 hover:underline hover:text-blue-200" href="#">Edit</a>
                                                </td>
                                            </tr>

                                            <tr className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                                <td className="px-4 py-4">
                                                    <img alt="image" className="w-16 h-18 object-cover rounded-md shadow-lg" src={button4} />

                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    3
                                                </td>
                                                <td className="px-6 py-4">
                                                    +91 9876543210
                                                </td>
                                                <td className="px-6 py-4">
                                                    Floyd Miles
                                                </td>

                                                <td className="px-6 py-4">
                                                    Collected
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <a className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded
                                                     hover:bg-blue-600 hover:underline hover:text-blue-200" href="#">Edit</a>
                                                </td>
                                            </tr>


                                            <tr className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                                <td className="px-4 py-4">
                                                    <img alt="image" className="w-16 h-18 object-cover rounded-md shadow-lg" src={button3} />
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    3
                                                </td>
                                                <td className="px-6 py-4">
                                                    +91 9876543210
                                                </td>
                                                <td className="px-6 py-4">
                                                    Floyd Miles
                                                </td>

                                                <td className="px-6 py-4">
                                                    Collected
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <a className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded
                                                     hover:bg-blue-600 hover:underline hover:text-blue-200" href="#">Edit</a>
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

export default ViewButtons