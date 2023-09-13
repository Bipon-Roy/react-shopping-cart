import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("./product.json")
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);
    const [selectProduct, setSelectProduct] = useState([]);

    const handleCart = (card) => {
        setSelectProduct([...selectProduct, card]);
    };
    console.log(selectProduct);
    return (
        <div>
            <h1 className="text-4xl font-semibold my-4 ml-6 lg:ml-0">Products {cards.length}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 lg:mx-0">
                {cards.map((card) => (
                    <div key={card.id} className="card bg-base-100">
                        <figure className="px-20 py-5 bg-[#1111110D] m-6 rounded-xl">
                            <img src={card.image} alt="Product" />
                        </figure>
                        <div className="items-center text-center pb-4">
                            <div className="rating">
                                <input
                                    type="radio"
                                    name="rating-1"
                                    className="mask mask-star-2 bg-[#FFC107]"
                                />
                                <input
                                    type="radio"
                                    name="rating-1"
                                    className="mask mask-star-2 bg-[#FFC107]"
                                />
                                <input
                                    type="radio"
                                    name="rating-1"
                                    className="mask mask-star-2 bg-[#FFC107]"
                                    checked
                                />
                                <input
                                    type="radio"
                                    name="rating-1"
                                    className="mask mask-star-2 bg-[#FFC107]"
                                />
                                <input
                                    type="radio"
                                    name="rating-1"
                                    className="mask mask-star-2 bg-[#FFC107]"
                                />
                            </div>
                            <p className="text-[#111] font-bold text-lg">{card.title}</p>
                            <p className="text-[#11111180] text-lg">{card.price}</p>
                            <button
                                className="btn btn-outline btn-secondary my-4"
                                onClick={() => handleCart(card)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Cart handleCart={handleCart}></Cart>
        </div>
    );
};

export default Cards;
