import loginImage from '../assets/images/LoginBackground.png'
import TSL_LOGO_SM from '../assets/images/TSL_LOGO_SM.png'
import googleIcon from '../assets/images/googleIcon.png'

const Forgotpassword = () => {
    return (
        <div >
            <div className='flex items-center justify-center m-auto overflow-hidden'>

                <img className='object-cover h-screen relative w-full ' src={loginImage} alt="login image" />
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center md:gap-x-0 lg:gap-x-10 xl:gap-x-20 absolute'>

                    <div className='hidden md:flex flex-col justify-between'>
                        <div className='flex items-center pt-10'>
                            <div><img src={TSL_LOGO_SM} alt="" /></div>
                            <div className='lg:flex hidden text-white text-6xl'><p>The Suit Lab</p></div>

                        </div>
                        <div className='flex flex-col items-start text-white text-4xl'>
                            <p>WELCOME</p>
                            <p>TO THE SUIT LAB</p>
                        </div>
                    </div>


                    <div className='flex flex-col bg-white drop-shadow-2xl rounded-3xl py-5 px-3'>
                        <div className='flex items-center justify-around md:justify-center py-5 float-left font-bold'>
                            <div className='flex flex-col items-start' >
                                <div className='flex gap-3 text-2xl md:text-4xl'>
                                    <p>Forgot</p>
                                    <p>Password</p>
                                </div>
                                <div className='flex md:hidden'>WELCOME TO THE SUIT LAB</div>
                            </div>
                            <div className='flex md:hidden'>
                                <img className='h-14' src={TSL_LOGO_SM} alt="" />
                            </div>
                        </div>
                        <form className='flex flex-col align-center justify-center float-left'>
                            <div className='flex flex-col flex-wrap justify-center items-center py-5'>
                                <div>Enter the email address associated with your account and </div>
                                <div>we'll send you an verification code to verify you</div>
                            </div>
                            <div className='lg:hidden flex flex-col align-center justify-center'>
                                <div className='flex flex-col mb-6 lg:pl-10 pl-5 pr-5 max-w-2xl float-left'>
                                    <input className='outline rounded text-xl pl-5 md:pb-2 md:pt-2 pb-1 pt-1 outline-gray-300' placeholder='Example@gmail.com' type="email" id="email" name="email" />
                                </div>
                            </div>

                            <div className="lg:block hidden relative z-0 mb-6 w-full group pl-10 pr-10 max-w-2xl">
                                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                <label for="floating_email" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>

                            <div className='flex items-center flex-col pb-5'>
                                <div className='pb-5 float-left'>
                                    <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 ">Forgot Password</button>

                                </div>
                                <div className='flex item-center justify-center align-center pb-5 float-left'>
                                    ----------------Or------------------
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

export default Forgotpassword




