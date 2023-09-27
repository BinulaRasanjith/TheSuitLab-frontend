import { Button, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { HiOutlineCalendar } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";

import { addToCart as addToCartAPI } from "../../api/customerAPI";
import { getHireCostume } from "../../api/hireCostumesAPI";
import { HIRE_COSTUME_IMAGES_URL } from "../../config/config";

const SuitDescription = () => {
	// Get the suitId from the route parameters
	const { suitId } = useParams();
	const toast = useToast();
	const navigate = useNavigate();

	const [suitDetails, setSuitDetails] = useState({
		images: [],
		name: "",
		size: [],
		price: 0,
	}); // Create state variable for suit details
	const [selectedImage, setSelectedImage] = useState("");
	const [selectedItems, setSelectedItems] = useState({}); // [{size: quantity}]
	// const [quantity, setQuantity] = useState([]);
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

	const handleAddToItems = (size) => {
		// {size1: quantity1, size2: quantity2, size3: quantity3}
		// increase item quantity if already in cart else add 1 to quantity
		const item = selectedItems[size];

		if (item) {
			// item already in cart & does not exceed the available quantity
			if (item < suitDetails.size[size]) {
				setSelectedItems({ ...selectedItems, [size]: item + 1 });
			} else {
				toast({
					title: "Error",
					description: "Item quantity exceeds the available quantity",
					status: "warning",
					duration: 3000,
					isClosable: true,
				});
			}
		} else {
			setSelectedItems({ ...selectedItems, [size]: 1 });
		}
	};

	const handleRemoveFromItems = (size) => {
		// decrease item quantity if already in cart else do nothing
		const item = selectedItems[size];

		if (item) {
			// item already in cart & does not exceed the available quantity
			if (item > 0) {
				setSelectedItems({ ...selectedItems, [size]: item - 1 });
			} else {
				toast({
					title: "Error",
					description: "Item quantity cannot be less than 0",
					status: "warning",
					duration: 3000,
					isClosable: true,
				});
			}
		}
	};

	const handleAddToCart = () => {
		addToCartAPI({
			itemId: suitId,
			description: suitDetails.name,
			// quantity,
			// size: selectedSize,
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
				console.log(response);
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
								<div className="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400">
									<div className="flex flex-wrap items-center mt-6">
										<h2 className="text-lg font-bold text-gray-700 mb-5 dark:text-gray-400">
											Renting Period
										</h2>
									</div>

									{/* From Date input */}
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

									{/* To Date input */}
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
								</div>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2 ">
							<div className="lg:pl-20">
								<div className="mb-8 ">
									<h2 className="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
										{suitDetails.name}
									</h2>
									<p className="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
										<span>Rs {suitDetails.price}</span>
										<span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
											{" "}
											Rs {suitDetails.price + 2150}
										</span>
									</p>
									<p className="max-w-md text-gray-700 dark:text-gray-400">
										{suitDetails.description}
									</p>
								</div>

								<div className="mb-8 ">
									<h2 className="w-16 pb-1 mb-4 text-xl font-semibold border-b border-blue-300 dark:border-gray-600 dark:text-gray-400">
										Sizes
									</h2>
									<div>
										<div className="flex flex-wrap -mb-2">
											{suitDetails.size &&
												Object.entries(suitDetails.size).map(
													([key, value], index) => (
														<div
															className="p-5 flex flex-col justify-center items-center border border-black-2 rounded"
															key={index}
														>
															<button
																className={`px-4 py-2 mb-2 mr-4 font-semibold border rounded`}
																// onClick={() => handleSizeClick(size)}
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
									<label className="w-full pb-1 text-xl font-semibold text-gray-700 border-b border-blue-300 dark:border-gray-600 dark:text-gray-400">
										Quantity
									</label>
									<div className="flex flex-col">
										{suitDetails.size &&
											Object.entries(suitDetails.size).map(
												([key, value], index) => (
													<div className="flex flex-col p-3" key={index}>
														<label>{key}</label>
														<div className="flex">
															<button
																onClick={() => handleRemoveFromItems(key)}
															>
																-
															</button>
															<p>{selectedItems[key]}</p>
															<button onClick={() => handleAddToItems(key)}>
																+
															</button>
														</div>
													</div>
												)
											)}
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
											bg: "blue",
											color: "blue-50",
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
											bg: "blue",
											color: "blue-50",
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
