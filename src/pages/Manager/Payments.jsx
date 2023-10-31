import { Button } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";

const payments = [
	{
		supplierId: "#00732",
		contactNo: "+91 9876543210",
		orderId: "001",
		orderDate: "2023-04-27",
		amount: "30000",
		status: "Pay",
	},
	{
		supplierId: "#00774",
		contactNo: " +91 3376443210",
		orderId: "002",
		orderDate: "2023-03-17",
		amount: "40000",
		status: "Pay",
	},
	{
		supplierId: "#00922",
		contactNo: "+91 9876543210",
		orderId: "003",
		orderDate: "2023-07-07",
		amount: "50000",
		status: "Paid",
	},
	{
		supplierId: "#00737",
		contactNo: "+91 987654256",
		orderId: "004",
		orderDate: "2023-06-27",
		amount: "20000",
		status: "Pay",
	},
	{
		supplierId: "#00790",
		contactNo: "+94 9876577210",
		orderId: "006",
		orderDate: "2023-05-11",
		amount: "90000",
		status: "Paid",
	},
	{
		supplierId: "#00705",
		contactNo: "+94 983343210",
		orderId: "007",
		orderDate: "2023-07-07",
		amount: "60000",
		status: "Pay",
	},
];

const Payments = () => {
	return (
		<div>
			<div className=" flex flex-col justify-between mx-10 my-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
				<div className=" flex justify-between align-middle pb-5">
					<div className="flex flex-col">
						<div className=" text-2xl font-semibold">Payments</div>
					</div>
					<div className=" flex gap-4 align-middle">
						<div>
							<SearchBox />
						</div>
						<div>
							<DropDownFilter />
						</div>
					</div>
				</div>
				<div className=" flex flex-col">
					<table className=" flex flex-col justify-between text-sm font-medium text-gray-500">
						<thead className=" uppercase bg-gray-100 py-4 w-full">
							<tr>
								<th className=" w-40">Order Id</th>
								<th className=" w-40">Contact No</th>
								<th className=" w-40">Order Date</th>
								<th className="w-40 px-10">Amount</th>
								<th className=" w-40">Status</th>
							</tr>
						</thead>
						<tbody>
							<div className="flex flex-col gap-1">
								{payments.map((item, index) => (
									<tr
										key={index}
										className="flex items-center text-center border hover:bg-gray-300 text-black whitespace-nowrap font-medium"
									>
										<td className="w-40">{item.orderId}</td>
										<td className="w-40">{item.contactNo}</td>
										<td className="w-40">{item.orderDate}</td>
										<td className="w-40">{formatCurrency(item.amount)}</td>
										<td className="w-40 py-2">
											{item.status === "Pay" ? (
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
													Pay Now
												</Button>
											) : (
												<Button
													className="block w-20"
													cursor={"not-allowed"}
													disabled="true"
													rounded={"md"}
													color={"white"}
													bgColor={"green"}
													_hover={{
														bg: "green",
														color: "blue-50",
													}}
													size="sm"
												>
													Paid
												</Button>
											)}
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

		// <div className="w-full p-5">
		// 	<div className="shadow-xl rounded-2xl mx-2 mt-8">
		// 		<div className="flex flex-row m-4 justify-between">
		// 			<div>
		// 				<span className=" text-xl font-bold text-black p-1">
		// 					Supplier Payments
		// 				</span>
		// 			</div>

		// 			<div className="flex items-center gap-4">
		// 				<label className="sr-only">Search</label>
		// 				<div className="relative">
		// 					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
		// 						<BiSearch />
		// 					</div>
		// 					<input
		// 						type="text"
		// 						id="table-search"
		// 						className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-3xl w-52
		//                          focus:border-gray-400 "
		// 						placeholder="Search"
		// 					/>
		// 				</div>

		// 				<select
		// 					id="Sort"
		// 					className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
		// 				>
		// 					<option selected>Sort By</option>
		// 					<option value="US">All</option>
		// 					<option value="CA">ASC</option>
		// 					<option value="FR">DSC</option>
		// 				</select>
		// 			</div>
		// 		</div>

		// 		<div className="m-4">
		// 			<table className="w-full text-sm text-left text-gray-400 rounded-3xl">
		// 				<thead className="text-xs text-gray-500 uppercase bg-gray-100">
		// 					<tr>
		// 						<th scope="col" className="px-6 py-3">
		// 							Supplier Id
		// 						</th>
		// 						<th scope="col" className="px-6 py-3">
		// 							contactNo
		// 						</th>
		// 						<th scope="col" className="px-6 py-3">
		// 							Order Id
		// 						</th>
		// 						<th scope="col" className="px-6 py-3">
		// 							Order Date
		// 						</th>
		// 						<th scope="col" className="px-6 py-3">
		// 							Amount
		// 						</th>
		// 						<th scope="col" className="px-6 py-3">
		// 							Status
		// 						</th>
		// 					</tr>
		// 				</thead>
		// 				<tbody>
		// 					{payments.map((payment, index) => (
		// 						<tr
		// 							key={index}
		// 							className=" border hover:bg-gray-300 text-black whitespace-nowrap font-medium"
		// 						>
		// 							<td className="px-6 py-4">{payment.supplierId}</td>
		// 							<td className="px-6 py-4">{payment.quantity}</td>
		// 							<td className="px-6 py-4 ">{payment.orderId}</td>
		// 							<td className="px-6 py-4">{payment.orderDate}</td>
		// 							<td className="px-6 py-4">
		// 								{formatCurrency(payment.amount)}
		// 							</td>
		// 							<td className="px-6 py-4">
		// 								{payment.status === "Pay" ? (
		// 									<a
		// 										href="#"
		// 										className="px-3.5 py-2 text-white no-underline bg-green-600 rounded hover:bg-blue-400 hover:text-white"
		// 									>
		// 										Pay Now
		// 									</a>
		// 								) : (
		// 									<button
		// 										className="px-7 py-1.5 text-white bg-red-500 rounded cursor-not-allowed"
		// 										disabled
		// 									>
		// 										Paid
		// 									</button>
		// 								)}
		// 							</td>
		// 						</tr>
		// 					))}
		// 				</tbody>
		// 			</table>
		// 		</div>
		// 	</div>
		// </div>
	);
};

function formatCurrency(amount) {
	return `Rs.${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
}
export default Payments;
