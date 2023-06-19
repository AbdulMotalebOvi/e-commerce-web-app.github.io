
import Button from "../Button/Button";

export default function CartTotal() {

    return (
        <div className="flex justify-between">
            <div>
            </div>
            <div>
                <h4 className="text-2xl my-3 font-semibold">Cart totals</h4>
                <div className="flex justify-end ">
                    <div className="w-screen max-w-lg space-y-4">
                        <dl className="space-y-4 text-[15px] border border-[#eaedff] p-5">
                            <div className="flex justify-between ">
                                <dt>Subtotal</dt>
                                <dd>£250</dd>
                            </div>
                            <hr />
                            <div className="flex justify-between">
                                <dt>Total</dt>
                                <dd>£200</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="my-5">
                    <Button title='proceed to checkout' link='CheckOut' />
                </div>
            </div>

        </div>
    )
}
