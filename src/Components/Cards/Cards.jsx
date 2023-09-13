import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("./product.json")
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);

    return (
        <div>
            <h1 className="text-4xl font-semibold my-4">Products {cards.length}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <Card card={card} key={card.id}></Card>
                ))}
            </div>
        </div>
    );
};

export default Cards;
