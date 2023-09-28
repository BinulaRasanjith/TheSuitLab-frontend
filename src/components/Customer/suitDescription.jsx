import { Button, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { HiOutlineCalendar } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { addHireCostumeToCart as addHireCostumeToCartAPI } from "../../api/customerAPI";
import { getHireCostume } from "../../api/hireCostumesAPI";
import { HIRE_COSTUME_IMAGES_URL } from "../../config/config";
import { selectUser } from "../../store/slices/authSlice";

const SuitDescription = () => {
	// Get the suitId from the route parameters
	const { suitId } = useParams();
	const toast = useToast();
	const navigate = useNavigate();

	const user = useSelector(selectUser);
	const [suitDetails, setSuitDetails] = useState({
		images: [],
		name: "",
		size: [],
		price: 0,
	}); // Create state variable for suit details
	const [selectedImage, setSelectedImage] = useState("");
	// const [selectedItems, setSelectedItems] = useState({}); // {size: quantity}
	const [selectedSize, setSelectedSize] = useState("L");
	const [quantity, setQuantity] = useState(0);
	const [enabled, setEnabled] = useState({
		increment: true,
		decrement: false,
	}); // Disable the buttons
	const [fromDate, setFromDate] = useState(null);
	const [toDate, setToDate] = useState(null);

	useEffect(() => {
		getHireCostume(suitId)
			.then((response) => {
				setSuitDetails(response.data);
				console.log(response.data);
				setSelectedImage(response.data.images[0]);
			})
			.catch((error) => {
				console.log(error); // TODO: Handle error
			});
	}, [suitId]);

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	const handleSelectSize = (size) => {
		setSelectedSize(size);
		setQuantity(0);
	}

	const incrementQuantity = () => {
		if (quantity < suitDetails.size[selectedSize]) {
			setQuantity(quantity + 1);
		} else {
			setEnabled({ ...enabled, increment: false });
		}
	};

	const decrementQuantity = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1);
		} else {
			setEnabled({ ...enabled, decrement: false });
		}
	};

	const handleAddToCart = () => {
		// check if size and quantity are selected
		if (selectedSize === "" && quantity === 0) {
			toast({
				title: "Error",
				description: "Please select a size and quantity",
				status: "warning",
				duration: 3000,
				isClosable: true,
			});
			return;
		}

		// check if renting period is selected
		if (!fromDate && !toDate) {
			toast({
				title: "Error",
				description: "Please select a renting period",
				status: "warning",
				duration: 3000,
				isClosable: true,
			});
			return;
		}

		addHireCostumeToCartAPI({
			customerId: user.id,
			itemId: suitId,
			price: suitDetails.price,
			quantity,
			status: "available",
			description: {
				type: "hire",
				name: suitDetails.name,
				size: selectedSize,
				fromDate,
				toDate,
			},
		})
			.then((response) => {
				if (response.status === 201) {
					toast({
						title: "Item added to cart",
						status: "success",
						duration: 3000,
						isClosable: true,
					});
				}
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	if (!suitDetails) {
		return (
			<div>
				<h2>Suit Not Found</h2>
				<p>The requested suit does not exist.</p>
			</div>
		);
	}

	return (
		<div className="flex items-start flex-wrap bg-white w-full h-screen overflow-auto">
			<div className=" bg-white mb-16 w-full font-poppins">
				<div className=" px-4 py-4 mx-auto md:px-6">
					<div className="flex flex-wrap -mx-4">
						<div className="w-full mb-8 md:w-1/2 md:mb-0">
							<div className="sticky top-0 z-50 overflow-hidden">
								<div className=" mb-6 lg:mb-10 h-60 items-center">
									<img
										src={`${HIRE_COSTUME_IMAGES_URL}/${selectedImage}`}
										alt="Selected Image"
										className=" object-cover w-52 h-52"
									/>
								</div>
								<div className="flex-wrap hidden md:flex">
									{suitDetails.images.map((image, index) => (
										<div key={index} className="w-1/2 p-2 sm:w-1/4">
											<a
												href="#"
												className="block border border-blue-300 hover:border-blue-300"
												onClick={() => handleImageClick(image)}
											>
												<img
													src={`${HIRE_COSTUME_IMAGES_URL}/${image}`}
													alt={`Image ${index + 1}`}
													className="object-cover w-full h-36 lg:h-20"
												/>
											</a>
										</div>
									))}
								</div>
								{/* <div className="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400">
									<div className="flex flex-wrap items-center mt-6">
										<h2 className="text-lg font-bold text-gray-700 mb-5 dark:text-gray-400">
											Renting Period
										</h2>
									</div>

									
									<div className="relative">
										<HiOutlineCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 " />
										<DatePicker
											selected={fromDate}
											onChange={(date) => setFromDate(date)}
											placeholderText="Select from date"
											bgColor={"black"}
											dateFormat="dd/MM/yyyy"
											minDate={new Date()}
											className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
										/>
									</div>

									
									<div className="relative mt-4">
										<HiOutlineCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 " />
										<DatePicker
											selected={toDate}
											onChange={(date) => setToDate(date)}
											placeholderText="Select to date"
											dateFormat="dd/MM/yyyy"
											minDate={fromDate || new Date()} // Set the minimum date to be the selected "from date" or today
											className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
										/>
									</div>
								</div> */}
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 ">
							<div className="lg:pl-20">
								<div className="mb-8 ">
									<h2 className="max-w-xl mb-6 text-2xl font-bold md:text-4xl text-gray-600 ">
										{suitDetails.name}
									</h2>
									<p className="inline-block mb-6 text-4xl font-bold text-gray-400 ">
										<span>Rs {suitDetails.price}</span>
										<span className="text-base font-normal text-gray-500 line-through ">
											{" "}
											Rs {suitDetails.price + 2150}
										</span>
									</p>
									<p className="max-w-md text-gray-700 ">
										{suitDetails.description}
									</p>
								</div>

								<div className="mb-8 ">
									<h2 className="w-16 pb-1 mb-4 text-xl text-gray-600 font-semibold border-b border-blue-300 ">
										Sizes
									</h2>
									<div>
										<div className="flex flex-wrap -mb-2">
											{suitDetails.size &&
												Object.entries(suitDetails.size).map(
													([key, value], index) => (
														<div

															key={index}
														>
															<button
																className={`px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:bg-gray-400 ${selectedSize === key ? 'bg-black text-white' : ''} `}
																onClick={() => handleSelectSize(key)}
															>
																{key} {value}
															</button>
															<div>
																{/* {size.quantity === 0 ? <p className='text-red-500'>Out of Stock</p> : <p className='text-green-500'>{size.quantity} In Stock</p>} */}
															</div>
														</div>
													)
												)}
										</div>
									</div>
								</div>
								<div className="w-32 mb-8">
									<label className="w-full pb-1 text-xl font-semibold text-gray-600 border-b border-blue-300 ">
										Quantity
									</label>

									<div className="flex items-center justify-between w-full mt-4">
										<button
											className="px-4 py-2 font-semibold text-gray-700 border rounded cursor-pointer hover:bg-gray-400"
											onClick={decrementQuantity}
										// disabled={enabled.decrement}
										>
											-
										</button>
										<p className="px-4 py-2 font-semibold text-gray-700 border rounded">
											{quantity}
										</p>
										<button
											className="px-4 py-2 font-semibold text-gray-700 border rounded cursor-pointer hover:bg-gray-400"
											onClick={incrementQuantity}
										// disabled={enabled.increment }
										>
											+
										</button>
									</div>
								</div>

								<div className="flex flex-col pb-6 mt-6  ">

									<h2 className="text-lg font-bold text-gray-600 mb-5 ">
										Renting Period
									</h2>

									<div className="flex items-center">
										<div className="flex ">
											<HiOutlineCalendar className="absolute left-3  text-gray-600 " />
											<DatePicker
												selected={fromDate}
												onChange={(date) => setFromDate(date)}
												placeholderText="Select from date"
												bgColor={"black"}
												dateFormat="dd/MM/yyyy"
												minDate={new Date()}
												className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-3/4 "
											/>
										</div>

										{/* To Date input */}
										<div className=" flex ">
											<HiOutlineCalendar className="absolute left-3  text-gray-600 " />
											<DatePicker
												selected={toDate}
												onChange={(date) => setToDate(date)}
												placeholderText="Select to date"
												dateFormat="dd/MM/yyyy"
												minDate={fromDate || new Date()} // Set the minimum date to be the selected "from date" or today
												className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-3/4 "
											/>
										</div>
									</div>
								</div>


								<div className="flex flex-wrap items-center gap-4">
									<Button
										className="flex flex-col justify-center w-1/3 py-6"
										rounded={"md"}
										color={"white"}
										bgColor={"black"}
										size="sm"
										_hover={{
											bg: "gray",
										}}
										onClick={handleAddToCart}
									>
										Add to Cart
									</Button>

									<Button
										className="flex flex-col justify-center w-1/3 py-6"
										rounded={"md"}
										color={"white"}
										bgColor={"black"}
										size="sm"
										_hover={{
											bg: "gray",
										}}
										onClick={() => navigate("/customer/cart")}
									>
										View Cart
									</Button>
									{/* <Button
										className="justify-center w-1/2 py-6"
										rounded={"md"}
										color={"white"}
										bgColor={"black"}
										size="sm"
										_hover={{
											bg: "blue",
											color: "blue-50",
										}}
										//onClick={}
									>
										Buy Now
									</Button> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SuitDescription;
