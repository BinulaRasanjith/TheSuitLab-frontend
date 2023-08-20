import { Button, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import loginImage from "../assets/images/LoginBackground.png";
import TSL_LOGO_SM from "../assets/images/TSL_LOGO_SM.png";
import googleIcon from "../assets/images/googleIcon.png";
import Input from "../components/Input/Input";
import { IDLE, SIGNUP_SUCCESS } from "../constants";
import {
	selectAuthError,
	selectAuthStatus,
	setError,
	setStatus,
	signupAsync,
} from "../store/slices/authSlice";

const Signup = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const toast = useToast();

	const status = useSelector(selectAuthStatus);
	const error = useSelector(selectAuthError);

	const [signupCredentials, setSignupCredentials] = useState({
		email: "",
		firstName: "",
		lastName: "",
		address: "",
		mobileNo: "",
		password: "",
		confirmPassword: "",
	});
	const [passwordError, setPasswordError] = useState("");

	useEffect(() => {
		if (status === SIGNUP_SUCCESS) {
			dispatch(setStatus(IDLE));
			navigate("/login", { replace: true });
			toast({
				title: "Account created.",
				description: "We've created your account for you.",
				status: "success",
				duration: 9000,
				isClosable: true,
			});
		}
	}, [dispatch, navigate, status, toast]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setSignupCredentials({ ...signupCredentials, [name]: value });
	};

	const handlePasswordChange = () => {
		if (
			signupCredentials.password !== signupCredentials.confirmPassword &&
			signupCredentials.confirmPassword !== "" &&
			signupCredentials.password !== ""
		) {
			setPasswordError("Passwords do not match");
		} else {
			setPasswordError("");
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(signupAsync(signupCredentials));
	};

	return (
		<div className="flex items-center justify-center m-auto overflow-hidden">
			<img
				alt="login image"
				className="object-cover h-screen w-screen fixed top-0 left-0 z-0"
				src={loginImage}
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center md:gap-x-0 lg:gap-x-10 xl:gap-x-20 h-4/5 px-2 py-1 z-10">
				<div className="hidden md:flex flex-col justify-around">
					<div className="flex items-center pt-10">
						<div>
							<img alt="" src={TSL_LOGO_SM} />
						</div>
						<div className="lg:flex hidden text-white text-6xl">
							<p>The Suit Lab</p>
						</div>
					</div>
					<div className="flex flex-col items-start text-white text-4xl">
						<p className="text-center w-full">WELCOME TO THE SUIT LAB</p>
					</div>
				</div>

				<div className="flex flex-col w-11/12 bg-white px-5 py-3 lg:py-10 drop-shadow-2xl rounded-3xl h-fit">
					<h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
						Sign Up
					</h1>

					<form
						className="flex flex-col align-center justify-center md:px-5 lg:px-10 pl-2 pr-2 mt-4"
						onSubmit={handleSubmit}
					>
						<div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-2 my-3">
							<Input
								id="first-name"
								name="firstName"
								onChange={handleInputChange}
								placeholder="First Name"
								type="text"
								value={signupCredentials.firstName}
							/>
							<Input
								id="last-name"
								name="lastName"
								onChange={handleInputChange}
								placeholder="Last Name"
								type="text"
								value={signupCredentials.lastName}
							/>
							<Input
								id="email"
								name="email"
								onChange={handleInputChange}
								placeholder="Email"
								type="email"
								value={signupCredentials.email}
								className={"col-span-2"}
							/>
							<Input
								id="address"
								name="address"
								onChange={handleInputChange}
								placeholder="Address"
								type="text"
								value={signupCredentials.address}
							/>
							<Input
								id="mobile-no"
								name="mobileNo"
								onChange={handleInputChange}
								placeholder="Mobile Number"
								type="text"
								value={signupCredentials.mobileNumber}
							/>
							<Input
								error={passwordError}
								id="password"
								name="password"
								onBlur={handlePasswordChange}
								onChange={handleInputChange}
								placeholder="Password"
								type="password"
								value={signupCredentials.password}
							/>
							<Input
								error={passwordError}
								id="confirm-password"
								name="confirmPassword"
								onBlur={handlePasswordChange}
								onChange={handleInputChange}
								placeholder="Confirm Password"
								type="password"
								value={signupCredentials.confirmPassword}
							/>
						</div>
						{passwordError && (
							<div className="font-semibold text-sm lg:text-base text-red-600 text-center mb-1 md:mb-3">
								{passwordError}
							</div>
						)}

						<div className="flex items-center flex-col">
							<div className="flex flex-col items-start px-1"></div>
							<Button
								_active={{ bg: "black" }}
								_hover={{ bg: "gray.800" }}
								bg={"gray.700"}
								color={"white"}
								fontSize={{ base: "l", lg: "xl" }}
								isLoading={status === "loading"}
								loadingText="Logging in"
								padding={{ base: "5px", lg: "20px" }}
								type="submit"
								width={{ base: "100%", md: "70%" }}
							>
								Sign Up
							</Button>

							<div className="flex item-center justify-center items-center float-left m-2 md:m-4 w-full md:w-3/4">
								<hr className="w-full mx-2 border-2 rounded-sm" />
								Or
								<hr className="w-full mx-2 border-2 rounded-sm" />
							</div>
						</div>
						<div className="flex flex-col items-center rounded-bl-3xl rounded-br-3xl float-left">
							<Button mb={"10px"} width={{ base: "100%", md: "70%" }}>
								<img alt="googleIcon" className="mr-2" src={googleIcon} />
								<span className="text-stone-800">Signup with Google</span>
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
