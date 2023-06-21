'use client'
import React, { useState } from 'react';

import CategoryButtons from './CategoryButton';
import Loader from '../Loader/Loader';

const SideNav = ({ data, handleFilterChange }) => {
    const [showAllCategories, setShowAllCategories] = useState(false);

    const visibleCategories = showAllCategories ? data : data.slice(0, 7);
    const toggleShowAllCategories = () => {
        setShowAllCategories(!showAllCategories);
    };

    const handleHide = () => {
        setShowAllCategories(false);
    };

    return (
        <div className="h-screen">
            <ul>
                <CategoryButtons
                    visibleCategories={visibleCategories}
                    handleFilterChange={handleFilterChange}
                    toggleShowAllCategories={toggleShowAllCategories}
                    data={data}
                    showAllCategories={showAllCategories}
                    handleHide={handleHide}
                />
                {/* <li>
                    <div className="items-center">
                        <label htmlFor="priceRange" className="mr-4 text-gray-700">
                            Price Range:
                        </label>
                        <span className="relative overflow-visible cursor-pointer group" aria-describedby="tooltip-01">
                            ${priceRange}
                            <span
                                role="tooltip"
                                id="tooltip-01"
                                className={`visible absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 rounded bg-slate-700 p-4 text-sm text-white opacity-0 transition-all ${priceRange === 0 && 'invisible'}`}
                            >
                                ${priceRange}
                            </span>
                        </span>

                        <input
                            type="range"
                            id="priceRange"
                            name="priceRange"
                            min="0"
                            max="1500"
                            value={priceRange}
                            onChange={handlePriceChange}
                            className="appearance-none h-2 w-64 rounded-lg outline-none"
                            style={{
                                background: `linear-gradient(to right, #bc8246  0%, #bc8246 ${(priceRange / 1500) * 100}%,#dadada ${(priceRange / 1500) * 100}%,#dadada 100%)`,
                            }}
                        />
                    </div>
                </li> */}
            </ul>
        </div >
    );
};

export default SideNav;
