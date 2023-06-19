"use client"
import Loader from '@/app/Loader/Loader';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';



const AddProducts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgbb = 'f8dd55d27cbe2841ea00d77e428e6944';
    const router = useRouter();

    const addproducts = (data) => {
        setIsLoading(true); // Set loading state to true
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?&key=${imgbb}`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then((result) => {
                if (result.success) {
                    const product = {
                        title: data.name,
                        description: data.description,
                        thumbnail: result.data.url,
                        category: data.category,
                        brand: data.brand,
                        price: data.price
                    };

                    fetch('https://dummyjson.com/products/add', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success(`${data.title} is added successfully`);
                            router.push('/');
                        })
                        .finally(() => {
                            setIsLoading(false); // Set loading state back to false
                        });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setIsLoading(false); // Set loading state back to false
            });
    };

    if (isLoading) {
        return <Loader />; // Replace "Loader" 
    }
    return (
        <div className='my-5'>
            <h1 className='text-2xl text-center mb-5'>Add a new Product</h1>
            <div className="max-w-screen-xl mx-auto flex justify-center items-center">
                <form onSubmit={handleSubmit(addproducts)} className="w-full max-w-md">
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            type="text"
                            className="input h-10 w-full border rounded-md px-3 py-2"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-red-500 font-semibold">{errors.name?.message}</p>}
                    </div>

                    {/* price */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Enter Your Price</span>
                        </label>
                        <div className="input-group">
                            <input
                                type="number"
                                placeholder="10"
                                className="input h-10 w-1/2 border rounded-md px-3 py-2"
                                {...register("price", { required: "Price is required" })}
                            />
                            <span className='ml-3'>USD</span>
                        </div>
                    </div>

                    {/* description */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">About product</span>
                        </label>
                        <input
                            type="text"
                            className="input h-10 w-full border rounded-md px-3 py-2"
                            {...register("description", { required: "Description is required" })}
                        />
                        {errors.description && <p className="text-red-500 font-semibold">{errors.description?.message}</p>}
                    </div>

                    {/* brand */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Product Brand</span>
                        </label>
                        <input
                            type="text"
                            className="input h-10 w-full border rounded-md px-3 py-2"
                            {...register("brand", { required: "Brand is required" })}
                        />
                        {errors.brand && <p className="text-red-500 font-semibold">{errors.brand?.message}</p>}
                    </div>

                    {/* category */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input
                            type="text"
                            className="input h-10 w-full border rounded-md px-3 py-2"
                            {...register("category", { required: "Category is required" })}
                        />
                        {errors.category && <p className="text-red-500 font-semibold">{errors.category?.message}</p>}
                    </div>

                    {/* image */}
                    <div>
                        <label className="label">
                            <span className="label-text">Choose Your product Photo</span>
                        </label>
                        <div className="form-control w-full mb-4">
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full"
                                {...register("image", { required: "Photo is required" })}
                            />
                            {errors.image && <p className="text-red-500 font-semibold">{errors.image?.message}</p>}
                        </div>
                    </div>

                    <input type="submit" className="btn mt-8 w-full" value="Add" />
                </form>
            </div>
        </div>

    );
};

export default AddProducts;
