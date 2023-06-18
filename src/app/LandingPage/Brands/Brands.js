import React from 'react'
import BrandsImages from './BrandsImages'
import RightSideImg from './RightSideImg';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

export default function Brands() {
    const myStyle = {
        backgroundColor: '#F4FCFF',
        width: '100%',
        height: 'auto',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <section style={myStyle} >
            <div className='py-[200px] flex justify-center items-center  pl-[135px] pr-[160px] '>
                <div>
                    <BrandsImages />
                </div>
                <div className='space-y-4 ml-[130px]'>
                    <h2 className='text-3xl font-bold'>Explore Most Popular <br /> Brands</h2>
                    <p>Life is hard enough already. Let us make it a little easier.</p>
                    <Link className=' flex text-[20px] font-semibold items-center' href="">see all <span><ArrowLongRightIcon className="h-6 w-6 text-black font-normal ml-2" /></span></Link>
                </div>
            </div>
            <div className='py-[200px] flex justify-center items-center  pl-[135px] pr-[160px] '>
                <div className='space-y-4 mr-[130px]'>
                    <h2 className='text-3xl font-bold'>Sell Easily on  Socialmedia</h2>
                    <p>Life is hard enough already. Let us make it a little easier.</p>
                    <Link className=' flex text-[20px] font-semibold items-center' href="">see all <span><ArrowLongRightIcon className="h-6 w-6 text-black font-normal ml-2" /></span></Link>
                </div>
                <div>
                    <RightSideImg />
                </div>
            </div>
        </section>
    )
}
