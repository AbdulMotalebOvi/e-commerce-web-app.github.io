import useGetData from '@/app/Hooks/useGetData'
import React from 'react'

export default function Default() {
    const url = 'https://dummyjson.com/products?limit=10'
    const { data, isLoading } = useGetData(url)
    const myData = data?.products
    return (
        <div>

            {
                myData?.map(pd =>
                    <a href="#" className="block rounded-[16px] p-4 shadow-sm shadow-indigo-100">
                        <img
                            alt="Image"
                            src={pd.thumbnail}
                            className="h-56 w-full rounded-[16px]object-cover"
                        />

                        <div className="mt-2">
                            <dl>
                                <div>
                                    <dt className="sr-only">Price</dt>

                                    <dd className="text-sm text-gray-500">$240,000</dd>
                                </div>

                                <div>
                                    <dt className="sr-only">Address</dt>

                                    <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                                </div>
                            </dl>

                        </div>
                    </a>)
            }
        </div>
    )
}
