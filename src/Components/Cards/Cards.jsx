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

    const [selectedProduct, setSelectedProduct] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(0);
    const handleCart = (card) => {
        setSelectedProduct([...selectedProduct, card]);
        const price = card.price;
        setSelectedPrice(selectedPrice + price);
    };
    console.log(selectedPrice);
    return (
        <div className="max-w-[1340px] mx-auto flex flex-col lg:flex-row gap-7 py-12 mt-12">
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
            <div>
                <Cart selectedProduct={selectedProduct}></Cart>
            </div>
        </div>
    );
};

export default Cards;
