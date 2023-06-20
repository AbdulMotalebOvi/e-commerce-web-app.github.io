'use client'
import Loader from "@/app/Loader/Loader";
import Review from "../ReviewComponent/Review";
import { PlusIcon } from '@heroicons/react/24/solid'
import { MinusIcon } from '@heroicons/react/24/solid'
import { useContext, useState } from "react";
import YourReview from "./YourReview";

import { CartContext } from "@/app/IDContext/CartProvider";
import { toast } from "react-hot-toast";
import { useLocalStorage } from "@/app/IDContext/LocalStorageProvider";
import { useRouter } from "next/navigation";




export default function DetailLandingPage({ data, loading }) {
    const { data: useata } = useLocalStorage()
    const [userOwnID, setId] = useState(useata?.userId);
    const router = useRouter()
    const [product, setProduct] = useState([]);
    const { addToCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1);
    const [amount, setAmount] = useState();
    const [open, setOpen] = useState(false);
    const { id, thumbnail, title, price, stock, rating, brand, description } = data;

    if (loading) {
        return <Loader />;
    }
    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            const total = quantity - 1
            setQuantity(total);
            const totalAmount = amount - price
            setAmount(totalAmount)

        }
    };

    const handleIncreaseQuantity = () => {
        const total = quantity + 1

        setQuantity(total);
        const totalAmount = price * total
        setAmount(totalAmount)

    };

    const handleAddToCart = (e) => {
        e.preventDefault();

        const cart = {
            thumbnail, title, price, quantity, id, amount
        }

        const newCartItem = {
            id: id,
            quantity: quantity,
            price,
            thumbnail,
            amount
            // Add other relevant properties from your product data
        };
        setProduct((prevProducts) => [...prevProducts, newCartItem]);
        const cartData = {
            userId: userOwnID,
            products: product,
        };

        fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cartData),
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data.discountedTotal) {
                    addToCart(cart)
                    toast.success('Product Added Successfully');
                    router.push('/YourCart')
                }

            })
            .catch((error) => {
                console.error(error);
                toast.error('Failed to add product');
            });

    };
    return (
        <section className="relative mx-auto max-w-screen-xl px-4 py-10">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                    <img
                        alt=""
                        src={thumbnail}
                        className="aspect-square w-full rounded-xl object-cover"
                        onError={(e) => {
                            e.currentTarget.src =
                                "https://media.istockphoto.com/id/155384933/photo/computer-showing-an-error-message.jpg?b=1&s=612x612&w=0&k=20&c=g6FZqU_w16SQBzI4ACgj5nwitfDleNS-xCorvBsxjXA="
                        }}
                    />
                </div>

                <div className="sticky top-0">
                    <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-[18px] tracking-wide text-blue-600">
                        Stock: {stock}
                    </strong>

                    <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="space-y-2">
                            <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>

                            <ul className="flex items-center space-x-4">
                                <li className="text-[16px]">{brand}</li>
                                <li>
                                    <Review number={rating} />
                                </li>
                                <li>
                                    <button className="button" onClick={() => setOpen(true)}>
                                        Add Review
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <>
                            <YourReview data={data} open={open} setOpen={setOpen} />
                        </>

                        <p className="text-lg font-bold">
                            ${amount ? amount : price}
                        </p>
                    </div>
                    <div className="mt-4">
                        <div className="prose max-w-none">
                            <p>{description}</p>
                        </div>
                    </div>

                    <form onSubmit={handleAddToCart} className="mt-8">
                        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex rounded border-gray-200">
                                <button
                                    type="button"
                                    className="px-3 py-2 rounded-l bg-gray-200 hover:bg-gray-300 focus:outline-none"
                                    onClick={handleDecreaseQuantity}
                                >
                                    <MinusIcon className="w-4 h-4" />
                                </button>
                                <input
                                    type="number"
                                    id="quantity"
                                    min="1"
                                    value={quantity}
                                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                />
                                <button
                                    type="button"
                                    className="px-3 py-2 rounded-r bg-gray-200 hover:bg-gray-300 focus:outline-none"
                                    onClick={() => handleIncreaseQuantity()}
                                >
                                    <PlusIcon className="w-4 h-4" />
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                                title="Add To Cart"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>


    )
}
