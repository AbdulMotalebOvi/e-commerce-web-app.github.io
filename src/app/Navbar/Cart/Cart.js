
import Button from '@/app/Button/Button';
import ButtonBlack from '@/app/ButtonBlack/ButtonBlack';
import { CartContext } from '@/app/IDContext/CartProvider'
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import { useContext } from 'react'


export default function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext)
    const deleItem = (id) => {
        removeFromCart(id)
    }
    // console.log(cartItems);
    // Retrieve cartData from local storage

    return (
        <>
            {
                cartItems &&
                <li className="relative group">
                    <button className="flex items-center space-x-1 justify-center focus:outline-none">
                        <ShoppingBagIcon className="w-6 h-6 text-[#323232]" />
                        <span>2</span>
                    </button>

                    {
                        cartItems?.map(pd =>
                            <>
                                <div className="absolute right-[70px] mt-5 w-[350px] bg-white rounded-md transition-all duration-2000 opacity-0 group-hover:opacity-100  z-[1000]">
                                    <div className="overflow-hidden rounded bg-white  shadow-md shadow-slate-200">

                                        <div className="p-6 flex justify-between items-center border-b border-gray-500 ">
                                            <header className="flex gap-3  py-3">
                                                <div
                                                    href="#"
                                                    className="relative inline-flex h-[80px] w-[80px] items-center justify-center text-white"
                                                >
                                                    <img
                                                        src={pd.image}


                                                        className="max-w-full"
                                                    />
                                                </div>
                                                <div className='space-y-2'>
                                                    <p className="text-[13px] font-medium text-slate-700">
                                                        {pd.productName}
                                                    </p>
                                                    <p className="text-sm text-slate-400"> {`${pd.quantity} x $${pd.previousPrice}`}</p>
                                                </div>
                                            </header>
                                            <div>
                                                <XMarkIcon onClick={() => deleItem(pd._id)} className="w-6 h-6 text-[#323232] cursor-pointer" />
                                            </div>

                                        </div>
                                        <div className='flex justify-between items-center p-5 font-medium '>
                                            <p>Subtotal: </p>
                                            {
                                                !pd.amount ? <p>${pd.previousPrice} </p> : <p>${pd.amount} </p>
                                            }
                                        </div>
                                        <div className='p-5 flex flex-col space-y-4'>

                                            <Button title='View Cart' link='YourCart' ></Button>
                                            <Link href='/CheckOut'>

                                                <ButtonBlack title='Checkout'>Check Out</ButtonBlack>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </>


                        )
                    }
                </li>
            }
        </>

    )
}