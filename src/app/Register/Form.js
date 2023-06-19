'use client'
import { useForm } from "react-hook-form";

import Link from "next/link";
import ButtonBlack from "../ButtonBlack/ButtonBlack";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Loader from "../Loader/Loader";
import { UserContext } from "../IDContext/LocalStorageProvider";




export default function Form() {
    const imgbb = 'f8dd55d27cbe2841ea00d77e428e6944';

    const [loading, setLoading] = useState(false); // Set initial loading state to false
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const router = useRouter();

    const submit = (data) => {
        setLoading(true); // Set loading state to true when form is submitted

        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?&key=${imgbb}`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                const user = {
                    UserName: data.userName,
                    FirstName: data.firstName,
                    lastName: data.lastName,
                    Gender: data.gender,
                    email: data.email,
                    password: data.password,
                    image: result.data.url,
                }

                fetch('https://dummyjson.com/users/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast.success('User Created Successfully');
                        reset();
                        setLoading(false); // Set loading state to false when API call is complete
                        setUserId(data.id)
                        router.push('/');

                    })
                    .catch(error => {
                        toast.error('Failed to create user');
                        setLoading(false); // Set loading state to false in case of error
                    });
            })
            .catch(error => {
                toast.error('Failed to upload image');
                setLoading(false); // Set loading state to false in case of error
            });
    };

    if (loading) {
        return <Loader />;
    }
    return (
        <div className=" border-2 border-[#eaedff] max-w-screen-md mx-auto">
            <div className="p-[10%]">

                <h4 className="text-3xl text-center mb-5">Signup From Here</h4>

                <form onSubmit={handleSubmit(submit)} className="w-full flex flex-col justify-center">
                    {/* username */}
                    <div>
                        <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                            <input
                                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                {...register("userName", { required: true })}
                            />
                            <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                User Name
                            </span>
                            {errors.userName?.type === "required" && (
                                <p className="text-red-400 font-semibold">User name is required</p>
                            )}
                        </label>
                    </div>
                    <div className="form-control space-y-4 mt-8">
                        {/* name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                    <input
                                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                        {...register("firstName", { required: true })}
                                    />
                                    <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                        First Name
                                    </span>
                                    {errors.firstName?.type === "required" && (
                                        <p className="text-red-400 font-semibold">First Name is required</p>
                                    )}
                                </label>
                            </div>
                            <div>
                                <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                    <input
                                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                        {...register("lastName", { required: true })}
                                    />
                                    {errors.lastName?.type === "required" && (
                                        <p className="text-red-400 font-semibold">Last Name is required</p>
                                    )}
                                    <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                        Last Name
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {/* email  */}
                            <div >
                                <label htmlFor="UserEmail" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                    <input className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" {...register("email", { required: true })} />
                                    <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                        Email
                                    </span>
                                    {errors.email?.type === 'required' && <p className="text-red-600 font-semibold">Email is required</p>}

                                </label>
                            </div>
                            {/* age */}
                            <div>
                                <label htmlFor="UserGender" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                    <select className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" {...register("gender", { required: true })}>
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                        Gender
                                    </span>
                                    {errors.gender?.type === 'required' && <p className="text-red-600 font-semibold">Gender is required</p>}
                                </label>
                            </div>

                        </div>
                        {/* Image */}
                        <div>
                            <label className="label">
                                <span className="label-text">Choose Your photo</span>
                            </label>
                            <div className="form-control w-full sm:max-w-md border p-8">
                                <input type="file" className="file-input file-input-bordered w-full" {...register("image", { required: 'Photo is required' })} />
                                {errors.image && <p className='text-red-500 font-semibold'>{errors.image?.message}</p>}
                            </div>
                        </div>
                        {/* password */}
                        <div>
                            <label htmlFor="password" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                <input type="password" className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" {...register("password", {
                                    required: true,
                                    minLength: { value: 6, message: 'Password must be at least 6 characters or longer' }
                                })} />
                                <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                    Password
                                </span>

                                {errors.password?.type === 'required' && <p className="text-red-600 font-semibold">Password is required</p>}
                            </label>
                        </div>
                    </div>
                    <div className="space-y-5 my-10 m-auto">
                        <ButtonBlack type='submit' title='Register Account' />
                        <p className="my-2 text-black text-center">Or</p>

                        <Link className="mt-5 ml-3" href='/SecurityLogin'>
                            <ButtonBlack title='please login' />
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    )
}
