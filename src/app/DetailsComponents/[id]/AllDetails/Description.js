import { CheckIcon } from '@heroicons/react/24/solid'
const Description = () => {
    return (
        <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.

            </p>
            <div className='my-5'>
                <ul className="list-disc list-inside text-[#848b8a]">
                    <li className="flex items-center space-x-5">
                        <CheckIcon className="h-6 w-6 text-[#606060]" />
                        <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, doloremque!</span>
                    </li>
                    <li className="flex items-center space-x-5">
                        <CheckIcon className="h-6 w-6 text-[#606060]" />
                        <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, doloremque!</span>
                    </li>
                    <li className="flex items-center space-x-5">
                        <CheckIcon className="h-6 w-6 text-[#606060]" />
                        <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, doloremque!</span>
                    </li>

                </ul>

            </div>
        </div>
    );
};
export default Description;