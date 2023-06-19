'use client'
import useGetData from "../Hooks/useGetData";
import { useLocalStorage } from "../IDContext/LocalStorageProvider";
import Loader from "../Loader/Loader";
import { CommonSection } from "../sectionHook/CommonSection";
import CheckoutForm from "./CheckoutForm";

export default function Checkout() {
    const { data: useata } = useLocalStorage()
    const id = useata?.userId
    const url = `https://dummyjson.com/carts/user/${id}`
    const { data, isLoading } = useGetData(url)

    if (isLoading) {
        return <Loader />
    }
    const myFetchData = data.carts[0].products
    console.log(myFetchData);

    const header = 'Checkout';
    const title = 'Checkout';
    const linkUp = 'Checkout'
    const sectionMarkup = CommonSection(header, title, linkUp);
    return (
        <section>
            {sectionMarkup}
            <div className="my-10 max-w-screen-xl mx-auto">
                <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                    <CheckoutForm />
                </div>

            </div>
        </section>
    )
}