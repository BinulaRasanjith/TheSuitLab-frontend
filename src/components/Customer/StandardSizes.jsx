import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import { Select, useToast } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { addCustomSuitToCart as addCustomSuitToCartAPI } from "../../api/customerAPI";
import {
	addNewCostumeToItemModel,
	setCoatMeasurements,
	setTrouserMeasurements,
} from "../../api/customerAPI";
import { calculatePrice } from "../../api/purchaseOrdersAPI";
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
import { STANDARD, STANDARD_MEASUREMENTS } from "../../constants/index";
import { selectUser } from "../../store/slices/authSlice";
import { selectJacket } from "../../store/slices/jacketCustomizationSlice";
import {
	getCourtMeasurementObject,
	getTrouserMeasurementObject,
} from "../../utils/measurements";

const StandardSizes = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const toast = useToast();
	const user = useSelector(selectUser);
	const { fabric, pocketColor } = useSelector(selectJacket);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = React.useRef();
	const finalRef = React.useRef();
	const [inputValue, setInputValue] = useState("");
	const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(true);
	const handleInputChange = (e) => {
		const value = e.target.value;

		if (value === "" || (value >= 1 && value <= 10)) {
			setInputValue(value);
			setIsAddButtonDisabled(false);
		} else {
			setIsAddButtonDisabled(true);
		}
	};

	const jacket = useSelector(selectJacket);

	const [selectedSize, setSelectedSize] = useState("S");
	const [selectedUnit, setSelectedUnit] = useState("inch");
	const [selectedCategory, setSelectedCategory] = useState("jacket");

	// const [coatMeasurementsInInch, setCoatMeasurementsInInch] = useState({});
	// const [pantMeasurementsInInch, setPantMeasurementsInInch] = useState({});

	useEffect(() => {
		if (location.pathname.includes("/customize-suit/jacket")) {
			setSelectedCategory("jacket");
		}
		if (location.pathname.includes("/customize-suit/pant")) {
			setSelectedCategory("pant");
		}
		if (location.pathname.includes("/customize-suit/all")) {
			setSelectedCategory("all");
		}
	}, [location.pathname]);

	// back button
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

	// const handleSave = async () => {
	// 	let courtMeasurementObject;
	// 	let trouserMeasurementObject;

	// 	if (selectedCategory === "jacket" || selectedCategory === "all") {
	// 		courtMeasurementObject = getCourtMeasurementObject(
	// 			{
	// 				fullShoulderWidth:
	// 					STANDARD_MEASUREMENTS[selectedSize].inch.jacket.FullShoulderWidth,
	// 				sleeves: STANDARD_MEASUREMENTS[selectedSize].inch.jacket.Sleeves,
	// 				fullChest: STANDARD_MEASUREMENTS[selectedSize].inch.jacket.FullChest,
	// 				waist: STANDARD_MEASUREMENTS[selectedSize].inch.jacket.Waist,
	// 				hips: STANDARD_MEASUREMENTS[selectedSize].inch.jacket.Hips,
	// 				frontShoulderWidth:
	// 					STANDARD_MEASUREMENTS[selectedSize].inch.jacket.FrontShoulderWidth,
	// 				backShoulderWidth:
	// 					STANDARD_MEASUREMENTS[selectedSize].inch.jacket.FrontShoulderWidth,
	// 				frontJacketLength:
	// 					STANDARD_MEASUREMENTS[selectedSize].inch.jacket.BackShoulderWidth,
	// 				neck: STANDARD_MEASUREMENTS[selectedSize].inch.jacket
	// 					.FrontJacketLength,
	// 			},
	// 			INCH
	// 		);
	// 	}

	// 	if (selectedCategory === "pant" || selectedCategory === "all") {
	// 		trouserMeasurementObject = getTrouserMeasurementObject(
	// 			{
	// 				waist: STANDARD_MEASUREMENTS[selectedSize].inch.trouser.TrouserWaist,
	// 				crotch: STANDARD_MEASUREMENTS[selectedSize].inch.trouser.Crotch,
	// 				thigh: STANDARD_MEASUREMENTS[selectedSize].inch.trouser.Thigh,
	// 				length:
	// 					STANDARD_MEASUREMENTS[selectedSize].inch.trouser.TrouserLength,
	// 				cuff: STANDARD_MEASUREMENTS[selectedSize].inch.trouser.Cuff,
	// 			},
	// 			selectedUnit
	// 		);
	// 	}

	// 	try {
	// 		if (courtMeasurementObject) {
	// 			await setCoatMeasurements(courtMeasurementObject);
	// 		}

	// 		if (trouserMeasurementObject) {
	// 			await setTrouserMeasurements(trouserMeasurementObject);
	// 		}

	// 		toast({
	// 			title: "Measurements Saved.",
	// 			description: "Your measurements have been saved.",
	// 			status: "success",
	// 			duration: 5000,
	// 			isClosable: true,
	// 			position: "top",
	// 		});
	// 	} catch (err) {
	// 		console.log(err);
	// 		toast({
	// 			title: "Error.",
	// 			description: "Something went wrong.",
	// 			status: "error",
	// 			duration: 5000,
	// 			isClosable: true,
	// 			position: "top",
	// 		});
	// 	}
	// };

	const handleGoToCart = async () => {
		let coatMeasurementsInInch;
		let pantMeasurementsInInch;

		if (selectedCategory === "jacket" || selectedCategory === "all") {
			coatMeasurementsInInch = getCourtMeasurementObject(
				{
					fullShoulderWidth:
						STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
							?.FullShoulderWidth,
					sleeves:
						STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
							?.Sleeves,
					fullChest:
						STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
							?.FullChest,
					waist:
						STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket?.Waist,
					hips: STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
						?.Hips,
					frontShoulderWidth:
						STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
							?.FrontShoulderWidth,
					backShoulderWidth:
						STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
							?.BackShoulderWidth,
					frontJacketLength:
						STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
							?.FrontJacketLength,
					neck: STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
						?.Neck,
				},
				selectedUnit
			);
		}

		if (selectedCategory === "pant" || selectedCategory === "all") {
			pantMeasurementsInInch = getTrouserMeasurementObject(
				{
					waist:
						STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
							?.TrouserWaist,
					crotch:
						STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
							?.Crotch,
					thigh:
						STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser?.Thigh,
					length:
						STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
							?.TrouserLength,
					cuff: STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
						?.Cuff,
				},
				selectedUnit
			);
		}

		const res = await calculatePrice({
			measurement: {
				coatMeasurements: coatMeasurementsInInch,
				pantMeasurements: pantMeasurementsInInch,
			},
			fabric,
			pocketColor,
			selectedCategory,
		});
		// console.log(res);

		const price = res.data.price;

		await addNewCostumeToItemModel({
			itemType: "CustomSuit",
			price,
			quantity: inputValue,
			status: "available",
		})
			.then((res) => {
				// console.log(res.data);
				addCustomSuitToCartAPI({
					description: {
						type: STANDARD,
						customization: jacket,
					},
					measurement: {
						coatMeasurementsInInch,
						pantMeasurementsInInch,
					},
					customerId: user.id,
					itemId: res.data.itemId,
					price,
					quantity: inputValue,
					status: "available",
				})
					.then(() => {
						navigate("/customer/cart");
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className={`flex flex-col flex-wrap`}>
			<div
				className={`flex flex-col fixed bg-white p-2 z-20 top-10 m-5 w-screen`}
			>
				<div className="flex items-center gap-4 pt-2">
					<button
						onClick={handleBack}
						className="flex items-center gap-2 text-primary"
					>
						<IoArrowBackCircle className="text-3xl" />
					</button>
					<h1 className="font-bold text-3xl">Use Standard Sizes</h1>
				</div>
				<div className="flex gap-x-24 p-2">
					<Select
						width="250px"
						value={selectedUnit}
						onChange={(event) => setSelectedUnit(event.target.value)}
					>
						<option value="inch">Inch</option>
						<option value="cm">Centimeters</option>
					</Select>

					{!location.pathname.includes("customize-suit") && (
						<Select
							width="250px"
							value={selectedCategory}
							onChange={(event) => setSelectedCategory(event.target.value)}
						>
							<option value="jacket">Jacket</option>
							<option value="pant">Pant</option>
							<option value="all">All</option>
						</Select>
					)}

					<Select
						width="250px"
						value={selectedSize}
						onChange={(event) => setSelectedSize(event.target.value)}
					>
						<option value="XS">XS</option>
						<option value="S">S</option>
						<option value="M">M</option>
						<option value="L">L</option>
						<option value="XL">XL</option>
						<option value="XXL">XXL</option>
					</Select>
				</div>
			</div>
			<div className="flex flex-wrap justify-center gap-4 mt-28">
				{(selectedCategory === "jacket" || selectedCategory === "all") && (
					<>
						<MeasurementBlock
							image={FullShoulderWidth}
							description='Measure from the end of the right shoulder to the end of the left shoulder. We define the "End of the Shoulder" as where the horizontal plane of the shoulder intersects the vertical plane of the arm'
							header="Full Shoulder Width"
							value={
								STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
									?.FullShoulderWidth
							}
							selectedUnit={selectedUnit}
							unchangeable
						/>
						<MeasurementBlock
							image={Sleeves}
							description='The "Pinch" of the hand is found where the base of the thumb and the base of the index finger intersect'
							header="Sleeves"
							value={
								STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
									?.Sleeves
							}
							selectedUnit={selectedUnit}
							unchangeable
						/>
						<MeasurementBlock
							image={FullChest}
							description='Measure around the chest and body at its fullest part (typically right under the armpits and shoulder blades, right across the nipples). Hold the tape against the body tight enough so that it does not slip down, but not so tight that it restricts breathing. It should be "snug". Make sure the tape is horizontal and the person`s arms are by their side; then take a normal breath and measure. Do not puff out your chest.'
							header="Full Chest"
							value={
								STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
									?.FullChest
							}
							selectedUnit={selectedUnit}
							unchangeable
						/>
						<MeasurementBlock
							image={Waist}
							description="Measure around the fullest part of the waist/stomach or right below your bottom ribs, whichever is greater."
							header="Waist"
							value={
								STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
									?.Waist
							}
							selectedUnit={selectedUnit}
							unchangeable
						/>
						<MeasurementBlock
							image={Hips}
							description="Measure around the fullest part of your hips and buttocks."
							header="Hips/Seat"
							value={
								STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
									?.Hips
							}
							selectedUnit={selectedUnit}
							unchangeable
						/>
						<MeasurementBlock
							image={FrontShoulderWidth}
							description="With the person`s arms by their side, measure across the front of the chest. Start at the front of the right armpit, continue measuring across the nipples, and then stop at the front of the left armpit. Do not measure under the arms."
							header="Front Shoulder Width"
							value={
								STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
									?.FrontShoulderWidth
							}
							selectedUnit={selectedUnit}
							unchangeable
						/>
						<MeasurementBlock
							image={BackShoulderWidth}
							description="With the person`s arms by their side, measure across the back. Start at the back of the right armpit, continue measuring across the shoulder blades, and then stop at the back of the left armpit. Do not measure under the arms."
							header="Back Shoulder Width"
							value={
								STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
									?.BackShoulderWidth
							}
							selectedUnit={selectedUnit}
							unchangeable
						/>
						<MeasurementBlock
							image={FrontJacketLength}
							description="Measure straight down the front from the base of the neck (right or left side) to the point level with your thumb knuckle.or till the length you would like your jacket"
							header="Front Jacket Length"
							value={
								STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
									?.FrontJacketLength
							}
							selectedUnit={selectedUnit}
							unchangeable
						/>
						<MeasurementBlock
							image={Neck}
							description="The tape should be comfortably touching the skin, with enough room so that you do not feel restricted."
							header="Neck"
							value={
								STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
									?.Neck
							}
							selectedUnit={selectedUnit}
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
							value={
								STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
									?.TrouserWaist
							}
							selectedUnit={selectedUnit}
							unchangeable
						/>
						<MeasurementBlock
							image={CROTCH}
							description="Measure from the front top of the pant's waistband to the back top of the pant's waistband."
							header="Crotch"
							value={
								STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
									?.Crotch
							}
							selectedUnit={selectedUnit}
							unchangeable
						/>
						<MeasurementBlock
							image={THIGH}
							description="Measure around your thigh at its widest point. You need measure only one side."
							header="Thigh"
							value={
								STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
									?.Thigh
							}
							selectedUnit={selectedUnit}
							unchangeable
						/>
						<MeasurementBlock
							image={TROUSER_LENGTH}
							description="Measure from the top of your pant’s waistband to the floor along the outside of your leg. Make sure the tape is tight, that you are standing straight, and then measure."
							header="Trouser Length"
							value={
								STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
									?.TrouserLength
							}
							selectedUnit={selectedUnit}
							unchangeable
						/>
						<MeasurementBlock
							image={CUFF}
							description="Measure width around cuff as shown."
							header="Cuff"
							value={
								STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
									?.Cuff
							}
							selectedUnit={selectedUnit}
							unchangeable
						/>
					</>
				)}
			</div>
			<div className="flex m-5 z-20 top-10 p-2 justify-between">
				<button
					onClick={() =>
						navigate("/customer/customize-suit/jacket/color-contrast/button")
					}
					type="button"
					className="m-5 flex items-center justify-center w-48 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
				>
					<MdOutlineArrowBackIosNew className="mr-2 text-md" />
					Back to design
				</button>

				{/* <button
					onClick={handleGoToCart}
					type="button"
					className="m-5 flex items-center justify-center w-48 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
				>
					<span>Go to Cart</span>
					<FaShoppingCart className="ml-2 text-xl" />
				</button> */}
				<button
					onClick={onOpen}
					type="button"
					className="m-5 flex items-center justify-center w-48 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
				>
					<span>Next</span>
					<MdNavigateNext className="ml-2 text-xl" />
				</button>
				<Modal
					initialFocusRef={initialRef}
					finalFocusRef={finalRef}
					isOpen={isOpen}
					onClose={onClose}
				>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Enter the quantity</ModalHeader>
						<ModalCloseButton />
						<ModalBody pb={6}>
							<FormControl>
								<FormLabel>Quantity</FormLabel>
								<Input
									type="number"
									ref={initialRef}
									value={inputValue}
									onChange={handleInputChange}
									min={0}
									max={10}
									required
								/>
							</FormControl>
						</ModalBody>

						<ModalFooter>
							<Button
								onClick={handleGoToCart}
								colorScheme="blue"
								mr={3}
								disabled={isAddButtonDisabled}
							>
								<FaShoppingCart className="mr-2 text-xl" />
								Add to cart
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</div>
		</div>
	);
};

export default StandardSizes;
