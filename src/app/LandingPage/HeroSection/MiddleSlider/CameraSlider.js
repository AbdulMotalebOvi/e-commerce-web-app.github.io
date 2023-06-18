'use client'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";

// Import your images
import img1 from '../../../assests/images/imgCamera.png';
import Image from 'next/image';
import useGetData from '@/app/Hooks/useGetData';
import Loader from '@/app/Loader/Loader';




const CameraSlider = () => {
    const url = 'https://dummyjson.com/products'
    const { data, isLoading, error } = useGetData(url)
    const fetchingProducts = data?.products.length
    if (isLoading) {
        return <Loader />
    }
    if (error) {
        window.alert('An error occurred. Please try again.');
    }

    return (
        <div>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
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

                    <div style={{ width: '410px', height: '410px', borderRadius: '50%', border: '10px solid rgba(32, 98, 255, 0.4)' }}>
                        {/* <SwiperSlide> */}
                        <Image style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} src={img1} alt='Image 1' />
                        {/* </SwiperSlide> */}
                    </div>


                </>


                {/* Slide 2 */}


                {/* Slide 3 */}


                {/* Add more slides as needed */}

            </Swiper>
        </div>
    );
};

export default CameraSlider;
