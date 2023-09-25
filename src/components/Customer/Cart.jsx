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
} from "@chakra-ui/react";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getCart } from "../../api/customerAPI";
import { MEASUREMENTS_TO_BE_ADDED } from "../../constants";

const Cart = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();

	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const getCartItems = async () => {
			try {
				const cartItemsFromServer = await getCart();
				setCartItems(cartItemsFromServer.data);
			} catch (err) {
				console.log(err);
			}
		};

		getCartItems();
	}, []);

	const handleCheckout = () => {
		//navigate("/customer/payment");
	};

	const removeFromCart = (id) => {
		//setCartItems(cartItems.filter((item) => item.id !== id));
		onOpen();
	};

	return (
		<div>
			<div className="flex items-start flex-wrap bg-white w-full h-screen overflow-auto">
				<div className="flex flex-col flex-wrap items-center rounded-2xl shadow-xl absolute my-10 w-full">
					<span className="text-xl font-bold text-black p-1">Cart Items</span>
					<div className="flex mx-auto py-4 max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 w-full">
<div>
						<table className=' flex flex-col  text-sm font-medium text-gray-500'>
							<thead className=" uppercase bg-gray-100 py-4 w-full">
								<tr>
									<th className=" w-40">
										Item Id
									</th>
									<th className=" w-40">
										Description
									</th>
									<th className=" w-40">
										Price
									</th>
									<th className=" w-40">
										Qty
									</th>
									<th className=" w-40">
										Remove
									</th>
									<th className=" w-40">
										Total
									</th>
								</tr>
							</thead>
							<tbody>
								<div className="flex flex-col gap-1 flex-wrap ">
									{cartItems.map((item) => (
										<tr key={item.id} className="flex items-center text-center border hover:bg-gray-300 text-black font-medium py-3">
											<td className="w-40">{item.id}</td>
											<td className="w-40 text-left"><p>{item.description}</p></td>
											<td className="w-40">{item.price}</td>
											<td className="w-40">{item.quantity}</td>
											<td className="w-40">
												<Button
													rounded={"lg"}
													color={"white"}
													bgColor={"black"}
													size="sm"
													_hover={{
														bg: "red",
														color: "black",
													}}
													onClick={() => removeFromCart(item.id)}
												>
													X
												</Button>
											</td>
											<td className="w-40">{item.price * item.quantity}</td>
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
						<div className="mt-6  h-full rounded-lg border bg-slate-500 p-4 shadow-md md:mt-0 md:w-1/3">
							<div className="mb-2 flex justify-between">
								<p className="text-gray-700">Subtotal</p>
								<p className="text-gray-700">Rs 134980</p>
							</div>
							<hr className="my-4" />
							<div className="flex justify-between">
								<p className="text-lg font-bold">Total</p>
								<div className="">
									<p className="mb-1 text-lg font-bold">Rs 134980</p>
									<p className="text-sm text-gray-700">including VAT</p>
								</div>
							</div>

							<Button
								className="block   w-full p-5 mt-4"
								rounded={"md"}
								color={"white"}
								bgColor={"black"}
								size="sm"
								_hover={{
									bg: "blue",
									color: "blue-50",
								}}
								onClick={() => navigate("/customer/payment")}
							>
								Check out
							</Button>
						</div>
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
						<Button variant="ghost">Yes</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default Cart;
