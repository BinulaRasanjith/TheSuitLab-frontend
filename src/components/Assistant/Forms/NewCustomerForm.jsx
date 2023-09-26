import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { addReturn } from "../../../api/returnAPI";
import Input from "../../Input/Input";

const NewReturnForm = ({ isOpen, onClose }) => {
	const [newCustomer, setNewCustomer] = useState({
		firstName: "",
		lastName: "",
		// orderedDate: null,
		// itemCount: null,
		mobileNo: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewCustomer({ ...newCustomer, [name]: value });
	};

	const handleAddUserClick = async (e) => {
		e.preventDefault();

		try {
			await addReturn(newCustomer);
			onClose();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={`relative  ${isOpen ? "block" : "hidden"}`}>
			{/* <div className={`relative  ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}> */}
			{/* <div className="relative"> */}

			<div className="fixed left-0 right-0 bottom-0 top-0 z-40 opacity-30 bg-black"></div>

			<div className="fixed top-16 bottom-0 right-0 left-0 z-40 flex flex-col items-center justify-center">
				<div className=" z-50 m-8 max-w-md w-96 rounded-lg bg-white p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
					<div className="relative flex justify-end mb-3" onClick={onClose}>
						<AiFillCloseCircle size={24} />
					</div>
					{/* <form> */}
					<form onSubmit={handleAddUserClick}>
						{/* <!--Name input--> */}
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
								type="date"
								placeholder="Last Name"
								id="lastname"
								name="lastName"
								value={newCustomer.lastName}
								onChange={handleInputChange}
								className="mb-6"
							/>
						</div>

						{/* <!--Email input--> */}
						<div className="relative mb-6" data-te-input-wrapper-init>
							<Input
								type="number"
								placeholder="Mobile Number"
								id="mobile"
								name="mobileNo"
								value={newCustomer.mobileNo}
								onChange={handleInputChange}
								className="mb-6"
							/>
						</div>

						{/* <!--Message textarea--> */}
						<div className="relative mb-6" data-te-input-wrapper-init>
							<Input
								type="text"
								placeholder="Reason for returning"
								id="reason"
								name="reason"
								value={newCustomer.reason}
								onChange={handleInputChange}
								className="mb-6"
							/>
						</div>

						{/* <!--Submit button--> */}
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