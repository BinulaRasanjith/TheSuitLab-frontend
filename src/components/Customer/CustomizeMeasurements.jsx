import {
	FaRegCheckCircle,
	FaRegClock,
	FaRegQuestionCircle,
	FaRegUser,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addCustomSuitToCart as addCustomSuitToCartAPI } from "../../api/customerAPI";
import measurement_bg from "../../assets/images/measurement_bg.jpg";
import { selectJacket } from "../../store/slices/jacketCustomizationSlice";
import { MEASUREMENTS_TO_BE_ADDED } from "../../constants";

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
			<img
				src={measurement_bg}
				alt=""
				className="relative w-screen h-screen max-h-[calc(100vh-4rem)]"
			/>
			<div className="flex flex-col absolute z-10">
				<span className="text-3xl p-5 text-white font-bold">Choose One</span>
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

				<div
					onClick={() =>
						navigate(
							"/customer/customize-suit/jacket/measurements/current-sizes"
						)
					}
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
					onClick={() =>
						navigate(
							"/customer/customize-suit/jacket/measurements/standard-sizes"
						)
					}
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
					onClick={() =>
						navigate(
							"/customer/customize-suit/jacket/measurements/custom-sizes"
						)
					}
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
	);
};

export default CustomizeMeasurements;

// import { Select } from "@chakra-ui/react";
// import { useState } from "react";

// import FullShoulderWidth from "../../assets/images/measurements/men_size_1 (1).jpg";
// import Sleeves from "../../assets/images/measurements/men_size_2.jpg";
// import FullChest from "../../assets/images/measurements/men_size_3.jpg";
// import Waist from "../../assets/images/measurements/men_size_4.jpg";
// import Hips from "../../assets/images/measurements/men_size_5.jpg";
// import FrontShoulderWidth from "../../assets/images/measurements/men_size_6.jpg";
// import BackShoulderWidth from "../../assets/images/measurements/men_size_7.jpg";
// import FrontJacketLength from "../../assets/images/measurements/men_size_8.jpg";
// import Neck from "../../assets/images/measurements/men_size_9.jpg";
// import TROUSER_WAIST from "../../assets/images/measurements/men_size_10.jpg";
// import CROTCH from "../../assets/images/measurements/men_size_11.jpg";
// import THIGH from "../../assets/images/measurements/men_size_12.jpg";
// import TROUSER_LENGTH from "../../assets/images/measurements/men_size_13.jpg";
// import CUFF from "../../assets/images/measurements/men_size_14.jpg";
// import MeasurementBlock from "../../components/Customer/MeasurementBlock";
// import { STANDARD_MEASUREMENTS } from "../../constants/index";

// const CustomizeMeasurements = () => {
// 	const [measurementType, setMeasurementType] = useState("");

// 	const [selectedSize, setSelectedSize] = useState("S");
// 	const [selectedUnit, setSelectedUnit] = useState("inch");
// 	const [selectedCategory, setSelectedCategory] = useState("jacket");

// 	return (
// 		<div className="w-full min-h-[calc(100vh-64px)]">
// 			{/* Give Sizes Later */}
// 			<div className="bg-black hover:opacity-80 text-white px-4 py-4 rounded-lg m-5 font-extrabold">
// 				Give Sizes Later
// 			</div>

// 			{/* Current Sizes */}
// 			<div
// 				className="bg-black hover:opacity-80 text-white px-4 py-4 rounded-lg m-5 font-extrabold"
// 				onClick={() =>
// 					setMeasurementType(
// 						measurementType === "current-sizes" ? "" : "current-sizes"
// 					)
// 				}
// 			>
// 				Current Sizes
// 			</div>
// 			<div
// 				className={`mt-4 transition-opacity ease-in-out duration-1000 flex flex-col ${measurementType === "current-sizes"
// 					? "opacity-100"
// 					: "opacity-0 hidden"
// 					}`}
// 			>
// 				<div className="flex justify-center m-5">
// 					<Select width="400px">
// 						<option value="inch">Inch</option>
// 						<option value="cm">Centimeters</option>
// 					</Select>
// 				</div>
// 				<div className="flex flex-wrap justify-center gap-4">
// 					<MeasurementBlock
// 						image={FullShoulderWidth}
// 						description='Measure from the end of the right shoulder to the end of the left shoulder. We define the "End of the Shoulder" as where the horizontal plane of the shoulder intersects thevertical plane of the arm'
// 						header="Full Shoulder Width"

