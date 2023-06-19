import useGetData from '@/app/Hooks/useGetData'
import Link from 'next/link'
import React from 'react'

export default function Default() {
    const url = 'https://dummyjson.com/products?limit=10'
    const { data, isLoading } = useGetData(url)
    const myData = data?.products
    return (
        <div>

            {
                myData?.map(pd =>
                    <Link href="#" className="block rounded-[16px] p-4 shadow-sm shadow-indigo-100">
                        <img
                            alt="Image"
                            src={pd.thumbnail}
                            className="h-56 w-full rounded-[16px]object-cover"
                        />


                    </Link>)
            }
        </div>
    )
}
