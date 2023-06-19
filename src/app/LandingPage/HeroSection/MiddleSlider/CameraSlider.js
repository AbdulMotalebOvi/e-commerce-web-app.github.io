'use client'

// Import your images
import img1 from '../../../assests/images/imgCamera.png';
import Image from 'next/image';

const CameraSlider = () => {
    return (

        <div className='w-[410px] h-[410px] md:w-[510px] md:h-[510px] rounded-full border-10 border-[rgba(32, 98, 255, 0.4)]'>
            <Image
                className='w-full h-full object-cover rounded-full'
                src={img1}
                alt='Image 1'
            />
        </div>
    );
};

export default CameraSlider;
