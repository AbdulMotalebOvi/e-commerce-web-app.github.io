'use client'
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import ButtonBlack from "@/app/ButtonBlack/ButtonBlack";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MySlider = ({ myData }) => {
    const [slider, setSlider] = useState(null);
    const [activeButton, setActiveButton] = useState(null);
    const sliderRef = useRef(null);
    const router = useRouter()

    useEffect(() => {
        setSlider(sliderRef.current);
    }, []);

    const handlePrev = () => {
        setActiveButton("prev");
        slider?.slickPrev();
    };

    const handleNext = () => {
        setActiveButton("next");
        slider?.slickNext();
    };

    const settings = {
        autoplay: true,
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
        <div className="grid grid-cols-4 gap-3">
            <div className="slider-navigation  flex items-center justify-center mb-10">
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

            <Slider {...settings} ref={sliderRef} className="col-span-3 ">
                {myData?.map((pd) => (
                    <>
                        <Link
                            href={`DetailsComponents/${pd.id}`}
                            className="block space-y-3 rounded-lg p-4 ml-5 bg-[#FFFDFE]"
                        >
                            <img
                                alt="Home"
                                src={pd.thumbnail}
                                className="h-56 w-full rounded-md object-cover"
                            />
                            <div className="mt-2 text-center space-y-5">
                                <h3 className="text-[#3B3849] font-semibold text-2xl line-clamp-1">{pd.title} </h3>
                                <p className="text-[#8D8D8D] text-[14px] line-clamp-2">{pd.description}</p>
                                <h4 className="font-semibold text-[18px] text-[#0E4B80]">{pd.price}.00 USD</h4>
                            </div>

                            <div className="text-center my-4">
                                <ButtonBlack title='Order Now' />
                            </div>
                        </Link>
                    </>
                ))}
            </Slider>


        </div>
    );
};

export default MySlider;
