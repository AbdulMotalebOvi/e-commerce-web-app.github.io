'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function SearchData() {
    const router = useRouter()
    const result = router.query.state?.result;
    // const myLocationFromState = router.query.state?.myLocation;
    console.log(result);
    // Access the query parameter data
    // const searchData = query.result;

    // // Access the state object data
    // const { result, myLocation } = state || {};
    return (
        <div> <h1>Search Data Page</h1>

        </div>
    )
}
