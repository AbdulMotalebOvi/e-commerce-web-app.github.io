import Image from 'next/image'
import man from '../../assests/bg/image 49.png'
import glass from '../../assests/bg/image 50.png'
import shoes from '../../assests/bg/image 51.png'
import watch from '../../assests/bg/image 52.png'

import './vbrand.css'

export default function RightSideImg() {
    return (
        <div className='myStyle2'>
            <div className=''>
                <Image className='relative w-[415px] h-[400px] ml-[80px] mt-[30px]' src={man} />
            </div>
            <div className='relative before:absolute right-0 top-[-90px]'>
                <div className='flex justify-center items-center space-x-3'>
                    <Image className='w-[130px] h-[130px] rounded-[12px]' src={glass} />
                    <Image className='w-[130px] h-[130px] rounded-[12px]' src={shoes} />
                    <Image className='w-[130px] h-[130px] rounded-[12px]' src={watch} />
                </div>
            </div>
        </div>
    )
}
