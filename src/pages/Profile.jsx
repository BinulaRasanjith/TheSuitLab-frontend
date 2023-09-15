/* eslint-disable perfectionist/sort-jsx-props */
import { Alert, AlertIcon, useToast } from "@chakra-ui/react";
import { Collapse } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { changePassword, refreshToken, updateProfile } from "../api/authAPIs";
import AVATAR from "../assets/images/avatar.png";
import useSetUserState from "../hooks/useSetUserState";
import { selectUser } from "../store/slices/authSlice";
import displayRoleName from "../utils/displayRoleName";

const Profile = () => {
	const toast = useToast();
	const setUserState = useSetUserState();

	const user = useSelector(selectUser);

	const [profileDetails, setProfileDetails] = useState({
		firstName: user.firstName,
		lastName: user.lastName,
		mobileNo: user.mobileNo,
	});

	const [passwordCredentials, setPasswordCredentials] = useState({
		currentPassword: "",
		newPassword: "",
		confirmPassword: "",
	});
	const [profileError, setProfileError] = useState(false);
	const [profileErrMsg, setProfileErrMsg] = useState("");
	const [passwordError, setPasswordError] = useState(false);
	const [pswErrMsg, setPswErrMsg] = useState("");

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setProfileDetails({ ...profileDetails, [name]: value });
		setProfileError(false);
	};

	const handlePswInputChange = (e) => {
		const { name, value } = e.target;
		setPasswordCredentials({ ...passwordCredentials, [name]: value });
	};

	const handleProfileUpdate = async (e) => {
		e.preventDefault();
		const { firstName, lastName, mobileNo } = profileDetails;

		if (!firstName || !lastName || !mobileNo) {
			setProfileError(true);
			setProfileErrMsg("Please fill all the fields");
			return;
		}

		try {
			await updateProfile({ firstName, lastName, mobileNo });
			const response = await refreshToken(); // refresh access token because user details are changed

			localStorage.setItem("accessToken", response.data.accessToken); //	set access token in local storage
			setUserState(); // set user state in redux store

			setProfileError(false);
			toast({
				title: "Success",
				description: "Profile updated successfully",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Something went wrong",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	};

	const handlePasswordChange = async (e) => {
		e.preventDefault();
		const { currentPassword, newPassword, confirmPassword } =
			passwordCredentials;

		if (!currentPassword || !newPassword || !confirmPassword) {
			setPasswordError(true);
			setPswErrMsg("Please fill all the fields");
			return;
		}
		if (newPassword.value !== confirmPassword.value) {
			setPasswordError(true);
			setPswErrMsg("Passwords do not match");
			return;
		}
		try {
			await changePassword({ oldPassword: currentPassword, newPassword });
			setPasswordError(false);
			toast({
				title: "Success",
				description: "Password changed successfully",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: "Error",
				description: error.message,
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	};

	return (
		<div>
			{/* <div className=" flex flex-col justify-between w-full p-10 gap-6"> */}
			<div className=" flex flex-col justify-between gap-12 mx-10 my-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
				<div className=" flex justify-start">
					<div>
						{/* <div className="text-center">
                            <img
                                src={AVATAR}
                                className="mx-auto mb-4 w-28 border border-zinc-500 rounded-lg"
                                alt="Avatar" />
                            <h5 className="mb-2 text-xl font-medium leading-tight">Bhanuka Rajakaruna</h5>
                            <p className="text-neutral-500 dark:text-neutral-400">Operation Assistant</p>
                        </div> */}
						<div className=" flex justify-center gap-12 mx-5">
							<div className=" ">
								<img
									src={AVATAR}
									className="mx-auto mb-4 w-28 rounded-3xl"
									alt="Avatar"
								/>
							</div>
							<div className=" flex flex-col justify-center">
								<div>
									<h5 className="mb-2 text-3xl font-medium leading-tight">
										{user.firstName} {user.lastName}
									</h5>
								</div>
								<div>
									<p className="text-neutral-500 dark:text-neutral-400">
										{displayRoleName(user.role)}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className=" flex gap-12">
					<form
						onSubmit={handleProfileUpdate}
						className=" border border-solid rounded flex flex-col gap-5 bg-gray-50 px-7 py-9 w-full"
					>
						<Collapse in={profileError}>
							<Alert status="error" variant={"subtle"} borderRadius={5}>
								<AlertIcon />
								{profileErrMsg}
							</Alert>
						</Collapse>

						<div>
							<label htmlFor="currency" className=" ">
								First Name
							</label>
							<input
								type="text"
								name="firstName"
								value={profileDetails.firstName}
								onChange={handleInputChange}
								id="firstName"
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Pasan"
							/>
						</div>
						<div>
							<label htmlFor="currency" className=" ">
								Last Name
							</label>
							<input
								type="text"
								name="lastName"
								value={profileDetails.lastName}
								onChange={handleInputChange}
								id="lastName"
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Gamage"
							/>
						</div>
						<div>
							<label htmlFor="currency" className=" ">
								Mobile
							</label>
							<input
								type="text"
								name="mobileNo"
								value={profileDetails.mobileNo}
								onChange={handleInputChange}
								id="price"
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="0764927560"
							/>
						</div>
						<div>
							<button
								type="submit"
								className=" w-full rounded-md border-0 py-2 text-gray-100 bg-black"
							>
								Update Now
							</button>
						</div>
					</form>

					<form
						onSubmit={handlePasswordChange}
						className="border border-solid rounded flex flex-col gap-5 bg-gray-50 px-7 py-9 w-full"
					>
						<Collapse in={passwordError}>
							<Alert status="error" variant={"subtle"} borderRadius={5}>
								<AlertIcon />
								{pswErrMsg}
							</Alert>
						</Collapse>
						<div>
							<label htmlFor="currency" className=" ">
								Current Password
							</label>
							<input
								type="password"
								name="currentPassword"
								id="currentPassword"
								onChange={handlePswInputChange}
								className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Current Password"
							/>
						</div>
						<div>
							<label htmlFor="currency" className=" ">
								New Password
							</label>
							<input
								type="password"
								name="newPassword"
								id="newPassword"
								onChange={handlePswInputChange}
								className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="New Password"
							/>
						</div>
						<div>
							<label htmlFor="currency" className=" ">
								Confirm Password
							</label>
							<input
								type="password"
								name="confirmPassword"
								id="confirmPassword"
								onChange={handlePswInputChange}
								className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Confirm New Password"
							/>
						</div>
						<div>
							<button
								type="submit"
								className=" w-full rounded-md border-0 py-2 text-gray-100 bg-black"
							>
								Change Password
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* <div className=" flex justify-center w-full">
                <div className=" flex flex-col justify-center h-screen">
                    <div className=" text-4xl font-semibold text-zinc-400">This profile settings page is under development :(</div>
                </div>
            </div> */}
		</div>
	);
};

export default Profile;
