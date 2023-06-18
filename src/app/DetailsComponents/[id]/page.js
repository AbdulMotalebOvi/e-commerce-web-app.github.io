'use client'
import { CommonSection } from "@/app/sectionHook/CommonSection";
import DetailLandingPage from "./DetailLandingPage";
import Loader from "@/app/Loader/Loader";
import Filtering from "./Filtering";
import useGetData from "@/app/Hooks/useGetData";


export default function ProductDetail({ params }) {
    const header = 'Product Details';
    const title = 'Product Details';
    const sectionMarkup = CommonSection(header, title);
    const url = `https://dummyjson.com/products/${params.id}`
    const { data, isLoading } = useGetData(url)
    if (isLoading) {
        return <Loader />
    }
    return (

        <section>
            {sectionMarkup}
            <div className="my-0 max-w-screen-xl mx-auto">
                <DetailLandingPage data={data} />
                <Filtering data={data} />
            </div>
        </section>

    )
}
