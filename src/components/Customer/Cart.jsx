import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { ImBin } from "react-icons/im";
import { useNavigate } from "react-router-dom";

import { getCart, removeCartItem } from "../../api/customerAPI";
import { CUSTOM, MEASUREMENTS_TO_BE_ADDED, STANDARD } from "../../constants";

const Cart = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();
	const toast = useToast();

	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const getCartItems = async () => {
			try {
				const cartItemsFromServer = await getCart();
				setCartItems(cartItemsFromServer.data);

				console.log(cartItemsFromServer.data);
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
			navigate("/customer/payment");
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

	return (
		<>
			<div className="flex flex-col items-center flex-wrap shadow-xl my-2 w-full ">
				<div className="flex flex-row items-center gap-3 mt-3">
					<CiShoppingCart style={{ fontSize: "2rem" }} />
					<span className="text-xl font-bold text-black p-1">Cart Items</span>
				</div>

				<div className="flex  justify-center items-start p-4 gap-x-10">
					<div className="flex flex-col ">
						<table className="flex flex-col  text-sm font-medium text-gray-500">
							<thead className=" uppercase bg-gray-100 py-4 w-full rounded-xl mb-4">
								<tr>
									<th className=" w-32">Item Id</th>
									<th className=" w-40">Description</th>
									<th className=" w-32">Price</th>
									<th className=" w-32">Qty</th>
									<th className=" w-32">Total</th>
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

														if (description.type === CUSTOM || description.type === STANDARD) {
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
													: "Rs. " + item.price + " /="}
											</td>
											<td className="w-32">{item.quantity}</td>
											<td className="w-32">
												{item.price * item.quantity === -1
													? "Need Measurements"
													: "Rs. " + item.price * item.quantity + " /="}
											</td>
											<td className="w-28">
												<ImBin
													style={{
														fontSize: "1rem",
														cursor: "pointer",
														color: "red",
													}}
													className=" w-full"
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
					<div className="flex flex-col justify-center items-center rounded-lg border bg-slate-200 p-4 shadow-md md:mt-0 md:w-68">
						<p className="text-2xl font-bold border-black border-b-2 my-4">Summary</p>
						<div className="mb-2 flex justify-between gap-x-2">
							<p className="text-gray-700">Subtotal</p>
							<p className="text-gray-700 font-semibold">Rs. {calculateTotalPrice()} /=</p>
						</div>
						<div className="flex flex-col gap-y-2">
							<div className="flex flex-col items-center gap-y-4 rounded">
								<p className="text-2xl font-bold">Total Price </p>
								<p className="mb-1 text-4xl font-bold">
									Rs. {calculateTotalPrice() + 1000} /=
								</p>

							</div>
							<div className="flex items-center justify-center gap-x-2">
								<p className="text-sm text-gray-700">Including VAT</p>
								<p className="text-sm text-gray-700 font-semibold">Rs.1000/=</p>
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
		</>
	);
};

export default Cart;
