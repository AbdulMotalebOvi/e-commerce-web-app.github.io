'use client'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './Review.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import RatingStars from './RatingStars';
import { useLocalStorage } from '@/app/IDContext/LocalStorageProvider';
import { BASE_URL } from '@/app/BaseUrl/config';
import useGetData from '@/app/Hooks/useGetData';


const YourReview = ({ setOpen, open, data }) => {
    const { myId } = useLocalStorage()
    const { thumbnail, title, price, id, description } = data;
    const [rating, setRating] = useState(null);
    const [inputChange, setInputChange] = useState()
    console.log(inputChange, rating);

    const url = `${BASE_URL}users/${myId}/posts`
    console.log(url);
    const { data: myData, isLoading } = useGetData(url)
    const reviewData = myData.posts
    console.log(reviewData);

    function handleRadioChange(event) {
        setRating(event.target.value);
    }
    const addReview = () => {
        const addReviews = {
            rating: rating,
            body: inputChange,
            userId: myId
        }
        try {
            fetch(`${BASE_URL}comments/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(addReviews)
            })
                .then(res => res.json())
                .then(data => console.log(data));
        } catch (error) {
            console.error('Error:', error);
        }

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
                    <div className="w-1/3 bg-cover" >
                        <img src={thumbnail} alt="" />
                    </div>

                    <div className="w-2/3 p-4 md:p-4">
                        <h1 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h1>

                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{description}</p>
                        <div>
                            <label className="sr-only" htmlFor="message">Description</label>
                            <textarea
                                className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Description"
                                rows="1"
                                id="description"

                                onChange={(e) => setInputChange(e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <RatingStars handleRadioChange={handleRadioChange} rating={rating} />
                            {/* <Review number={ratings} /> */}
                        </div>

                        <div className="flex justify-between mt-3 item-center">
                            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${price}</h1>
                            <button onClick={addReview} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Your Review</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default YourReview;