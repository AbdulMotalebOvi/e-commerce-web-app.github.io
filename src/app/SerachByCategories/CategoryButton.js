import React from 'react';
import { ChevronDownIcon, ChevronUpIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const CategoryButtons = React.memo(({ visibleCategories, handleFilterChange, toggleShowAllCategories, showAllCategories, handleHide, data }) => (
    <ul>
        <li className="flex flex-col ">
            {visibleCategories.map((ct, index) => (
                <button
                    key={index}
                    type="button" // Set the type to "button" to prevent form submission
                    onClick={() => handleFilterChange(ct)}
                    className="flex justify-between items-center space-y-1 mt-2 first:mt-0 text-left capitalize text-[18px]"
                >
                    {ct}
                    <span>
                        <ChevronRightIcon className="h-6 w-6 text-black" />
                    </span>
                </button>
            ))}
            {!showAllCategories && data.length > 7 && (
                <button
                    onClick={toggleShowAllCategories}
                    type="button" // Set the type to "button" to prevent form submission
                    className="flex font-semibold space-y-2 mt-4 first:mt-0 text-left capitalize text-[18px]"
                >
                    Show More
                    <span>
                        <ChevronDownIcon className="h-6 w-6 text-black ml-2" />
                    </span>
                </button>
            )}
            {showAllCategories && (
                <>
                    <button
                        onClick={handleHide}
                        type="button" // Set the type to "button" to prevent form submission
                        className="flex space-y-2 mt-4 first:mt-0 text-left capitalize text-[18px] font-semibold"
                    >
                        Hide all
                        <span>
                            <ChevronUpIcon className="h-6 w-6 text-black ml-2" />
                        </span>
                    </button>

                </>
            )}
        </li>
    </ul>
));

export default CategoryButtons;
