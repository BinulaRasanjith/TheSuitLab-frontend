import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

import { addSupplier } from "../../api/supplierAPI";

const AddSupplier = () => {
	const toast = useToast();
	const navigate = useNavigate();
	const handleBack = () => {
        navigate("/manager/suppliers");
    };

	const [formData, setFormData] = useState({
		name: "",
		contactNo: "",
		email: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleAddSupplierClick = async (e) => {
		e.preventDefault();

		const supplier = {
			name: formData.name,
			contactNo: formData.contactNo,
			email: formData.email,
		};

		try {
			const response = await addSupplier(supplier);
			console.log(response.data);
			toast({
				title: "Success",
				description: "Supplier added successfully",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
			navigate("/manager/suppliers");
		} catch (error) {
			console.error(error);
			toast({
				title: "Error",
				description: "Something went wrong",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<div className="bg-white border border-gray-200 mt-10  rounded-lg shadow p-6 w-fit m-auto">
			<div className=" border-b-2 border-gray-300 flex items-center gap-3">
				<button
					onClick={handleBack}
					className="flex items-center gap-2 text-primary"
				>
					<IoArrowBackCircle className="text-3xl cursor-pointer" />
				</button>
				<h2 className="mb-4 mt-3 text-2xl  justify-start font-medium text-gray-900">
					Add New Supplier
				</h2>
			</div>

			<form onSubmit={handleAddSupplierClick}>
				<div className="flex flex-col w-96 gap-3 pt-5 px-3">
					<div className="flex flex-row justify-between">
						<label className="text-md text-gray-500">Name</label>
						<input
							id="name"
							name="name"
							className="border  border-gray-400 rounded-md  focus:outline-none focus:border-gray-500 p-1"
							type="text"
							value={formData.name}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="flex flex-row justify-between">
						<label className="text-md text-gray-500">Mobile Number</label>
						<input
							id="contactNo"
							name="contactNo"
							className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500 p-1"
							type="text"
							value={formData.contactNo}
							pattern="^07\d{8}$"
							title="Enter a valid Sri Lankan mobile number starting with '07' and followed by 8 digits"
							onChange={handleInputChange}
							required
						/>{" "}
					</div>

					<div className="flex flex-row justify-between">
						<label className="text-md text-gray-500">Email</label>
						<input
							id="email"
							name="email"
							className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500 p-1"
							type="email"
							value={formData.email}
							onChange={handleInputChange}
						/>{" "}
					</div>

					<div className="flex flex-row-reverse justify-between">
						<Button type="submit" colorScheme="gray">
							Save
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddSupplier;
