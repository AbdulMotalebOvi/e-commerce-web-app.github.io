import { CommonSection } from "../sectionHook/CommonSection";
import CheckoutForm from "./CheckoutForm";

export default function Checkout() {
    const header = 'Checkout';
    const title = 'Checkout';
    const linkUp = 'Checkout'
    const sectionMarkup = CommonSection(header, title, linkUp);
    return (
        <section>
            {sectionMarkup}
            <div className="my-10 max-w-screen-xl mx-auto">
                <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                    <CheckoutForm />
                </div>

            </div>
        </section>
    )
}