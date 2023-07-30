
import { useEffect, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import testimony_coat from '../assets/images/testimony_coat.png';
import testimony_shirt from '../assets/images/testimony_shirt.png';
import testimony_trouser from '../assets/images/testimony_trouser.png';

const OurProducts = () => {

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

                    allowSlideNext={true}
                    allowSlidePrev={true}
                    autoplay={{ delay: 5000, disableOnInteraction: true }}
                    className='w-full h-full px-12 py-10'
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 2, }}
                    setWrapperSize={true}
                    slidesPerView={slidesPerView}
                    spaceBetween={50}
                >
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Suits</p></div>
                            <div><hr /></div>
                            <div>
                                <img alt="" className="w-full h-64" src={testimony_coat} />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Trousers</p></div>
                            <div><hr /></div>
                            <div>
                                <img alt="" className="w-full h-64" src={testimony_trouser} />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Shirts</p></div>
                            <div><hr /></div>
                            <div>
                                <img alt="" className="w-full h-64" src={testimony_shirt} />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Ties</p></div>
                            <div><hr /></div>
                            <div>
                                <img alt="" className="w-full h-64" src={testimony_trouser} />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Coats</p></div>
                            <div><hr /></div>
                            <div>
                                <img alt="" className="w-full h-64" src={testimony_coat} />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div><p className='flex items-center justify-center text-bold text-2xl py-3 font-bold'>Boas</p></div>
                            <div><hr /></div>
                            <div>
                                <img alt="" className="w-full h-64" src={testimony_shirt} />

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


            <div>
                <Swiper

                    allowSlideNext={true}
                    allowSlidePrev={true}
                    autoplay={{ delay: 5000, disableOnInteraction: true }}
                    className='w-full h-full px-12 py-10'
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 2, }}
                    setWrapperSize={true}
                    slidesPerView={slidesPerView}
                    spaceBetween={50}
                >
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Suits</p></div>
                            <div><hr /></div>
                            <div>
                                <img alt="" className="w-full h-64" src={testimony_coat} />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Trousers</p></div>
                            <div><hr /></div>
                            <div>
                                <img alt="" className="w-full h-64" src={testimony_trouser} />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Shirts</p></div>
                            <div><hr /></div>
                            <div>
                                <img alt="" className="w-full h-64" src={testimony_shirt} />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Ties</p></div>
                            <div><hr /></div>
                            <div>
                                <img alt="" className="w-full h-64" src={testimony_trouser} />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div className='flex items-center justify-center text-bold text-2xl py-3 font-bold'><p>Coats</p></div>
                            <div><hr /></div>
                            <div>
                                <img alt="" className="w-full h-64" src={testimony_coat} />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-lg ring-gray-300 ring-1 rounded-xl px-3 py-2'>
                            <div><p className='flex items-center justify-center text-bold text-2xl py-3 font-bold'>Boas</p></div>
                            <div><hr /></div>
                            <div>
                                <img alt="" className="w-full h-64" src={testimony_shirt} />

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>

    )
}

export default OurProducts