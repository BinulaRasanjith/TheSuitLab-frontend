
import { useEffect, useState } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import testimony_coat from '../assets/images/testimony_coat.png';
import testimony_trouser from '../assets/images/testimony_trouser.png';
import testimony_shirt from '../assets/images/testimony_shirt.png';

const Ourproducts = () => {

    const [slidesPerView, setSlidesPerView] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

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

    return (
        <div>


            <div className='flex flex-col' >
                <div className='flex items-center justify-center text-6xl text-bold pt-10 '>
                    <h1>Our Products</h1>
                </div>
                <Swiper

                    className='w-full h-full px-12 py-10'
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    setWrapperSize={true}
                    spaceBetween={50}
                    slidesPerView={slidesPerView}
                    navigation
                    pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 2, }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay={{ delay: 5000, disableOnInteraction: true }}
                    allowSlideNext={true}
                    allowSlidePrev={true}
                >
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold font-bold'><p>Suits</p></div>
                            <div><hr /></div>
                            <div>
                                <img className="w-full h-64" src={testimony_coat} alt="" />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Trousers</p></div>
                            <div><hr /></div>
                            <div>
                                <img className="w-full h-64" src={testimony_trouser} alt="" />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Shirts</p></div>
                            <div><hr /></div>
                            <div>
                                <img className="w-full h-64" src={testimony_shirt} alt="" />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Ties</p></div>
                            <div><hr /></div>
                            <div>
                                <img className="w-full h-64" src={testimony_trouser} alt="" />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Coats</p></div>
                            <div><hr /></div>
                            <div>
                                <img className="w-full h-64" src={testimony_coat} alt="" />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div><p className='flex items-center justify-center text-bold text-2xl py-3 font-bold'>Boas</p></div>
                            <div><hr /></div>
                            <div>
                                <img className="w-full h-64" src={testimony_shirt} alt="" />

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


            <div>
                <Swiper

                    className='w-full h-full px-12 py-10'
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    setWrapperSize={true}
                    spaceBetween={50}
                    slidesPerView={slidesPerView}
                    navigation
                    pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 2, }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay={{ delay: 5000, disableOnInteraction: true }}
                    allowSlideNext={true}
                    allowSlidePrev={true}
                >
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold font-bold'><p>Suits</p></div>
                            <div><hr /></div>
                            <div>
                                <img className="w-full h-64" src={testimony_coat} alt="" />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Trousers</p></div>
                            <div><hr /></div>
                            <div>
                                <img className="w-full h-64" src={testimony_trouser} alt="" />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Shirts</p></div>
                            <div><hr /></div>
                            <div>
                                <img className="w-full h-64" src={testimony_shirt} alt="" />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Ties</p></div>
                            <div><hr /></div>
                            <div>
                                <img className="w-full h-64" src={testimony_trouser} alt="" />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Coats</p></div>
                            <div><hr /></div>
                            <div>
                                <img className="w-full h-64" src={testimony_coat} alt="" />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div><p className='flex items-center justify-center text-bold text-2xl py-3 font-bold'>Boas</p></div>
                            <div><hr /></div>
                            <div>
                                <img className="w-full h-64" src={testimony_shirt} alt="" />

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>

    )
}

export default Ourproducts