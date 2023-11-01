import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { AiFillPlusCircle } from "react-icons/ai"

import { getReturns } from "../../api/returnAPI"
import ReturnFixConfForm from "../../components/Assistant/Confirmations/ReturnFixConfForm";
import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";
import NewReturnForm from "../../components/Assistant/Forms/NewReturnForm";
import ReturnRecord from "../../components/Assistant/ReturnRecord";
// import Returnset from "../../components/Assistant/ReturnedItemSet";


const Returns = () => {
	const [isNewReturnForm, addNewReturn] = useState(false);
    const [filteredReturns, setFilteredReturns] = useState([]);

	const [currentPage, setCurrentPage] = useState(1);
	const recordsPerPage = 5;

	const startIndex = (currentPage - 1) * recordsPerPage;
	const endIndex = startIndex + recordsPerPage;

	const [returns, setReturns] = useState([]);

	useEffect(() => {
		const fetchReturns = async () => {
			try {
				const response = await getReturns();
				setReturns(response.data.returns);
			} catch (error) {
				console.error(error);
			}
		};

		fetchReturns();
	}, []);

	const handleFormClose = () => {
		addNewReturn(false);
	};

	const handleFormOpen = () => {
		addNewReturn(true);
	};

	const handleSearch = (searchText) => {
        const filtered = returns.filter((order) => {
            const refNo = order.referenceNo;
            return refNo.toLowerCase().includes(searchText.toLowerCase());
        });

        setFilteredReturns(filtered);
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
							<SearchBox onSearch={handleSearch} />
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
					{/* <Returnset /> */}
					<div className="flex flex-col gap-6">
						{filteredReturns.length <= 0 ?
							<div>
								<div className='text-center text-black font-bold text-xl' width={100} height={320} colSpan="6">No data</div>
							</div>
							:
							filteredReturns.slice(startIndex, endIndex).map((item, index) => ( // SLICE CUSTOMERS ARRAY TO DISPLAY ONLY 6 RECORDS PER PAGE
							// records.map((item, index) => (
								<ReturnRecord
									key={index}
									OrderId={item.referenceNo}
									ItemCount={item.itemCount}
									OrderedDate={new Date(item.orderedDate).toLocaleDateString()}
									ReturnedDate={new Date(item.returnedDate).toLocaleDateString()}
									Reason={item.reason}
								/>
							))}
					</div>
				</div>
				<div className=" flex justify-between">
					<div className=" py-3 text-sm font-medium text-neutral-400">
						Showing data {startIndex + 1} to {endIndex} of {filteredReturns.length} entries {/* TODO: CHANGE THIS TO WORKING WITH 0 */}
					</div>
					<div className=" py-3">
						<Pagination
							currentPage={currentPage}
							totalPages={Math.ceil(returns.length / recordsPerPage)}
							onPageChange={(newPage) => setCurrentPage(newPage)}
						/>
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
