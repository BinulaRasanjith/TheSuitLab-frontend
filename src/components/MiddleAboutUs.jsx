import React from 'react'
import Rectangle244 from '../assets/images/Rectangle244.png'
import Rectangle240 from '../assets/images/Rectangle240.png'
import Rectangle241 from '../assets/images/Rectangle241.png'
import Rectangle242 from '../assets/images/Rectangle242.png'
const MiddleAboutUs = () => {
    return (
        <div className='p-10'>
            <div>
                <div className='font-bold text-4xl sm:text-5xl pb-5'><p>About Us</p></div>
                <div className='grid grid-cols-1 md:grid-cols-2  gap-y-4 justify-items-center'>
                    <div>
                        <p className='pb-2'>Welcome to The Suit Lab, your destination for exceptional men's suits tailored to perfection. With a passion for craftsmanship and a commitment to style, we offer a unique and personalized experience that transforms the way you look and feel. </p>
                        <p className='pb-2'> At The Suit Lab, we understand that a well-fitted suit is more than just an outfit – it's a statement of confidence, elegance, and individuality. With our meticulous attention to detail and skilled tailors, we take pride in creating suits that not only enhance your appearance but also reflect your distinct personality and taste.</p>
                        <p> Our tailoring services go beyond the ordinary. From the moment you step into our shop, our team of expert consultants will guide you through a personalised journey, ensuring that every element of your suit is tailored to your exact measurements, preferences, and lifestyle. We use only the finest fabrics and materials, sourced from renowned suppliers, to guarantee the highest quality and comfort.</p>
                    </div>
                    <div>
                        <img src={Rectangle244} alt="" />
                    </div>
                </div>

            </div>

            <div>
                <div className='font-bold text-4xl sm:text-5xl pb-5'><p>Our Mission</p></div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 justify-items-center'>
                    <div>
                        <p className='pb-5 text-3xl'>Dress the real you</p>
                        <p>Our tailoring services go beyond the ordinary. From the moment you step into our shop, our team of expert consultants will guide you through a personalised journey, ensuring that every element of your suit is tailored to your exact measurements, preferences, and lifestyle. We use only the finest fabrics and materials, sourced from renowned suppliers, to guarantee the highest quality and comfort.</p>
                    </div>
                    <div>
                        <img src={Rectangle240} alt="" />
                    </div>
                </div>

            </div>

            <div>
                <div className='font-bold text-4xl sm:text-5xl pb-5'><p>Experience</p></div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 justify-items-center'>
                    <div className='order-2 md:order-1'>
                        <img src={Rectangle241} alt="" />
                    </div>
                    <div className='order-1 md:order-2'>
                        <p className='pb-5 text-3xl'>Dress the real you</p>
                        <p>Our tailoring services go beyond the ordinary. From the moment you step into our shop, our team of expert consultants will guide you through a personalised journey, ensuring that every element of your suit is tailored to your exact measurements, preferences, and lifestyle. We use only the finest fabrics and materials, sourced from renowned suppliers, to guarantee the highest quality and comfort.</p>
                    </div>
                </div>

            </div>

            <div className='py-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 justify-items-center'>
                    <div>
                        <p className='pb-5 text-3xl'>The backstage people of your garments</p>
                        <p>Our tailoring services go beyond the ordinary. From the moment you step into our shop, our team of expert consultants will guide you through a personalised journey, ensuring that every element of your suit is tailored to your exact measurements, preferences, and lifestyle. We use only the finest fabrics and materials, sourced from renowned suppliers, to guarantee the highest quality and comfort.</p>
                    </div>
                    <div>
                        <img src={Rectangle242} alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MiddleAboutUs