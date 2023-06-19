'use client'
import React, { useState, useEffect } from 'react';

import SectionTitle from '@/app/SectionTitle/SectionTitle';
import useGetData from '@/app/Hooks/useGetData';
import Loader from '@/app/Loader/Loader';
import axios from 'axios';
import Default from './Default';
import MySlider from './Slider/MySlider';




const PortfolioGallery = () => {
    const [search, setSearch] = useState();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(false);
        fetchProjects();
    }, []);

    const myData = projects.products;


    const fetchProjects = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            setProjects(response.data);
            setLoading(false);
        } catch (error) {
            setError(error)
            setLoading(false);
        }
    };

    const url = 'https://dummyjson.com/products/categories'
    const { data, isLoading, } = useGetData(url)
    const firstFourData = data?.slice(0, 4);



    const handleFilterChange = (category) => {
        setSearch(category);

        setLoading(true);
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error)
                setLoading(false);
            });
    };


    if (loading || isLoading) {
        return <Loader />;
    }


    return (
        <section className='max-w-screen-xl mx-auto my-20'>
            <SectionTitle header='Products' desc='Mirum est notare quam littera gothica quam nunc putamus parum claram!' />
            <div className=''>
                <div className="flex items-center justify-center my-10">

                    {firstFourData?.map(ct => (
                        <button
                            key={ct.key}
                            onClick={() => handleFilterChange(ct)}
                            className={` capitalize py-2 px-4 rounded ${search === ct ? ' text-black underline' : ' text-[#a3a3a3]'}`}
                        >
                            {ct}
                        </button>
                    ))}
                </div>
                <div className=''>
                    {
                        myData ?
                            <>
                                <MySlider myData={myData} />
                            </>
                            :
                            <Default />
                    }
                </div>
            </div>
        </section>
    );
};

export default PortfolioGallery;
