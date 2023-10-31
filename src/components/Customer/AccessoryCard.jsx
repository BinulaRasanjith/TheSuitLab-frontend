import PropTypes from "prop-types";

import { ACCESSORY_IMAGES_URL, HIRE_COSTUME_IMAGES_URL } from "../../config/config";

// eslint-disable-next-line react/prop-types
const AccessoryCard = ({ image, label, item, brand, price, status }) => {
	return (
		<div className="grid p-3 rounded-xl shadow-md bg-white w-56 max-h-screen hover:scale-105 cursor-pointer">
			<div className="flex items-center justify-center">
				<img
					alt="Shoe1"
					className="h-24 object-cover p-2"
					src={item === "Accessory" ? `${ACCESSORY_IMAGES_URL}/${image}` : `${HIRE_COSTUME_IMAGES_URL}/${image}`}
				/>
			</div>

			{brand && <div className="text-sm px-3 pt-2.5 border-t-2 border-gray-600 font-semibold">
				{brand}
			</div>}
			<div className="text-sm px-3 text-gray-400 font-semibold h-10">
				{label}
			</div>
			<div className="text-lg px-3 font-semibold">
				{"LKR. " + price}
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

AccessoryCard.propTypes = {
	image: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	item: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	status: PropTypes.string.isRequired,
	brand: PropTypes.string,
};

export default AccessoryCard;
