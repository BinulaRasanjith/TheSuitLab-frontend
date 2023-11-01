import { useToast } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { addNewCustomer } from "../../../api/assistantAPI";
import Input from "../../Input/Input";

const NewReturnForm = ({ isOpen, onClose }) => {
	const [newCustomer, setNewCustomer] = useState({
		firstName: "",
		lastName: "",
		mobileNo: "",
	});

    const toast = useToast();
	const regex = /^\+\d{11}$/;

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setNewCustomer({ ...newCustomer, [name]: value });
	};

	const handleAddUserClick = async (event) => {
		event.preventDefault();
		if (newCustomer.firstName === "" || newCustomer.lastName === "" || newCustomer.mobileNo === "") {
			toast({
                title: "Please fill all the fields!",
                status: "error",
                duration: 3000,
                isClosable: true,
            });

		// CHECK IF MOBILE NUMBER IS VALID
		} else if (!regex.test(newCustomer.mobileNo)) {
			console.log("Invalid mobile number"); // TODO: REMOVE THIS LINE
			toast({
				title: "Invalid mobile number!",
				description: "Please use +94XXXXXXXXX format!",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			try {
				const response = await addNewCustomer(newCustomer);
				console.log(response) // TODO: REMOVE THIS LINE
				onClose();
				toast({
					title: "Success!",
					description: "New customer added successfully!",
					status: "success",
					duration: 3000,
					isClosable: true,
				});
			} catch (error) {
				console.error(error);
				toast({
					title: "Unsuccess!",
					description: "Couldn't add new customer!",
					status: "error",
					duration: 3000,
					isClosable: true,
				});
			}
		}
	};

	return (
		<div className={`relative  ${isOpen ? "block" : "hidden"}`}>

			<div className="fixed left-0 right-0 bottom-0 top-0 z-40 opacity-30 bg-black"></div>

			<div className="fixed top-16 bottom-0 right-0 left-0 z-40 flex flex-col items-center justify-center">
				<div className=" z-50 m-8 max-w-md w-96 rounded-lg bg-white p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
					<div className="flex justify-between gap-x-4">
						<div className="mb-12 text-2xl font-bold">
							New Customer
						</div>
						<div className="mt-1"><AiFillCloseCircle onClick={onClose} size={24} /></div>
					</div>
					{/* <form> */}
					<form onSubmit={handleAddUserClick}>
						<div className="relative mb-6" data-te-input-wrapper-init>
							<Input
								type="text"
								placeholder="First Name"
								id="firstname"
								name="firstName"
								value={newCustomer.firstName}
								onChange={handleInputChange}
								className="mb-6"
							/>
						</div>
						<div>
							<Input
								type="text"
								placeholder="Last Name"
								id="lastname"
								name="lastName"
								value={newCustomer.lastName}
								onChange={handleInputChange}
								className="mb-6"
							/>
						</div>
						<div className="relative mb-6" data-te-input-wrapper-init>
							<Input
								type="text"
								placeholder="Mobile Number"
								id="mobile"
								name="mobileNo"
								value={newCustomer.mobileNo}
								onChange={handleInputChange}
								className="mb-6"
							/>
						</div>

						<button
							type="submit"
							className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
							data-te-ripple-init
							data-te-ripple-color="light"
						>
							Add Customer
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

NewReturnForm.propTypes = {
	onClose: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
};

export default NewReturnForm;