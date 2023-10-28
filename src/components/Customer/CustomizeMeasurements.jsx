import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import rightArrow from "../../../public/fast-forward.gif";
import { addCustomSuitToCart as addCustomSuitToCartAPI } from "../../api/customerAPI";
// import measurement_bg from "../../assets/images/measurement_bg.jpg";
import { MEASUREMENTS_TO_BE_ADDED } from "../../constants";
import { selectJacket } from "../../store/slices/jacketCustomizationSlice";

const CustomizeMeasurements = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const jacket = useSelector(selectJacket);

	// CHOOSE LATER BUTTON HANDLER
	const handleChooseLater = async () => {
		console.log(jacket);

		await addCustomSuitToCartAPI({
			description: "Custom Suit",
			price: MEASUREMENTS_TO_BE_ADDED,
			quantity: 1,
			selection: jacket,
		});
		navigate("/customer/cart");
	};

	// CHOOSE CURRENT SIZES BUTTON HANDLER
	const handleChooseCurrentSizes = () => {
		if (pathname.includes("jacket"))
			navigate("/customer/customize-suit/jacket/measurements/current-sizes");
		else if (pathname.includes("pant"))
			navigate("/customer/customize-suit/pant/measurements/current-sizes");
		else if (pathname.includes("costume"))
			navigate("/customer/customize-suit/costume/measurements/current-sizes");
	};

	// CHOOSE STANDARD SIZES BUTTON HANDLER
	const handleChooseStandardSizes = () => {
		if (pathname.includes("jacket"))
			navigate("/customer/customize-suit/jacket/measurements/standard-sizes");
		else if (pathname.includes("pant"))
			navigate("/customer/customize-suit/pant/measurements/standard-sizes");
		else if (pathname.includes("costume"))
			navigate("/customer/customize-suit/costume/measurements/standard-sizes");
	};

	// CHOOSE CUSTOM SIZES BUTTON HANDLER
	const handleChooseCustomSizes = () => {
		if (pathname.includes("jacket"))
			navigate("/customer/customize-suit/jacket/measurements/custom-sizes");
		else if (pathname.includes("pant"))
			navigate("/customer/customize-suit/pant/measurements/custom-sizes");
		else if (pathname.includes("costume"))
			navigate("/customer/customize-suit/costume/measurements/custom-sizes");
	};

	return (
		<div className="relative flex justify-center">
			<div className="flex flex-col justify-center">
				<span className="text-3xl p-5 text-black font-bold">
					Give Your Measurements
				</span>
				<div className="flex flex-wrap gap-4 justify-around my-20">


					<div
						onClick={handleChooseCurrentSizes}
						className="block max-w-[18rem] rounded-lg bg-neutral-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transform transition-transform hover:scale-105 cursor-pointer"
					>

						<div className="p-6">
							<h5 className="mb-2 text-4xl font-medium leading-tight text-white dark:text-neutral-50">
								Current Measurements
							</h5>

						</div>
					</div>

					<div
						onClick={handleChooseStandardSizes}
						className="block max-w-[18rem] rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-600 transform transition-transform hover:scale-105 cursor-pointer"
					>

						<div className="p-6">
							<h5 className="mb-2 text-4xl font-medium leading-tight text-white dark:text-neutral-50">
								Standard Measurements
							</h5>

						</div>
					</div>

					<div
						onClick={handleChooseCustomSizes}
						className="block max-w-[18rem] rounded-lg bg-neutral-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transform transition-transform hover:scale-105 cursor-pointer"
					>

						<div className="p-6">
							<h5 className="mb-2 text-4xl font-medium leading-tight text-white dark:text-neutral-50">
								Custom Measurements
							</h5>

						</div>
					</div>
				</div>
			</div>
			<div
				className="md:fixed flex items-center right-10 bottom-10 max-w-[18rem] rounded-xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transform transition-transform hover:scale-105 cursor-pointer"
			>

				<h5 className="p-6 text-4xl font-medium leading-tight text-black">
					Skip
				</h5>
				<label>
					<img className="h-14" src={rightArrow} alt="My GIF" />

				</label>

			</div>
		</div>
	);
};

export default CustomizeMeasurements;
