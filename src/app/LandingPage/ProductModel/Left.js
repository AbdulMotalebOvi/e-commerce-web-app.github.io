import Image from 'next/image'
import img1 from '../../assests/bg/image122.png'


export default function Left() {
    return (
        <div className='myStyle3
        '>
            <div className='float-right'>
                <Image src={img1} className='h-[530px]' />
            </div>
        </div>
    )
}
