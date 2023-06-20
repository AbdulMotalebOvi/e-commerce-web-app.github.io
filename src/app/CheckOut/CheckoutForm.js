
import { useState } from 'react'
import ButtonBlack from '../ButtonBlack/ButtonBlack'
import AccountDetails from './AccountDetails'
import Loader from '../Loader/Loader'

export default function CheckoutForm({ myFetchData, isLoading }) {
    const [myData, setMyData] = useState(myFetchData[0] || [])
    if (isLoading) {
        return <Loader />
    }

    console.log(myData);
    return (
        <>
            <div className="">
                <div className="mx-auto max-w-3xl px-4 lg:px-8 mt-8">
                    <h4 className="text-2xl my-3 font-semibold">Billing Details</h4>
                    <form className="grid grid-cols-6 gap-4">
                        <fieldset className="col-span-6">
                            <legend className="block text-sm font-medium text-gray-700">
                                Country
                            </legend>

                            <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                <div>
                                    <label htmlFor="Country" className="sr-only">Country</label>

                                    <select
                                        id="Country"
                                        className="relative py-2 px-2 w-full rounded-md border-gray-300 border focus:z-10 sm:text-sm"
                                    >
                                        <option>England</option>
                                        <option>Wales</option>
                                        <option>Scotland</option>
                                        <option>France</option>
                                        <option>Belgium</option>
                                        <option>Japan</option>
                                    </select>
                                </div>


                            </div>
                        </fieldset>
                        <div className="col-span-3">
                            <label
                                htmlFor="FirstName"
                                className="block text-xs font-medium text-gray-700"
                            >
                                First Name
                            </label>

                            <input
                                type="text"
                                id="FirstName"
                                className="mt-1 py-2 w-full rounded-md border-gray-200  px-2  border shadow-sm sm:text-sm"
                            />
                        </div>

                        <div className="col-span-3">
                            <label
                                htmlFor="LastName"
                                className="block text-xs font-medium text-gray-700"
                            >
                                Last Name
                            </label>

                            <input
                                type="text"
                                id="LastName"
                                className="mt-1 px-2  border py-2 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="address" className="block text-xs font-medium text-gray-700">
                                Address
                            </label>

                            <input
                                type="address"

                                className="mt-1 px-2  border  py-2 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                                email
                            </label>

                            <input
                                type="email"

                                className="mt-1 px-2  border  py-2 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                                Phone
                            </label>

                            <input
                                type="tel"
                                id="Phone"
                                className="mt-1 px-2  border py-2 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor=" Town / City" className="block text-xs font-medium text-gray-700">
                                Town / City
                            </label>

                            <input
                                type="address"
                                className="mt-1 px-2  border  py-2 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                        </div>

                    </form>
                </div>
            </div>
            <div>
                <div className="flex justify-end ">
                    <div className="w-screen max-w-2xl border-3 p-10 border border-[#eaedff]  first-letter: space-y-4">
                        <h4 className="text-2xl my-3 font-semibold">Your Order</h4>
                        <dl className="space-y-4 text-[15px] border border-[#eaedff] p-5">

                            <>
                                <div className="flex   justify-between ">
                                    <dt>Product</dt>
                                    <dd>Total</dd>
                                </div>
                                <hr />
                                <div className="flex justify-between ">
                                    <dt>Eames House Bird in Black × 1</dt>
                                    <dd>${myData?.discountedTotal}</dd>
                                </div>
                                <hr />

                                <div className="flex justify-between">
                                    <dt>Total Products	</dt>
                                    <dd>${myData?.totalProducts}</dd>
                                </div>
                            </>

                            <hr />

                            <div className="flex justify-between">
                                <dt>Order Total	</dt>
                                <dd>${myData.total}</dd>
                            </div>
                            <hr />
                            <AccountDetails />
                        </dl>
                        <div className="my-5">
                            <ButtonBlack title='proceed to checkout' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
