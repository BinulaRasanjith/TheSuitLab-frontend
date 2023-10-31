import { useState } from "react";

import OrderConfForm from "../../components/Assistant/Confirmations/OrderConfForm";
import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";
import OrderRecord from "../../components/assistant/OrderRecord";
// import OrderedItems from "../../components/Assistant/OrderedItemSet"; {/* USE THIS IF ORDERS ITEMSET USING */}


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
				<div className=" flex flex-col">
					<div className=" flex justify-between text-sm font-medium text-gray-400">
						<div className=" w-40 text-">Order Id</div>
						<div className=" w-32 text-">Item Count</div>
						<div className=" w-32 text-">Phone Number</div>
						<div className=" w-32 text-">Customer</div>
						<div className=" w-32 text-">Ordered Date</div>
						<div className=" w-32 px-5">Status</div>
					</div>
					<div className=" w-full border h-0 mt-3 mb-6 border-gray-200"></div>
				</div>
				<div>
					{/* <OrderedItems onOpen={handleFormOpen} /> */} {/* USE THIS IF ORDERS ITEMSET USING */}
					<div className="flex flex-col gap-6">
						{records.length <= 0 ?
							<div>
								<div className='text-center text-black font-bold text-xl' width={100} height={320} colSpan="6">No data</div>
							</div>
							:
							records.slice(startIndex, endIndex).map((item, index) => (
							// records.map((item, index) => (  {/* USE THIS IF ORDERS ITEMSET USING */}
								<OrderRecord
									key={index}
									OrderId={item.order_id}
									ItemCount={item.item_count}
									MobileNo={item.mobile}
									Customer={item.customer}
									OrderedDate={item.ordered_date}
									Status={item.status}
									onOpen={() => handleFormOpen(item.order_id)}
								/>
							))}
					</div>
				</div>
				<div className=" flex justify-between">
					<div className=" py-3 text-sm font-medium text-neutral-400">
						Showing data {startIndex + 1} to {endIndex} of {records.length} entries
					</div>
					<div className=" py-3">
						<Pagination
							currentPage={currentPage}
							totalPages={Math.ceil(records.length / recordsPerPage)}
							onPageChange={(newPage) => setCurrentPage(newPage)}
						/>
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
