import rectangle237 from '../assets/images/rectangle237.png'
import rectangle238 from '../assets/images/rectangle238.png'
import rectangle239 from '../assets/images/rectangle239.png'

const OurServices = () => {
    return (
        <div className='pb-10 px-10'>
            <div className='flex items-center justify-center text-6xl text-bold py-10'><h1>Our Services</h1></div>
            <div className='grid grid-rows-3 justify-items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-20 lg:gap-x-52 gap-y-4'>
                    <div>
                        <h3 className='text-3xl text-bold pb-5'>Customize it for you</h3>
                        <div>
                            Our tailoring services go beyond the ordinary. From the moment you step into our shop, our team of expert consultants will guide you through a personalised journey, ensuring that every element of your suit is tailored to your exact measurements, preferences, and lifestyle. We use only the finest fabrics and materials, sourced from renowned suppliers, to guarantee the highest quality and comfort.
                        </div>
                    </div>
                    <div>
                        <img alt="" src={rectangle237} />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-20 lg:gap-x-52 gap-y-4'>
                    <div className='order-1 md:order-2'>
                        <img alt="" src={rectangle238} />
                    </div>
                    <div>
                        <h3 className='order-2 md:order-1 text-3xl text-bold pb-5'>Not only for men, also for children</h3>
                        <div>
                            Our tailoring services go beyond the ordinary. From the moment you step into our shop, our team of expert consultants will guide you through a personalised journey, ensuring that every element of your suit is tailored to your exact measurements, preferences, and lifestyle. We use only the finest fabrics and materials, sourced from renowned suppliers, to guarantee the highest quality and comfort.


                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-20 lg:gap-x-52 gap-y-4'>
                    <div>
                        <h3 className='text-3xl text-bold pb-5'>Shop at Home</h3>
                        <div>Our tailoring services go beyond the ordinary. From the moment you step into our shop, our team of expert consultants will guide you through a personalised journey, ensuring that every element of your suit is tailored to your exact measurements, preferences, and lifestyle. We use only the finest fabrics and materials, sourced from renowned suppliers, to guarantee the highest quality and comfort.

                        </div>
                    </div>
                    <div>
                        <img alt="" src={rectangle239} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurServices