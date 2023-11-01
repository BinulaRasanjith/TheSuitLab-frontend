import { Button } from "@chakra-ui/react"
import { useState } from "react"
import { AiFillPlusCircle } from "react-icons/ai"

import ReturnFixConfForm from "../../components/Assistant/Confirmations/ReturnFixConfForm";
import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";
import NewReturnForm from "../../components/Assistant/Forms/NewReturnForm";


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
				setFilteredReturns(response.data.returns);
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
				<div>
					<table className="">
						<thead className=" text-left text-sm font-medium border-b-2 border-gray-200 text-gray-400 w-full">
							<tr className="py-4">
								<th className="py-3 w-72">
									Order
								</th>
								<th className="py-3 w-72 text-center">
									Return item Count
								</th>
								<th className="py-3 w-60 text-center">
									Ordered Date
								</th>
								<th className="py-3 w-60 text-center">
									Return Date
								</th>
								<th className="py-3 w-60 text-center">
									Reason for returning
								</th>
							</tr>
						</thead>
						<tbody className=" text-left text-md font-medium text-gray-400 w-full">
							{returns.length <= 0 ?
								<tr>
									<td className='text-center text-black font-bold text-3xl' width={100} height={320} colSpan="6">No data</td>
								</tr>
								:
								returns.slice(startIndex, endIndex).map((item, index) => ( // SLICE CUSTOMERS ARRAY TO DISPLAY ONLY 6 RECORDS PER PAGE
								// returns.map((item, index) => (
									<tr key={index} className="items-center text-centers border-b-2 hover:bg-gray-100 text-black whitespace-nowrap font-medium w-full">
										<td className="hidden">{item.referenceNo}</td>
										<td className="py-4 w-72">{item.referenceNo}</td>
										<td className="py-4 w-60 text-center">{item.itemCount}</td>
										<td className="py-4 w-60 text-center">{new Date(item.orderedDate).toLocaleDateString()}</td>
										<td className="py-4 w-60 text-center">{new Date(item.returnedDate).toLocaleDateString()}</td>
										<td className="py-4 w-60 text-center">{item.reason}</td>
									</tr>
								))}
						</tbody>
					</table>
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
