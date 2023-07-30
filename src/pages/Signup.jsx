import loginImage from '../assets/images/LoginBackground.png'
import TSL_LOGO_SM from '../assets/images/TSL_LOGO_SM.png'
import googleIcon from '../assets/images/googleIcon.png'


const Signup = () => {
    return (
        <div>
            <div className='flex items-center justify-center m-auto overflow-hidden'>

                <img alt="login image" className='object-cover h-screen relative w-full ' src={loginImage} />
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center md:gap-x-0 lg:gap-x-10 xl:gap-x-20 absolute px-2'>

                    <div className='hidden md:flex flex-col justify-between'>
                        <div className='flex items-center pt-5'>
                            <div><img alt="" src={TSL_LOGO_SM} /></div>
                            <div className='lg:flex hidden text-white text-6xl'><p>The Suit Lab</p></div>

                        </div>
                        <div className='flex flex-col flex-wrap items-start text-white text-4xl'>
                            <p>SIGN UP TO</p>
                            <p>EXPOLRE THE FASHION</p>
                        </div>
                    </div>


                    <div className='flex flex-col bg-white drop-shadow-2xl rounded-3xl'>
                        <div className='flex items-center justify-around md:justify-center  pt-3 md:pt-10 float-left font-bold'>
                            <div className='flex flex-col items-start' >
                                <div className='flex gap-2 text-2xl md:text-4xl'>
                                    <p>Sign</p>
                                    <p>Up</p>
                                </div>
                                <div className='flex md:hidden'>WELCOME TO THE SUIT LAB</div>
                            </div>
                            <div className='flex md:hidden'>
                                <img alt="" className='h-14' src={TSL_LOGO_SM} />
                            </div>
                        </div>
                        <form className='flex flex-col align-center justify-center float-left'>
                            <div className="grid gap-4 py-3 grid-cols-1 md:grid-cols-2 lg:pl-10 lg:pr-10 pl-5 pr-5 max-w-2xl">
                                <div>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" id="first_name" pattern="[A-Z][a-z]{50}" placeholder="First Name" required type="text"></input>
                                </div>
                                <div>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" id="last_name" pattern="[A-Z][a-z]{50}" placeholder="Last Name" required type="text"></input>
                                </div>
                                <div>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" id="company" pattern="[A-Z][a-z]{50}" placeholder="Address" required type="text"></input>
                                </div>
                                <div>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Contact" required type="tel"></input>
                                </div>
                                <div>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" id="website" placeholder="Password" required type="password"></input>
                                </div>
                                <div>
                                    <input className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" id="visitors" placeholder="Confirm Password" required type="password"></input>
                                </div>
                            </div>

                            <div className='flex items-center flex-col'>
                                <div className='flex flex-col items-start'>
                                    <div className='text-red-700 float-left px-1'>Account does not exixt or Password is incorrect</div>
                                </div>
                                <div className='py-2 float-left'>
                                    <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center " type="button">Sign Up</button>
                                </div>
                                <div className='flex item-center justify-center align-center pb-2 float-left'>
                                    ----------------Or------------------
                                </div>

                            </div>
                            <div className='flex flex-col py-5 px-2 sm:px-20 items-center rounded-bl-3xl rounded-br-3xl float-left'>
                                <div className='flex justify-center align-center float-left'>
                                    <img alt="googleIcon" className='pr-2' src={googleIcon} />
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