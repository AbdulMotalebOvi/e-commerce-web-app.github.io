import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

function RatingStars({ rating, handleRadioChange }) {
    return (
        <div className="rating rating-md space-x-3 flex">
            {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className="flex items-center">
                    <input
                        type="radio"
                        value={value}
                        onChange={handleRadioChange}
                        className="sr-only"
                        checked={parseInt(rating, 10) === value}
                    />
                    <StarIcon
                        className={`h-6 w-6 ${value <= rating ? 'text-yellow-500' : 'text-gray-400'
                            }`}
                        style={{ flex: 'none' }}
                    />
                </label>
            ))}
        </div>
    );
}

export default RatingStars;
