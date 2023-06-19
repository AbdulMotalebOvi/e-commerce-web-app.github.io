'use client'

import { useState } from "react";
import Description from "./AllDetails/Description";
import Additional from "./AllDetails/Additional";
import Reviews from "./AllDetails/Reviews";


const Filtering = ({ data }) => {
    const [activeCategory, setActiveCategory] = useState('Description');
    const handleCategoryFilter = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className="my-10">
            <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 md:space-y-0">
                <button
                    className={`py-2 px-4 rounded ${activeCategory === "Description"
                            ? "text-black"
                            : "text-[#a3a3a3]"
                        }`}
                    onClick={() => handleCategoryFilter("Description")}
                >
                    Description
                </button>
                <button
                    className={`py-2 px-4 rounded ${activeCategory === "Additional" ? "text-black" : "text-[#a3a3a3]"
                        }`}
                    onClick={() => handleCategoryFilter("Additional")}
                >
                    Additional
                </button>
                <button
                    className={`py-2 px-4 rounded ${activeCategory === "Reviews" ? "text-black" : "text-[#a3a3a3]"
                        }`}
                    onClick={() => handleCategoryFilter("Reviews")}
                >
                    Reviews
                </button>
            </div>
            <div className="my-5">
                {activeCategory === "Description" && <Description />}
                {activeCategory === "Additional" && <Additional />}
                {activeCategory === "Reviews" && <Reviews data={data} />}
            </div>
        </div>
    );
};
export default Filtering;

