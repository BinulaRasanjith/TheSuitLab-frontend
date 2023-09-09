import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { HiOutlineCalendar } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";

import { addToCart as addToCartAPI } from "../../api/customerAPI";
import { getHireCostume } from "../../api/hireCostumesAPI";
import { HIRE_COSTUME_IMAGES_URL } from "../../config/config";

const SuitDescription = () => {
	// Get the suitId from the route parameters
	const { suitId } = useParams();
	const toast = useToast();

	const [suitDetails, setSuitDetails] = useState({
		images: [],
		name: "",
		price: 0,
	}); // Create state variable for suit details
	const [selectedImage, setSelectedImage] = useState("");
	const [quantity, setQuantity] = useState(1); // Initialize quantity with 1
	const [fromDate, setFromDate] = useState(null);
	const [toDate, setToDate] = useState(null);

	useEffect(() => {
		getHireCostume(suitId)
			.then((response) => {
				setSuitDetails(response.data);
				setSelectedImage(response.data.images[0]);
			})
			.catch((error) => {
				console.log(error); // TODO: Handle error
			});
	}, [suitId]);

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleIncrement = () => {
		setQuantity(quantity + 1);
	};

	const [selectedSize, setSelectedSize] = useState("Medium"); // Initialize with the default size

	const handleSizeClick = (size) => {
		setSelectedSize(size);
	};

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	const handleAddToCart = () => {
		addToCartAPI({
			itemId: suitId,
			description: suitDetails.name,
			quantity,
			size: selectedSize,
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
			<section className=" bg-white my-10 w-full font-poppins">
				<div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
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
										Size
									</h2>
									<div>
										<div className="flex flex-wrap -mb-2">
											<button
												className={`px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 ${
													selectedSize === "Medium"
														? " text-white bg-black"
														: "dark:border-gray-400 dark:text-gray-400"
												}`}
												onClick={() => handleSizeClick("Medium")}
											>
												Medium
											</button>
											<button
												className={`px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 ${
													selectedSize === "Large"
														? "text-white bg-black"
														: "dark:border-gray-400 dark:text-gray-400"
												}`}
												onClick={() => handleSizeClick("Large")}
											>
												Large
											</button>
											<button
												className={`px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 ${
													selectedSize === "XL"
														? "text-white bg-black"
														: "dark:border-gray-400 dark:text-gray-400"
												}`}
												onClick={() => handleSizeClick("XL")}
											>
												XL
											</button>
											<button
												className={`px-4 py-2 mb-2 font-semibold border rounded-md hover:border-blue-400 ${
													selectedSize === "XXL"
														? "text-white bg-black"
														: "dark:border-gray-400 dark:text-gray-400"
												}`}
												onClick={() => handleSizeClick("XXL")}
											>
												XXL
											</button>
										</div>
									</div>
								</div>
								<div className="w-32 mb-8">
									<label className="w-full pb-1 text-xl font-semibold text-gray-700 border-b border-blue-300 dark:border-gray-600 dark:text-gray-400">
										Quantity
									</label>
									<div className="relative flex flex-row w-full h-10 mt-6 bg-transparent rounded-lg">
										<button
											onClick={handleDecrement}
											className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400"
										>
											<span className="m-auto text-2xl font-thin">-</span>
										</button>
										<input
											type="number"
											className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
											placeholder="1"
											value={quantity}
											onChange={(e) => setQuantity(parseInt(e.target.value))}
										/>
										<button
											onClick={handleIncrement}
											className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400"
										>
											<span className="m-auto text-2xl font-thin">+</span>
										</button>
									</div>
								</div>
								<div className="flex flex-wrap items-center gap-4">
									<button
										onClick={handleAddToCart}
										className="w-full p-4 bg-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700"
									>
										Add to Cart
									</button>
									<Link
										to="/customer/cart"
										className="block mt-4 text-center text-blue-500 hover:text-blue-700"
									>
										View Cart
									</Link>{" "}
									{/* Add a link to view the cart */}
									<button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-500 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
										Buy Now
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SuitDescription;