// 					/>
// 					<MeasurementBlock
// 						image={Sleeves}
// 						description='The "Pinch" of the hand is found where the base of the thumb and the base of the index finger intersect'
// 						header="Sleeves"

// 					/>
// 					<MeasurementBlock
// 						image={FullChest}
// 						description='Measure around the chest and body at its fullest part (typically right under the armpits and shoulder blades, right across the nipples). Hold the tape against the body tight enough so that it does not slip down, but not so tight that it restricts breathing. It should be "snug". Make sure the tape is horizontal and theperson`s arms are by their side; then take a normal breath and measure. Do not puff out your chest.'
// 						header="Full Chest"
// 					/>
// 					<MeasurementBlock
// 						image={Waist}
// 						description="Measure around the fullest part of the waist/stomach or right below your bottom ribs, whichever is greater."
// 						header="Waist"
// 					/>
// 					<MeasurementBlock
// 						image={Hips}
// 						description="Measure around the fullest part of your hips and buttocks."
// 						header="Hips/Seat"
// 					/>
// 					<MeasurementBlock
// 						image={FrontShoulderWidth}
// 						description="With the person`s arms by their side, measure across the front of the chest. Start at the front of the right armpit, continue measuring across the nipples, and then stop at the front of the left armpit. Do not measure under the arms."
// 						header="Front Shoulder Width"
// 					/>
// 					<MeasurementBlock
// 						image={BackShoulderWidth}
// 						description="With the person`s arms by their side, measure across the back. Start at the back of the right armpit, continue measuring across the shoulder blades, and then stop at the back of the left armpit. Do not measure under the arms."
// 						header="Back Shoulder Width"
// 					/>
// 					<MeasurementBlock
// 						image={FrontJacketLength}
// 						description="Measure straight down the front from the base of the neck (right or left side) to the point level with your thumb knuckle.or till the length you would like your jacket"
// 						header="Front Jacket Length"
// 					/>
// 					<MeasurementBlock
// 						image={Neck}
// 						description="The tape should be comfortably touching the skin, with enough room so that you do not feel restricted."
// 						header="Neck"
// 					/>
// 					<MeasurementBlock
// 						image={TROUSER_WAIST}
// 						description="Measure around your waist at the level where you would normally wear your pant`s belt. With the tape measure snug around your waist, relax, and take the measurement. Don`t be alarmed if this measurement seems larger than expected; off-the-rack pants are normally labeled as being smaller than what they really are."
// 						header="Trouser Waist"
// 					/>
// 					<MeasurementBlock
// 						image={CROTCH}
// 						description="Measure from the front top of the pant's waistband to the back top of the pant's waistband."
// 						header="Crotch"
// 					/>
// 					<MeasurementBlock
// 						image={THIGH}
// 						description="Measure around your thigh at its widest point. You need measure only one side."
// 						header="Thigh"
// 					/>
// 					<MeasurementBlock
// 						image={TROUSER_LENGTH}
// 						description="Measure from the top of your pant’s waistband to the floor along the outside of your leg. Make sure the tape is tight, that you are standing straight, and then measure."
// 						header="Trouser Length"
// 					/>
// 					<MeasurementBlock
// 						image={CUFF}
// 						description="Measure width around cuff as shown."
// 						header="Cuff"
// 					/>
// 				</div>
// 				<button className="bg-black text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed m-20">
// 					Save
// 				</button>
// 			</div>

