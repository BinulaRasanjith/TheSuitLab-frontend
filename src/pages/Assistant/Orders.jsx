import { Button } from '@chakra-ui/react'
import { useEffect, useState } from "react";

import OrderConfForm from "../../components/Assistant/Confirmations/OrderConfForm";
import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";

const records = [
	{
		order_id: "PO007324786345",
		item_count: 1,
		mobile: "(225) 555-0118",
		customer: "Malin Perera",
		ordered_date: "2023-02-07",
		status: "Collected",
	},
	{
		order_id: "PO007908322342",
		item_count: 2,
		mobile: "(208) 555-0112",
		customer: "Janaka Ishan",
		ordered_date: "2023-02-22",
		status: "Collected",
	},
	{
		order_id: "PO007373652783",
		item_count: 1,
		mobile: "(302) 321-0107",
		customer: "Chameera Dilshan",
		ordered_date: "2023-02-12",
		status: "Collected",
	},
	{
		order_id: "PO007765876554",
		item_count: 3,
		mobile: "(252) 533-0120",
		customer: "Kalana Perera",
		ordered_date: "2023-02-07",
		status: "Collected",
	},
	{
		order_id: "PO007324786345",
		item_count: 1,
		mobile: "(225) 555-0118",
		customer: "Malin Perera",
		ordered_date: "2023-02-07",
		status: "Collected",
	},
	{
		order_id: "PO007908322342",
		item_count: 2,
		mobile: "(208) 555-0112",
		customer: "Janaka Ishan",
		ordered_date: "2023-02-22",
		status: "Collected",
	},
	{
		order_id: "PO007373652783",
		item_count: 1,
		mobile: "(302) 321-0107",
		customer: "Chameera Dilshan",
		ordered_date: "2023-02-12",
		status: "Collected",
	},
	{
		order_id: "PO007765876554",
		item_count: 3,
		mobile: "(252) 533-0120",
		customer: "Kalana Perera",
		ordered_date: "2023-02-07",
		status: "Collected",
	},
	{
		order_id: "PO007324786345",
		item_count: 1,
		mobile: "(225) 555-0118",
		customer: "Malin Perera",
		ordered_date: "2023-02-07",
		status: "Collected",
	},
	{
		order_id: "PO007908322342",
		item_count: 2,
		mobile: "(208) 555-0112",
		customer: "Janaka Ishan",
		ordered_date: "2023-02-22",
		status: "Collected",
	},
	{
		order_id: "PO007373652783",
		item_count: 1,
		mobile: "(302) 321-0107",
		customer: "Chameera Dilshan",
		ordered_date: "2023-02-12",
		status: "Collected",
	},
	{
		order_id: "PO007765876554",
		item_count: 3,
		mobile: "(252) 533-0120",
		customer: "Kalana Perera",
		ordered_date: "2023-02-07",
		status: "Collected",
	},
];

const Orders = () => {
    const [isOrderUpdate, updateOrder] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

	const [orders, setOrders] = useState([]);
	const [filteredOrders, setFilteredOrders] = useState([]);

	const [currentPage, setCurrentPage] = useState(1);
	const recordsPerPage = 5;

	const startIndex = (currentPage - 1) * recordsPerPage;
	const endIndex = startIndex + recordsPerPage;

	const handleFormOpen = (orderId) => {
		setSelectedOrder(orderId);
		updateOrder(true);
	};

	const handleFormClose = () => {
		setSelectedOrder(null);
		updateOrder(false);
	};

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await getPurchaseOrders();
				setOrders(response.data);
				setFilteredOrders(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchOrders();
	}, []);

	const handleSearch = (searchText) => {
		const filtered = records.filter((order) => {
			const OrderId = order.order_id;
			return OrderId.toLowerCase().includes(searchText.toLowerCase());
		});

		setFilteredOrders(filtered);
	};
	return (
		<div>
			<div className=" flex flex-col justify-between mx-10 my-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
				<div className=" flex justify-between align-middle pb-5">
					<div className="flex flex-col">
						<div className=" text-2xl font-semibold">All Orders</div>
						<div className=" text-sm font-regular text-gray-400">
							Recent Orders
						</div>
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
				<div>
					<table className="">
						<thead className=" text-left text-sm font-medium border-b-2 border-gray-200 text-gray-400 w-full">
							<tr className="py-4">
								<th className="py-3 w-72">
									Order
								</th>
								<th className="py-3 w-72 text-center">
									No. of items
								</th>
								<th className="py-3 w-60 text-center">
									Ordered Date
								</th>
								<th className="py-3 w-60 text-center">
									Total Amount
								</th>
								<th className="py-3 w-60 text-center">
									Customer
								</th>
								<th className="py-3 w-60 text-center">
									Order Status
								</th>
							</tr>
						</thead>
						<tbody className=" text-left text-md font-medium text-gray-400 w-full">
							{records.length <= 0 ?
								<tr>
									<td className='text-center text-black font-bold text-3xl' width={100} height={320} colSpan="6">No data</td>
								</tr>
								:
								records.slice(startIndex, endIndex).map((item, index) => ( // SLICE CUSTOMERS ARRAY TO DISPLAY ONLY 6 RECORDS PER PAGE
									// returns.map((item, index) => (
									<tr key={index} className="items-center text-centers border-b-2 hover:bg-gray-100 text-black whitespace-nowrap font-medium w-full">
										<td className="py-4 w-72">{item.orderId}</td>
										<td className="py-4 w-72">{item.quantity}</td>
										<td className="py-4 w-60 text-center">{new Date(item.orderedDate).toLocaleDateString()}</td>
										<td className="py-4 w-60 text-center">{item.totalAmount}</td>
										<td className="py-4 w-60 text-center">{item.customer}</td>
										<td className="py-4 w-60 text-center">
											<Button
												_hover={{
													bg: 'gray',
													textColor: 'white'
												}}
												bg={'black'}
												border={'1px'}
												height={'2rem'}
												// onClick={onOpen}
												textColor={'white'}
												width={'7rem'}>{item.status}
											</Button>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
				<div className=" flex justify-between">
					<div className=" py-3 text-sm font-medium text-neutral-400">
						Showing data 1 to 4 of 4 entries
					</div>
					<div className=" py-3">
						<Pagination />
					</div>
				</div>
			</div>

			<div className={`relative  ${isOrderUpdate ? "block" : "hidden"}`}>
				<OrderConfForm 
                    isOpen={isOrderUpdate}
                    onClose={handleFormClose}
                    orderId={selectedOrder} 
					/>
			</div>
		</div>
	);
};

export default Orders;
