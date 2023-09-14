import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import loginImage from "../assets/images/LoginBackground.png";
import TSL_LOGO_SM from "../assets/images/TSL_LOGO_SM.png";
// import googleIcon from "../assets/images/googleIcon.png";
import Input from "../components/Input/Input";
import {
	loginAsync,
	selectAuthError,
	selectAuthStatus,
	selectUser,
	setError,
} from "../store/slices/authSlice";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector(selectUser);
	const status = useSelector(selectAuthStatus);
	const error = useSelector(selectAuthError);
	const [loginCredentials, setLoginCredentials] = useState({
		email: "",
		password: "",
	});

	useEffect(() => {
		if (user.id !== null) {
			navigate(`/${user.role}`, { replace: true });
		}
	}, [navigate, user]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setLoginCredentials({ ...loginCredentials, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(loginAsync(loginCredentials));
	};

	return (
		<div className="flex justify-center items-center w-screen ">
			{/* background image */}
			<img
				alt="login image"
				className="object-cover h-screen w-screen absolute top-0 left-0 z-0"
				src={loginImage}
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-x-0 lg:gap-x-10 xl:gap-x-20 h-4/5 px-2 py-1 z-10">
				<div className="hidden md:flex flex-col h-full justify-center">
					<div className="flex items-center justify-self-center">
						<img alt="" src={TSL_LOGO_SM} />
						<div className="hidden lg:flex  text-white text-6xl">
							<p>The Suit Lab</p>
						</div>
					</div>
					<p className="text-white text-3xl text-center w-full justify-self-end">
						WELCOME TO THE SUIT LAB
					</p>
				</div>

				<div className="flex flex-col w-11/12 bg-white px-5 py-3 lg:py-10 drop-shadow-2xl rounded-3xl h-fit">
					<h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
						Login
					</h1>

					<form
						className="flex flex-col align-center justify-center md:px-5 lg:px-10 pl-2 pr-2 mt-4"
						onSubmit={handleSubmit}
					>
						{/* <div className="font-semibold text-sm lg:text-base text-red-600 text-center mb-1 md:mb-3">
              Account does not exist or Password is incorrect
            </div> */}

						<Input
							className={"mb-5 lg:mb-8"}
							error={error}
							id="email"
							name="email"
							onChange={handleInputChange}
							onFocus={() => {
								dispatch(setError(null));
							}}
							placeholder="Email"
							type="email"
							value={loginCredentials.email}
						/>
						<Input
							className={"mb-2 lg:mb-3"}
							error={error}
							id="password"
							name="password"
							onChange={handleInputChange}
							onFocus={() => dispatch(setError(null))}
							placeholder="Password"
							type="password"
							value={loginCredentials.password}
						/>

						<div className="text-sm lg:text-base text-stone-500 mb-2">
							Forgot Password?
						</div>
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
								my={"4"}
							>
								Login
							</Button>

							{/* <div className="flex item-center justify-center items-center float-left m-2 md:m-4 w-full md:w-3/4">
								<hr className="w-full mx-2 border-2 rounded-sm" />
								Or
								<hr className="w-full mx-2 border-2 rounded-sm" />
							</div> */}
						</div>
						<div className="flex flex-col items-center rounded-bl-3xl rounded-br-3xl float-left">
							{/* <Button mb={"10px"} width={{ base: "100%", md: "70%" }}>
								<img alt="googleIcon" className="mr-2" src={googleIcon} />
								<span className="text-stone-800">Signup with Google</span>
							</Button> */}
							<div className="flex flex-col lg:flex-row justify-center align-center text-center float-left">
								<div className="text-stone-500 md:mr-2">New Here?</div>
								<Link
									to="/signup"
									className="text-black hover:underline hover:text-primary"
								>
									Create New Account
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
