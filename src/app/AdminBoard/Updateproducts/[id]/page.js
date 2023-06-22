'use client'
import { BASE_URL } from '@/app/BaseUrl/config';
import ButtonBlack from '@/app/ButtonBlack/ButtonBlack';
import useGetData from '@/app/Hooks/useGetData';
import Loader from '@/app/Loader/Loader';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function UpdateForm({ params }) {
    const id = params.id;
    const url = `${BASE_URL}products/${id}`;
    const { data, isLoading } = useGetData(url);
    const [formData, setFormData] = useState({
        title: '',
        price: 0,
        brand: '',
        category: '',
        description: ''
    });
    console.log(formData);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(url, {
            method: 'PUT', /* or PATCH */
            headers:
                { 'Content-Type': 'application/json' }
            ,
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Product Update Successfully')
                }
            });

    };

    if (isLoading) {
        return <Loader />
    }


    return (
        <section className="bg-gray-100">
            <h1 className='text-center font-semibold text-2xl my-2'>Update Product</h1>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-evenly  items-center ">
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg">
                            Product Name: {data.title}
                        </p>
                        <p className="mt-2 not-italic">
                            Product Price: ${data.price}
                        </p>
                        <p className="mt-2 ">
                            Product Brand: {data.brand}
                        </p>
                        <p className="mt-2 not-italic">
                            Product Category: {data.category}
                        </p>
                    </div>
                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="" className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="sr-only" htmlFor="name">Product Name</label>
                                    <input
                                        className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Product Name"
                                        type="text"
                                        id="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="name">Product Price</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                        placeholder="Price"
                                        type="number"
                                        id="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Brand</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                        placeholder="Brand Name"
                                        type="text"
                                        id="brand"
                                        value={formData.brand}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Category</label>
                                    <input
                                        className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Product Category"
                                        type="text"
                                        id="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">Description</label>
                                <textarea
                                    className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Description"
                                    rows="2"
                                    id="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div className="mt-4">
                                <ButtonBlack type="submit" title="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
}


