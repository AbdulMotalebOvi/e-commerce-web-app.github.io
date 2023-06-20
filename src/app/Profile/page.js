'use client'
import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../IDContext/LocalStorageProvider';
import useGetData from '../Hooks/useGetData';
import Loader from '../Loader/Loader';
import { toast } from 'react-hot-toast';

export default function Profile() {
    const { myId } = useLocalStorage();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);
    const url = `https://dummyjson.com/users/${myId}`;
    const { data, isLoading } = useGetData(url);

    useEffect(() => {
        if (data) {
            setName(data.username);
            setEmail(data.email);
            setPassword(data.password);
        }
    }, [data]);

    const handleUpdate = (e) => {
        e.preventDefault();

        const userData = {
            username: name,

            password: password
        };
        console.log(userData);
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success('Info Update Successfully');
                setIsEditMode(false); // Disable edit mode after updating data
            });
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md space-y-3">
                <h2 className="text-2xl font-bold mb-10">Profile</h2>
                {data && (
                    <form onSubmit={handleUpdate}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`w-full rounded border border-gray-300 px-3 py-2 focus:outline-none ${isEditMode ? 'border-blue-500' : ''
                                    }`}
                                placeholder="Enter your name"
                                readOnly={!isEditMode} // Make the input read-only when not in edit mode
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                readOnly
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full rounded border  px-3 py-2 focus:outline-none border-blue-500'
                                placeholder="Enter your email"
                            // Make the input read-only when not in edit mode
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="text"

                                defaultValue={data?.password}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full rounded border border-gray-300 text-black px-3 py-2 focus:outline-none ${isEditMode ? 'border-blue-500' : ''
                                    }`}
                                placeholder="Enter your Password"
                                readOnly={!isEditMode} // Make the input read-only when not in edit mode
                            />
                        </div>
                        {isEditMode ? (
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                            >
                                Update
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                                onClick={() => setIsEditMode(true)} // Enable edit mode when clicked
                            >
                                Edit
                            </button>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
}
