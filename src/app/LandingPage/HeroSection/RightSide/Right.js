'use client'

// Import  images
import img1 from '../../../assests/images/cameraProduct.png';
import Image from 'next/image';



export default function Right() {
    return (
        <>
            <div className='flex flex-col mt-[60] space-y-10'>

                <Image className='w-[130px] h-[130px] ' src={img1} alt='Image 1' />
                <Image className='w-[130px] h-[130px] ' src={img1} alt='Image 1' />
            </div>
        </>
    )
}
