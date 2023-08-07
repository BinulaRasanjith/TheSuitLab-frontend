import Costume1 from '../../assets/images/costume1.jpeg'
import Costume2 from '../../assets/images/costume2.jpeg'
import Costume3 from '../../assets/images/costume3.jpeg'
import Costume4 from '../../assets/images/costume4.jpeg'
import Costume5 from '../../assets/images/costume5.jpeg'

const Employees = () => {


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

                    <button type="button" className="text-black bg-gray-100 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-3 py-3 
                    inline-flex items-center mr-24">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-5 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                        Logout
                    </button>
                </div>
            </div> */}


            {/*offset*/}

            <div className='flex-auto ml-3'>
                <div className='flex flex-col'>

                    <div className="flex flex-row ml-5 mt-5">
                        <span className=' font-bold text-xl text-black  uppercase'>Product managers</span>
                    </div>

                    {/* cards*/}
                    <div className="w-screen bg-white">
                        <div className="mt-1 grid gap-7 lg:grid-cols-5 md-grid-cols-2 p-5">

                            <div class="bg-white border border-gray-200 rounded-lg shadow">
                                <div class="flex justify-end px-1 pt-1">
                                    <button id="closeButton" data-close-toggle="close" class="inline-block focus:ring-6 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                        </svg>

                                    </button>
                                </div>
                                <div class="flex flex-col items-center">

                                    <img class="w-36 h-36 mb-1 rounded-full shadow-lg" src={Costume1} alt="image" />
                                    <h5 class="mb-1 text-md  uppercase font-medium text-gray-900">Chamindu Sandaruwan</h5>
                                    <span class=" mb-3 text-sm text-gray-500">Product Manager</span>
                                </div>
                            </div>

                            <div class="bg-white border border-gray-200 rounded-lg shadow">
                                <div class="flex justify-end px-1 pt-1">
                                    <button id="closeButton" data-close-toggle="close" class="inline-block focus:ring-6 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                        </svg>

                                    </button>
                                </div>
                                <div class="flex flex-col items-center">

                                    <img class="w-36 h-36 mb-1 rounded-full shadow-lg" src={Costume2} alt="image" />
                                    <h5 class="mb-1 text-md  uppercase font-medium text-gray-900">Oshada Fernando</h5>
                                    <span class=" mb-3 text-sm text-gray-500">Product Manager</span>
                                </div>
                            </div>

                            <div class="bg-white border border-gray-200 rounded-lg shadow">
                                <div class="flex justify-end px-1 pt-1">
                                    <button id="closeButton" data-close-toggle="close" class="inline-block focus:ring-6 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                        </svg>

                                    </button>
                                </div>
                                <div class="flex flex-col items-center">

                                    <img class="w-36 h-36 mb-1 rounded-full shadow-lg" src={Costume3} alt="image" />
                                    <h5 class="mb-1 text-md  uppercase font-medium text-gray-900">Ravindra Gamage</h5>
                                    <span class=" mb-3 text-sm text-gray-500">Product Manager</span>
                                </div>
                            </div>

                            <div class="bg-white border border-gray-200 rounded-lg shadow ">
                                <div class="flex justify-end px-1 pt-1">
                                    <button id="closeButton" data-close-toggle="close" class="inline-block focus:ring-6 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                        </svg>

                                    </button>
                                </div>
                                <div class="flex flex-col items-center">

                                    <img class="w-36 h-36 mb-1 rounded-full shadow-lg" src={Costume4} alt="image" />
                                    <h5 class="mb-1 text-md  uppercase font-medium text-gray-900">Kushan Liyanage</h5>
                                    <span class=" mb-3 text-sm text-gray-500">Product Manager</span>
                                </div>
                            </div>

                            {/*grid end here*/}
                        </div>
                        {/* another grid start here*/}

                        <div className="flex flex-row ml-5 mt-5">
                            <span className=' font-bold text-xl text-black  uppercase'>Tailors & Supervisors</span>
                        </div>
                        <div className="mt-1 grid gap-7 lg:grid-cols-5 md-grid-cols-2 p-5">

                            <div class="bg-white border border-gray-200 rounded-lg shadow">
                                <div class="flex justify-end px-1 pt-1">
                                    <button id="closeButton" data-close-toggle="close" class="inline-block focus:ring-6 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                        </svg>

                                    </button>
                                </div>
                                <div class="flex flex-col items-center">

                                    <img class="w-36 h-36 mb-1 rounded-full shadow-lg" src={"Costume5"} alt="image" />
                                    <h5 class="mb-1 text-md  uppercase font-medium text-gray-900">Shayma Dissanayake</h5>
                                    <span class=" mb-3 text-sm text-gray-500">Head Tailor</span>
                                </div>
                            </div>

                            <div class="bg-white border border-gray-200 rounded-lg shadow">
                                <div class="flex justify-end px-1 pt-1">
                                    <button id="closeButton" data-close-toggle="close" class="inline-block focus:ring-6 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                        </svg>

                                    </button>
                                </div>
                                <div class="flex flex-col items-center">

                                    <img class="w-36 h-36 mb-1 rounded-full shadow-lg" src={Costume5} alt="image" />
                                    <h5 class="mb-1 text-md  uppercase font-medium text-gray-900">Dilahara Ranaweera</h5>
                                    <span class=" mb-3 text-sm text-gray-500">Tailoring Supervisor</span>
                                </div>
                            </div>

                            <div class="bg-white border border-gray-200 rounded-lg shadow">
                                <div class="flex justify-end px-1 pt-1">
                                    <button id="closeButton" data-close-toggle="close" class="inline-block focus:ring-6 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                        </svg>

                                    </button>
                                </div>
                                <div class="flex flex-col items-center">

                                    <img class="w-36 h-36 mb-1 rounded-full shadow-lg" src={Costume1} alt="image" />
                                    <h5 class="mb-1 text-md  uppercase font-medium text-gray-900">Thushara Udayanga</h5>
                                    <span class=" mb-3 text-sm text-gray-500">Head Tailor</span>
                                </div>
                            </div>

                            <div class="bg-white border border-gray-200 rounded-lg shadow ">
                                <div class="flex justify-end px-1 pt-1">
                                    <button id="closeButton" data-close-toggle="close" class="inline-block focus:ring-6 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                        </svg>

                                    </button>
                                </div>
                                <div class="flex flex-col items-center">

                                    <img class="w-36 h-36 mb-1 rounded-full shadow-lg" src={""} alt="image" />
                                    <h5 class="mb-1 text-md  uppercase font-medium text-gray-900">Jayanni Hemanthi</h5>
                                    <span class=" mb-3 text-sm text-gray-500">Tailoring Supervisor</span>
                                </div>
                            </div>

                            {/*grid end here*/}
                        </div>

                    </div>


                </div>
            </div>

        </div>

    )
}

export default Employees