import { format } from "date-fns";
import { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getReviews } from "../api/reviewAPI";
import CardContainer from "../components/ReviewCard/CardContainer";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import {
	ADMIN,
	CUSTOMER,
	OPERATION_ASSISTANT,
	PRODUCT_MANAGER,
	TAILOR,
} from "../constants";
import { selectUser } from "../store/slices/authSlice";

const Reviews = () => {
	const user = useSelector(selectUser);
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
	};
	const [reviewsData, setReviewsData] = useState([]); // [reviewObject, reviewObject, ...
	const [sortByDate, setSortByDate] = useState("relevant");
	const [sortedByDate, setSortedByDate] = useState([]);

	useEffect(() => {
		const fetchReviews = async () => {
			const response = await getReviews();
			console.log(response.data);
			setReviewsData(response.data);
		};

		fetchReviews();
	}, []);

	useEffect(() => {
		const sortedData = [...reviewsData].sort((a, b) => {
			if (sortByDate === "recent") {
				return new Date(b.date) - new Date(a.date);
			} else if (sortByDate === "older") {
				return new Date(a.date) - new Date(b.date);
			}
			return 0;
		});
		setSortedByDate(sortedData);
		console.log(sortedData);
	}, [reviewsData, sortByDate]);

	return (
		<>
			<div className="flex flex-row w-full">
				<div className="flex-auto">
					<div className="flex flex-col ">
						<div className="flex-col m-3 ">
							<div className="flex flex-col p-4">
								{/* back  button */}
								<div className="flex items-center gap-4 m-6">
									<button
										onClick={handleBack}
										className="flex items-center gap-2 text-primary"
									>
										<IoArrowBackCircle className="text-3xl cursor-pointer" />
									</button>
									<h1 className=" text-3xl font-semibold">Reviews</h1>

									<div className="ml-32 flex w-52 ">
										<span className=" flex w-full items-center">Sort By Date</span>
										<select
											id="Sort"
											className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
											onChange={(e) => setSortByDate(e.target.value)}
											value={sortByDate}
										>
											<option value="">Relevant</option>
											<option value="recent">Recent</option>
											<option value="older">Older</option>
										</select>
									</div>
								</div>

								<CardContainer>
									{sortedByDate.map((review, index) => {
										return (
											<ReviewCard
												key={index}
												image={review.image}
												author={review.author}
												orderId={review.orderId}
												comment={review.description}
												ratings={review.rating}
												date={format(new Date(review.reviewedOn), "dd-MM-yyyy")}
											/>
										);
									})}
								</CardContainer>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Reviews;
