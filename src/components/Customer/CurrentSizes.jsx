import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

import FullShoulderWidth from "../../assets/images/measurements/men_size_1 (1).jpg";
import Sleeves from "../../assets/images/measurements/men_size_2.jpg";
import FullChest from "../../assets/images/measurements/men_size_3.jpg";
import Waist from "../../assets/images/measurements/men_size_4.jpg";
import Hips from "../../assets/images/measurements/men_size_5.jpg";
import FrontShoulderWidth from "../../assets/images/measurements/men_size_6.jpg";
import BackShoulderWidth from "../../assets/images/measurements/men_size_7.jpg";
import FrontJacketLength from "../../assets/images/measurements/men_size_8.jpg";
import Neck from "../../assets/images/measurements/men_size_9.jpg";
import TROUSER_WAIST from "../../assets/images/measurements/men_size_10.jpg";
import CROTCH from "../../assets/images/measurements/men_size_11.jpg";
import THIGH from "../../assets/images/measurements/men_size_12.jpg";
import TROUSER_LENGTH from "../../assets/images/measurements/men_size_13.jpg";
import CUFF from "../../assets/images/measurements/men_size_14.jpg";
import MeasurementBlock from "../../components/Customer/MeasurementBlock";

const CurrentSizes = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [selectedCategory, setSelectedCategory] = useState("jacket");

	const handleBack = () =>
		navigate(
			location.pathname.includes("/customize-suit/jacket")
				? "/customer/customize-suit/jacket/measurements"
				: location.pathname.includes("/customize-suit/pant")
				? "/customer/customize-suit/pant/measurements"
				: location.pathname.includes("/customize-suit/all")
				? "/customer/customize-suit/all/measurements"
				: "/customer/customize-measurements"
		);

	return (
		<div className={`flex flex-col flex-wrap `}>
			<div className="flex flex-col m-5 z-20 top-10 p-2 fixed w-screen bg-white">
				<div className="flex items-center gap-4 pt-2">
					<button
						onClick={handleBack}
						className="flex items-center gap-2 text-primary"
					>
						<IoArrowBackCircle className="text-3xl" />
					</button>
					<h1 className="font-bold text-3xl">Use Current Sizes</h1>
				</div>
				<div className="flex flex-wrap p-2">
					<Select
						width="400px"
						value={selectedCategory}
						onChange={(event) => setSelectedCategory(event.target.value)}
					>
						<option value="jacket">Jacket</option>
						<option value="pant">Pant</option>
						<option value="all">All</option>
					</Select>
				</div>
			</div>
			<div className="mt-28 flex flex-wrap justify-center gap-4">
				{(selectedCategory === "jacket" || selectedCategory === "all") && (
					<>
						<MeasurementBlock
							image={FullShoulderWidth}
							description='Measure from the end of the right shoulder to the end of the left shoulder. We define the "End of the Shoulder" as where the horizontal plane of the shoulder intersects the vertical plane of the arm'
							header="Full Shoulder Width"
							unchangeable
						/>
						<MeasurementBlock
							image={Sleeves}
							description='The "Pinch" of the hand is found where the base of the thumb and the base of the index finger intersect'
							header="Sleeves"
							unchangeable
						/>
						<MeasurementBlock
							image={FullChest}
							description='Measure around the chest and body at its fullest part (typically right under the armpits and shoulder blades, right across the nipples). Hold the tape against the body tight enough so that it does not slip down, but not so tight that it restricts breathing. It should be "snug". Make sure the tape is horizontal and the person`s arms are by their side; then take a normal breath and measure. Do not puff out your chest.'
							header="Full Chest"
							unchangeable
						/>
						<MeasurementBlock
							image={Waist}
							description="Measure around the fullest part of the waist/stomach or right below your bottom ribs, whichever is greater."
							header="Waist"
							unchangeable
						/>
						<MeasurementBlock
							image={Hips}
							description="Measure around the fullest part of your hips and buttocks."
							header="Hips/Seat"
							unchangeable
						/>
						<MeasurementBlock
							image={FrontShoulderWidth}
							description="With the person`s arms by their side, measure across the front of the chest. Start at the front of the right armpit, continue measuring across the nipples, and then stop at the front of the left armpit. Do not measure under the arms."
							header="Front Shoulder Width"
							unchangeable
						/>
						<MeasurementBlock
							image={BackShoulderWidth}
							description="With the person`s arms by their side, measure across the back. Start at the back of the right armpit, continue measuring across the shoulder blades, and then stop at the back of the left armpit. Do not measure under the arms."
							header="Back Shoulder Width"
							unchangeable
						/>
						<MeasurementBlock
							image={FrontJacketLength}
							description="Measure straight down the front from the base of the neck (right or left side) to the point level with your thumb knuckle.or till the length you would like your jacket"
							header="Front Jacket Length"
							unchangeable
						/>
						<MeasurementBlock
							image={Neck}
							description="The tape should be comfortably touching the skin, with enough room so that you do not feel restricted."
							header="Neck"
							unchangeable
						/>
					</>
				)}
				{(selectedCategory === "pant" || selectedCategory === "all") && (
					<>
						<MeasurementBlock
							image={TROUSER_WAIST}
							description="Measure around your waist at the level where you would normally wear your pant`s belt. With the tape measure snug around your waist, relax, and take the measurement. Don`t be alarmed if this measurement seems larger than expected; off-the-rack pants are normally labeled as being smaller than what they really are."
							header="Trouser Waist"
							unchangeable
						/>
						<MeasurementBlock
							image={CROTCH}
							description="Measure from the front top of the pant's waistband to the back top of the pant's waistband."
							header="Crotch"
							unchangeable
						/>
						<MeasurementBlock
							image={THIGH}
							description="Measure around your thigh at its widest point. You need measure only one side."
							header="Thigh"
							unchangeable
						/>
						<MeasurementBlock
							image={TROUSER_LENGTH}
							description="Measure from the top of your pant’s waistband to the floor along the outside of your leg. Make sure the tape is tight, that you are standing straight, and then measure."
							header="Trouser Length"
							unchangeable
						/>
						<MeasurementBlock
							image={CUFF}
							description="Measure width around cuff as shown."
							header="Cuff"
							unchangeable
						/>
					</>
				)}
				</div>
				<div className="flex m-5 z-20 top-10 p-2 justify-between">
				<button
					onClick={() => navigate("/customer/customize-suit/jacket/color-contrast/button")}
					type="button"
					className="m-5 flex items-center justify-center w-48 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
				>
					Back to design
				</button>
				<button
					onClick={() => navigate("/customer/cart")}
					type="button"
					className="m-5 flex items-center justify-center w-48 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
				>
					<span>Go to Cart</span>
					<FaShoppingCart className="ml-2 text-xl" />
				</button>
			</div>
		</div>
	);
};

export default CurrentSizes;
