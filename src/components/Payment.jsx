import { Button, useToast } from "@chakra-ui/react";
import CryptoJS from "crypto-js";
import { useEffect, useState } from "react";
import { HiCreditCard } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getPaymentInfo, setPaymentInfo } from "../api/customerAPI";
import { startPayment } from "../api/paymentAPI";
import { createPurchaseOrder } from "../api/purchaseOrdersAPI";
import { PaymentType } from "../constants/payments";
import { selectUser } from "../store/slices/authSlice";
import { createHash, formatPrice } from "../utils/paymentUtils";

const PaymentPage = () => {
	const navigate = useNavigate();
	const toast = useToast();

	const customerId = useSelector(selectUser).id;
	const merchant_id = import.meta.env.VITE_MERCHANT_ID;

	const [userData, setUserData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		address: "",
	});
	const [paymentDoneId, setPaymentDoneId] = useState("");

	const [amount, setAmount] = useState(0);

	useEffect(() => {
		const getPayment = async () => {
			const paymentInfo = await getPaymentInfo();
			console.log(paymentInfo.data);
			setUserData(paymentInfo.data);
		};

		const amount = localStorage.getItem("amount");
		const hash = localStorage.getItem("hash");
		const items = localStorage.getItem("items");
		console.log(JSON.parse(items));
		if (amount && hash && items) {
			const rehash = CryptoJS.SHA256(amount).toString();
			if (hash === rehash) {
				setAmount(amount);
			} else {
				navigate("/customer");
			}
		}

		getPayment();
	}, [amount, navigate]);

	const handleInputChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value.trim() });
	};

	window.payhere.onCompleted = function onCompleted(orderId) {
		console.log("Payment completed. OrderID:" + orderId);

		const itemsString = localStorage.getItem("items");

		if (!itemsString) {
			toast({
				title: "Payment failed! Please try again",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
			return;
		}

		const items = JSON.parse(itemsString);

		createPurchaseOrder({
			paymentDoneId,
			customerId,
			items,
			amount,
			method: PaymentType.CARD,
		})
			.then((res) => {
				console.log(res.data);
				toast({
					title: "Order placed successfully!",
					description: "Thank you for your purchase",
					status: "success",
					duration: 3000,
					isClosable: true,
				});
				navigate("/customer");
			})
			.catch((err) => console.log(err));
	};

	window.payhere.onDismissed = function onDismissed() {
		console.log("Payment dismissed");

		toast({
			title: "Payment dismissed!",
			status: "warning",
			duration: 3000,
			isClosable: true,
		});
	};

	window.payhere.onError = function onError(error) {
		console.log("Error:" + error);

		toast({
			title: "Payment failed!",
			description: "Please try again",
			status: "error",
			duration: 3000,
			isClosable: true,
		});
	};

	async function handlePlaceOrder(e) {
		e.preventDefault();
		setPaymentInfo(userData);

		if (!userData.email || !userData.address) {
			console.log(userData);
			toast({
				title: "Please fill all the fields!",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
			return;
		}

		const notifyURL = import.meta.env.VITE_NOTIFY_URL;
		try {
			const res = await startPayment();
			const orderID = res.data.paymentDone.id;
			setPaymentDoneId(orderID);

			const data = {
				sandbox: true,
				merchant_id,
				return_url: undefined,
				cancel_url: undefined,
				notify_url: `${notifyURL}/api/payment/notify/${orderID}`, // orderID == paymentDone.id
				order_id: orderID,
				items: "Total Bill",
				amount: amount,
				currency: "LKR",
				first_name: userData.firstName,
				last_name: userData.lastName,
				email: userData.email,
				phone: userData.phone,
				address: userData.address,
				city: "Colombo",
				country: "Sri Lanka",
				hash: createHash(orderID, amount, "LKR", merchant_id), // ! order id
			};
			console.log(data);

			// TODO: validate check
			window.payhere.startPayment(data);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="flex flex-col justify-center w-full">
			<div className=" bg-gray-200 flex flex-col items-center h-full justify-center">
				<div className="m-14 px-12 py-4 rounded-lg bg-white shadow-lg text-gray-700">
					<div className="w-full pt-1 pb-2">
						<div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
							<i className="mdi mdi-credit-card-outline text-3xl"></i>
							<HiCreditCard size={30} />
						</div>
						<div className="mb-2">
							<h1 className="text-center font-bold text-xl uppercase">
								Secure payment info
							</h1>
						</div>
					</div>

					<div className="flex gap-4 flex-wrap">
						<div>
							<label className="font-bold text-sm mb-2 ml-1">First name</label>
							<div>
								<input
									className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
									placeholder="John"
									type="text"
									value={userData.firstName}
									disabled={true}
								/>
							</div>
						</div>

						<div>
							<label className="font-bold text-sm mb-2 ml-1">Last name</label>
							<div>
								<input
									className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
									placeholder="Smith"
									type="text"
									value={userData.lastName}
									disabled={true}
								/>
							</div>
						</div>
					</div>

					<div className="flex gap-4">
						<div>
							<label className="font-bold text-sm mb-2 ml-1">Email</label>
							<div>
								<input
									name="email"
									className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
									placeholder="john.smith@example.com"
									type="email"
									value={userData.email}
									onChange={handleInputChange}
								/>
							</div>
						</div>

						<div>
							<label className="font-bold text-sm mb-2 ml-1">
								Phone number
							</label>
							<div>
								<input
									className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
									type="text"
									value={userData.phone}
									disabled={true}
								/>
							</div>
						</div>
					</div>

					<label className="font-bold text-sm mb-2 ml-1">Address</label>
					<div>
						<input
							name="address"
							className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
							placeholder="123, Main Street"
							value={userData.address}
							onChange={handleInputChange}
							type="text"
						/>
					</div>

					<div className="text-center text-lg m-4">
						Amount to be paid:{" "}
						<span className="font-bold">{formatPrice(amount)}</span>
					</div>

					<div>
						<Button
							className="mt-2 block w-full p-2"
							rounded={"md"}
							color={"white"}
							bgColor={"black"}
							size="sm"
							_hover={{
								bgColor: "gray",
								color: "blue-50",
							}}
							//</div></div> onClick={() => navigate("/customer")}
							onClick={handlePlaceOrder}
						>
							PAY NOW
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentPage;
