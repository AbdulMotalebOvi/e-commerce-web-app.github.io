import Image from 'next/image';
import apple from '../../assests/images/apple.png'
import bmw from '../../assests/images/bmw.png'
import nick from '../../assests/images/nick.png'
import villa from '../../assests/images/vila.png'
import shaowmi from '../../assests/images/mi.png'
import addidas from '../../assests/images/addidas.png'

import './vbrand.css'

export default function () {

    const cardStyle = {
        width: '170px',
        height: '170px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '25px'
    };

    const logoStyle = {
        width: '70px',
        height: '70px',
    };

    return (
        <div className='myStyle'>
            {/* <div className='bg-[#D6C5FF] rounded-[25px] bg-opacity-10 p-10'>
                <div className='grid grid-cols-3 gap-5 justify-center'>
                    <div style={cardStyle}>
                        <Image src={apple} style={logoStyle} />
                    </div>
                    <div style={cardStyle}>
                        <Image src={bmw} style={logoStyle} />
                    </div>
                    <div style={cardStyle}>
                        <Image src={nick} style={logoStyle} />
                    </div>
                    <div style={cardStyle}>
                        <Image src={villa} style={logoStyle} />
                    </div>
                    <div style={cardStyle}>
                        <Image src={shaowmi} style={logoStyle} />
                    </div>
                    <div style={cardStyle}>
                        <Image src={addidas} style={logoStyle} />
                    </div>
                </div>
            </div> */}
            <div className='p-10'>
                <div className='grid grid-cols-3 gap-5 justify-center'>
                    <div className='flex justify-center'>
                        <div style={cardStyle}>
                            <Image src={apple} style={logoStyle} />
                        </div>
                    </div>
                    <div style={cardStyle}>
                        <Image src={bmw} style={logoStyle} />
                    </div>
                    <div className='flex justify-center'>
                        <div style={cardStyle}>
                            <Image src={nick} style={logoStyle} />
                        </div>
                    </div>
                    <div style={cardStyle}>
                        <Image src={villa} style={logoStyle} />
                    </div>
                    <div style={cardStyle}>
                        <Image src={shaowmi} style={logoStyle} />
                    </div>
                    <div style={cardStyle}>
                        <Image src={addidas} style={logoStyle} />
                    </div>
                </div>
            </div>
        </div>
    )
}
