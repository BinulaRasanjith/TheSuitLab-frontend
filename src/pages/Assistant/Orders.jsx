import { useState } from "react";

import OrderConfForm from "../../components/Assistant/Confirmations/OrderConfForm";
import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";
import OrderedItems from "../../components/Assistant/OrderedItemSet";

const Orders = () => {
    const [isOrderUpdate, updateOrder] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

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
					<OrderedItems onOpen={handleFormOpen} />
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
