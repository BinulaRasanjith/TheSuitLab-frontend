import { Alert, AlertIcon, Button, Collapse, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { PiCheckCircleFill, PiWarningFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { sendOTP, verifyOTP } from "../api/otpAPIs";
import loginImage from "../assets/images/LoginBackground.png";
import TSL_LOGO_SM from "../assets/images/TSL_LOGO_SM.png";
// import googleIcon from "../assets/images/googleIcon.png";
import Input from "../components/Input/Input";
import { ERROR, IDLE, LOADING, SIGNUP_SUCCESS } from "../constants";
import {
	selectAuthError,
	selectAuthStatus,
	setError,
	setStatus,
	signupAsync,
} from "../store/slices/authSlice";
import isValidMobileNo from "../utils/isValidMobileNo";
import {
	containsDigit,
	containsLowercaseLetter,
	containsSpecialCharacter,
	containsUppercaseLetter,
	isPasswordLengthValid,
} from "../utils/isValidPassword";

// TODO: use  ERROR and LOADING status to show error and loading messages

const Signup = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const toast = useToast();

	const status = useSelector(selectAuthStatus);
	const error = useSelector(selectAuthError);

	const [signupStep, setSignupStep] = useState(0);
	const [signupCredentials, setSignupCredentials] = useState({
		firstName: "",
		lastName: "",
		mobileNo: "",
		password: "",
		confirmPassword: "",
	});
	const [otp, setOTP] = useState("");
	const [otpResponse, setOTPResponse] = useState({ status: IDLE, msg: "" });
	const [passwordError, setPasswordError] = useState("");
	const [isMobileNoValid, setIsMobileNoValid] = useState({
		valid: true,
		msg: "",
	});
	const [passwordValidation, setpasswordValidation] = useState(false)
	const [passwordLengthValid, setPasswordLengthValid] = useState(false);

	const [passwordContainsLowercaseLetter, setPasswordContainsLowercaseLetter] =
		useState(false);
	const [passwordContainsUppercaseLetter, setPasswordContainsUppercaseLetter] =
		useState(false);
	const [passwordContainsDigit, setPasswordContainsDigit] = useState(false);
	const [
		passwordContainsSpecialCharacter,
		setPasswordContainsSpecialCharacter,
	] = useState(false);

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

	const handleOTPchange = (e) => {
		const { value } = e.target;
		if (value.length <= 6) {
			setOTP(value);
		}
	};

	const handlePasswordInputChange = (e) => {
		const { name, value } = e.target;
		setSignupCredentials({ ...signupCredentials, [name]: value });

		setPasswordLengthValid(isPasswordLengthValid(value));
		setPasswordContainsLowercaseLetter(containsLowercaseLetter(value));
		setPasswordContainsUppercaseLetter(containsUppercaseLetter(value));
		setPasswordContainsDigit(containsDigit(value));
		setPasswordContainsSpecialCharacter(containsSpecialCharacter(value));
	};

	const handleMobileNoChange = (e) => {
		const { value } = e.target;
		if (value.length === 0) {
			setIsMobileNoValid({ valid: true, msg: "" });
		} else if (isValidMobileNo(value).valid) {
			setIsMobileNoValid({ valid: true, msg: "" });
			setSignupCredentials({ ...signupCredentials, mobileNo: value });
		} else {
			setIsMobileNoValid(isValidMobileNo(value));
		}
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
		setpasswordValidation(false)
	};

	const handlePasswordValidationFocus = () => {
		setpasswordValidation(true)
	}

	// confirm user details & send OTP
	const handleNextSubmit = async (e) => {
		e.preventDefault();
		// check if password valid
		if (passwordError) return;

		// check all all fields are filled
		const { firstName, lastName, mobileNo, password, confirmPassword } =
			signupCredentials;

		if (
			firstName === "" ||
			lastName === "" ||
			mobileNo === "" ||
			password === "" ||
			confirmPassword === ""
		) {
			dispatch(setError("Please fill all the fields"));
			return;
		}

		// check if mobile number valid
		if (!isMobileNoValid.valid) return;

		// send OTP
		setOTPResponse({ status: LOADING, msg: "" });
		try {
			const response = await sendOTP(mobileNo);

			if (response.status === 200) {
				setOTPResponse({ status: IDLE, msg: "" });
				setSignupStep(1);
			}
		} catch (error) {
			const res = error.response.data;

			if (res.status === 400) {
				setOTPResponse({ status: ERROR, msg: res.message });
			} else {
				setOTPResponse({ status: ERROR, msg: "Something went wrong" });
			}
		}
	};

	// confirm OTP & create account
	const handleOTPSubmit = async (e) => {
		e.preventDefault();
		// check if otp valid
		if (otp.length !== 6) {
			setOTPResponse({ status: ERROR, msg: "Invalid OTP" });
			return;
		}

		// check if otp is correct
		const { mobileNo } = signupCredentials;
		setOTPResponse({ status: LOADING, msg: "" });
		try {
			const response = await verifyOTP(mobileNo, otp);
			if (response.status === 200) {
				// otp correct
				setOTPResponse({ status: IDLE, msg: "" });

				// create account
				dispatch(signupAsync(signupCredentials));
			} else {
				setOTPResponse({ status: "error", msg: "Invalid OTP" });
			}
		} catch (error) {
			setOTPResponse({ status: "error", msg: "Invalid OTP" });
		}
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

					{signupStep === 0 && (
						<form
							className="flex flex-col align-center justify-center md:px-5 lg:px-10 pl-2 pr-2 mt-4"
							onSubmit={handleNextSubmit}
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-3 my-3">
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
								{/* <Input
								id="address"
								name="address"
								onChange={handleInputChange}
								placeholder="Address"
								type="text"
								value={signupCredentials.address}
							/> */}
								<div className="col-span-2">
									<Input
										id="mobile-no"
										name="mobileNo"
										type="text"
										placeholder="Mobile Number"
										hint="Ex: 0712345678"
										value={signupCredentials.mobileNumber}
										onChange={handleMobileNoChange}
										error={isMobileNoValid.msg}
									/>
									{!isMobileNoValid.valid && (
										<div className="text-red-600 text-sm ml-2">
											{isMobileNoValid.msg}
										</div>
									)}
								</div>
								<Input
									error={passwordError}
									id="password"
									name="password"
									onBlur={handlePasswordChange}
									onChange={handlePasswordInputChange}
									onFocus={handlePasswordValidationFocus}
									placeholder="Password"
									type="password"
									value={signupCredentials.password}
									className={"col-span-2"}
								/>
								<Collapse className="col-span-2" animateOpacity in={passwordValidation} unmountOnExit>
									<div className="flex flex-col justify-start">
										<p className="font-bold">Password must contain:</p>
										<div className="flex items-center gap-3 pl-3">
											{passwordLengthValid ? (
												<PiCheckCircleFill className="text-green-600" />
											) : (
												<PiWarningFill className="text-yellow-600" />
											)}
											<span className="ml-1">At least 8 characters</span>
										</div>
										<div className="flex items-center gap-3 pl-3">
											{passwordContainsLowercaseLetter ? (
												<PiCheckCircleFill className="text-green-600" />
											) : (
												<PiWarningFill className="text-yellow-600" />
											)}
											<span className="ml-1">At least 1 lowercase letter</span>
										</div>
										<div className="flex items-center gap-3 pl-3">
											{passwordContainsUppercaseLetter ? (
												<PiCheckCircleFill className="text-green-600" />
											) : (
												<PiWarningFill className="text-yellow-600" />
											)}
											<span className="ml-1">At least 1 uppercase letter</span>
										</div>
										<div className="flex items-center gap-3 pl-3">
											{passwordContainsDigit ? (
												<PiCheckCircleFill className="text-green-600" />
											) : (
												<PiWarningFill className="text-yellow-600" />
											)}
											<span className="ml-1">At least 1 digit</span>
										</div>
										<div className="flex items-center gap-3 pl-3">
											{passwordContainsSpecialCharacter ? (
												<PiCheckCircleFill className="text-green-600" />
											) : (
												<PiWarningFill className="text-yellow-600" />
											)}
											<span className="ml-1">At least 1 special character</span>
										</div>
									</div></Collapse>

								<Input
									error={passwordError}
									id="confirm-password"
									name="confirmPassword"
									onBlur={handlePasswordChange}
									onChange={handleInputChange}
									placeholder="Confirm Password"
									type="password"
									value={signupCredentials.confirmPassword}
									className={"col-span-2"}
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
									Next
								</Button>
							</div>
							{error && (
								<Alert
									className="w-full mt-2"
									status="error"
									variant="subtle"
									sx={{ borderRadius: "10px" }}
								>
									<AlertIcon />
									{error}
								</Alert>
							)}
						</form>
					)}
					{signupStep === 1 && (
						<form
							className="flex flex-col gap-3 align-center justify-center md:px-5 lg:px-10 pl-2 pr-2 mt-4"
							onSubmit={handleOTPSubmit}
						>
							<Input
								id="otp"
								name="otp"
								onChange={handleOTPchange}
								placeholder="OTP"
								hint={"Enter the OTP sent to your mobile number"}
								type="number"
								value={otp}
								maxLength={6}
							/>

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
									Confirm
								</Button>
							</div>
							<div>
								<span
									onClick={() => setSignupStep(0)}
									className="flex justify-center items-center gap-1 underline text-stone-400 hover:text-stone-600"
								>
									<BiArrowBack /> Back
								</span>
							</div>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

export default Signup;
