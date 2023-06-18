import Link from "next/link";

export const NavLinks =
    <>
        <li>
            <Link
                href="/"
                aria-label="Home"
                title="Home"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Home
            </Link>
        </li>
        <li>
            <Link
                href="/"
                aria-label="Shop"
                title="Shop"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Shop
            </Link>
        </li>
        <li>
            <Link
                href="/"
                aria-label="Blog"
                title="Blog"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Blog
            </Link>
        </li>
        <li>
            <Link
                href="/"
                aria-label="Pages"
                title="Pages"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Pages
            </Link>
        </li>
        <li>
            <Link
                href="/"
                aria-label="Pages"
                title="Pages"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Contact
            </Link>
        </li>
    </>
