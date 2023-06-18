import React from 'react'
import { BallTriangle } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div className="flex items-center justify-center h-screen">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
            />
        </div>
    )
}
