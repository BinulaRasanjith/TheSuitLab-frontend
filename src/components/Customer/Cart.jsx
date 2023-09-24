import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../api/customerAPI";
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Button,
	useDisclosure,
} from '@chakra-ui/react'

const Cart = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
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
		onOpen()
	};

	return (
		<div>
			<div className="flex items-start flex-wrap bg-white w-full h-screen overflow-auto">
				<div className="flex flex-col flex-wrap items-center rounded-2xl shadow-xl absolute my-10 w-full">
					<span className="text-xl font-bold text-black p-1">Cart Items</span>
					<div className="flex mx-auto py-4 max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 w-full">
						<Table variant="striped">
							<Thead>
								<Tr>
									<Th>ItemId</Th>
									<Th>Description</Th>
									<Th>Price</Th>
									<Th>Qty</Th>
									<Th>Remove</Th>
									<Th>Total</Th>
								</Tr>
							</Thead>
							<Tbody>
								{cartItems.map((item) => (
									<Tr key={item.id}>
										<Td>{item.id}</Td>
										<Td>{item.name}</Td>
										<Td>{item.price}</Td>
										<Td>
											{item.quantity}
										</Td>
										<Td>
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
										</Td>
										<Td>{item.price * item.quantity}</Td>
									</Tr>
								))}
							</Tbody>
						</Table>

						<div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
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
						<Button colorScheme='blue' mr={3} onClick={onClose}>
							No
						</Button>
						<Button variant='ghost'>Yes</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>

	);
};

export default Cart;

