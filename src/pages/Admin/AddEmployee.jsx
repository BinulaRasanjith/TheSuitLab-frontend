import { Button } from "@chakra-ui/button";
import { Alert, AlertIcon, Collapse, useToast } from "@chakra-ui/react";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../api/userAPI";
import { OPERATION_ASSISTANT, PRODUCT_MANAGER, TAILOR } from "../../constants";
import defaultProfileImage from "../../assets/images/avatar.png";
import Input from "../../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { IoArrowBackCircle } from "react-icons/io5";

const AddEmployee = () => {
	const toast = useToast();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [role, setRole] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [image, setImage] = useState(null); // New state for the uploaded image

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [selectedImage, setSelectedImage] = useState(defaultProfileImage);

	const handleAddUserClick = async (e) => {
		e.preventDefault();

		if (firstName === "") {
			setError(true);
			setErrorMessage("First Name is required");
			return;
		}

		if (lastName === "") {
			setError(true);
			setErrorMessage("Last Name is required");
			return;
		}

		if (role === "") {
			setError(true);
			setErrorMessage("Role is required");
			return;
		}

		if (mobileNumber === "") {
			setError(true);
			setErrorMessage("Mobile Number is required");
			return;
		}

		if (password === "") {
			setError(true);
			setErrorMessage("Password is required");
			return;
		}

		if (password !== confirmPassword) {
			setError(true);
			setErrorMessage("Password and Confirm Password does not match");
			return;
		}

		const user = new FormData();
		user.append("mobileNo", mobileNumber);
		user.append("firstName", firstName);
		user.append("lastName", lastName);
		user.append("role", role);
		user.append("password", password);
		user.append("image", image); // Use default URL if image is null

		try {
			await addUser(user);
			toast({
				title: "User Added Successfully",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
			navigate("/admin/employees", { replace: true });
		} catch (error) {
			console.error(error);
			toast({
				title: "User Added Failed",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	const handleBack = () => {
		navigate("/admin/employees");

	};


	return (
		<>
			<div className="h-full flex m-4 flex-row shadow-xl rounded-2xl p-1">
				<div className="w-full border  border-gray-200 mx-10  rounded-lg shadow  p-4">
					<div className=" border-b-2 border-gray-300 flex gap-4">
						<button
							onClick={handleBack}
							className="flex items-center gap-2 text-primary"
						>
							<IoArrowBackCircle className="text-3xl cursor-pointer" />
						</button>
						<h2 className="mb-4 mt-3 text-2xl  justify-start font-medium text-gray-900">
							Add New Employee
						</h2>
					</div>
					<form onSubmit={handleAddUserClick}>
						<div className="flex flex-row justify-center items-center mt-8 gap-24">
							<div>
								<Dropzone
									onDrop={(acceptedFiles) => {
										// Handle the uploaded file here
										setImage(acceptedFiles[0]);
										console.log(acceptedFiles);
										setSelectedImage(URL.createObjectURL(acceptedFiles[0]));
									}}
									accept="image/*"
								>
									{({ getRootProps, getInputProps }) => (
										<div
											{...getRootProps()}
											className="w-52 h-52 object-cover mb-1 rounded-full shadow-lg dropzone"
										>
											<input {...getInputProps()} />
											{/* {image && (
											<img
												className="w-52 h-52 object-cover mb-1 rounded-full shadow-lg"
												src={URL.createObjectURL(image)}
												alt="uploaded"
											/>
										)} */}
											{image ? (
												<img
													className="w-52 h-52 object-cover mb-1 rounded-full shadow-lg"
													src={URL.createObjectURL(image)}
													alt="uploaded"
												/>
											) : (
												<img
													className="w-52 h-52 object-cover mb-1 rounded-full shadow-lg"
													src={selectedImage}
													alt="default image"
												/>
											)}
										</div>
									)}
								</Dropzone>
								<p className="flex text-sm text-blue-500">Double tap to add profile photo</p>
							</div>
							<div className="flex flex-col gap-3 w-96">
								<div className="flex flex-row ">
									<select
										id="role"
										name="role"
										className="block p-2 w-48 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300P  focus:outline-none focus:ring-0 peer "
										value={role}
										onChange={(e) => setRole(e.target.value)}
									>
										<option value="">Select a Role</option>
										<option value={PRODUCT_MANAGER}>Product Manager</option>
										<option value={OPERATION_ASSISTANT}>Operation Assistant</option>
										<option value={TAILOR}>Tailoring Supervisor</option>
									</select>
								</div>

								<div className="flex flex-row justify-between">
									<Input

										id="firstName"
										name="firstName"
										bo
										onChange={(e) => setFirstName(e.target.value)}
										onFocus={() => {
											dispatch(setError(null));
										}}
										placeholder="First Name "
										type="text"
										value={firstName}
									/>
								</div>
								<div className="flex flex-row justify-between">
									<Input

										id="lastName"
										name="lastName"
										onChange={(e) => setLastName(e.target.value)}
										onFocus={() => {
											dispatch(setError(null));
										}}
										placeholder="Last Name "
										//hint="Ex: 0712345678"
										type="text"
										value={lastName}
									/>
									{" "}
								</div>

								<div className="flex flex-row justify-between">
									<Input

										id="mobileNumber"
										name="mobileNumber"
										onChange={(e) => setMobileNumber(e.target.value)}
										onFocus={() => {
											dispatch(setError(null));
										}}
										placeholder="Mobile Number"
										hint="Ex: 0712345678"
										type="text"
										value={mobileNumber}
									/>

									{" "}
								</div>
								<div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-3 my-3">

									<div className="flex flex-row justify-between">
										<Input
											id="password"
											name="password"
											onChange={(e) => setPassword(e.target.value)}
											onFocus={() => {
												dispatch(setError(null));
											}}
											placeholder="Password"
											type="password"
											value={password}
										/>{" "}
									</div>
									<div className="flex flex-row justify-between">
										<Input
											id="re-password"
											name="re-password"
											onChange={(e) => setConfirmPassword(e.target.value)}
											placeholder="Confirm Password"
											type="password"
											value={confirmPassword}
											className={"col-span-2"}
										/>
										{" "}
									</div>
								</div>

								<div className="flex">
									<Button
										onClick={handleAddUserClick}
										rounded={"md"}
										color={"white"}
										_hover={{ bg: "gray.800", }}
										_active={{ bg: "black" }}
										bg={"gray.700"}
										fontSize={{ base: "l", lg: "md" }}
										isLoading={status === "loading"}
										loadingText="Logging in"
										padding={{ base: "5px", lg: "20px" }}
										type="submit"
										width={{ base: "100%", md: "50%" }}
									>
										SAVE
									</Button>
								</div>
							</div>
						</div>
						<Collapse in={error}>
							<Alert
								status="error"
								minW={100}
								w={"70%"}
								mt={4}
								marginX={"auto"}
								borderRadius={5}
							>
								<AlertIcon />
								{errorMessage}
							</Alert>
						</Collapse>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddEmployee;
