'use client'

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(
        {
            queryKey: ['users'],
            queryFn: async () => {
                const res = await fetch('https://dummyjson.com/users')
                const data = await res.json()
                const myData = data?.users
                return myData;

            }
        }
    )

    const handlerToDeleteUser = id => {
        const proceed = window.confirm('Do you want to delete this user?')
        if (proceed) {
            fetch(`https://dummyjson.com/users/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedOn) {
                        toast.success('User deleted Successfully')
                        refetch()
                    }
                })
        }
    }
    return (
        <>
            <h1 className='text-2xl font-semibold my-4'>My Users</h1>
            <div className="overflow-x-auto">
                <div className="min-w-full overflow-hidden overflow-x-scroll">
                    <table className="table-auto min-w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Iamge</th>
                                <th className="px-4 py-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((bk, i) => (
                                <tr key={i} className="hover">
                                    <td className="border px-4 py-2">{i + 1}</td>
                                    <td className="border px-4 py-2">{bk.username}</td>
                                    <td className="border px-4 py-2">{bk.email}</td>
                                    <td className="border px-4 py-2"><img className='w-[50px] h-[50px] rounded-xl' src={bk.image}
                                        onError={(e) => {
                                            e.currentTarget.src = "https://media.istockphoto.com/id/155384933/photo/computer-showing-an-error-message.jpg?b=1&s=612x612&w=0&k=20&c=g6FZqU_w16SQBzI4ACgj5nwitfDleNS-xCorvBsxjXA="
                                        }}

                                    /></td>

                                    <td className="border px-4 py-2"><button className="btn btn-error text-white" onClick={() => handlerToDeleteUser(bk.id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default AllUsers;