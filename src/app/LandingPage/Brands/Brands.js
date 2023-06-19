import React from 'react';
import BrandsImages from './BrandsImages';
import RightSideImg from './RightSideImg';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
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
        <section style={myStyle}>
            <div className='py-10 md:py-20 flex flex-col md:flex-row justify-center items-center pl-5 md:pl-20 pr-5 md:pr-20'>
                <div className='md:mr-10 mb-10 md:mb-0'>
                    <BrandsImages />
                </div>
                <div className='space-y-4 md:ml-10'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                        Explore Most Popular <br /> Brands
                    </h2>
                    <p>Life is hard enough already. Let us make it a little easier.</p>
                    <Link className='flex text-lg font-semibold items-center' href=''>

                        see all
                        <span>
                            <ArrowLongRightIcon className='h-6 w-6 text-black font-normal ml-2' />
                        </span>

                    </Link>
                </div>
            </div>
            <div className='py-10 md:py-20 flex flex-col md:flex-row justify-center items-center pl-5 md:pl-20 pr-5 md:pr-20'>
                <div className='space-y-4 md:mr-10'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                        Sell Easily on Social Media
                    </h2>
                    <p>Life is hard enough already. Let us make it a little easier.</p>

                    <a className='flex text-lg font-semibold items-center'>
                        see all
                        <span>
                            <ArrowLongRightIcon className='h-6 w-6 text-black font-normal ml-2' />
                        </span>
                    </a>

                </div>
                <div className='md:ml-10'>
                    <RightSideImg />
                </div>
            </div>
        </section>
    );
}