// 			{/* Standard Sizes */}

// 			<div
// 				className="bg-black hover:opacity-80 text-white px-4 py-4 rounded-lg m-5 font-extrabold"
// 				onClick={() =>
// 					setMeasurementType(measurementType === "Standard" ? "" : "Standard")
// 				}
// 			>
// 				Standard Sizes
// 			</div>
// 			<div
// 				className={`mt-4 transition-opacity ease-in-out duration-1000 flex flex-col ${measurementType === "Standard" ? "opacity-100" : "opacity-0 hidden"
// 					}`}
// 			>
// 				<div className="flex justify-around m-5">
// 					<Select
// 						width="400px"
// 						value={selectedUnit}
// 						onChange={(event) => setSelectedUnit(event.target.value)}
// 					>
// 						<option value="inch">Inch</option>
// 						<option value="cm">Centimeters</option>
// 					</Select>

// 					<Select
// 						width="400px"
// 						value={selectedCategory}
// 						onChange={(event) => setSelectedCategory(event.target.value)}
// 					>
// 						<option value="jacket">Jacket</option>
// 						<option value="pant">Pant</option>
// 						<option value="all">All</option>
// 					</Select>

// 					<Select
// 						width="400px"
// 						value={selectedSize}
// 						onChange={(event) => setSelectedSize(event.target.value)}
// 					>
// 						<option value="XS">XS</option>
// 						<option value="S">S</option>
// 						<option value="M">M</option>
// 						<option value="L">L</option>
// 						<option value="XL">XL</option>
// 						<option value="XXL">XXL</option>
// 					</Select>
// 				</div>
// 				<div className="flex flex-wrap justify-center gap-4">
// 					{(selectedCategory === "jacket" || selectedCategory === "all") && (
// 						<>
// 							<MeasurementBlock
// 								image={FullShoulderWidth}
// 								description='Measure from the end of the right shoulder to the end of the left shoulder. We define the "End of the Shoulder" as where the horizontal plane of the shoulder intersects thevertical plane of the arm'
// 								header="Full Shoulder Width"
// 								value={
// 									STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
// 										?.FullShoulderWidth
// 								}
// 								selectedUnit={selectedUnit}
// 							/>
// 							<MeasurementBlock
// 								image={Sleeves}
// 								description='The "Pinch" of the hand is found where the base of the thumb and the base of the index finger intersect'
// 								header="Sleeves"
// 								value={
// 									STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
// 										?.Sleeves
// 								}
// 								selectedUnit={selectedUnit}
// 							/>
// 							<MeasurementBlock
// 								image={FullChest}
// 								description='Measure around the chest and body at its fullest part (typically right under the armpits and shoulder blades, right across the nipples). Hold the tape against the body tight enough so that it does not slip down, but not so tight that it restricts breathing. It should be "snug". Make sure the tape is horizontal and theperson`s arms are by their side; then take a normal breath and measure. Do not puff out your chest.'
// 								header="Full Chest"
// 								value={
// 									STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
// 										?.FullChest
// 								}
// 								selectedUnit={selectedUnit}
// 							/>
// 							<MeasurementBlock
// 								image={Waist}
// 								description="Measure around the fullest part of the waist/stomach or right below your bottom ribs, whichever is greater."
// 								header="Waist"
// 								value={
// 									STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
// 										?.Waist
// 								}
// 								selectedUnit={selectedUnit}
// 							/>
// 							<MeasurementBlock
// 								image={Hips}
// 								description="Measure around the fullest part of your hips and buttocks."
// 								header="Hips/Seat"
// 								value={
// 									STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
// 										?.Hips
// 								}
// 								selectedUnit={selectedUnit}
// 							/>
// 							<MeasurementBlock
// 								image={FrontShoulderWidth}
// 								description="With the person`s arms by their side, measure across the front of the chest. Start at the front of the right armpit, continue measuring across the nipples, and then stop at the front of the left armpit. Do not measure under the arms."
// 								header="Front Shoulder Width"
// 								value={
// 									STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
// 										?.FrontShoulderWidth
// 								}
// 								selectedUnit={selectedUnit}
// 							/>
// 							<MeasurementBlock
// 								image={BackShoulderWidth}
// 								description="With the person`s arms by their side, measure across the back. Start at the back of the right armpit, continue measuring across the shoulder blades, and then stop at the back of the left armpit. Do not measure under the arms."
// 								header="Back Shoulder Width"
// 								value={
// 									STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
// 										?.BackShoulderWidth
// 								}
// 								selectedUnit={selectedUnit}
// 							/>
// 							<MeasurementBlock
// 								image={FrontJacketLength}
// 								description="Measure straight down the front from the base of the neck (right or left side) to the point level with your thumb knuckle.or till the length you would like your jacket"
// 								header="Front Jacket Length"
// 								value={
// 									STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
// 										?.FrontJacketLength
// 								}
// 								selectedUnit={selectedUnit}
// 							/>
// 							<MeasurementBlock
// 								image={Neck}
// 								description="The tape should be comfortably touching the skin, with enough room so that you do not feel restricted."
// 								header="Neck"
// 								value={
// 									STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
// 										?.Neck
// 								}
// 								selectedUnit={selectedUnit}
// 							/>
// 						</>
// 					)}
// 					{(selectedCategory === "pant" || selectedCategory === "all") && (
// 						<>
// 							<MeasurementBlock
// 								image={TROUSER_WAIST}
// 								description="Measure around your waist at the level where you would normally wear your pant`s belt. With the tape measure snug around your waist, relax, and take the measurement. Don`t be alarmed if this measurement seems larger than expected; off-the-rack pants are normally labeled as being smaller than what they really are."
// 								header="Trouser Waist"
// 								value={
// 									STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
// 										?.TrouserWaist
// 								}
// 								selectedUnit={selectedUnit}
// 							/>
// 							<MeasurementBlock
// 								image={CROTCH}
// 								description="Measure from the front top of the pant's waistband to the back top of the pant's waistband."
// 								header="Crotch"
// 								value={
// 									STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
// 										?.Crotch
// 								}
// 								selectedUnit={selectedUnit}
// 							/>
// 							<MeasurementBlock
// 								image={THIGH}
// 								description="Measure around your thigh at its widest point. You need measure only one side."
// 								header="Thigh"
// 								value={
// 									STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
// 										?.Thigh
// 								}
// 								selectedUnit={selectedUnit}
// 							/>
// 							<MeasurementBlock
// 								image={TROUSER_LENGTH}
// 								description="Measure from the top of your pant’s waistband to the floor along the outside of your leg. Make sure the tape is tight, that you are standing straight, and then measure."
// 								header="Trouser Length"
// 								value={
// 									STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
// 										?.TrouserLength
// 								}
// 								selectedUnit={selectedUnit}
// 							/>
// 							<MeasurementBlock
// 								image={CUFF}
// 								description="Measure width around cuff as shown."
// 								header="Cuff"
// 								value={
// 									STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
// 										?.Cuff
// 								}
// 								selectedUnit={selectedUnit}
// 							/>
// 						</>
// 					)}
// 				</div>
// 				<button className="bg-black text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
// 					Save
// 				</button>
// 			</div>

