'use client'
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Link from "next/link";
import ButtonBlack from "../ButtonBlack/ButtonBlack";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";



export default function Form() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const router = useRouter()

    const submit = (data) => {
        const name = data.firstName + data.lastName

        saveUserDb(name, data.password)
        toast.success('User Created Successfully')
        reset()
        router.push('/');
    }
    const saveUserDb = async (name, password) => {
        const user = { name, password };
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers:
                    { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            const data = await response.json();

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className=" border-2 border-[#eaedff] max-w-screen-md mx-auto">
            <div className="p-[10%]">

                <h4 className="text-3xl text-center mb-5">Signup From Here</h4>

                <form onSubmit={handleSubmit(submit)} className="w-full flex flex-col justify-center">
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
                        <Button type='submit' title='Register Account' />
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
