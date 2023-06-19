'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import { useEffect, useRef, useState } from "react";
import useGetData from "../../Hooks/useGetData";
import Loader from "../../Loader/Loader";
import Link from "next/link";
import SectionTitle from "@/app/SectionTitle/SectionTitle";


export default function Trending() {
    const [slider, setSlider] = useState(null);
    const [activeButton, setActiveButton] = useState(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        setSlider(sliderRef.current);
    }, []);
    const { data, isLoading } = useGetData('https://dummyjson.com/products')
    const myData = data?.products;
    if (isLoading) {
        return <Loader />
    }

    const handlePrev = () => {
        setActiveButton("prev");
        slider?.slickPrev();
    };

    const handleNext = () => {
        setActiveButton("next");
        slider?.slickNext();
    };

    const settings = {
        rows: 3,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="my-[100px] pl-[155px] pr-[165px]">
            <SectionTitle header='Shop Our Trending Products' desc='Shop Our Trending Products' />
            <div className="slider-navigation  flex items-center justify-end my-7">
                <button
                    className={`slider-prev mr-5 w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors ${activeButton === "prev" ? "bg-[#001439] text-white" : "bg-[#F4F4F4] rounded-full text-black"}`}
                    onClick={handlePrev}
                >
                    <ChevronLeftIcon className="h-6 w-6 text-black " />
                </button>
                <button
                    className={`slider-next w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeButton === "next" ? "bg-[#001439] text-white" : "bg-[#F4F4F4] rounded-full text-black"}`}
                    onClick={handleNext}
                >
                    <ChevronRightIcon className="h-6 w-6 text-black" />
                </button>
            </div>

            <Slider {...settings} ref={sliderRef} className="">
                {myData?.map((pd) => (
                    <>

                        <Link href={`/DetailsComponents/${pd.id}`} className="group  h-[500px] relative block overflow-hidden p-4">


                            <img
                                src={pd.thumbnail}
                                alt=""
                                className="h-[40px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                            />

                            <div className="relative border border-gray-100 bg-white p-6">
                                <span
                                    className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
                                >
                                    New
                                </span>

                                <h3 className="mt-4 text-[22px] font-medium text-[#171717]">{pd.title}</h3>

                                <p className="mt-1.5 text-sm text-[#FF4516]">${pd.price}</p>
                            </div>
                        </Link>

                    </>
                ))}
            </Slider>


        </section>
    )
}