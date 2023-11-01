import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
	deleteNotifications,
	getNotifications,
	setNotificationToRead,
} from "../api/notificationAPI";
import {
	ADMIN,
	CUSTOMER,
	OPERATION_ASSISTANT,
	PRODUCT_MANAGER,
	TAILOR,
} from "../constants";
import { selectUser } from "../store/slices/authSlice";
import { tr } from "date-fns/locale";

const Notifications = () => {
	const [notifications, setNotifications] = useState([]);

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

	const handleMarkAsRead = async (notificationId) => {
		await setNotificationToRead(notificationId);
		window.location.reload();
	};

	const handleDeleteAll = async () => {
		await deleteNotifications();
		window.location.reload();
	};

	useEffect(() => {
		const fetchNotifications = async () => {
			const response = await getNotifications();
			console.log(response.data);
			setNotifications(response.data);
		};
		fetchNotifications();
	}, []);

	let sortedNotifications;
	if (notifications.length === 0) {
		sortedNotifications = [...notifications].sort((a, b) =>
			a.isRead === b.isRead ? 0 : a.isRead ? 1 : -1
		);
	} else {
		sortedNotifications = [];
	}

	return (
		<>
			<div className="flex flex-col w-full h-full">
				<div className="flex flex-row mt-5 items-center justify-between mx-20">
					<button
						onClick={handleBack}
						className="flex m-2 items-center gap-2 cursor-pointer text-primary"
					>
						<IoArrowBackCircle className="text-3xl cursor-pointer" />
					</button>

					<div className="flex gap-2">
						<MdOutlineNotificationsActive className="text-4xl" />
						<h1 className="text-3xl font-semibold">Notifications</h1>
					</div>
					<Button onClick={handleDeleteAll} colorScheme="red">
						Delete All
					</Button>
				</div>
				<div className="flex flex-col rounded-2xl shadow-xl mt-10 m-20">
					{notifications ? (
						notifications.map((notification) => (
							<div
								key={notification.id}
								className={`m-2 py-2 px-5 border-l-4 flex items-center justify-between rounded-xl  ${
									!notification.isRead ? "bg-gray-200 border-black" : ""
								}`}
							>
								{/* <div className='border-2 border-gray-600 w-full'></div> */}
								<div>
									<h3 className="font-bold">{notification.subject}</h3>
									<p className="ml-3">{notification.message}</p>
								</div>
								{!notification.isRead && (
									<Button
										onClick={() => handleMarkAsRead(notification.id)}
										colorScheme="green"
										// className="text-white flex items-center bg-green-500 px-4 py-2 mt-2 rounded-2xl"
									>
										<MdDone className="mr-1 text-2xl" />
										Mark as Read
									</Button>
								)}
							</div>
						))
					) : (
						<div className="flex flex-col items-center justify-center">
							<h1 className="text-2xl font-semibold">No Notifications</h1>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Notifications;
