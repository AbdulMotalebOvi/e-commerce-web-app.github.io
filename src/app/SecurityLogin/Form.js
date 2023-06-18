'use client'
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Form() {
    const [error, setError] = useState()
    const router = useRouter()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const submit = (data) => {
        const name = data.name

        logInWithDb(name, data.password)
        toast.success('log in  Successfully')
        reset()
        router.push('/');
    }
    const logInWithDb = async (name, password) => {
        const user = { name, password };
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers:
                    { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className=" border-2 border-[#eaedff] max-w-screen-md mx-auto">
            <div className="p-[10%]">

                <h4 className="text-3xl text-center mb-5">Login From Here</h4>

                <form onSubmit={handleSubmit(submit)} className="w-full flex flex-col justify-center">
                    <div className="form-control space-y-4 mt-8">

                        {/* email  */}
                        <div >
                            <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                <input className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm " {...register("name", { required: true })} />
                                <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                    Name
                                </span>
                                {errors.name?.type === 'required' && <p className="text-red-600 font-semibold">Name is required</p>}
                            </label>
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
                                <p className="text-red-600 font-semibold">{error}</p>
                                {errors.password?.type === 'required' && <p className="text-red-600 font-semibold">Password is required</p>}
                            </label>
                        </div>
                    </div>
                    <div className="space-y-5 my-10">
                        <button className="w-full px-3 py-4 text-xs font-bold text-black uppercase  duration-300 transform border border-[#323232] rounded hover:bg-gray-700 focus:outline-none hover:text-white focus:bg-gray-700 ">Login Now</button>
                        <p className="my-2 text-black text-center">Or</p>

                    </div>
                </form>
                <button
                    onClick={() => router.push('/Register')}
                    className="w-full px-3 py-4 text-xs font-bold text-black uppercase  duration-300 transform border border-[#323232] rounded hover:bg-gray-700 focus:outline-none hover:text-white focus:bg-gray-700 ">Register Now</button>
            </div>

        </div>
    )
}
