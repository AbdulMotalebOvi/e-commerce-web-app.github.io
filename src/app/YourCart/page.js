import ButtonBlack from "../ButtonBlack/ButtonBlack";
import { CommonSection } from "../sectionHook/CommonSection";
import CartTotal from "./CartTotal";
import Table from "./Table";

export default function YourCart() {
    const header = 'Your Cart';
    const title = 'Cart';
    const linkUp = 'Cart'
    const sectionMarkup = CommonSection(header, title, linkUp);
    return (
        <section>
            {sectionMarkup}
            <div className="my-20 max-w-screen-xl mx-auto">
                <Table />
                <div className="flex items-center justify-between my-10">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="relative">
                            <input
                                type="email"
                                id="UserEmail"
                                placeholder="Coupon Code"
                                className="px-4 py-3 text-[323232]  border-2 rounded-md border-gray-400 pe-10 shadow-sm sm:text-sm"
                            />

                        </div>
                        <ButtonBlack title='apply coupon' />
                    </div>
                    <ButtonBlack title='Clear Cart' />
                </div>
                <div className="my-10">
                    <CartTotal />
                </div>
            </div>
        </section>
    )
}