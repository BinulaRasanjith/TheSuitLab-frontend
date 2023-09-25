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
import { useNavigate } from "react-router-dom";
import { ImBin } from 'react-icons/im'
import { getCart } from "../../api/customerAPI";
import { MEASUREMENTS_TO_BE_ADDED } from "../../constants";
import { CiShoppingCart } from 'react-icons/ci'

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

	const removeFromCart = (id) => {
		//setCartItems(cartItems.filter((item) => item.id !== id));
		onOpen();
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
				<CiShoppingCart  style={{ fontSize: "2rem" }}/>
					<span className="text-xl font-bold text-black p-1">Cart Items</span>
				</div>

				<div className="flex  justify-center items-start p-4 gap-x-10">
					<div className="flex flex-col ">
						<table className='flex flex-col  text-sm font-medium text-gray-500'>
							<thead className=" uppercase bg-gray-100 py-4 w-full rounded-xl mb-4">
								<tr>
									<th className=" w-32">
										Item Id
									</th>
									<th className=" w-40">
										Description
									</th>
									<th className=" w-32">
										Price
									</th>
									<th className=" w-32">
										Qty
									</th>
									<th className=" w-32">
										Total
									</th>
									<th className=" w-28">
										Remove
									</th>
								</tr>
							</thead>
							<tbody className="max-h-[calc(100vh-4rem)] overflow-y-scroll ">
								<div className="flex flex-col gap-1 flex-wrap ">
									{cartItems.map((item) => (
										<tr key={item.id}
											className="flex items-center text-center border hover:bg-gray-300 text-black font-medium py-3 rounded-lg">
											<td className="w-32">{item.id}</td>
											<td className="w-40 text-left"><p>{item.description}</p></td>
											<td className="w-32">{
												item.price === MEASUREMENTS_TO_BE_ADDED ? "To be added" : item.price
											}</td>
											<td className="w-32">{item.quantity}</td>
											<td className="w-32">{
												item.price * item.quantity === -1 ? "Need Measurements" : item.price * item.quantity
											}</td>
											<td className="w-28">
												<ImBin style={{ fontSize: "1rem" ,cursor: 'pointer',color: 'red' }} className=" w-full" onClick={() => removeFromCart(item.id)} />
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
					<div className="flex flex-col rounded-lg border bg-slate-200 p-4 shadow-md md:mt-0 md:w-56">
						<div className="mb-2 flex justify-between">
							<p className="text-gray-700">Subtotal</p>
							<p className="text-gray-700">Rs {calculateTotalPrice()}</p>
						</div>
						<hr className="my-4" />
						<div className="flex justify-between">
							<p className="text-lg font-bold">Total</p>
							<div className="">
								<p className="mb-1 text-lg font-bold">Rs {calculateTotalPrice()}</p>
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
		</>
	);
};

export default Cart;
