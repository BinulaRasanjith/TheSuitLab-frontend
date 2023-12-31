import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { IoNotificationsSharp } from "react-icons/io5";
import { PiNewspaperBold } from "react-icons/pi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import TSL_LOGO from "../assets/images/TSL_LOGO.png";
import TSL_LOGO_SM from "../assets/images/TSL_LOGO_SM.png";
import defaultPhoto from "../assets/images/avatar.png";
import RedDot from "../components/RedDot";
import { PROFILE_PICTURE_URL } from "../config/config";
import {
	ADMIN,
	CUSTOMER,
	OPERATION_ASSISTANT,
	PRODUCT_MANAGER,
	TAILOR,
} from "../constants";
import { selectUser } from "../store/slices/authSlice";
import { logoutAsync } from "../store/slices/authSlice";
import { toggleSidebar } from "../store/slices/sidebarSlice";
import displayRoleName from "../utils/displayRoleName"; // Adjust the import path based on your project structure
import { getIfUnreadNotifications } from "../api/notificationAPI";

const Navbar = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const dispatch = useDispatch();
	const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
	const [hasNewNotifications, setHasNewNotifications] = useState(false); // Set this based on your notification data

	const user = useSelector(selectUser);
	const toast = useToast();

	useEffect(() => {
		const fetchNotifications = async () => {
			const response = await getIfUnreadNotifications();
			setHasNewNotifications(response.data.unread);
		};

		if (user.id) {
			fetchNotifications();
		}
	}, [user.id]);

	// handle login click
	const handleLoginClick = () => {
		navigate("/login");
	};

	// handle signup click
	const handleSignupClick = () => {
		navigate("/signup");
	};

	// handle logout click
	const handleLogoutClick = () => {
		navigate("/", { replace: true });
		dispatch(logoutAsync(user.id));
	};
	const handleNotificationClick = () => {
		if (user.role === CUSTOMER) {
			navigate("/customer/notifications");
		}
		if (user.role === ADMIN) {
			navigate("/admin/notifications");
		}
		if (user.role === TAILOR) {
			navigate("/tailor/notifications");
		}
		if (user.role === PRODUCT_MANAGER) {
			navigate("/manager/notifications");
		}
		if (user.role === OPERATION_ASSISTANT) {
			navigate("/assistant/notifications");
		}
	};

	const [open, setOpen] = useState(false);

	return (
		<>
			<header className="flex justify-between items-center bg-primary fixed h-16 w-screen z-40 ">
				{
					// responsive burger button for landing page
					(!user.id || user.role === CUSTOMER) && (
						<div className="flex sm:hidden">
							<button
								className="flex items-center px-3 py-2 text-secondary text-2xl"
								onClick={() => setOpen(!open)}
							>
								{open ? <FaTimes /> : <FaBars />}
							</button>
						</div>
					)
				}
				{
					// sidebar toggle burger button
					user.id &&
						(user.role !== CUSTOMER ||
							pathname.includes("/customer/customize-suit/") ||
							pathname.includes("/customer/hire-suit") ||
							pathname.includes("/customer/accessories/")) && (
							<div>
								<button
									className="flex items-center px-3 py-2 text-secondary text-2xl"
									onClick={() => dispatch(toggleSidebar())}
								>
									<FaBars />
								</button>
							</div>
						)
				}
				<div className="h-full flex items-center pr-2">
					<div className="flex align-center h-14 overflow-hidden">
						<img
							alt="TSL_LOGO"
							className={"h-14 object-cover  hidden md:block"}
							src={TSL_LOGO}
						/>
						<img
							alt="Only_logo"
							className={"h-14 object-cover block md:hidden"}
							src={TSL_LOGO_SM}
						/>
					</div>
				</div>
				<div className="max-w-screen-xl flex-wrap mx-auto">
					{
						// if user is logged in and is a customer OR if user is not logged in
						(!user.id || user.role === CUSTOMER) && (
							<ul className="hidden sm:flex text-white items-center p-1 font-medium gap-2 lg:gap-5 md:mt-0">
								<NavLink
									className={({ isActive }) => {
										return `px-3 py-1 ${isActive ? "font-bold" : ""}`;
									}}
									to={`${user.role === CUSTOMER ? "/customer" : "/"}`}
									end
								>
									Home
								</NavLink>
								<NavLink
									className={({ isActive }) => {
										return `px-3 py-1 ${isActive ? "font-bold" : ""}`;
									}}
									to={`${
										user.role === CUSTOMER ? "/customer/services" : "/services"
									}`}
								>
									Services
								</NavLink>
								<NavLink
									className={({ isActive }) => {
										return `px-3 py-1 ${isActive ? "font-bold" : ""}`;
									}}
									to={`${
										user.role === CUSTOMER ? "/customer/about-us" : "/about-us"
									}`}
								>
									About Us
								</NavLink>
								<NavLink
									className={({ isActive }) => {
										return `px-3 py-1 ${isActive ? "font-bold" : ""}`;
									}}
									to={`${
										user.role === CUSTOMER
											? "/customer/contact-us"
											: "contact-us"
									}`}
								>
									Contact Us
								</NavLink>
							</ul>
						)
					}
				</div>

				<div className="flex items-center gap-x-3 mr-5">
					{user.id ? (
						<>
							<div className="flex items-center gap-3 relative">
								{/* {user.role === CUSTOMER && (
									<div className="text-secondary cursor-pointer ">
										<HiShoppingCart
											onClick={() => navigate("/customer/cart")}
											style={{ fontSize: "1.5rem" }}
										/>
									</div>
								)} */}

								{/*notification */}
								<div className="text-secondary cursor-pointer relative ">
									{hasNewNotifications && <RedDot />}
									<IoNotificationsSharp
										onClick={handleNotificationClick}
										style={{ fontSize: "1.5rem" }}
									/>
									{/* <IoNotificationsSharp
										onClick={handleNotificationClick}
										style={{
											fontSize: "1.5rem",
										}}
									/>
									<RedDot show={hasNewNotifications} /> */}
								</div>

								{/* {user.id && user.role !== CUSTOMER && (
									<div className={`text-gray-400 text-xs text-end`}>
										{displayRoleName(user.role)}
									</div>
								)}  */}

								<div
									className="flex flex-col cursor-pointer"
									onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}
								>
									<div className="text-white text-end">{`${user.firstName} ${user.lastName}`}</div>
									{user.id && user.role !== CUSTOMER && (
										<div className={`text-gray-400 text-xs text-end`}>
											{displayRoleName(user.role)}
										</div>
									)}
								</div>
								<img
									id="avatarButton"
									type="button"
									onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}
									data-dropdown-toggle="userDropdown"
									data-dropdown-placement="bottom-start"
									className="w-10 h-10 object-cover rounded-full cursor-pointer"
									src={
										user.image
											? `${PROFILE_PICTURE_URL}/${user.image}`
											: defaultPhoto
									}
									alt="User dropdown"
								/>

								{/*  Dropdown menu  */}
								<div
									id="userDropdown"
									className={`z-10 fixed ${
										isUserDropdownOpen ? "block" : "hidden"
									} bg-primary divide-y divide-gray-300 border border-gray-300 rounded-lg shadow w-44 top-20 right-2`}
								>
									<div className="px-4 py-3 text-sm text-white">
										<div>{`${user.firstName} ${user.lastName}`}</div>
										<div className=" font-medium truncate">{user.email}</div>
									</div>
									<ul
										className="py-2 text-sm text-gray-700"
										aria-labelledby="avatarButton"
									>
										{user.role !== CUSTOMER && (
											<li>
												<NavLink
													className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black"
													onClick={() =>
														setUserDropdownOpen(!isUserDropdownOpen)
													}
													to={`/${user.role}}`}
												>
													<div className="flex gap-x-4 items-center">
														<RxDashboard style={{ fontSize: "1.5rem" }} />
														<label>Dashboard</label>
													</div>
												</NavLink>
											</li>
										)}
										{user.role === CUSTOMER && (
											<li>
												<NavLink
													className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black"
													onClick={() =>
														setUserDropdownOpen(!isUserDropdownOpen)
													}
													to={`/${user.role}/my-orders`}
												>
													<div className="flex gap-x-4 items-center">
														<PiNewspaperBold style={{ fontSize: "1.5rem" }} />
														<label>My Orders</label>
													</div>
												</NavLink>
												<NavLink
													className="block justify-center px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black"
													onClick={() =>
														setUserDropdownOpen(!isUserDropdownOpen)
													}
													to={`/${user.role}/cart`}
												>
													{/* <HiShoppingCart style={{ fontSize: "1.5rem" }} /> */}
													<div className="flex gap-x-4 items-center">
														<PiShoppingCartSimpleBold
															style={{ fontSize: "1.5rem" }}
														/>
														<label>View Cart</label>
													</div>
												</NavLink>
											</li>
										)}
										<li>
											<NavLink
												className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black"
												onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}
												to={`/${user.role}/profile`}
											>
												<div className="flex gap-x-4 items-center">
													<CgProfile style={{ fontSize: "1.5rem" }} />
													<label>Profile</label>
												</div>
											</NavLink>
										</li>
									</ul>
									<div className="py-1" onClick={handleLogoutClick}>
										<div
											onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}
											className="block px-4 py-2 text-sm text-white hover:bg-gray-100 cursor-pointer hover:text-black"
										>
											<div className="flex gap-x-4 items-center">
												<RiLogoutCircleRLine style={{ fontSize: "1.5rem" }} />
												<label>Log Out</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <Button
								_active={{
									bg: "gray",
								}}
								_hover={{
									bg: "white",
									border: "2px",
									borderColor: "white",
									textColor: "black",
								}}
								bg={"transparent"}
								border={"2px"}
								fontSize={{ base: "0.8rem", md: "1rem" }}
								onClick={handleLogoutClick}
								padding={{ base: "4px", md: "0.5rem 2rem" }}
								textColor={"white"}
							>Log Out</Button> */}
						</>
					) : (
						<>
							<Button
								_active={{
									bg: "gray",
								}}
								_hover={{
									bg: "white",
									border: "2px",
									borderColor: "white",
									textColor: "black",
								}}
								bg={"transparent"}
								border={"2px"}
								fontSize={{ base: "0.8rem", md: "1rem" }}
								onClick={handleSignupClick}
								padding={{ base: "4px", md: "0.5rem 2rem" }}
								textColor={"white"}
							>
								Sign Up
							</Button>

							<Button
								_active={{
									bg: "gray",
								}}
								_hover={{
									bg: "white",
									border: "2px",
									borderColor: "white",
									textColor: "black",
								}}
								bg={"transparent"}
								border={"2px"}
								fontSize={{ base: "0.8rem", md: "1rem" }}
								onClick={handleLoginClick}
								padding={{ base: "4px", md: "0.5rem 2rem" }}
								textColor={"white"}
							>
								Log In
							</Button>
						</>
					)}
				</div>
			</header>

			<div
				className={
					open
						? "sm:hidden z-20 fixed top-14  left-0 shadow dark:bg-gray-700"
						: "hidden"
				}
			>
				{/* TODO: set conditions for customer */}
				<ul className="flex flex-col items-center p-2 text-sm text-gray-700 dark:text-gray-200">
					<NavLink
						className={({ isActive }) => {
							return `px-3 py-1 ${
								isActive ? "border-2 rounded-md border-cyan-500" : ""
							}`;
						}}
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return `px-3 py-1 ${
								isActive ? "border-2 rounded-md border-cyan-500" : ""
							}`;
						}}
						to="/services"
					>
						Services
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return `px-3 py-1 ${
								isActive ? "border-2 rounded-md border-cyan-500" : ""
							}`;
						}}
						to="/about-us"
					>
						About Us
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return `px-3 py-1 ${
								isActive ? "border-2 rounded-md border-cyan-500" : ""
							}`;
						}}
						to="/contact-us"
					>
						Contact Us
					</NavLink>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
