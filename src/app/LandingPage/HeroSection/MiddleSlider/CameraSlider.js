'use client'

// Import your images
import img1 from '../../../assests/images/imgCamera.png';
import Image from 'next/image';

const CameraSlider = () => {
    return (

        <div style={{ width: '410px', height: '410px', borderRadius: '50%', border: '10px solid rgba(32, 98, 255, 0.4)' }}>
            <Image style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} src={img1} alt='Image 1' />

        </div>
    );
};

export default CameraSlider;
