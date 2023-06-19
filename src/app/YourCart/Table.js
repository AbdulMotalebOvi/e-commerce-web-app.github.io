

export default function Table({ myFetchData, handlerToDeleteUser }) {
    return (
        <table className="min-w-full divide-y border-2 text-center border-[#eaedff]">
            <thead className="border-2  border-[#eaedff]">
                <tr className="">

                    <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                        Unit Price
                    </th>
                    <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                        Total
                    </th>
                    <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                        Remove
                    </th>
                </tr>
            </thead>
            <tbody className=" divide-y">
                {
                    myFetchData?.map(pd =>
                        <tr>
                            <td className="border-2 border-[#eaedff]  px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{pd.title}</div>
                            </td>
                            <td className="border-2 border-[#eaedff]  px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">${pd.price} X {pd.quantity}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-2 border-[#eaedff] ">
                                <div className="text-sm text-gray-900">${pd.total}</div>
                            </td>
                            <td className="border-2 border-[#eaedff]  px-6 py-4 whitespace-nowrap">
                                <button onClick={() => handlerToDeleteUser(pd.id)} className="text-red-600 hover:text-red-700">Remove</button>
                            </td>
                        </tr>
                    )
                }
                {/* Additional table rows */}
            </tbody>
        </table>

    )
}
