import CartList from "./CartList";

const Cart = () => {
    return (
        <div>
            <div className="mt-[4.5rem] rounded-xl">
                <div className="bg-white px-4 space-y-2 py-4 rounded-lg">
                    <h3 className="text-text-main text-lg font-semibold">Have coupon?</h3>
                    <div className="flex">
                        <input
                            className="input border-gray-200 rounded-r-none w-2/3 focus:outline-none"
                            placeholder="Coupon code"
                            type="text"
                            id="discount-field"
                            required
                        />
                        <button
                            className="bg-[#11111180] rounded-l-none rounded-r-lg text-white py-3 px-5 font-medium"
                            id="btn-discount"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>
            <CartList></CartList>
        </div>
    );
};

export default Cart;
