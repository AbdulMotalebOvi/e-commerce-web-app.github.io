'use client'
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import { CommonSection } from "../sectionHook/CommonSection";
import Table from "./Table";
import { useLocalStorage } from "../IDContext/LocalStorageProvider";
import { toast } from "react-hot-toast";

import Button from "../Button/Button";
import Link from "next/link";
import { BASE_URL } from "../BaseUrl/config";


export default function YourCart() {
    const { myId } = useLocalStorage()

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://dummyjson.com/carts/user/${myId}`, {

                })
                const data = res.json()
                return data
            }

            catch (error) {
                console.log(error);
            }
        }
    })


    const myFetchData = products?.carts;

    if (isLoading) {
        return <Loader />
    }
    const handlerToDeleteUser = id => {
        const proceed = window.confirm('Do you want to delete this user?')
        if (proceed) {
            fetch(`${BASE_URL}carts/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        toast.success('Item deleted Successfully')
                        refetch()
                    }
                })
        }
    }



    // section title
    const header = 'Your Cart';
    const title = 'Cart';
    const linkUp = 'Cart'
    const sectionMarkup = CommonSection(header, title, linkUp);
    return (
        <section>
            {sectionMarkup}
            <div className="my-20 max-w-screen-xl mx-auto">
                {
                    myFetchData?.length > 0 ?
                        <Table handlerToDeleteUser={handlerToDeleteUser} isLoading={isLoading} myFetchData={myFetchData} />
                        :
                        <h1 className="text-2xl font-semibold my-5">Nothing To Show</h1>
                }

                <div className="my-10">

                    <Link href='/CheckOut'>
                        <Button title='proceed to checkout' />
                    </Link>

                </div>
            </div>
        </section>
    )
}