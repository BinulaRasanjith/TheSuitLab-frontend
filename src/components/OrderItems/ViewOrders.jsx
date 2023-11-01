import { useEffect, useState } from "react";

import { getPurchaseOrders } from "../../api/purchaseOrdersAPI";
import DropDownFilter from "../Assistant/Controls/HeaderDropDown";
import SearchBox from "../Assistant/Controls/HeaderSearchBox";
import Pagination from "../Assistant/Controls/Pagination";
import OrderRecord from "./OrderRecord";

const ViewOrders = () => {
	const [records, setRecords] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [sortByDate, setSortByDate] = useState("relevant");
	const [sortedOrderData, setSortedByDate] = useState([]);

	useEffect(() => {
		const getRecords = async () => {
			try {
				const recordsFromServer = await getPurchaseOrders();
				setRecords(recordsFromServer.data);
				console.log(recordsFromServer.data);
			} catch (err) {
				console.log(err);
			}
		};

		getRecords();
	}, []);

	useEffect(() => {
		const sortedData = [...records].sort((a, b) => {
			if (sortByDate === "recent") {
				return new Date(b.orderedDate) - new Date(a.orderedDate);
			} else if (sortByDate === "older") {
				return new Date(a.orderedDate) - new Date(b.orderedDate);
			}
			return 0;
		});
		setSortedByDate(sortedData);
		console.log(sortedData);
	}, [records, sortByDate]);



	const filteredOrders = sortedOrderData.filter((order) => {

		const orderIdMatch = order.orderId && order.orderId.toString().toLowerCase().includes(searchInput.toString().toLowerCase());
		const customerNameMatch = order.customerName && order.customerName.toString().toLowerCase().includes(searchInput.toString().toLowerCase());
		const itemCountMatch = order.quantity && order.quantity.toString().toLowerCase().includes(searchInput.toString().toLowerCase());
		const amountMatch = order.totalAmount && order.totalAmount.toString().toLowerCase().includes(searchInput.toString().toLowerCase());
		const orderedDateMatch = order.orderedDate && order.orderedDate.toString().toLowerCase().includes(searchInput.toString().toLowerCase());
		//const statusMatch = order.status && order.status === (searchInput.toLowerCase() === "active");

		return orderIdMatch || customerNameMatch || itemCountMatch || amountMatch || orderedDateMatch;
	});

	return (

		<div className=" flex flex-col justify-between mx-10 my-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg overflow-hidden w-5/6">
			<div className=" flex justify-between align-middle pb-5">
				<div className="flex flex-col">
					<div className=" text-2xl font-semibold">All Orders</div>
					{/* <div className=" text-sm font-regular text-blue-400">
						Recent orders
					</div> */}
				</div>
				<div className=" flex gap-4 overflow-x-hidden">
					<div>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg aria-hidden="true" className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
								</svg>
							</div>
							<input
								className="block p-2.5 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 border-2 border-gray-300 " id="default-search" placeholder="Search" required type="search"
								value={searchInput}
								onChange={(e) => setSearchInput(e.target.value)}
							/>
						</div>
					</div>
					<div className="ml-32 flex w-52 ">
						<span className=" flex w-full items-center">Sort By Date</span>
						<select
							id="Sort"
							className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
							onChange={(e) => setSortByDate(e.target.value)}
							value={sortByDate}
						>
							<option value="">Relevant</option>
							<option value="recent">Recent</option>
							<option value="older">Older</option>
						</select>
					</div>
				</div>
			</div>
			<div className=" flex flex-col">
				<table className=" flex flex-col justify-between text-sm font-medium text-gray-500">
					<thead className=" uppercase bg-gray-100 py-4">
						<tr>
							<th className=" w-40 ml-4">Order Id</th>
							<th className=" w-40">Customer</th>
							<th className=" w-40">Item Count</th>
							<th className=" w-40">Total Amount</th>
							<th className=" w-40">Ordered Date</th>
							<th className=" w-40">Status</th>
							<th className="w-40 pl-2">Option</th>
						</tr>
					</thead>
					<tbody>
						<div className="flex flex-col gap-1">
							{filteredOrders.map((item, index) => (
								<OrderRecord
									OrderId={item.orderId}
									CustomerId={item.customerName}
									ItemCount={item.quantity}
									Amount={item.totalAmount}
									OrderedDate={item.orderedDate.split("T")[0]}
									Status={item.status}
									key={index}

								/>
							))}
						</div>
					</tbody>
				</table>
			</div>
			{/* <div className=" flex justify-between">
				<div className=" py-3 text-sm font-medium text-neutral-400">
					Showing data 1 to 8 of 256K entries
				</div>
				<div className=" py-3">
					<Pagination />
				</div>
			</div> */}
		</div>

	);
};

export default ViewOrders;
