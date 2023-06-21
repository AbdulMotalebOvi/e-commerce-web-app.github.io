import React, { useEffect, useState } from 'react'
import ProductsAll from './ProductsAll'
import Pagination from './Pagination'
import axios from 'axios';
import Loader from '../Loader/Loader';
import Link from 'next/link';

export default function ProductsBody({ filteredProjects }) {

    return (
        <>
            {
                filteredProjects?.length ?
                    <div className='grid grid-cols-3 gap-3'>
                        {
                            filteredProjects.map(pd =>
                                <>
                                    <Link
                                        href={`DetailsComponents/${pd.id}`}
                                        className="block space-y-3 rounded-lg p-4 ml-5 bg-[#FFFDFE]"
                                    >
                                        <img
                                            alt="Home"
                                            src={pd.thumbnail}
                                            className="h-56 w-full rounded-md object-cover"
                                        />
                                        <div className="mt-2 text-center space-y-5">
                                            <h3 className="text-[#3B3849] font-semibold text-2xl line-clamp-1">{pd.title} </h3>
                                            <p className="text-[#8D8D8D] text-[14px] line-clamp-2">{pd.description}</p>
                                            <h4 className="font-semibold text-[18px] text-[#0E4B80]">{pd.price}.00 USD</h4>
                                        </div>
                                    </Link>
                                </>
                            )
                        }
                    </div>
                    :
                    <>
                        <ProductsAll />

                    </>
            }
        </>
    )
}
