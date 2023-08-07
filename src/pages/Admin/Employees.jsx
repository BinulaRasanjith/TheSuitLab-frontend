//


//images
import Costume1 from '../../assets/images/costume1.jpeg'
import Costume2 from '../../assets/images/costume2.jpeg'
import Costume3 from '../../assets/images/costume3.jpeg'
import Costume4 from '../../assets/images/costume4.jpeg'
import Costume5 from '../../assets/images/costume5.jpeg'

const Employees = () => {


    return (

        <div className=" flex flex-row">
            <div className='flex-auto ml-3'>
                <div className='flex flex-col'>

                    <div className='flex-row mt-6 grid grid-cols-2'>
                        <div className="flex ml-5 justify-start ">
                            <span className=' font-bold text-xl text-black  uppercase'>Product managers</span>
                        </div>
                        <div className="flex flex-row mr-5 justify-end ">
                            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white uppercase bg-black rounded-3xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">New User</a>

                        </div>
                    </div>

                    {/* cards*/}
                    <div className="bg-white">
                        <div className="mt-1 grid gap-10 lg:grid-cols-4 md-grid-cols-2 p-5">

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
                        <div className="mt-1 grid gap-10 lg:grid-cols-4 md-grid-cols-2 p-5">

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

                    </div>


                </div>
            </div>

        </div>

    )
}

export default Employees