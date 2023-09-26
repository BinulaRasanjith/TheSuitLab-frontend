import {
	FaRegCheckCircle,
	FaRegClock,
	FaRegQuestionCircle,
	FaRegUser,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addCustomSuitToCart as addCustomSuitToCartAPI } from "../../api/customerAPI";
// import measurement_bg from "../../assets/images/measurement_bg.jpg";
import { MEASUREMENTS_TO_BE_ADDED } from "../../constants";
import { selectJacket } from "../../store/slices/jacketCustomizationSlice";

const CustomizeMeasurements = () => {
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
		navigate("/customer/customize-suit/jacket/measurements/current-sizes");
	};

	// CHOOSE STANDARD SIZES BUTTON HANDLER
	const handleChooseStandardSizes = () => {
		navigate("/customer/customize-suit/jacket/measurements/standard-sizes");
	};

	// CHOOSE CUSTOM SIZES BUTTON HANDLER
	const handleChooseCustomSizes = () => {
		navigate("/customer/customize-suit/jacket/measurements/custom-sizes");
	};

	return (
		<div className="relative flex justify-center">
			{/* <img
				src={measurement_bg}
				alt=""
				className="relative w-screen h-screen max-h-[calc(100vh-4rem)]"
			/> */}
			<div className="flex flex-col absolute z-10">
				<span className="text-3xl p-5 text-black font-bold">
					Give Your Measurements
				</span>
				<div className="flex flex-wrap gap-4 justify-around my-20">
					<div
						onClick={handleChooseLater}
						className="block max-w-[18rem] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-600 transform transition-transform hover:scale-105 cursor-pointer"
					>
						<div className=" flex justify-between border-b-2 border-[#0000002d] px-6 py-3 text-white">
							<span className="text-white text-3xl mb-2">Choose this...</span>
							<FaRegQuestionCircle className="text-white text-4xl mb-2" />
						</div>
						<div className="p-6">
							<h5 className="mb-2 text-4xl font-medium leading-tight text-white dark:text-neutral-50">
								Give Sizes Later
							</h5>
							<p className="text-base text-white dark:text-neutral-50">
								You can skip entering your measurements now and provide them
								later.
							</p>
						</div>
					</div>

					<div
						onClick={handleChooseCurrentSizes}
						className="block max-w-[18rem] rounded-lg bg-neutral-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transform transition-transform hover:scale-105 cursor-pointer"
					>
						<div className=" flex justify-between border-b-2 border-[#0000002d] px-6 py-3 text-white">
							<span className="text-white text-3xl mb-2">Choose this...</span>
							<FaRegClock className="text-white text-4xl mb-2" />
						</div>
						<div className="p-6">
							<h5 className="mb-2 text-4xl font-medium leading-tight text-white dark:text-neutral-50">
								Use Current Sizes
							</h5>
							<p className="text-base text-white dark:text-neutral-50">
								Retrieve your previously saved measurements for convenience.
							</p>
						</div>
					</div>

					<div
						onClick={handleChooseStandardSizes}
						className="block max-w-[18rem] rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-600 transform transition-transform hover:scale-105 cursor-pointer"
					>
						<div className=" flex justify-between border-b-2 border-[#0000002d] px-6 py-3 text-white">
							<span className="text-white text-3xl mb-2">Choose this...</span>
							<FaRegCheckCircle className="text-white text-4xl mb-2" />
						</div>
						<div className="p-6">
							<h5 className="mb-2 text-4xl font-medium leading-tight text-white dark:text-neutral-50">
								Use Standard Sizes
							</h5>
							<p className="text-base text-white dark:text-neutral-50">
								Choose from our range of standard sizes for a quick selection.
							</p>
						</div>
					</div>

					<div
						onClick={handleChooseCustomSizes}
						className="block max-w-[18rem] rounded-lg bg-neutral-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transform transition-transform hover:scale-105 cursor-pointer"
					>
						<div className=" flex justify-between border-b-2 border-[#0000002d] px-6 py-3 text-white">
							<span className="text-white text-3xl mb-2">Choose this...</span>
							<FaRegUser className="text-white text-4xl mb-2" />
						</div>
						<div className="p-6">
							<h5 className="mb-2 text-4xl font-medium leading-tight text-white dark:text-neutral-50">
								Use Custom Sizes
							</h5>
							<p className="text-base text-white dark:text-neutral-50">
								Provide your own custom measurements for a personalized fit.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomizeMeasurements;
