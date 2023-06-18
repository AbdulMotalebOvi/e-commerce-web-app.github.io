import React from 'react'
import Left from './Left'
import '../Brands/vbrand.css'
import Link from 'next/link'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
export default function ProductModel() {
    return (
        <section className='my-20'>
            <div className='flex items-center'>
                <div className=' bg-[#CEF0FF] w-[700px] h-[600px] rounded-[12px]'>
                    <Left />
                </div>
                <div className='space-y-4 ml-[130px]'>
                    <h2 className='text-[20px] font-semibold'>Justin Pierre</h2>
                    <p className='italic pr-[229px] font-semibold'>“In 2 years, my business went from just me and my Shop site to 40 employees, my own fulfillment center and over 22 million dollars in revenue.”</p>
                    <Link className=' flex text-[20px] font-semibold items-center' href="">see all <span><ArrowLongRightIcon className="h-6 w-6 text-black font-normal ml-2" /></span></Link>
                </div>
            </div>
        </section>
    )
}
