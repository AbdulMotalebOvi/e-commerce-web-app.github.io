import React, { useEffect, useState } from 'react';


export default function Pagination({ fetchProducts, handleNextPage, handlePrevPage, setCurrentPage, currentPage, setLoading, loading }) {


    return (
        <>
            {/*<!-- Component: Primary basic pagination --> */}
            <nav role="navigation" aria-label="Pagination Navigation">
                <ul className="flex list-none items-center justify-center text-sm text-slate-700 md:gap-1">
                    <li>
                        <button
                            aria-label="Goto Previous Page"
                            className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
                            onClick={handlePrevPage}
                            disabled={loading || currentPage === 1}
                        >
                            <span className="order-2 md:sr-only">Prev</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="-mx-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                role="graphics-symbol"
                                aria-labelledby="title-01 desc-01"
                            >
                                <title id="title-01">Previous page</title>
                                <desc id="desc-01">link to previous page</desc>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </li>

                    {/* Add the remaining pagination items dynamically */}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pageNumber) => (
                        <li key={pageNumber}>
                            <button
                                aria-label={`Goto Page ${pageNumber}`}
                                className={`${pageNumber === currentPage
                                    ? 'whitespace-nowrap bg-emerald-500 text-white ring-offset-2'
                                    : 'hidden'
                                    } inline-flex h-10 items-center justify-center rounded ${pageNumber === currentPage
                                        ? 'px-4 text-sm font-medium transition duration-300 focus:bg-emerald-700'
                                        : 'stroke-slate-700 px-4 text-sm font-medium transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600'
                                    } focus-visible:outline-none md:inline-flex`}
                                onClick={() => {
                                    setLoading(true);
                                    const skip = (pageNumber - 1) * 10;
                                    fetchProducts(10, skip);
                                    setCurrentPage(pageNumber);
                                }}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    ))}

                    <li>
                        <button
                            aria-label="Goto Next Page"
                            className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
                            onClick={handleNextPage}
                            disabled={loading}
                        >
                            <span className="md:sr-only">Next</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="-mx-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                role="graphics-symbol"
                                aria-labelledby="title-02 desc-02"
                            >
                                <title id="title-02">Next page</title>
                                <desc id="desc-02">link to next page</desc>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
            {/*<!-- End Primary basic pagination --> */}
        </>
    );
}
