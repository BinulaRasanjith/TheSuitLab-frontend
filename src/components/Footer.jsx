import TSL_LOGO from '../assets/images/TSL_LOGO.png'
import mastercard from '../assets/images/mastercard.png'
import visa from '../assets/images/visa.png'

const Footer = () => {
    return (

        <div className='flex flex-col justify-between bg-black h-96 p-10'>
            <div className='flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 py-8'>
                <div className=' flex flex-col gap-4'>
                    <div><img className='h-20 w-60' src={TSL_LOGO} alt="TSL_LOGO" /></div>
                    <div className='text-white max-w-xl m-auto'>The Suit Lab, the pioneer-tailoring mart which is located at No 296,
                        W. A. Weerasinghe Mawatha, Colombo 10, Sri Lanka is one of the first few tailors in Sri Lanka to offer
                        custom-tailored suits and shirts and trousers.
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:justify-between md:gap-40 gap-10 md:pr-20 pl-5 pr-5'>
                    <div>
                        <h3 className='text-white text-2xl font-bold pb-3'>Shop</h3>
                        <ul>
                            <li className='text-white'>Suits</li>
                            <li className='text-white'>Shirts</li>
                            <li className='text-white'>Trousers</li>
                            <li className='text-white'>Accessories</li>
                            <li className='text-white'>Rent Costume</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-white text-2xl font-bold pb-3'>Customer Care</h3>
                        <ul>
                            <li className='text-white'>About us</li>
                            <li className='text-white'>FAQ</li>
                            <li className='text-white'>Contact us</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='flex flex-col md:flex-row items-center justify-between gap-5 md:gap-80'>
                <div className='text-white'>© 2023 The Suit Lab. All rights reserved.</div>
                <div className='flex gap-5 h-8'>
                    <img src={mastercard} alt="mastercard" />
                    <img src={visa} alt="visa" />
                </div>

            </div>
        </div>
    )
}

export default Footer