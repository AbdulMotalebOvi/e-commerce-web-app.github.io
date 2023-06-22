'use client'

import { useEffect, useState } from "react";
import AddProducts from "../Addproducts/AddProducts";

import AllUsers from "../AllUsers/AllUsers";
import ManageProducts from "../ManageProducts/ManageProducts";

const SideNav = () => {
    const [activeCategory, setActiveCategory] = useState('All Users');
    const handleCategoryFilter = (category) => {
        setActiveCategory(category);
    };
    useEffect(() => {
        handleCategoryFilter('AllUsers');
    }, []);
    return (
        <div className="my-10">
            <div className="flex flex-wrap justify-center items-center space-x-6 space-y-4 md:space-y-0 py-4 rounded-lg">
                <button
                    className={`py-2 px-4 rounded ${activeCategory === 'AddProducts' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                        }`}
                    onClick={() => handleCategoryFilter('AddProducts')}
                >
                    Add Products
                </button>
                <button
                    className={`py-2 px-4 rounded ${activeCategory === 'ManageProducts' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                        }`}
                    onClick={() => handleCategoryFilter('ManageProducts')}
                >
                    Manage Products
                </button>
                <button
                    className={`py-2 px-4 rounded ${activeCategory === 'AllUsers' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                        }`}
                    onClick={() => handleCategoryFilter('AllUsers')}
                >
                    All Users
                </button>
            </div>
            <div className="my-5">
                {activeCategory === 'AddProducts' && <AddProducts />}
                {activeCategory === 'ManageProducts' && <ManageProducts />}
                {activeCategory === 'AllUsers' && <AllUsers />}
            </div>
        </div>


    );
};

export default SideNav;
