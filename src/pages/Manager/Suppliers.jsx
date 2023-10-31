import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { getSuppliers as getSuppliersAPI } from "../../api/supplierAPI";
import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";

const Suppliers = () => {
	const navigate = useNavigate();
	const handleAddSupplierClick = () => {
		navigate("/manager/suppliers/add-supplier");
	};

	const [suppliers, setSuppliers] = useState([]);

	useEffect(() => {
		const getSuppliers = async () => {
			const response = await getSuppliersAPI();
			console.log(response.data);

			setSuppliers(response.data);
		};

		getSuppliers();
	}, []);

	return (
		<div>
			<div className=" flex flex-col justify-between mx-10 my-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
				<div className=" flex justify-between align-middle pb-5">
					<div className="flex flex-col">
						<div className=" text-2xl font-semibold">All Suppliers</div>
					</div>
					<div className=" flex gap-4 align-middle">
						<div>
							<SearchBox />
						</div>
						<div>
							<DropDownFilter />
						</div>

						<Button
							_hover={{
								bgColor: "blue.500",
							}}
							color={"white"}
							bgColor={"black"}
							leftIcon={<AiFillPlusCircle />}
							ml={3}
							onClick={handleAddSupplierClick}
							rounded={"full"}
						>
							Add Supplier
						</Button>
					</div>
				</div>

				<div className=" flex flex-col">
					<table className=" flex flex-col justify-between text-sm font-medium text-gray-500">
						<thead className=" uppercase bg-gray-100 py-4 w-full">
							<tr>
								<th className=" w-40">Supplier Name</th>
								<th className=" w-40">Phone Number</th>
								<th className=" w-40">Email</th>
								<th className=" w-40">Status</th>
								<th className="w-40 px-10">Option</th>
							</tr>
						</thead>
						<tbody>
							<div className="flex flex-col gap-1">
								{suppliers.map((item, index) => (
									<tr
										key={index}
										className="flex items-center text-center border hover:bg-gray-300 text-black whitespace-nowrap font-medium"
									>
										{/* 
                                            accountNo : "1234567890"
                                            bankName : "BDO"
                                            createdAt : "2023-10-31T06:35:17.453Z"
                                            email : null
                                            image : "supplier1.jpg"
                                            mobileNo : "1234567890"
                                            progress : true
                                            supplierId : "SUP0000000001"
                                            supplierName : "Cotton Inc."
                                            updatedAt : "2023-10-31T06:35:17.453Z"
                                        */}
										<td className="w-40">{item.supplierName}</td>
										<td className="w-40">{item.mobileNo}</td>
										<td className="w-40">{item.email || "-"}</td>
										<td className="w-40"> {item.progress ? "Active" : "-"}</td>
										<td className="w-40 py-2">
											<Link to={`${item.supplierId}`}>
												<Button
													className="block"
													rounded={"md"}
													color={"white"}
													bgColor={"gray.700"}
													size="sm"
													_hover={{
														bg: "black",
														color: "blue-50",
													}}
												>
													View
												</Button>
											</Link>
										</td>
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
		</div>
	);
};

export default Suppliers;
