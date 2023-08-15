/* eslint-disable perfectionist/sort-jsx-props */
import AVATAR from '../../assets/images/avatar.png'


const Profile = () => {
    return (
        <div>
            <div className=" flex flex-col justify-between w-full p-10 gap-6">


                <div className=" flex justify-start">
                    <div>
                        {/* <div className="text-center">
                            <img
                                src={AVATAR}
                                className="mx-auto mb-4 w-28 border border-zinc-500 rounded-lg"
                                alt="Avatar" />
                            <h5 className="mb-2 text-xl font-medium leading-tight">Bhanuka Rajakaruna</h5>
                            <p className="text-neutral-500 dark:text-neutral-400">Operation Assistant</p>
                        </div> */}
                        <div className=" flex justify-center gap-12 mx-5">
                            <div className=" border-neutral-200 rounded-lg"><img
                                src={AVATAR}
                                className="mx-auto mb-4 w-36 border border-zinc-500 rounded-lg"
                                alt="Avatar" /></div>
                            <div className=' flex flex-col justify-center'>
                                <div><h5 className="mb-2 text-xl font-medium leading-tight"></h5></div>
                                <div><p className="text-neutral-500 dark:text-neutral-400">Operation Assistant</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex gap-12">
                    <div className=" border border-solid rounded flex flex-col gap-5 bg-gray-50 px-7 py-9 w-full">
                        <div>
                            <label htmlFor="currency" className=" ">First Name</label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Pasan"
                            />
                        </div>
                        <div>
                            <label htmlFor="currency" className=" ">Last Name</label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Gamage"
                            />
                        </div>
                        <div>
                            <label htmlFor="currency" className=" ">Mobile</label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="0764927560"
                            />
                        </div>
                        <div>
                            <button className=" w-full rounded-md border-0 py-2 text-gray-100 bg-black">Update Now</button>
                        </div>
                    </div>

                    <div className=" border border-solid rounded flex flex-col gap-5 bg-gray-50 px-7 py-9 w-full">
                        <div>
                            <label htmlFor="currency" className=" ">Current Password</label>
                            <input
                                type="password"
                                name="price"
                                id="price"
                                className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Current Password"
                            />
                        </div>
                        <div>
                            <label htmlFor="currency" className=" ">New Password</label>
                            <input
                                type="password"
                                name="price"
                                id="price"
                                className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="New Password"
                            />
                        </div>
                        <div>
                            <label htmlFor="currency" className=" ">Confirm Password</label>
                            <input
                                type="password"
                                name="price"
                                id="price"
                                className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Confirm New Password"
                            />
                        </div>
                        <div>
                            <button className=" w-full rounded-md border-0 py-2 text-gray-100 bg-black" >Change Password</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className=" flex justify-center w-full">
                <div className=" flex flex-col justify-center h-screen">
                    <div className=" text-4xl font-semibold text-zinc-400">This profile settings page is under development :(</div>
                </div>
            </div> */}

        </div>
    );
};

export default Profile;