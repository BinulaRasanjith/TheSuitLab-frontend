import React from 'react'
import loginImage from '../assets/images/loginImage.png'
import googleIcon from '../assets/images/googleIcon.png'

const Signup = () => {
    return (
        <div >
            <div className='flex overflow-hidden'>

                <img className='object-cover h-screen relative w-full sm:w-6/12 ' src={loginImage} alt="login image" />

                <div className='flex flex-col bg-white drop-shadow-2xl absolute top-5 md:top-32 right-2 md:right-60 xl:right-80  z-20 rounded-3xl'>
                    <div className='flex align-center justify-center gap-3 text-xl md:text-4xl pt-3 md:pt-10 float-left'>
                        <div>Sign</div>
                        <div>Up</div>
                    </div>
                    <form className='flex flex-col align-center justify-center float-left'>


                        <div class="grid gap-6 my-6 md:grid-cols-2 lg:pl-10 lg:pr-10 pl-5 pr-5 max-w-2xl">
                            <div>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" pattern="[A-Z][a-z]{50}" required></input>
                            </div>
                            <div>
                                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" pattern="[A-Z][a-z]{50}" required></input>
                            </div>
                            <div>
                                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" pattern="[A-Z][a-z]{50}" required></input>
                            </div>
                            <div>
                                <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
                            </div>
                            <div>
                                <input type="password" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required></input>
                            </div>
                            <div>
                                <input type="password" id="visitors" class="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm Password" required></input>
                                <p className='text-red-700'>Password does not match</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-center pb-2 md:pb-5 float-left'>
                            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-10 py-2.5 text-center mr-2 mb-2 ">Sign Up</button>

                        </div>
                        <div className='flex item-center justify-center align-center pb-3 md:pb-5 float-left'>
                            ----------------Or------------------
                        </div>
                        <div className='flex flex-col xl:pr-50 xl:pl-50 lg:pr-40 lg:pl-40 md:pr-20 md:pl-20 pr-2 pl-2 md:pt-5 md:pb-10 pb-5 bg-slate-200 item-center rounded-bl-3xl rounded-br-3xl float-left'>
                            <div className='flex justify-center align-center float-left'>
                                <img className='pr-2' src={googleIcon} alt="googleIcon" />
                                <span className='text-stone-500'>Sign Up with google</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signup