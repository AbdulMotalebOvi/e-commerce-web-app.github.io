
import Image from 'next/image';
import apple from '../../assests/images/apple.png';
import bmw from '../../assests/images/bmw.png';
import nick from '../../assests/images/nick.png';
import villa from '../../assests/images/vila.png';
import shaowmi from '../../assests/images/mi.png';
import addidas from '../../assests/images/addidas.png';
import './vbrand.css';

export default function BrandSection() {
    const cardStyle = {
        width: '170px',
        height: '170px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '25px',
    };

    const logoStyle = {
        width: '70px',
        height: '70px',
    };

    return (
        <div className="myStyle">
            <div className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
                    <div className="flex justify-center">
                        <div style={cardStyle}>
                            <Image src={apple} alt="Apple" style={logoStyle} width={70} height={70} />
                        </div>
                    </div>
                    <div style={cardStyle}>
                        <Image src={bmw} alt="BMW" style={logoStyle} width={70} height={70} />
                    </div>
                    <div className="flex justify-center">
                        <div style={cardStyle}>
                            <Image src={nick} alt="Nick" style={logoStyle} width={70} height={70} />
                        </div>
                    </div>
                    <div style={cardStyle}>
                        <Image src={villa} alt="Villa" style={logoStyle} width={70} height={70} />
                    </div>
                    <div style={cardStyle}>
                        <Image src={shaowmi} alt="Shaowmi" style={logoStyle} width={70} height={70} />
                    </div>
                    <div style={cardStyle}>
                        <Image src={addidas} alt="Addidas" style={logoStyle} width={70} height={70} />
                    </div>
                </div>
            </div>
        </div>
    );
}
