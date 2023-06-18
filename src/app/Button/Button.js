'use client'
import { useRouter } from "next/navigation"
import './button.css'

export default function Button({ title, link }) {
    const router = useRouter()
    return (
        <button onClick={() => router.push(`/${link}`)} className='btn'>{title}</button>
    )
}
