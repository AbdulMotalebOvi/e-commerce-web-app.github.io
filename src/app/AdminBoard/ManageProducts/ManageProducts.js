'use client'
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '@/app/Loader/Loader';


const ManageProducts = () => {

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
        console.log(id);
        const proceed = window.confirm('Do you want to delete this user?')
        if (proceed) {
            fetch(`https://dummyjson.com/products/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedOn)
                        toast.success('Items deleted Successfully')
                    refetch()
                })
        }
    }



    return (
        <div>
            <h1 className='text-2xl font-bold my-3'>Manage Doctors: {myProducts?.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr className='uppercase text-[#383838] font-semibold'>
                            <th>Numbers</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='my-3'>

                        {
                            myProducts?.map((dr, index) =>
                                <tr key={index} className='my-3'>
                                    <th>
                                        <label>
                                            <h1>{index + 1}</h1>
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex  space-x-3">
                                            <div className="avatar">
                                                <div className="rounded-full w-12 h-12">
                                                    <img src={dr?.thumbnail} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-bold">{dr.title}</div>

                                        </div>
                                    </td>
                                    <td>
                                        {dr.price}

                                    </td>
                                    <td>
                                        <button className="bg-black rounded-full px-5 py-2 text-white" onClick={() => handlerToDelete(dr.id)}>
                                            Delete
                                        </button>
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