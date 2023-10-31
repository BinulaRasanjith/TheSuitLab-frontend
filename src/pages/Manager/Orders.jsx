import { Button } from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";
import Records from "../../components/OrderItems/ViewOrders";

const Orders = () => {
	return (
		<div>
			{/* <div className=" flex flex-col justify-between mx-10 my-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
                <div className=" flex justify-between align-middle pb-5">
                    <div className='flex flex-col'>
                        <div className=' text-2xl font-semibold'>All orders</div>
                        <div className=' text-sm font-regular text-blue-400'>Recent orders</div>
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
                    <table className=' flex justify-between text-sm font-medium text-gray-500'>
                        <thead className=" uppercase bg-gray-100 py-4 w-full">
                            <tr>
                                <th className=" w-40">
                                    Order Id
                                </th>
                                <th className=" w-40">
                                    Customer
                                </th>
                                <th className=" w-40">
                                    Item Count
                                </th>
                                <th className=" w-40">
                                    Total Amount
                                </th>
                                <th className=" w-40">
                                    Status
                                </th>
                                <th className="w-40 px-10">
                                    Option
                                </th>

                            </tr>
                        </thead>
                    </table>
                    <div className=" w-full border h-0 mt-3 mb-6 border-gray-200"></div>

                </div>
                <div><Records /></div>
                <div className=" flex justify-between">
                    <div className=" py-3 text-sm font-medium text-neutral-400">Showing data 1 to 8 of 256K entries</div>
                    <div className=" py-3">
                        <Pagination />
                    </div>
                </div>
            </div> */}
			<Records />
		</div>
	);
};

export default Orders;
