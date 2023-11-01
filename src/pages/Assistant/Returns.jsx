import { Button } from "@chakra-ui/react"
import { useState } from "react"
import { AiFillPlusCircle } from "react-icons/ai"

import ReturnFixConfForm from "../../components/Assistant/Confirmations/ReturnFixConfForm";
import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";
import NewReturnForm from "../../components/Assistant/Forms/NewReturnForm";
import Returnset from "../../components/Assistant/ReturnedItemSet";

const Returns = () => {
	const [isNewReturnForm, addNewReturn] = useState(false);

	const handleFormClose = () => {
		addNewReturn(false);
	};

	const handleFormOpen = () => {
		addNewReturn(true);
	};

	return (
		<div className="relative">
			<div className=" flex flex-col justify-between mx-10 my-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
				<div className=" flex justify-between align-middle pb-5">
					<div className="flex flex-col">
						<div className=" text-2xl font-semibold">Returns</div>
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
						<div>
							<Button
								_hover={
									{
										bgColor: 'primary.200',
										color: 'primary.100'
									}
								}
								bgColor={'primary.100'}
								color={'primary.200'}
								leftIcon={<AiFillPlusCircle />}
								rounded={'full'}
								height={'36px'}
								onClick={handleFormOpen}

							>
								New Inquery
							</Button>
						</div>
					</div>
				</div>
				<div className=" flex flex-col">
					<div className=" grid grid-cols-6 text-sm font-medium text-gray-400">
						<div className=" w-48">Order Id</div>
						<div className=" w-36">Return item Count</div>
						<div className=" w-40">Ordered Date</div>
						<div className=" w-40">Return Date</div>
						<div className=" w-36">Reason for returning</div>
					</div>
					<div className=" w-full border h-0 mt-3 mb-6 border-gray-200"></div>
				</div>
				<div>
					<Returnset />
				</div>
				<div className=" flex my-4 justify-center">
					{/* <Button colorScheme='gray' onClick={() => addNewReturn(!isNewReturnForm)} size='md'>New Inquery</Button> */}
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

			<div className={`relative  ${isNewReturnForm ? "block" : "hidden"}`}>
				<NewReturnForm isOpen={isNewReturnForm} onClose={handleFormClose} />
			</div>

			<div className={`relative  hidden`}>
				<ReturnFixConfForm />
			</div>

		</div>
	);
};

export default Returns;
