

export default function Table() {
    return (
        <table className="min-w-full divide-y border-2 text-center border-[#eaedff]">
            <thead className="border-2  border-[#eaedff]">
                <tr className="">
                    <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                        Image
                    </th>
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
                <tr>
                    <td className="px-6 border-2 border-[#eaedff]  py-4 whitespace-nowrap">
                        <img src="product-image.jpg" alt="Product" className="h-10 w-10 rounded-full" />
                    </td>
                    <td className="border-2 border-[#eaedff]  px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Product Name</div>
                    </td>
                    <td className="border-2 border-[#eaedff]  px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">$9.99</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-2 border-[#eaedff] ">
                        <div className="text-sm text-gray-900">$19.98</div>
                    </td>
                    <td className="border-2 border-[#eaedff]  px-6 py-4 whitespace-nowrap">
                        <button className="text-red-500 hover:text-red-700">Remove</button>
                    </td>
                </tr>
                {/* Additional table rows */}
            </tbody>
        </table>

    )
}
