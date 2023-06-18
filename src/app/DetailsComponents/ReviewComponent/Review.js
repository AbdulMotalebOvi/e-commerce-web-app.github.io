import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'

const Review = ({ number }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starClass = i <= number ? 'text-yellow-400' : 'text-gray-500';
            stars.push(
                <StarIcon key={i} className={`w-[16px] h-[16px] inline-block ${starClass}`} />
            );
        }
        return stars;
    };

    return <div className="star-rating">{renderStars()}</div>;
};

export default Review;
