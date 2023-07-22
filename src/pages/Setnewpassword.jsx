import loginImage from '../assets/images/LoginBackground.png'
import TSL_LOGO_SM from '../assets/images/TSL_LOGO_SM.png'

const SetNewPassword = () => {
    return (
        <div >
            <div className='flex items-center justify-center m-auto overflow-hidden '>

                <img className='object-cover h-screen relative w-full ' src={loginImage} alt="login image" />
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center md:gap-x-0 lg:gap-x-10 xl:gap-x-20 absolute px-2'>

                    <div className='hidden md:flex flex-col justify-between'>
                        <div className='flex items-center pt-10'>
                            <div><img src={TSL_LOGO_SM} alt="" /></div>
                            <div className='lg:flex hidden text-white text-6xl'><p>The Suit Lab</p></div>

                        </div>
                        <div className='flex flex-col items-start text-white text-4xl'>
                            <p>REMEMBER</p>
                            <p>YOUR PASSWORD</p>
                        </div>
                    </div>


                    <div className='flex flex-col bg-white drop-shadow-2xl rounded-3xl py-5 px-0 sm:px-3'>
                        <div className='flex items-center justify-around md:justify-center py-5 float-left font-bold'>
                            <div className='flex flex-col items-start' >
                                <div className='flex gap-3 text-2xl md:text-4xl'>
                                    <p>Set</p>
                                    <p>New</p>
                                    <p>Password</p>
                                </div>
                                <div className='flex md:hidden'>WELCOME TO THE SUIT LAB</div>
                            </div>
                            <div className='flex md:hidden'>
                                <img className='h-14' src={TSL_LOGO_SM} alt="" />
                            </div>
                        </div>
                        <form className='flex flex-col align-center justify-center float-left lg:pl-10 lg:pr-10 pl-2 pr-2'>
                            <div className='flex flex-col flex-wrap justify-center items-center py-5'>
                                <div>You will receive a verification code to your email </div>
                                <div>jamesfaulkner@gmail.com</div>
                            </div>
                            <div className='lg:hidden flex flex-col align-center justify-center'>
                                <div className='flex flex-col  lg:pl-10 lg:pr-10 pl-5 pr-5 pb-5 max-w-2xl float-left'>
                                    <input className='outline rounded text-xl pl-5 pb-2 pt-2 outline-gray-300' placeholder='Enter New password' type="password" id="password" name="password" />
                                </div>
                                <div className='flex flex-col  lg:pl-10 lg:pr-10 pl-5 pr-5 pb-5 max-w-2xl float-left'>
                                    <input className='outline rounded text-xl pl-5 pb-2 pt-2 outline-gray-300' placeholder='Re-Enter New password' type="password" id="password" name="password" />
                                </div>
                            </div>

                            <div className="lg:block hidden relative z-0 w-full mb-6 group max-w-2xl">
                                <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter New password</label>
                            </div>
                            <div className="lg:block hidden relative z-0 w-full mb-6 group max-w-2xl">
                                <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Re-Enter New Password</label>
                            </div>

                            <div className='flex items-center flex-col pb-5'>
                                <div className='pb-5 float-left'>
                                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 ">Forgot Password</button>

                                </div>
                                
                                <div>Back to Login</div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SetNewPassword