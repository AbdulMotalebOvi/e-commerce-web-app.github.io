import Image from 'next/image'
import img1 from '../../assests/bg/image122.png'


export default function Left() {
    return (
        <div className='myStyle3
        '>
            <div className="flex justify-center">
                <div className="w-full md:w-auto">
                    <Image src={img1} className="h-auto md:h-[530px] mx-auto" />
                </div>
            </div>
        </div>
    )
}
