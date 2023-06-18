import Review from "../../ReviewComponent/Review";

const Reviews = ({ data }) => {
    const { thumbnail, title, rating, brand, description } = data;
    return (

        <div className="max-w-screen-xl mx-auto overflow-hidden">
            <img className="object-cover w-full h-64" src={thumbnail} alt="Article" />

            <div className="p-6">
                <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{brand}</span>

                    <div className="flex justify-between items-center">
                        <h4 className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{title}</h4>

                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="flex items-center justify-center">
                            <img className="object-cover h-[60px] rounded-full" src={thumbnail} alt="Avatar" />
                            <div className="flex flex-col items-center">
                                <Review number={rating} />
                                <h4 className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">Jone Doe</h4>
                                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};
export default Reviews;