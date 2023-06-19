

export default function AccountDetails() {
    return (

        <div className="w-full ">
            <details className="p-4 group border" open>
                <summary className="relative pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none group-hover:text-slate-900 transition duration-300">
                    DIRECT BANK TRANSFER
                </summary>
                <p className="mt-4 text-slate-500">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                </p>
            </details>
            <details className="p-4 group border">
                <summary className="relative pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none group-hover:text-slate-900 transition duration-300">
                    CHEQUE PAYMENT
                </summary>
                <p className="mt-4 text-slate-500">
                    Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                </p>
            </details>
            <details className="p-4 group border">
                <summary className="relative pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none group-hover:text-slate-900 transition duration-300">
                    PAYPAL
                </summary>
                <p className="mt-4 text-slate-500">
                    Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account. All updated components will be accompanied by an "updated" badge. You will be able to see that on our main components page as well as our side navigation.
                </p>
            </details>
        </div>

    )
}
