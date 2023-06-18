'use client'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './Review.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import RatingStars from './RatingStars';


const YourReview = ({ setOpen, open, data }) => {
    const { img, name, price, ratings, } = data;
    const [rating, setRating] = useState(null);

    function handleRadioChange(event) {
        setRating(event.target.value);
    }

    const closeIcon = (
        <XMarkIcon className="h-[24px] w-[24px] text-black" />
    );
    return (
        <>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                closeIcon={closeIcon}
                center
                classNameNames={{
                    overlayAnimationIn: 'customEnterOverlayAnimation',
                    overlayAnimationOut: 'customLeaveOverlayAnimation',
                    modalAnimationIn: 'customEnterModalAnimation',
                    modalAnimationOut: 'customLeaveModalAnimation',
                }}
                animationDuration={800}
            >

                <div className="flex max-w-md overflow-hidden ">
                    <div className="w-1/3 bg-cover" style={{ backgroundImage: `url(${img})` }}></div>

                    <div className="w-2/3 p-4 md:p-4">
                        <h1 className="text-xl font-bold text-gray-800 dark:text-white">{name}</h1>

                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</p>

                        <div>
                            <RatingStars handleRadioChange={handleRadioChange} rating={rating} />
                            {/* <Review number={ratings} /> */}
                        </div>

                        <div className="flex justify-between mt-3 item-center">
                            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${price}</h1>
                            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Your Review</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default YourReview;