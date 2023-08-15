//images
import Costume1 from '../../assets/images/costume1.jpeg'

const Profile = () => {

    return (
        <div className="h-full flex flex-row m-4 shadow-xl rounded-2xl p-2">
            <div className="bg-white border border-gray-200 m-10  rounded-lg shadow  p-6">

                <div className=" border-b-2 border-gray-300">
                    <h2 className="mb-4 mt-3 text-2xl  justify-start font-medium text-gray-900">Account settings</h2>
                </div>
                <div className="flex flex-row mt-8">
                    <img className="w-52 h-52 object-cover mb-1 rounded-full shadow-lg" src={Costume1} alt="image" />

                    <div className="flex flex-col w-96 gap-5 ml-16">
                        <div className="flex flex-row justify-between">
                            <label className="text-md text-gray-500">First Name</label>
                            <input className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500" type="text" value='John' />
                        </div>
                        <div className="flex flex-row justify-between">
                            <label className="text-md text-gray-500">Last Name</label>
                            <input className="border  border-gray-400 rounded-md  focus:outline-none focus:border-gray-500" type="text" value='Doe' />
                        </div>

                        <div className="flex flex-row justify-between">
                            <label className="text-md text-gray-500">Contact</label>
                            <input className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500" type="text" value='+942550332' />
                        </div>

                        <div className="flex flex-row justify-between">
                            <label className="text-md text-gray-500">Email</label>
                            <input className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500" type="text" value='John@gmail.com' />
                        </div>
                        <div className="flex flex-row justify-between">
                            <label className="text-md text-gray-500">Password</label>
                            <input className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500" type="password" value='John' />
                        </div>
                        <div className="flex flex-row justify-between">
                            <label className="text-md text-gray-500">Confirm Password</label>
                            <input className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500" type="password" value='John' />
                        </div>

                        <div className="flex flex-row justify-between">
                            <a href="#" className="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white uppercase bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Save</a>
                        </div>

                    </div >
                </div>
            </div>
        </div>

    )
}

export default Profile