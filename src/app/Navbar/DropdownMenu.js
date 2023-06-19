'use client'

import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DropdownMenu() {
    const router = useRouter()
    return (
        <li className="relative group">
            <button className="flex items-center space-x-1 justify-center focus:outline-none">
                <Bars3Icon className="w-6 h-6 text-[#323232]" />
            </button>

            <div className="absolute right-0 mt-5 w-[120px] bg-white rounded-md shadow-lg transition-all duration-2000 opacity-0 group-hover:opacity-100  z-[1000]">
                <ul className="py-2">
                    <li className="px-3 py-2 hover:bg-gray-100">
                        <Link href="/">My Account</Link>
                    </li>
                    <li className="px-3 py-2 hover:bg-gray-100">
                        <Link href='/YourCart'>Your Cart</Link>

                    </li>
                    <li className="px-3 py-2 hover:bg-gray-100">
                        <Link href='/CheckOut'>Checkout</Link>
                    </li>
                    <li className="px-3 py-2 hover:bg-gray-100">
                        <Link href='/Register' >Create Account</Link>
                    </li>
                    <li className="px-3 py-2 hover:bg-gray-100">
                        <Link href='/SecurityLogin'>Sign In</Link>

                    </li>
                </ul>
            </div>
        </li>
    );
}



