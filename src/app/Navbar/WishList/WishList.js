import { CommonSection } from "@/app/sectionHook/CommonSection";
import MyWishList from "../../List/page";
import { HeartIcon } from '@heroicons/react/24/solid'
import { useRouter } from "next/navigation";


export default function WishList() {
    const router = useRouter()

    return (
        <li className="relative group">
            <button onClick={() => router.push('/List')} className="flex items-center space-x-1 justify-center focus:outline-none">
                <HeartIcon className="w-6 h-6 text-[#323232]" />
                <span>2</span>
            </button>
        </li>
    )
}