// 			{/* Custom Sizes */}
// 			<div
// 				className="bg-black hover:opacity-80 text-white px-4 py-4 rounded-lg m-5 font-extrabold"
// 				onClick={() =>
// 					setMeasurementType(measurementType === "custom" ? "" : "custom")
// 				}
// 			>
// 				Custom Sizes
// 			</div>
// 			<div
// 				className={`mt-4 transition-opacity ease-in-out duration-1000 flex flex-col ${measurementType === "custom" ? "opacity-100" : "opacity-0 hidden"
// 					}`}
// 			>
// 				<div className="flex justify-center m-5">
// 					<Select placeholder="Select Unit" width="400px">
// 						<option value="inch">Inch</option>
// 						<option value="cm">Centimeters</option>
// 					</Select>
// 				</div>
// 				<div className="flex flex-wrap justify-center gap-4">
// 					<MeasurementBlock
// 						image={FullShoulderWidth}
// 						description='Measure from the end of the right shoulder to the end of the left shoulder. We define the "End of the Shoulder" as where the horizontal plane of the shoulder intersects thevertical plane of the arm'
// 						header="Full Shoulder Width"
// 					/>
// 					<MeasurementBlock
// 						image={Sleeves}
// 						description='The "Pinch" of the hand is found where the base of the thumb and the base of the index finger intersect'
// 						header="Sleeves"
// 					/>
// 					<MeasurementBlock
// 						image={FullChest}
// 						description='Measure around the chest and body at its fullest part (typically right under the armpits and shoulder blades, right across the nipples). Hold the tape against the body tight enough so that it does not slip down, but not so tight that it restricts breathing. It should be "snug". Make sure the tape is horizontal and theperson`s arms are by their side; then take a normal breath and measure. Do not puff out your chest.'
// 						header="Full Chest"
// 					/>
// 					<MeasurementBlock
// 						image={Waist}
// 						description="Measure around the fullest part of the waist/stomach or right below your bottom ribs, whichever is greater."
// 						header="Waist"
// 					/>
// 					<MeasurementBlock
// 						image={Hips}
// 						description="Measure around the fullest part of your hips and buttocks."
// 						header="Hips/Seat"
// 					/>
// 					<MeasurementBlock
// 						image={FrontShoulderWidth}
// 						description="With the person`s arms by their side, measure across the front of the chest. Start at the front of the right armpit, continue measuring across the nipples, and then stop at the front of the left armpit. Do not measure under the arms."
// 						header="Front Shoulder Width"
// 					/>
// 					<MeasurementBlock
// 						image={BackShoulderWidth}
// 						description="With the person`s arms by their side, measure across the back. Start at the back of the right armpit, continue measuring across the shoulder blades, and then stop at the back of the left armpit. Do not measure under the arms."
// 						header="Back Shoulder Width"
// 					/>
// 					<MeasurementBlock
// 						image={FrontJacketLength}
// 						description="Measure straight down the front from the base of the neck (right or left side) to the point level with your thumb knuckle.or till the length you would like your jacket"
// 						header="Front Jacket Length"
// 					/>
// 					<MeasurementBlock
// 						image={Neck}
// 						description="The tape should be comfortably touching the skin, with enough room so that you do not feel restricted."
// 						header="Neck"
// 					/>
// 					<MeasurementBlock
// 						image={TROUSER_WAIST}
// 						description="Measure around your waist at the level where you would normally wear your pant`s belt. With the tape measure snug around your waist, relax, and take the measurement. Don`t be alarmed if this measurement seems larger than expected; off-the-rack pants are normally labeled as being smaller than what they really are."
// 						header="Trouser Waist"
// 					/>
// 					<MeasurementBlock
// 						image={CROTCH}
// 						description="Measure from the front top of the pant's waistband to the back top of the pant's waistband."
// 						header="Crotch"
// 					/>
// 					<MeasurementBlock
// 						image={THIGH}
// 						description="Measure around your thigh at its widest point. You need measure only one side."
// 						header="Thigh"
// 					/>
// 					<MeasurementBlock
// 						image={TROUSER_LENGTH}
// 						description="Measure from the top of your pant’s waistband to the floor along the outside of your leg. Make sure the tape is tight, that you are standing straight, and then measure."
// 						header="Trouser Length"
// 					/>
// 					<MeasurementBlock
// 						image={CUFF}
// 						description="Measure width around cuff as shown."
// 						header="Cuff"
// 					/>
// 				</div>
// 				<button className="bg-black text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
// 					Save
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default CustomizeMeasurements;
