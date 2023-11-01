import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { getAllCustomersWithOrderCount } from "../../api/customerAPI";
import { setUserProgress } from "../../api/userAPI";
import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";
import { PRODUCT_MANAGER } from "../../constants";
import { OPERATION_ASSISTANT } from "../../constants";
import { selectUser } from "../../store/slices/authSlice";

const ViewCustomers = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();
	const navigate = useNavigate();
	const user = useSelector(selectUser);
	const [searchInput, setSearchInput] = useState('');


	const [customers, setCustomers] = useState([]);
	const [modalStatus, setModalStatus] = useState({
		userId: "",
		status: "",
	});

	const handleAddCustomerClick = () => {
		navigate("/sign-up");
	};

	const handleOptionClick = (userId, status) => {
		setModalStatus({ userId, status });
		onOpen();
	};

	const handleActivateUser = () => {
		console.log("activate");
		setUserProgress(modalStatus.userId, true)
			.then((response) => {
				console.log(response.data);
				onClose();
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
				toast({
					title: "Error",
					description: "Something went wrong",
					status: "error",
					duration: 3000,
					isClosable: true,
				});
			});
	};

	const handleDeactivateUser = () => {
		console.log("deactivate");
		setUserProgress(modalStatus.userId, false)
			.then((response) => {
				console.log(response.data);
				onClose();
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
				toast({
					title: "Error",
					description: "Something went wrong",
					status: "error",
					duration: 3000,
					isClosable: true,
				});
			});
	};

	useEffect(() => {
		const getCustomers = async () => {
			const response = await getAllCustomersWithOrderCount();

			setCustomers([...response.data]);
		};

		getCustomers();
	});

	const filteredCustomers = customers.filter((customer) => {

        const customerNameMatch = customer.name && customer.name.toString().toLowerCase().includes(searchInput.toString().toLowerCase());
        const mobileNoMatch = customer.mobileNo && customer.mobileNo.toString().toLowerCase().includes(searchInput.toString().toLowerCase());
        const orderCountMatch = customer.orderCount && customer.orderCount.toString().toLowerCase().includes(searchInput.toString().toLowerCase());
		const statusMatch = customer.status && customer.status === (searchInput.toLowerCase() === "active");
       
        return customerNameMatch || mobileNoMatch || orderCountMatch || statusMatch;
    });

	return (
		<div>
			<div className=" flex flex-col justify-between mx-10 my-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
				<div className=" flex justify-between align-middle pb-5">
					<div className="flex flex-col">
						<div className=" text-2xl font-semibold">All Customers</div>
					</div>
					<div className=" flex gap-4 align-middle">
						<div>
							{/* <SearchBox /> */}
							<div className="relative">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
									</svg>
								</div>
								<input
									className="block w-60 p-2.5 pl-10 text-xs text-gray-700 rounded-lg bg-gray-100 " id="default-search" placeholder="Search" required type="search"
									value={searchInput}
									onChange={(e) => setSearchInput(e.target.value)}
								/>
							</div>
						</div>
						<div>
						</div>

						{user.role === OPERATION_ASSISTANT && (
							<Button
								_hover={{
									bgColor: "blue.500",
								}}
								color={"white"}
								bgColor={"black"}
								leftIcon={<AiFillPlusCircle />}
								ml={3}
								//onClick={(handleAddCustomerClick)}
								rounded={"full"}
							>
								Add Customer
							</Button>
						)}
					</div>
				</div>

				<div className=" flex flex-col">
					<table className=" flex flex-col justify-between text-sm font-medium text-gray-500">
						<thead className=" uppercase bg-gray-100 py-4 w-full">
							<tr>
								<th className=" w-40">Customer Name</th>
								<th className=" w-40">Phone Number</th>
								<th className=" w-40">Order Count</th>
								<th className=" w-40">Status</th>
								{user.role === PRODUCT_MANAGER && (
									<th className="w-40 px-10">Option</th>
								)}
							</tr>
						</thead>
						<tbody>
							<div className="flex flex-col gap-1">
								{filteredCustomers.map((item, index) => (
									<tr
										key={index}
										className="flex items-center text-center border hover:bg-gray-300 text-black whitespace-nowrap font-medium py-3"
									>
										<td className="w-40">{item.name}</td>
										<td className="w-40">{item.mobileNo}</td>
										<td className="w-40">{item.orderCount}</td>
										<td className="w-40">
											{" "}
											{item.status ? "Active" : "Inactive"}
										</td>
										{user.role === PRODUCT_MANAGER && (
											<td className="w-40 ">
												{item.status ? (
													<Button
														className="block"
														rounded={"md"}
														color={"black"}
														bgColor={"red.300"}
														size="sm"
														_hover={{
															bg: "red.600",
															color: "white",
														}}
														onClick={() =>
															handleOptionClick(item.userId, item.status)
														}
													>
														Deactivate
													</Button>
												) : (
													<Button
														className="block  w-24"
														rounded={"md"}
														color={"black"}
														bgColor={"green.300"}
														size="sm"
														_hover={{
															bg: "green.600",
															color: "white",
														}}
														onClick={() =>
															handleOptionClick(item.userId, item.status)
														}
													>
														Activate
													</Button>
												)}
											</td>
										)}
									</tr>
								))}
							</div>
						</tbody>
					</table>
					<div className=" w-full border h-0 mt-3 mb-6 border-gray-200"></div>
				</div>

				<div className=" flex justify-between">
					<div className=" py-3 text-sm font-medium text-neutral-400">
						Showing data 1 to 8 of 256K entries
					</div>
					<div className=" py-3">
						<Pagination />
					</div>
				</div>
			</div>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				{modalStatus.status ? (
					<ModalContent>
						<ModalHeader>Customer Deactivation</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<p>Are you sure you want to deactivate this customer?</p>
						</ModalBody>

						<ModalFooter>
							<Button variant="ghost" mr={3} onClick={onClose}>
								Close
							</Button>
							<Button colorScheme="red" onClick={handleDeactivateUser}>
								Confirm
							</Button>
						</ModalFooter>
					</ModalContent>
				) : (
					<ModalContent>
						<ModalHeader>Customer Activation</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<p>Are you sure you want to activate this customer?</p>
						</ModalBody>

						<ModalFooter>
							<Button variant="ghost" mr={3} onClick={onClose}>
								Close
							</Button>
							<Button colorScheme="green" onClick={handleActivateUser}>
								Confirm
							</Button>
						</ModalFooter>
					</ModalContent>
				)}
			</Modal>
		</div>
	);
};

export default ViewCustomers;
