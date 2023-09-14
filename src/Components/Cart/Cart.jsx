const Cart = ({ selectedProduct }) => {
    // const { title, price } = selectedProduct;
    return (
        <div className="rounded-xl">
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
            <div className="my-8 py-4 bg-white rounded-lg">
                <ol className="ml-10 list-decimal text-lg font-semibold space-y-2">
                    {selectedProduct.map((card) => (
                        <li>{card.title}</li>
                    ))}
                </ol>
                <div className="divider w-[85%] mx-auto my-1"></div>
                <div className="py-1 ml-5 space-y-2">
                    <h3 className="text-[#111] text-lg font-semibold">
                        Total Price:
                        <span className="text-[#11111180]" id="total">
                            0.00
                        </span>
                        <span className="text-[#11111180]">TK</span>
                    </h3>

                    <h3 className="text-[#111] text-lg font-semibold">
                        Discount:
                        <span className="text-[#11111180]" id="discount">
                            0.00
                        </span>
                        <span className="text-[#11111180]">TK</span>
                    </h3>

                    <h3 className="text-[#111] text-lg font-semibold">
                        Total:
                        <span className="text-[#11111180]" id="grand-total">
                            0.00
                        </span>
                        <span className="text-[#11111180]">TK</span>
                    </h3>
                </div>
                <div className="divider w-[85%] mx-auto my-2"></div>
                <button
                    className="py-2 bg-[#11111180] text-white text-lg font-medium rounded-md w-[85%] ml-7 md:ml-12 lg:ml-5 my-2"
                    id="btn-purchase"
                >
                    Make Purchase
                </button>
            </div>
        </div>
    );
};

export default Cart;
