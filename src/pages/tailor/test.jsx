import button1 from '../../assets/images/buttons/button1.jpg'
import button2 from '../../assets/images/buttons/button2.jpg'
import button3 from '../../assets/images/buttons/button3.jpg'
import button4 from '../../assets/images/buttons/button4.jpg'
import Costume5 from '../../assets/images/costume5.jpeg'

const ViewButtons = () => {


    return (

        <div className="flex flex-row">

            <div className="flex-auto">

                <div className='flex flex-col '>
                    <div className='flex-col m-3 ml-8 shadow-lg sm:rounded-lg'>
                        <div className='flex flex-col m-8 sm:rounded-full'>

                            <div className="flex flex-row ml-4">
                                <h4 className=' font-bold text-black p-1'>All Orders</h4>

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
                                                    Button Pic
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Button Id

                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Quantity
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    
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
                                                <td className="px-4 py-4">
                                                    <img className="w-16 h-18 object-cover rounded-md shadow-lg" src={button1} alt="image" />
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
                                                    <a href="#" className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded
                                                     hover:bg-blue-600 hover:underline hover:text-blue-200">Edit</a>
                                                </td>
                                            </tr>
 
                                            <tr className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                                <td className="px-4 py-4">
                                                    <img className="w-16 h-18 object-cover rounded-md shadow-lg" src={button2} alt="image" />
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
                                                    <a href="#" className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded
                                                     hover:bg-blue-600 hover:underline hover:text-blue-200">Edit</a>
                                                </td>
                                            </tr>

                                            <tr className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                                <td className="px-6 py-4">
                                                    #007324786345
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
                                                    <a href="#" className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded
                                                     hover:bg-blue-600 hover:underline hover:text-blue-200">Edit</a>
                                                </td>
                                            </tr>
                                       

                                            <tr className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                                <td className="px-4 py-4">
                                                    <img className="w-16 h-18 object-cover rounded-md shadow-lg" src={button3} alt="image" />
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

export default ViewButtons