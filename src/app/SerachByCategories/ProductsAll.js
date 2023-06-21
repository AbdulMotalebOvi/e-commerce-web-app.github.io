'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Loader from '../Loader/Loader';

export default function ProductsAll() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);

    const fetchProducts = async (limit, skip) => {
        try {
            const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
            const response = await axios.get(url);
            setProducts(response?.data?.products);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handlePrevPage = () => {
        setLoading(true);
        const prevPage = currentPage - 1;
        const skip = (prevPage - 1) * 10;
        fetchProducts(10, skip);
        setCurrentPage(prevPage);
    };

    const handleNextPage = () => {
        setLoading(true);
        const nextPage = currentPage + 1;
        const skip = (nextPage - 1) * 10;
        fetchProducts(10, skip);
        setCurrentPage(nextPage);
    };

    useEffect(() => {
        fetchProducts(10, 0);
    }, []);
    if (loading) {
        return <Loader />
    }


    return (
        <div>
            <h4>Total Products Found: {products.length}</h4>
            <div className="grid grid-cols-3 gap-4">
                {products.length > 0 ? (
                    <>
                        {products.map((pd) => (
                            <Link
                                key={pd.id}
                                href={`DetailsComponents/${pd.id}`}
                                className="block space-y-3 rounded-lg p-4 ml-5 bg-[#FFFDFE]"
                            >
                                <img
                                    alt="Home"
                                    src={pd.thumbnail}
                                    className="h-56 w-full rounded-md object-cover"
                                />
                                <div className="mt-2 text-center space-y-5">
                                    <h3 className="text-[#3B3849] font-semibold text-2xl line-clamp-1">
                                        {pd.title}
                                    </h3>
                                    <p className="text-[#8D8D8D] text-[14px] line-clamp-2">
                                        {pd.description}
                                    </p>
                                    <h4 className="font-semibold text-[18px] text-[#0E4B80]">
                                        {pd.price}.00 USD
                                    </h4>
                                </div>
                            </Link>
                        ))}
                    </>
                ) : (
                    <p className='text-3xl font bold text-center my-5'>No more products available.</p>
                )}
            </div>
            <div className='mt-5'>
                <Pagination fetchProducts={fetchProducts} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} setCurrentPage={setCurrentPage} currentPage={currentPage} setLoading={setLoading} loading={loading} />
            </div>
        </div>
    );
}
