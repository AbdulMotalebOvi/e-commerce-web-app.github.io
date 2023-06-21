import { CommonSection } from "../sectionHook/CommonSection";
import Products from "./Products";



export default function Categories() {
    const header = 'Shop';
    const title = 'Shop';
    const linkUp = 'Shop'
    const sectionMarkup = CommonSection(header, title, linkUp);
    return (
        <section>
            {sectionMarkup}
            <div className=" my-20 max-w-screen-xl mx-auto ">
                <Products />
            </div>
        </section>
    )

}