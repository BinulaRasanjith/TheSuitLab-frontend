import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { format } from "date-fns";
import { Suspense, useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { assignTailor, getPurchaseOrder as getPurchaseOrderAPI } from "../api/purchaseOrdersAPI";
import { OrderedDesign } from "../components/OrderedDesign";
import {
	CUSTOMER,
	OPERATION_ASSISTANT,
	PRODUCT_MANAGER,
	TAILOR,
	ADMIN,
} from "../constants";
import ItemType from "../constants/ItemType";
import { selectUser } from "../store/slices/authSlice";
import { selectComponentHide } from "../store/slices/componentHideSlice";
import { formatPrice } from "../utils/paymentUtils";
import { IoArrowBackCircle } from "react-icons/io5";
import { getUsers } from "../api/userAPI";
import { HiCheck } from "react-icons/hi";
import { useToast } from "@chakra-ui/react";



function OrderDetails() {
	const toast = useToast();
	const hide = useSelector(selectComponentHide);
	const user = useSelector(selectUser);

	const [loading, setLoading] = useState(true);
	const [purchaseOrder, setPurchaseOrder] = useState({});
	const [control, setControl] = useState({
		x: 0,
		y: hide.BothInitialPosition,
		z: 0,
	});

	const [tailors, setTailors] = useState([]);
	const [tailor, setTailor] = useState(null);

	const [camCont, setCamCont] = useState({
		scale: 3,
	});

	const { orderId } = useParams();

	useEffect(() => {
		const getPurchaseOrder = async () => {
			const res1 = await getPurchaseOrderAPI(orderId);

			console.log(res1.data);
			setPurchaseOrder(res1.data);

			const res = await getUsers({ roles: [TAILOR] })

			console.log(res.data.users);
			setTailors(res.data.users);
			setLoading(false);
		};

		if (orderId) {
			getPurchaseOrder();
		}
	}, [orderId]);

	const navigate = useNavigate();
	const handleBack = () => {
		if (user.role === TAILOR) {
			navigate("/tailor");
		}
		if (user.role === PRODUCT_MANAGER) {
			navigate("/manager");
		}
		if (user.role === CUSTOMER) {
			navigate("/customer");
		}
		if (user.role === OPERATION_ASSISTANT) {
			navigate("/assistant");
		}
		if (user.role === ADMIN) {
			navigate("/admin");
		}
	}
	const trimmedOrderId = orderId.substring(15);

	async function handleSetTailor() {
		if (!tailor) {
			toast(
				{
					title: "Error",
					description: "Please select a tailor",
					status: "warning",
					duration: 3000,
					isClosable: true,
				}
			)
			return;
		}

		try {
			console.log(purchaseOrder.ItemModels[0].itemId, tailor);
			const res = await assignTailor(purchaseOrder.ItemModels[0].itemId, tailor);
			toast(
				{
					title: "Tailor Assigned",
					description: "Tailor has been assigned to the order",
					status: "success",
					duration: 3000,
					isClosable: true,
				}
			)
			console.log(res);
		}
		catch (err) {
			console.log(err);
			toast(
				{
					title: "Error",
					description: "Tailor could not be assigned to the order",
					status: "error",
					duration: 3000,
					isClosable: true,
				}
			)
		}
	}
	return (
		<div className="flex py-4 px-2 max-h-[calc(100vh-4rem)] w-full">
			<div className="flex max-h-[calc(100vh-4rem)] z-10 bg-transparent absolute justify-start item-start space-y-2 flex-col">
				<button
					onClick={handleBack}
					className="flex items-center gap-2 text-primary"
				>
					<IoArrowBackCircle className="text-3xl cursor-pointer" />
				</button>

				<div className=" flex gap-28 items-center justify-center m-5 mb-8">
					<h1 className="text-2xl mt-4  font-semibold leading-7 text-gray-800">
						OrderId: #{orderId}
					</h1>
					<div className="flex items-center ">

						{user.role === PRODUCT_MANAGER && (
							<>
								<select
									onChange={(e) => setTailor(e.target.value)}
									className=" p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
								>
									<option value="" disabled selected>Select Tailor</option>
									{
										tailors && tailors.map((tailor) => (
											<option key={tailor.userId} value={tailor.userId}>{tailor.firstName} {tailor.lastName}</option>
										))
									}
								</select>
								<div>
									<button
										value={tailor}
										onClick={handleSetTailor}
										className="flex px-2 py-1 ml-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
										<HiCheck className="text-3xl cursor-pointer" />
									</button>
								</div>
							</>
						)
						}

					</div>
				</div>

			</div>
			{!loading && (
				<div className="max-h-[calc(100vh-4rem)] mt-24 flex flex-col xl:flex-row items-stretch w-full xl:space-x-8 space-y-8 md:space-y-6 xl:space-y-0">
					{(user.role === PRODUCT_MANAGER ||
						user.role === TAILOR ||
						user.role === CUSTOMER ||
						user.role === OPERATION_ASSISTANT) && (

							<div className=" flex flex-col w-full space-y-4 md:space-y-6 xl:space-y-8 overflow-scroll">
								{ItemType.CUSTOM_SUIT.toLowerCase() ===
									purchaseOrder.ItemModels[0].itemType.toLowerCase() && (
										<>
											<div className="flex flex-col bg-gray-200 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full rounded-3xl shadow-3xl">
												<p className="text-lg md:text-xl  pb-2 font-semibold leading-6 xl:leading-5 text-gray-500 border-b-2 border-gray-500">
													Customize Suit Design Style
												</p>
												<div className="flex justify-around">
													<div className="flex flex-col mt-5 text-lg">

														<p className="text-md mb-3 text-gray-800">
															Fabric Code: {purchaseOrder.ItemModels[0].costume.customization.fabric}
														</p>
														<p className="text-md pb-3 font-semibold text-black">
															Jacket Style
														</p>
														<p className="text-md  py-0.5">
															Button: {" "}{purchaseOrder.ItemModels[0].costume.customization.button}
														</p>
														<p className="text-md  py-0.5">
															Lapel:{" "}{purchaseOrder.ItemModels[0].costume.customization.lapel}
														</p>
														<p className="text-md  py-0.5">
															Pocket:{" "}{purchaseOrder.ItemModels[0].costume.customization.pocket}
														</p>
														<p className="text-md py-0.5">
															Sleeve Button:{" "}{purchaseOrder.ItemModels[0].costume.customization.sleeveButton}
														</p>

													</div>
													<div className="flex flex-col mt-5 text-lg">

														<p className="text-md pb-2 font-semibold text-black">
															Trouser Style
														</p>
														<p className="text-md">
															Style: {" "}{purchaseOrder.ItemModels[0].costume.customization.trouser}
														</p>
														<p className="text-md">
															Pocket style: {purchaseOrder.ItemModels[0].costume.customization.pocket}
														</p>

														<p className="text-md pb-2 mt-3 font-semibold text-black ">
															Color Contrast
														</p>
														<p className="text-md  py-0.5">
															Pocket: {purchaseOrder.ItemModels[0].costume.customization.pocketColor}
														</p>
														<p className="text-md  py-0.5">
															Button: {purchaseOrder.ItemModels[0].costume.customization.buttonColor}
														</p>

													</div>
												</div>
											</div>


											<div className="flex flex-col  bg-gray-200 w-full rounded-3xl">
												<p className="text-lg md:text-xl mx-4 p-4 font-semibold text-gray-500 border-b-2 border-gray-500">
													Measurements
												</p>

												<div className=" flex justify-around mt-3 ">
													{(purchaseOrder.ItemModels[0].costume.costumeType ===
														"jacket" ||
														purchaseOrder.ItemModels[0].costume.costumeType ===
														"all") && (
															<div className="flex flex-col text-lg">
																<p className="font-semibold text-black pb-1">
																	Jacket
																</p>
																<ul className="">
																	<li className="text-md py-0.5">
																		Back shoulder width: {" "}
																		{purchaseOrder &&
																			purchaseOrder.ItemModels[0].costume
																				.measurements.coatMeasurements
																				.backShoulderWidth} inch
																	</li>
																	<li className="text-md py-0.5">
																		Front jacket length:{" "}
																		{purchaseOrder.ItemModels[0].costume
																			.measurements.coatMeasurements.frontJacketLength} inch
																	</li>
																	<li className="text-md py-0.5">
																		Front shoulder width:{" "}
																		{purchaseOrder.ItemModels[0].costume
																			.measurements.coatMeasurements.frontShoulderWidth} inch
																	</li>
																	<li className="text-md py-0.5">
																		Full chest:{" "}
																		{purchaseOrder.ItemModels[0].costume
																			.measurements.coatMeasurements.fullChest} inch
																	</li>
																	<li className="text-md py-0.5">
																		Full shoulder width:{" "}
																		{purchaseOrder.ItemModels[0].costume
																			.measurements.coatMeasurements.fullShoulderWidth} inch
																	</li>
																	<li className="text-md py-0.5">
																		Hips:{" "}
																		{purchaseOrder.ItemModels[0].costume
																			.measurements.coatMeasurements.hips} inch
																	</li>
																	<li className="text-md py-0.5">
																		Neck:{" "}
																		{purchaseOrder.ItemModels[0].costume
																			.measurements.coatMeasurements.neck} inch
																	</li>
																	<li className="text-md py-0.5">
																		Sleeves:{" "}
																		{purchaseOrder.ItemModels[0].costume
																			.measurements.coatMeasurements.sleeves} inch
																	</li>
																	<li className="text-md py-0.5">
																		Waist:{" "}
																		{purchaseOrder.ItemModels[0].costume
																			.measurements.coatMeasurements.waist} inch
																	</li>
																</ul>
															</div>
														)}

													{(purchaseOrder.ItemModels[0].costume.costumeType ===
														"pant" ||
														purchaseOrder.ItemModels[0].costume.costumeType ===
														"all") && (
															<div className="flex flex-col">

																<p className="font-semibold pb-1 text-black">
																	Pant
																</p>
																<p className="text-md py-0.5">
																	Crotch:{" "}
																	{purchaseOrder.ItemModels[0].costume
																		.measurements.trouserMeasurements.crotch +
																		" inch"}
																</p>
																<p className="text-md py-0.5">
																	Cuff:{" "}
																	{purchaseOrder.ItemModels[0].costume
																		.measurements.trouserMeasurements.cuff +
																		" inch"}
																</p>
																<p className="text-md py-0.5">
																	Length:{" "}
																	{purchaseOrder.ItemModels[0].costume
																		.measurements.trouserMeasurements.length +
																		" inch"}
																</p>
																<p className="text-md py-0.5">
																	Thigh:{" "}
																	{purchaseOrder.ItemModels[0].costume
																		.measurements.trouserMeasurements.thigh +
																		" inch"}
																</p>
																<p className="text-md py-0.5">
																	Waist:{" "}
																	{purchaseOrder.ItemModels[0].costume
																		.measurements.trouserMeasurements.waist +
																		" inch"}
																</p>

															</div>
														)}
												</div>
											</div>
										</>
									)}

								{(user.role === PRODUCT_MANAGER ||
									user.role === OPERATION_ASSISTANT) && (
										<div className="flex  flex-col md:flex-row  items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
											{/* <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-300 space-y-6 rounded-2xl shadow-2xl">
												<h3 className="text-xl  font-semibold leading-5 text-gray-800">
													Summary
												</h3>
												<div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
													<div className="flex justify-between w-full">
														<p className="text-base  leading-4 text-gray-800">
															Subtotal
														</p>
														<p className="text-base  leading-4 text-gray-800">
															{formatPrice(purchaseOrder.ItemModels[0].price)}
														</p>
													</div>
												</div>
											</div> */}
											<div className="flex flex-col p-2 md:p-6 xl:p-4  bg-gray-300 space-y-6 rounded-2xl shadow-2xl">
												<h3 className="text-xl  font-semibold leading-5 text-gray-800">
													Dates
												</h3>
												<div className="flex  items-start w-96">
													<div className="flex flex-col space-x-4">
														<div className="flex justify-start items-center">
															<p className="text-lg leading-6  font-semibold text-gray-800">
																Ordered date:{" "}
																<span className="font-normal">
																	{format(
																		new Date(purchaseOrder.orderedDate),
																		"dd-MM-yyyy"
																	)}
																</span>
															</p>
														</div>

													</div>
												</div>
											</div>
										</div>
									)}
							</div>
						)}
				</div>
			)
			}

			<div className=" overflow-hidden w-1/2 max-h-[calc(100vh-4rem)] flex items-center relative">
				{!loading &&
					ItemType.CUSTOM_SUIT.toLowerCase() ===
					purchaseOrder.ItemModels[0].itemType.toLowerCase() && (
						<Canvas camera={{ position: [0, 0, 10], fov: 30 }}>
							<Suspense fallback={false}>
								<OrderedDesign
									material={
										purchaseOrder.ItemModels[0].costume.customization.fabric
									}
									backPocket={
										purchaseOrder.ItemModels[0].costume.customization.pocket
									}
									trouser={
										purchaseOrder.ItemModels[0].costume.customization.trouser
									}
									jacketButtons={
										purchaseOrder.ItemModels[0].costume.customization.button
									}
									lapel={
										purchaseOrder.ItemModels[0].costume.customization.lapel
									}
									pocket={
										purchaseOrder.ItemModels[0].costume.customization.pocket
									}
									pocketColor={
										purchaseOrder.ItemModels[0].costume.customization
											.pocketColor
									}
									sleeveButtons={
										purchaseOrder.ItemModels[0].costume.customization
											.sleeveButton
									}
									buttonColor={
										purchaseOrder.ItemModels[0].costume.customization
											.buttonColor
									}
									camCont={camCont}
									control={control}
								/>
							</Suspense>
							<OrbitControls
								enableZoom={true}
								makeDefault
								maxPolarAngle={Math.PI / 2}
								minPolarAngle={Math.PI / 2}
							/>
							<Environment preset="city" />{" "}
						</Canvas>
					)}
			</div>
		</div >
	);
}

export default OrderDetails;
