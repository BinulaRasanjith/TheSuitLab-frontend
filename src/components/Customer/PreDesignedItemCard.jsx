import PropTypes from "prop-types";

import { PRE_DESIGNED_COSTUME_IMAGES_URL } from "../../config/config";

const maxRating = 5; // Assuming a maximum rating of 5 stars

// eslint-disable-next-line react/prop-types
const PreDesignedItemCard = ({ image, label, item, brand, price, status, rating }) => {
    return (
        <div className="grid p-3 rounded-xl shadow-md bg-white w-56 max-h-screen hover:scale-105 cursor-pointer">
            <div className="flex items-center justify-center">
                <img
                    alt="Shoe1"
                    className="h-24 object-cover p-2"
                    src={item === "pre-design" ? `${PRE_DESIGNED_COSTUME_IMAGES_URL}/${image}` : `${PRE_DESIGNED_COSTUME_IMAGES_URL}/${image}`}
                />
            </div>
            <div className="flex items-center px-3 py-2 border-t-2 border-gray-600">

                {[...Array(maxRating)].map((_, index) => (
                    <svg
                        key={index}
                        aria-hidden="true"
                        className={`w-4 h-4 ${index < rating ? 'text-yellow-300' : 'text-gray-300'} mr-1`}
                        fill="currentColor"
                        viewBox="0 0 22 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                        />
                    </svg>
                ))}

            </div>

            {brand && <div className="text-sm px-3 font-semibold">
                {brand}
            </div>}
            <div className="text-sm px-3 text-gray-400 font-semibold">
                {label}
            </div>
            <div className="flex px-3 items-center text-xl">
                <span className="font-semibold">{"LKR. " + price}</span>
                <span className=" text-xs font-normal text-gray-500 line-through ">
                    {"  "}
                    {"LKR. " + price * (125 / 100)}
                </span>

            </div>
            <div className="text-sm px-3 font-semibold">
                {status === "available" ? (
                    <span className="text-green-500">{status}</span>
                ) : (
                    <span className="text-red-500">{status}</span>
                )
                }
            </div>

        </div>
    );
};

PreDesignedItemCard.propTypes = {
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    brand: PropTypes.string,
    rating: PropTypes.number,
};

export default PreDesignedItemCard;

