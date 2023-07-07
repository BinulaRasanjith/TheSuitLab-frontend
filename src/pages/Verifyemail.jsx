import React from 'react'
import loginImage from '../assets/images/loginImage.png'
import googleIcon from '../assets/images/googleIcon.png'

const Verifyemail = () => {
    return (
        <div >
            <div className='flex overflow-hidden'>

                <img className='object-cover h-screen relative w-full sm:w-6/12 ' src={loginImage} alt="login image" />

                <div className='flex flex-col bg-white drop-shadow-2xl absolute top-5 sm:top-10 md:top-32 right-2 md:right-60 xl:right-80  z-20 rounded-3xl'>
                    <div className='flex align-center justify-center gap-5 text-xl mb-3 md:mb-8 md:text-4xl pt-3 md:pt-10 float-left'>
                        <div>Verify</div>
                        <div>Email</div>
                    </div>
                    <div className='flex flex-col justify-center items-center mb-1 pl-1 pr-1 md:pl-0 md:pr-0 md:mb-6'>
                        <div>You will receive a verification code to your email</div>
                        <div>jamesfaulkner@gmail.com</div>
                    </div>
                    <form className='flex flex-col align-center justify-center float-left'>
                        <div className='lg:hidden flex flex-col align-center justify-center xl:ml-20 xl:mr-20 2xl:ml-40 2xl:mr-40'>
                            <div className='flex flex-col  lg:pl-10 lg:pr-10 pl-5 pr-5 pb-5 md:pb-10 max-w-2xl float-left'>
                                <input className='outline rounded text-xl pl-5 pb-2 pt-2 outline-gray-300' placeholder='Enter Verification Code' type="password" id="password" name="password" />
                            </div>
                        </div>

                        <div class="lg:block hidden relative z-0 w-full mb-6 group lg:pl-20 lg:pr-20 pl-10 pr-10 max-w-2xl">
                            <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                            <label for="floating_password" class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-6  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Verification Code</label>
                        </div>


                        <div className='2xl:ml-40 xl:ml-20 lg:pl-10 md:pl-5 pl-3 pr-3 text-red-700 float-left pb-2 md:pb-5 '>Account does not exixt or Password is incorrect</div>
                        <div className='flex items-center justify-center float-left'>
                            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 md:px-20 text-center mr-2 mb-2 ">Verify</button>

                        </div>
                        <div className='2xl:ml-40 xl:ml-20 lg:pl-10  pl-3 pr-3 pb-2 text-stone-500 float-left '>Back to Login</div>
                        <div className='flex item-center justify-center align-center pb-5 float-left'>
                            ----------------Or------------------
                        </div>
                        <div className='flex flex-col xl:pr-50 xl:pl-50 lg:pr-40 lg:pl-40 md:pr-20 md:pl-20 pr-2 pl-2 pt-5 pb-5 md:pb-10 bg-slate-200 item-center rounded-bl-3xl rounded-br-3xl float-left'>
                            <div className='flex justify-center align-center float-left'>
                                <img className='pr-2' src={googleIcon} alt="googleIcon" />
                                <span className='text-stone-500'>Sign Up with google</span>
                            </div>
                            <div className='flex justify-center align-center float-left'>

                                <div className='text-stone-500 mr-2'>New Here?</div>
                                <div className='text-black'>Create New Account</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Verifyemail