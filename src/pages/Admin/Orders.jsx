
const ViewOrders = () => {


    return (

        <div className="flex flex-row">
            {/* <div className="flex flex-col bg-gray-100 h-screen justify-between w-60 py-4 px-2">
                <div className="flex-col flex-auto">

                    <div className="p-2 mb-2">
                        <div className="flex flex-row space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                            </svg>


                            <h4 className="font-bold text-gray-500 hover:text-black-200">Dashboard</h4>
                        </div>
                    </div>

                    <div className="p-2 mb-2">
                        <div className="flex flex-row space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                                <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                            </svg>


                            <h4 className="font-bold text-gray-500 hover:text-black-200">Employees</h4>
                        </div>
                    </div>

                    <div className="p-2 mb-2">
                        <div className="flex flex-row space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
                                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                            </svg>


                            <h4 className="font-bold text-gray-500 hover:text-black-200">Customers</h4>
                        </div>
                    </div>

                    <div className="p-2 mb-2">
                        <div className="flex flex-row space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                            </svg>

                            <h4 className="font-bold text-gray-500 hover:text-black-200">Orders</h4>
                        </div>
                    </div>

                    <div className="p-2 mb-2">
                        <div className="flex flex-row space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017.5 21v-3.955a48.842 48.842 0 01-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clip-rule="evenodd" />
                            </svg>

                            <h4 className="font-bold text-gray-500 hover:text-black-200">Notifications</h4>
                        </div>
                    </div>


                    <div className="p-2 mb-2">
                        <div className="flex flex-row space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                            </svg>

                            <h4 className="font-bold text-gray-500 hover:text-black-200">Reviews</h4>
                        </div>
                    </div>

                    <div className="p-2 mb-2">
                        <div className="flex flex-row space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                            </svg>

                            <h4 className="font-bold text-gray-500 hover:text-black-200">Profile</h4>
                        </div>
                    </div>

                </div>

                <div className=" flex flex-col flex-auto justify-center">
                
                    <button type="button" className=" text-black bg-gray-100 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-3 py-3 
                    inline-flex items-center mr-24">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-5 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                        Logout
                    </button>
                </div>
            </div> */}

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
                                                    Order Id
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Item Count
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

                                                {/* <th scope="col" className="px-6 py-3">
                                                    <span className="sr-only">Edit</span>
                                                </th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
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
                                                2023-07-17
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
                                                2023-07-17
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
                                                2023-07-17
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
                                                2023-07-17
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
                                                2023-07-17
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

export default ViewOrders