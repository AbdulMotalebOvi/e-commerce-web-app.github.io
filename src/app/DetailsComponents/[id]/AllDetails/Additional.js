const Additional = () => {
    return (
        <div>
            <table className="border-collapse w-full ">

                <tbody>
                    <tr className="border-b">
                        <td className="py-2">Weight</td>
                        <td className="py-2 text-center">0.22Kg</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2">Dimension</td>
                        <td className="py-2 text-center">62 x 77 x 12</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2">Size</td>
                        <td className="py-2 text-center">XX , Xl, M, LG, SM,MD</td>
                    </tr>
                    {/* Add more items here */}
                </tbody>
            </table>
        </div>
    );
};
export default Additional;