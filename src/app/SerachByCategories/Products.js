'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';

import ProductsBody from "./ProductsBody";
import { BASE_URL } from "../BaseUrl/config";

import SideNav from "./SideNav";
import Loader from "../Loader/Loader";
import useGetData from "../Hooks/useGetData";

const Products = () => {
    const [search, setSearch] = useState();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        fetchProjects();
    }, []);


    const fetchProjects = async () => {
        try {
            const response = await axios.get(`${BASE_URL}products`);
            setProjects(response.data?.products);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching projects:', error);
            setLoading(false);
        }
    };

    const { data, isLoading } = useGetData(`${BASE_URL}products/categories`);

    if (loading || isLoading) {
        return <Loader />;
    }

    const handleFilterChange = (category) => {

        setSearch(category);
        setLoading(false);
        fetch(`${BASE_URL}products/category/${category}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setProjects(data?.products);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
                setLoading(false);
            });
    };

    const filteredProjects = projects?.filter((project) => project?.category === search);


    return (
        <section className="min-h-screen">
            <div className="container mx-auto px-4 ">
                <div className="flex justify-between ">
                    <div className="w-1/4 ">
                        <h1 className='text-2xl mb-5 font-semibold'>Search by Categories</h1>
                        <SideNav data={data} handleFilterChange={handleFilterChange}
                        />
                    </div>
                    <div className="w-full ml-4 bg-white p-4">
                        <ProductsBody projects={projects} filteredProjects={filteredProjects} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;

