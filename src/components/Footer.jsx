import TSL_LOGO from '../assets/images/TSL_LOGO.png'
import mastercard from '../assets/images/mastercard.png'
import visa from '../assets/images/visa.png'

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 py-8'>
                <div className='md:pl-20 pl-5'>
                    <div><img className='h-20 w-60' src={TSL_LOGO} alt="TSL_LOGO" /></div>
                    <div className='text-white max-w-xl m-auto'>Hercules Tailors, the pioneer-tailoring mart which is located at No: 241,
                        Horana Road, Kohuwala, is one of the first few tailors in Sri Lanka to offer
                        custom-tailored suits and shirts and trousers.
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:justify-between md:gap-40 gap-10 md:pr-20 pl-5 pr-5'>
                    <div>
                        <h3 className='text-white text-2xl pb-3'>Shop</h3>
                        <ul>
                            <li className='text-white'>Suits</li>
                            <li className='text-white'>Shirts</li>
                            <li className='text-white'>Trousers</li>
                            <li className='text-white'>Accessories</li>
                            <li className='text-white'>Rent Costume</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-white text-2xl pb-3'>Customer Care</h3>
                        <ul>
                            <li className='text-white'>About us</li>
                            <li className='text-white'>FAQ</li>
                            <li className='text-white'>Contact us</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-80 pb-10 px-10'>
                <div className='text-white'>© 2023 The Suit Lab. All rights reserved.</div>
                <div className='flex'>
                    <img src={mastercard} alt="mastercard" />
                    <img src={visa} alt="visa" />

                </div>

            </div>
        </div>
    )
}

export default Footer