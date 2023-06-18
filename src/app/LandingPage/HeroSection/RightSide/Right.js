'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

// Import your images
import img1 from '../../../assests/images/cameraProduct.png';
import Image from 'next/image';

// ...

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

export default function Right() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    520: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 1,
                    },
                }}
            >
                {/* Slide 1 */}
                <>
                    <div className='flex flex-col mt-[60] space-y-10'>

                        <Image className='w-[130px] h-[130px] ' src={img1} alt='Image 1' />
                        <Image className='w-[130px] h-[130px] ' src={img1} alt='Image 1' />
                    </div>

                </>

                {/* Slide 2 */}


                {/* Slide 3 */}


                {/* Add more slides as needed */}

            </Swiper>
        </>
    )
}
