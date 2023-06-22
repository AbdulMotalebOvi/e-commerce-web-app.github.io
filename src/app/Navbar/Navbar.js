'use client'
import React, { useRef, useState } from 'react'
import logo from '../assests/logo/Logo.png'
import Link from 'next/link';
import DropdownMenu from './DropdownMenu';
import Cart from './Cart/Cart';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid'

import Loader from '../Loader/Loader';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BASE_URL } from '../BaseUrl/config';



export default function Navbar() {
    const locationRef = useRef('')
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const handlerToSearch = async () => {
        const myLocation = locationRef.current.value
        const url = `${BASE_URL}products/search?q=${myLocation}`

        const res = await fetch(url)
        const result = await res.json()
        if (result) {
            router.push('/SerachByCategories');

        }


        // router.push(`/SearchData?data=${searchValue}`, { state: { result, myLocation: searchValue } });

    }
    if (isLoading) {
        return <Loader />
    }

    return (
        <div className='bg-[#1E66FF]'>
            <div className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className="relative flex  grid items-center grid-cols-2 lg:grid-cols-3 z-[1000]">
                    <Link
                        href="/"
                        aria-label="OutStock"
                        title="OutStock"
                        className="items-center inline-flex"
                    >
                        <Image src={logo} alt="" />
                    </Link>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <div className="relative w-full ">
                            <div>
                                <label htmlFor="search" className="sr-only">
                                    Search
                                </label>
                                <input
                                    type="search"
                                    id="search"
                                    placeholder="Search product"
                                    className="w-full rounded-full border-black border-none pl-3 py-2 pe-10 shadow-sm sm:text-sm"
                                    ref={locationRef}
                                />
                                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                    <button
                                        onClick={() => handlerToSearch()}
                                        className="rounded-full bg-[#4DC3F7]  px-6 py-[6px] mr-6"
                                    >
                                        <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                                    </button>
                                </span>
                            </div>
                        </div>

                    </ul>

                    <ul className="flex items-center hidden ml-auto space-x-8  lg:flex">
                        <li className="flex items-center space-x-1 justify-center focus:outline-none text-white">
                            <Link href='/AdminBoard'> Admin Actions</Link>
                        </li>
                        <li className="flex items-center space-x-1 justify-center focus:outline-none">

                            <Link className='flex items-center space-x-2' href='/Profile'>
                                <UserCircleIcon className="w-6 h-6 text-white" />
                                <span className='text-white'>Account</span>
                            </Link>

                        </li>
                        <>
                            <Cart />
                        </>
                        <>
                            <DropdownMenu />
                        </>
                    </ul>
                    <div className="ml-auto lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-[#1E66FF] border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                href="/"
                                                aria-label="OutStock"
                                                title="OutStock"
                                                className="items-center inline-flex"
                                            >
                                                <Image src={logo} alt="" />
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <div className="relative w-full ">
                                                <form onSubmit={handlerToSearch}>
                                                    <label htmlFor="search" className="sr-only">
                                                        Search
                                                    </label>
                                                    <input
                                                        type="search"
                                                        id="search"
                                                        placeholder="Search product"
                                                        className="w-full rounded-full border-black border-none pl-3 py-2 pe-10 shadow-sm sm:text-sm"
                                                        value={searchValue}
                                                        onChange={(e) => setSearchValue(e.target.value)}
                                                    />
                                                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                                        <button
                                                            type="submit"
                                                            className="rounded-full bg-[#4DC3F7]  px-6 py-[6px] mr-6"
                                                        >
                                                            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                                                        </button>
                                                    </span>
                                                </form>
                                            </div>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}
