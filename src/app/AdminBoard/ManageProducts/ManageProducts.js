'use client'
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '@/app/Loader/Loader';
import { BASE_URL } from '@/app/BaseUrl/config';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';



const ManageProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const router = useRouter()

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('https://dummyjson.com/products', {

                })
                const data = res.json()
                return data
            }

            catch {

            }
        }
    })
    if (isLoading) {
        return <Loader />
    }
    const myProducts = products.products

    const handlerToDelete = id => {
        const proceed = window.confirm('Do you want to delete this user?')
        if (proceed) {
            fetch(`https://dummyjson.com/products/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedOn)
                        toast.success('Items deleted Successfully')
                    refetch()
                })
        }
    }
    // update


    return (
        <div>
            <h1 className='text-2xl font-bold my-3'>Manage Products: {myProducts?.length}</h1>
            <div className="overflow-x-auto w-full">

                <table className="min-w-full  divide-y border-2 text-center border-[#eaedff]">
                    <thead className="border-2  border-[#eaedff]">
                        <tr className="">

                            <th scope="col" className=" font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                                Numbers of
                            </th>
                            <th scope="col" className="px-2 py-2 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                                Price
                            </th>

                            <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                                Total
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-green-600 uppercase tracking-wider">
                                Update
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                                Remove
                            </th>
                        </tr>
                    </thead>
                    <tbody className=" divide-y">
                        {
                            myProducts?.map((dr, index) =>
                                <tr>
                                    <td className="border-2 border-[#eaedff]  px-2 py-2 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{index + 1}</div>
                                    </td>
                                    <td className="border-2 border-[#eaedff] px-2 py-2 whitespace-nowrap">
                                        <div>
                                            <img className='w-[60px] h-[60px]' src={dr?.thumbnail} alt="product" /></div>
                                    </td>
                                    <td className="border-2 border-[#eaedff]  px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">${dr.price}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-2 border-[#eaedff] ">
                                        <div className="text-sm text-gray-900">{dr.stock}</div>
                                    </td>
                                    <td className="border-2 border-[#eaedff]  px-6 py-4 whitespace-nowrap">
                                        <Link href={`/AdminBoard/Updateproducts/${dr.id}`} className="text-green-600">Update</Link>
                                    </td>
                                    <td className="border-2 border-[#eaedff]  px-6 py-4 whitespace-nowrap">
                                        <button onClick={() => handlerToDelete(dr.id)} className="text-red-600 hover:text-red-700">Delete</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageProducts;