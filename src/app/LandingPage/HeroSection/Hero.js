import ButtonBlack from '@/app/ButtonBlack/ButtonBlack'
import CameraSlider from './MiddleSlider/CameraSlider'
import Right from './RightSide/Right'
import './hero.css'
import MenuItems from '../MenuItems/MenuItems'

export default function Hero() {
    return (
        <section className='bg_1'>
            <div className='pl-[180px] pr-[160px] flex flex-col justify-center m-auto '>
                <div className='my-3'>
                    <MenuItems />
                </div>
                <div className='flex justify-between items-center hero-section mt-[40px]'>
                    {/* First part */}
                    <div className='w-[500px] relative'>
                        <div className='space-y-4'>
                            <p className='text-[12px]'>100% QUALITY, 100% SATISFACTION</p>
                            <h1 className='font-extrabold text-6xl'>Where the world <br /> comes to shop.</h1>
                            <p className='text-[18px]'>Life is hard enough already. Let us make it a little easier, Vision of Snipshop for a better outlook.</p>
                        </div>
                        <div className="btn_last mt-[60px] flex justify-between">
                            <ButtonBlack title='Shop Now' />
                            <div>
                                <p>Start From</p>
                                <h3 className='font-semibold text-[24px]'>110.00$</h3>
                            </div>
                        </div>
                    </div>
                    {/* Second part */}
                    <div className=''>
                        <CameraSlider />
                    </div>
                    <div className='flex-shrink-2'>
                        <Right />
                    </div>
                </div>

            </div>


        </section>
    )
}
