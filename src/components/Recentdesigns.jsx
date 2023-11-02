import { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// import PreDesignedItemCard from "./PreDesignedItemCard";
import { getRecentDesigns } from '../api/customerAPI';
// import costume1 from '../assets/images/costume1.jpeg'
// import costume2 from '../assets/images/costume2.jpeg'
// import costume3 from '../assets/images/costume3.jpeg'
// import costume4 from '../assets/images/costume4.jpeg'
// import costume5 from '../assets/images/costume5.jpeg'
import { PRE_DESIGNED_COSTUME_IMAGES_URL } from '../config/config';


const RecentDesigns = () => {
    const [slidesPerView, setSlidesPerView] = useState(
        window.innerWidth >= 1200
            ? 5
            : window.innerWidth >= 992
                ? 4
                : window.innerWidth >= 768
                    ? 3
                    : window.innerWidth >= 500
                        ? 2
                        : 1

    );

    useEffect(() => {

        const handleResize = () => {
            let screenWidth = window.innerWidth;

            if (screenWidth >= 1200) {
                setSlidesPerView(5);
            } else if (screenWidth >= 992) {
                setSlidesPerView(4);
            } else if (screenWidth >= 768) {
                setSlidesPerView(3);
            } else if (screenWidth >= 500) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [jacketData, setJacketData] = useState([]); // Create state variable for jacket data

    useEffect(() => {
        getRecentDesigns()
            .then((response) => {
                setJacketData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <div>
            <p className='w-full text-bold text-4xl px-8 md:px-28 py-3'>Recent Designs</p>
            <div className=' pt-3'>
                <Swiper
                    allowSlideNext={true}
                    allowSlidePrev={true}
                    autoplay={{ delay: 10000, disableOnInteraction: true }}
                    className='w-full h-full px-12 pb-12'
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    navigation
                    pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 2, }}
                    setWrapperSize={true}
                    slidesPerView={slidesPerView}
                    spaceBetween={50}
                >
                    {jacketData && jacketData.map((item, index) => {
                        <SwiperSlide key={index}>
                            <div className="flex items-center flex-col bg-white rounded-lg drop-shadow-lg">

                                <img alt={`Image ${index + 1}`} className="rounded-t-lg h-64 md:h-44 w-full object-cover" src={`${PRE_DESIGNED_COSTUME_IMAGES_URL}/${item.image[0]}`} />
                                <small className='text-stone-500 pt-2 text-bold'>{item.itemName}</small>
                                <p>{item.color}</p>
                                <p>{item.status}</p>
                                <div className="flex items-center mt-1.5 mb-1.5">
                                    <svg aria-hidden="true" className="w-4 h-4 text-yellow-300 mr-1" fill="currentColor" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg aria-hidden="true" className="w-4 h-4 text-yellow-300 mr-1" fill="currentColor" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg aria-hidden="true" className="w-4 h-4 text-yellow-300 mr-1" fill="currentColor" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg aria-hidden="true" className="w-4 h-4 text-yellow-300 mr-1" fill="currentColor" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg aria-hidden="true" className="w-4 h-4 text-gray-200 dark:text-gray-600" fill="currentColor" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <p className=''>{item.rating}</p>
                                <p className='text-red-600'>{item.price}</p>
                                <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 my-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" type="button">View Design</button>
                            </div>
                        </SwiperSlide>
                    })}



                </Swiper>
            </div>

        </div>
    )
}

export default RecentDesigns