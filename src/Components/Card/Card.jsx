import PropTypes from "prop-types";
const Card = ({ card }) => {
    const { image, title, price } = card;
    return (
        <div>
            <div className="card bg-base-100">
                <figure className="px-20 py-5 bg-[#1111110D] m-6 rounded-xl">
                    <img src={image} alt="Product" />
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
                    <p className="text-[#111] font-bold text-lg">{title}</p>
                    <p className="text-[#11111180] text-lg">{price}</p>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object.isRequired,
};
export default Card;
