import { Button } from "@chakra-ui/button";
import { Alert, AlertIcon, Collapse, useToast } from "@chakra-ui/react";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../api/userAPI";
import { OPERATION_ASSISTANT, PRODUCT_MANAGER, TAILOR } from "../../constants";
import defaultProfileImage from "../../assets/images/avatar.png";

const AddEmployee = () => {
	const toast = useToast();
	const navigate = useNavigate();

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

	return (
		<>
			<div className="h-full flex flex-row m-4 shadow-xl rounded-2xl p-2">
				<div className="w-full border bg-slate-300 border-gray-200 m-10  rounded-lg shadow  p-6">
					<div className=" border-b-2 border-gray-300">
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
								<div className="flex">
									<p>Double tap to add profile photo</p>
								</div>
							</div>
							<div className="flex flex-col gap-3 w-96">
								<div className="flex flex-row justify-between">
									<label className="text-md font-semibold">Role</label>
									<select
										id="role"
										name="role"
										className="border border-gray-200 rounded-xl focus:outline-none focus:border-gray-500"
										value={role}
										onChange={(e) => setRole(e.target.value)}
									>
										<option value="">Select a Role</option>
										<option value={PRODUCT_MANAGER}>Product Manager</option>
										<option value={OPERATION_ASSISTANT}>
											Operation Assistant
										</option>
										<option value={TAILOR}>Tailoring Supervisor</option>
									</select>
								</div>
								<div className="flex flex-row justify-between">
									<label className="text-md font-semibold ">First Name</label>
									<input
										id="firstName"
										name="firstName"
										className="border  border-gray-400 rounded-md  focus:outline-none focus:border-gray-500"
										type="text"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
									/>
								</div>
								<div className="flex flex-row justify-between">
									<label className="text-md font-semibold">Last Name</label>
									<input
										id="lastName"
										name="lastName"
										className="border  border-gray-400 rounded-md  focus:outline-none focus:border-gray-500"
										type="text"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									/>{" "}
								</div>

								<div className="flex flex-row justify-between">
									<label className="text-md font-semibold">Contact</label>
									<input
										id="mobileNumber"
										name="mobileNumber"
										className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500"
										type="text"
										value={mobileNumber}
										onChange={(e) => setMobileNumber(e.target.value)}
									/>{" "}
								</div>

								<div className="flex flex-row justify-between">
									<label className="text-md font-semibold">Password</label>
									<input
										id="password"
										name="password"
										className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500"
										type="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>{" "}
								</div>
								<div className="flex flex-row justify-between">
									<label className="text-md font-semibold">
										Confirm Password
									</label>
									<input
										id="re-password"
										name="re-password"
										className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500"
										type="password"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
									/>{" "}
								</div>

								<div className="flex flex-row justify-between">
									<Button
										onClick={handleAddUserClick}
										rounded={"md"}
										color={"white"}
										bgColor={"black"}
										_hover={{
											bg: "gray.700",
										}}
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
