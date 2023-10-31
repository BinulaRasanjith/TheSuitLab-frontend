import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { ImInfo } from 'react-icons/im';
import { ImBin } from "react-icons/im";
import { useNavigate } from "react-router-dom";

import { getCart, getCartItemById, removeCartItem } from "../../api/customerAPI";
import { CUSTOM, MEASUREMENTS_TO_BE_ADDED, STANDARD } from "../../constants";
import { formatPrice } from "../../utils/paymentUtils";

const Cart = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();
	const toast = useToast();

	const [cartItems, setCartItems] = useState([]);
	const [viewCartItemId, setViewCartItemId] = useState("");

	useEffect(() => {
		const viewCartItem = async () => {
			try {
				const cartItemFromServer = await getCartItemById(viewCartItemId);
				console.log(cartItemFromServer.data);
			} catch (err) {
				console.log(err);
			}
		};

		viewCartItem();
	}, [viewCartItemId]);

	const [vat, setVat] = useState(800);

	useEffect(() => {
		const getCartItems = async () => {
			try {
				const cartItemsFromServer = await getCart();
				setCartItems(cartItemsFromServer.data);
				// console.log(cartItemsFromServer.data);
			} catch (err) {
				console.log(err);
			}
		};

		getCartItems();
	}, []);

	const handleCheckout = () => {
		const isMeasurementToBeAdded = cartItems.some(
			(item) => item.price === MEASUREMENTS_TO_BE_ADDED
		);

		if (isMeasurementToBeAdded) {
			toast({
				title: "Error",
				description: "Please give your measurements",
				status: "warning",
				duration: 3000,
				isClosable: true,
			});
		} else {
			navigate("/customer/payment/" + (calculateTotalPrice() + vat));
		}
	};

	const [deleteItemId, setDeleteItemId] = useState(null);

	const removeFromCart = () => {
		removeCartItem(deleteItemId)
			.then((res) => {
				if (res.status === 200) {
					onClose();
					toast({
						title: "Item removed from cart",
						status: "success",
						duration: 3000,
						isClosable: true,
					});
				}
			})
			.catch((err) => {
				console.log(err);
				toast({
					title: "Something went wrong",
					status: "error",
					duration: 3000,
					isClosable: true,
				});
			});
	};

	const calculateTotalPrice = () => {
		let totalPrice = 0;

		cartItems.forEach((item) => {
			if (item.price !== MEASUREMENTS_TO_BE_ADDED) {
				totalPrice += item.price * item.quantity;
			}
		});

		return totalPrice;
	};



	const [details, setDetails] = useState(
		{
			Material_Code: "",
			Button_Style: "",
			Lapel_Style: "",
			Jacket_Pocket: null,
			Sleeve_Buttons: null,
			Pocket_Material_Code: null,
			Button_Color: "",
			Trouser_Style: "",
			Back_Pocket: null,
		}
	);


	const getDetails = ({ customization }) => {

		for (let key in customization) {
			if (key === "lapel") {
				setDetails({ ...details, Lapel_Style: customization[key] });
			} else if (key === "button") {
				if (customization[key] === "1S") {
					setDetails({ ...details, Button_Style: "1 Button" });
				} else if (customization[key] === "2S") {
					setDetails({ ...details, Button_Style: "2 Buttons" });
				} else if (customization[key] === "4D2") {
					setDetails({ ...details, Button_Style: "4 Buttons" });
				} else if (customization[key] === "6D3") {
					setDetails({ ...details, Button_Style: "6 Buttons" });
				}

			} else if (key === "fabric") {
				setDetails({ ...details, Material_Code: customization[key] });
			} else if (key === "pocket") {
				if (customization[key] !== null) {
					setDetails({ ...details, Jacket_Pocket: customization[key] });
				} else {
					setDetails({ ...details, Jacket_Pocket: "No Pocket" });
				}
			} else if (key === "trouser") {
				setDetails({ ...details, Trouser_Style: customization[key] });
			} else if (key === "backPocket") {
				if (customization[key] !== null) {
					setDetails({ ...details, Back_Pocket: customization[key] });
				} else {
					setDetails({ ...details, Back_Pocket: "No Pocket" });
				}

			} else if (key === "buttonColor") {
				if (customization[key] !== "none") {

					setDetails({ ...details, Button_Color: customization[key] });
				} else {
					setDetails({ ...details, Button_Color: "No Color" });
				}

			} else if (key === "pocketColor") {
				if (customization[key] !== null) {
					setDetails({ ...details, Pocket_Material_Code: customization[key] });
				} else {
					setDetails({ ...details, Pocket_Material_Code: "No Color" });
				}

			} else if (key === "sleeveButtons") {
				if (customization[key] !== null) {
					setDetails({ ...details, Sleeve_Buttons: customization[key] });
				} else {
					setDetails({ ...details, Sleeve_Buttons: "No Buttons" });
				}
			}

			console.log(key);
		}

	};

	const OverlayOne = () => (
		<ModalOverlay
			bg='blackAlpha.300'
			backdropFilter='blur(10px) hue-rotate(90deg)'
		/>
	)

	// const { isOpen, onOpen, onClose } = useDisclosure()
	const [overlay, setOverlay] = React.useState(<OverlayOne />)
	const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

	return (

		<>
			<div className="flex flex-col items-center flex-wrap shadow-xl my-2 w-full ">
				<div className="flex flex-row items-center gap-3 mt-3">
					<CiShoppingCart style={{ fontSize: "3rem" }} />
					<span className="text-2xl font-bold text-black p-1">Cart Items</span>
				</div>

				<div className="flex flex-wrap flex-row-reverse md:flex-row  justify-center items-start p-4 gap-x-10">
					<div className="flex flex-col ">
						<table className="flex flex-col  text-sm font-medium text-gray-500">
							<thead className=" uppercase bg-gray-100 py-4 w-full rounded-xl mb-4">
								<tr>
									<th className=" w-32">Item Id</th>
									<th className=" w-40">Description</th>
									<th className=" w-32">Price</th>
									<th className=" w-32">Qty</th>
									<th className=" w-32">Total</th>
									<th className=" w-28">Date/Time</th>
									<th className=" w-28">View</th>
									<th className=" w-28">Remove</th>
								</tr>
							</thead>
							<tbody className="max-h-[calc(100vh-4rem)] overflow-y-scroll ">
								<div className="flex flex-col gap-1 flex-wrap ">
									{cartItems.map((item) => (

										<tr
											key={item.id}
											className="flex items-center text-center border hover:bg-gray-300 text-black font-medium py-3 rounded-lg"
										>
											<td className="w-32">{item.id}</td>
											<td className="w-40 text-left">
												<p>
													{(() => {


														const description = item.description;

														if (
															description.type === CUSTOM ||
															description.type === STANDARD
														) {
															const customizationKeys = Object.keys(
																description.customization
															);
															const firstFourKeys = customizationKeys.slice(
																0,
																4
															);

															return firstFourKeys.map((key) => {
																return (
																	<p key={key}>
																		{key}: {description.customization[key]}
																	</p>
																);
															});


														} else {
															return description.name;
														}
													})()}
												</p>
											</td>
											<td className="w-32">
												{item.price === MEASUREMENTS_TO_BE_ADDED
													? "To be added"
													: "LKR. " + item.price}
											</td>
											<td className="w-32">{item.quantity}</td>
											<td className="w-32">
												{item.price * item.quantity === -1
													? "Need Measurements"
													: "LKR. " + item.price * item.quantity}
											</td>
											<td className="w-28">
												{item.createdAt.slice(0, 10)}
												<br />
												{item.createdAt.slice(11, 19)}
											</td>
											<td className="w-28">
												<ImInfo
													style={{
														fontSize: "1rem",
														cursor: "pointer",
														color: "blue",
													}}
													className=" w-full h-8"
													onClick={() => {
														setViewCartItemId(item.id);
														setOverlay(<OverlayOne />)
														setIsSecondModalOpen(true)
													}}

												/>
											</td>
											<td className="w-28">
												<ImBin
													style={{
														fontSize: "1rem",
														cursor: "pointer",
														color: "red",
													}}
													className=" w-full h-8"
													onClick={() => {
														setDeleteItemId(item.id);
														onOpen();
													}}
												/>
											</td>
										</tr>
									))}
								</div>
							</tbody>
						</table>

						<Button
							className=" justify-start w-40 p-5 mt-4"
							rounded={"md"}
							color={"white"}
							bgColor={"black"}
							size="sm"
							_hover={{
								bg: "blue",
								color: "blue-50",
							}}
							onClick={() => navigate("/customer")}
						>
							Continue Shopping
						</Button>
					</div>
					{/*  TODO: Calculate VAT */}
					<div className="flex flex-col justify-center items-center rounded-lg border bg-slate-200 p-4 shadow-md md:mt-0 md:w-68">
						<p className="text-2xl font-bold border-black border-b-2 my-4">
							Summary
						</p>
						<div className="mb-2 flex justify-between gap-x-2">
							<p className="text-gray-700">Subtotal</p>
							<p className="text-gray-700 font-semibold">
								{formatPrice(calculateTotalPrice())}
							</p>
						</div>
						<div className="flex flex-col gap-y-2">
							<div className="flex flex-col items-center gap-y-4 rounded">
								<p className="text-2xl font-bold">Total Price </p>
								<p className="mb-1 text-4xl font-bold">
									{formatPrice(calculateTotalPrice() + vat)}
								</p>
							</div>
							<div className="flex items-center justify-center gap-x-2">
								<p className="text-sm text-gray-700">Including VAT</p>
								<p className="text-sm text-gray-700 font-semibold">
									{formatPrice(vat)}
								</p>
							</div>
						</div>

						<Button
							className="block w-full p-5 mt-4"
							rounded={"md"}
							color={"white"}
							bgColor={"black"}
							size="sm"
							_hover={{
								bg: "blue",
								color: "blue-50",
							}}
							onClick={handleCheckout}
						>
							Check out
						</Button>
					</div>
				</div>
			</div>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Item Removing</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<p>Delete item?</p>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							No
						</Button>
						<Button onClick={removeFromCart} variant="ghost">
							Yes
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

			<Modal isCentered isOpen={isSecondModalOpen} onClose={() => setIsSecondModalOpen(false)}>
				{overlay}
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>Custom backdrop filters!</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
						<Text>Woot woot 😎</Text>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Cart;
