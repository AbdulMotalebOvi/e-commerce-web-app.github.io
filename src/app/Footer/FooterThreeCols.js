import React from "react"



export default function FooterThreeCols() {
    return (
        <>
            {/*    <!-- Component: Three Columns Footer --> */}
            <footer className="w-full text-slate-500">
                {/* Main footer */}
                <div className="pt-16 pb-12 text-sm bg-[#023F75]">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-12">
                            <nav className="col-span-2 md:col-span-1 lg:col-span-4" aria-labelledby="footer-product-3">
                                <h3 className="mb-6 text-base font-medium text-white" id="footer-product-3">
                                    Product
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            Features
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            Customers
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            Why us?
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            Pricing
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="col-span-2 md:col-span-1 lg:col-span-4" aria-labelledby="footer-about-3">
                                <h3 className="mb-6 text-base font-medium text-white" id="footer-about-3">
                                    About us
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            About us
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            Careers
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            Leadership
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            Blog
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            Events
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="col-span-2 md:col-span-1 lg:col-span-4" aria-labelledby="footer-get-in-touch-3">
                                <h3 className="mb-6 text-base font-medium text-white" id="footer-get-in-touch-3">
                                    Get in touch
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            Contact
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            Support
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            Partners
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            Join research
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* Sub Footer */}
                <div className="border bg-[#232347] py-4 text-sm">
                    <div className="max-w-screen-xl mx-auto text-white">
                        <div className="grid grid-cols-2 items-center gap-6 md:grid-cols-4 lg:grid-cols-12">
                            <p className="text-white">
                                © 2021-2023 SnipShop.com
                            </p>
                            <nav className="col-span-2 md:col-span-3 lg:col-span-6" aria-labelledby="subfooter-links-3-sub">
                                <h3 className="sr-only" id="subfooter-links-3-sub">
                                    Get in touch
                                </h3>
                                <ul className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                                    <li className="leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            T&C
                                        </a>
                                    </li>
                                    <li className="leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            Privacy
                                        </a>
                                    </li>
                                    <li className="leading-6">
                                        <a href="#" className="transition-colors duration-300 text-white">
                                            Cookies
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>

            {/*    <!-- End Three Columns Footer --> */}
        </>
    )
}