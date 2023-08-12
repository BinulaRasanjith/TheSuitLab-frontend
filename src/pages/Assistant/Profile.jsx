/* eslint-disable perfectionist/sort-jsx-props */
const Profile = () => {
    return (
        <div>
            <div className=" flex flex-col justify-between w-full p-6 gap-6">


                <div className=" flex justify-center">
                    <div></div>
                </div>

                <div className=" flex gap-6">
                    <div className=" border border-solid rounded flex flex-col gap-5 bg-gray-50 px-7 py-9 w-1/2">
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

                    <div className=" border border-solid rounded flex flex-col gap-5 bg-gray-50 px-7 py-9 w-1/2">
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

export default Profile;