import Image from 'next/image';
import img1 from '../assests/images/page-title-1.jpg'
import Link from 'next/link';
export function CommonSection(header, title, linkUp) {
    return (
        <div>
            <div className='relative'>
                <Image src={img1} alt="" className='w-full object-cover' />
                <div className='absolute inset-0 bg-opacity-50 flex items-center flex-col justify-center'>
                    <h3 className='text-[30px] my-3 font-medium'>{header}</h3>
                    <div className='flex space-x-2'>
                        <Link href='/' className='text-black'>Home /</Link>
                        <Link href={`/${linkUp}`} className='text-black'>
                            {title}
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}
