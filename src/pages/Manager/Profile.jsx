
//images
import Costume1 from '../../assets/images/costume1.jpeg'
import Costume2 from '../../assets/images/costume2.jpeg'
import Costume3 from '../../assets/images/costume3.jpeg'
import Costume4 from '../../assets/images/costume4.jpeg'
import Costume5 from '../../assets/images/costume5.jpeg'

const Profile = () => {

    return (
        <div className="flex flex-row">
            <div className='flex-auto flex-col'>
                <div class="bg-white border border-gray-200 ml-10 mt-10  rounded-lg shadow ">
                    <div class="flex flex-col p-6">
                        <div className=" border-b-2 border-gray-300">
                            <h2 class="mb-4 mt-3 text-2xl  justify-start font-medium text-gray-900">Account settings</h2>
                        </div>
                        <div className="flex flex-row mt-8">
                            <img class="w-52 h-52 object-cover mb-1 rounded-full shadow-lg" src={Costume1} alt="image" />

                            <div className="flex flex-col ml-20">

                                <div className="flex-row mt-6 grid grid-cols-2 mb-1">
                                    <label class="text-md text-gray-500">First Name</label>
                                    <input class="border border-gray-200 rounded-xl  focus:outline-none focus:border-gray-500" type="text" value='John' />
                                </div>
                                <div className="flex-row mt-6 grid grid-cols-2 mb-1">
                                    <label class="text-md text-gray-500">Last Name</label>
                                    <input class="border border-gray-200 rounded-xl  focus:outline-none focus:border-gray-500" type="text" value='Doe' />
                                </div>
                                <div className="flex-row mt-6 grid grid-cols-2 mb-1">
                                    <label class="text-md text-gray-500">Address</label>
                                    <input class="border border-gray-200 rounded-xl  focus:outline-none focus:border-gray-500" type="text" value='Bambalapitiya, Colombo 04' />
                                </div>
                                <div className="flex-row mt-6 grid grid-cols-2 mb-1">
                                    <label class="text-md text-gray-500">Contact</label>
                                    <input class="border border-gray-200 rounded-xl  focus:outline-none focus:border-gray-500" type="text" value='' />
                                </div>
                                <div className="flex-row mt-6 grid grid-cols-2 mb-1">
                                    <label class="text-md text-gray-500">Password</label>
                                    <input class="border border-gray-200 rounded-xl  focus:outline-none focus:border-gray-500" type="password" value='dfgghhhrh' />
                                </div>


                                <div className="flex flex-row mr-4 mt-5 justify-start ">
                                    <a href="#" class="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white uppercase bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Save</a>

                                </div>

                            </div >


                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Profile