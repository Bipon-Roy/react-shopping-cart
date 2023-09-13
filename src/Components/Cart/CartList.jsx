const CartList = () => {
    return (
        <div className="my-6 py-4 bg-white rounded-lg">
            <ol id="cart-list" className="ml-10 list-decimal text-lg font-semibold space-y-2"></ol>
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
    );
};

export default CartList;
