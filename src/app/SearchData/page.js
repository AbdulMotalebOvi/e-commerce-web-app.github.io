'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function SearchData() {
    const router = useRouter();
    useEffect(() => {
        alert(router.query); // Alerts 'Someone'
    }, [router.query]);

    return (
        <div>SearchD
            ata
            {/* <p>Data: {JSON.stringify(data)}</p> */}
        </div>
    )
}
