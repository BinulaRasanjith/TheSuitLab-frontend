
import loginImage from '../assets/images/LoginBackground.png'
import googleIcon from '../assets/images/googleIcon.png'
import TSL_LOGO_SM from '../assets/images/TSL_LOGO_SM.png'


const Signup = () => {
    return (
        <div>
            <div className='flex items-center justify-center m-auto overflow-hidden'>

                <img className='object-cover h-screen relative w-full ' src={loginImage} alt="login image" />
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center md:gap-x-0 lg:gap-x-10 xl:gap-x-20 absolute px-2'>

                    <div className='hidden md:flex flex-col justify-between'>
                        <div className='flex items-center pt-5'>
                            <div><img src={TSL_LOGO_SM} alt="" /></div>
                            <div className='lg:flex hidden text-white text-6xl'><p>The Suit Lab</p></div>

                        </div>
                        <div className='flex flex-col flex-wrap items-start text-white text-4xl'>
                            <p>SIGN UP TO</p>
                            <p>EXPOLRE THE FASHION</p>
                        </div>
                    </div>


                    <div className='flex flex-col bg-white drop-shadow-2xl rounded-3xl'>
                        <div className='flex items-center justify-around md:justify-center  pt-3 md:pt-5 float-left font-bold'>
                            <div className='flex flex-col items-start' >
                                <div className='flex gap-2 text-2xl md:text-4xl'>
                                    <p>Sign</p>
                                    <p>Up</p>
                                </div>
                                <div className='flex md:hidden'>WELCOME TO THE SUIT LAB</div>
                            </div>
                            <div className='flex md:hidden'>
                                <img className='h-14' src={TSL_LOGO_SM} alt="" />
                            </div>
                        </div>
                        <form className='flex flex-col align-center justify-center float-left'>
                            <div class="grid gap-4 py-3 grid-cols-1 md:grid-cols-2 lg:pl-10 lg:pr-10 pl-5 pr-5 max-w-2xl">
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
                                </div>
                            </div>

                            <div className='flex items-center flex-col'>
                                <div className='flex flex-col items-start'>
                                    <div className='text-red-700 float-left px-1'>Account does not exixt or Password is incorrect</div>
                                </div>
                                <div className='py-2 float-left'>
                                    <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center ">Sign Up</button>
                                </div>
                                <div className='flex item-center justify-center align-center pb-2 float-left'>
                                    ----------------Or------------------
                                </div>

                            </div>
                            <div className='flex flex-col py-3 px-2 sm:px-20 bg-slate-200 items-center rounded-bl-3xl rounded-br-3xl float-left'>
                                <div className='flex justify-center align-center float-left'>
                                    <img className='pr-2' src={googleIcon} alt="googleIcon" />
                                    <span className='text-stone-500'>Sign Up with google</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup