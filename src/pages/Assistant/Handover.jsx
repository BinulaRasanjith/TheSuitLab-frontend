import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

// import NewHandoverForm from "../../components/Assistant/Forms/HandoverDamagesForm";
import { getHandovers } from "../../api/handoverAPI";
import ReturnFixConfForm from "../../components/Assistant/Confirmations/ReturnFixConfForm";
import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";


const records = [
	{
		cus_id: "CS974953556",
		suit_id: "S00322",
		cus_mobile: "+94765765000",
		rented: "2023-08-10",
		handover: "2023-08-14",
	},
	{
		cus_id: "CS974357256",
		suit_id: "S00330",
		cus_mobile: "+94765760985",
		rented: "2023-08-06",
		handover: "2023-08-10",
	},
	{
		cus_id: "CS979814556",
		suit_id: "S00390",
		cus_mobile: "+94765761010",
		rented: "2023-08-06",
		handover: "2023-08-11",
	},
	{
		cus_id: "CS991562856",
		suit_id: "S00310",
		cus_mobile: "+94765769842",
		rented: "2023-08-06",
		handover: "2023-08-09",
	},
	{
		cus_id: "CS974953556",
		suit_id: "S00322",
		cus_mobile: "+94765765000",
		rented: "2023-08-10",
		handover: "2023-08-14",
	},
	{
		cus_id: "CS974357256",
		suit_id: "S00330",
		cus_mobile: "+94765760985",
		rented: "2023-08-06",
		handover: "2023-08-10",
	},
	{
		cus_id: "CS979814556",
		suit_id: "S00390",
		cus_mobile: "+94765761010",
		rented: "2023-08-06",
		handover: "2023-08-11",
	},
	{
		cus_id: "CS991562856",
		suit_id: "S00310",
		cus_mobile: "+94765769842",
		rented: "2023-08-06",
		handover: "2023-08-09",
	},
];

const Handover = () => {

	const [handovers, setHandovers] = useState([]);
	const [filteredHandovers, setFilteredHandovers] = useState([]);

	const [isHandoverUpdate, updateHandover] = useState(false);
	const [selectedHire, setSelectedHire] = useState({
		customer: "",
		suit: "",
	});

	const [currentPage, setCurrentPage] = useState(1);
	const recordsPerPage = 4;

	const startIndex = (currentPage - 1) * recordsPerPage;
	const endIndex = startIndex + recordsPerPage;

	const handleFormOpen = (cus_id, suit_id) => {
		setSelectedHire({ customer: cus_id, suit: suit_id });
		updateHandover(true);
	};

	const handleFormClose = () => {
		setSelectedHire({ customer: null, suit: null });
		updateHandover(false);
	};

	useEffect(() => {
		const fetchHandovers = async () => {
			try {
				const response = await getHandovers();
				setHandovers(response.data.customers);
				setFilteredHandovers(response.data.customers);
			} catch (error) {
				console.error(error);
			}
		};

		fetchHandovers();
	}, []);

	const handleSearch = (searchText) => {
		const filtered = records.filter((order) => {
			const mobile = order.cus_mobile;
			return mobile.toLowerCase().includes(searchText.toLowerCase());
		});

		setFilteredHandovers(filtered);
	};

	return (
		<div>
			<div className=" flex flex-col justify-between mx-10 my-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
				<div className=" flex justify-between align-middle pb-5">
					<div className="flex flex-col">
						<div className=" text-2xl font-semibold">Suits to be received </div>
						<div className=" text-sm font-regular text-gray-400">
							Rental details
						</div>
					</div>
					<div className=" flex gap-4 align-middle">
						<div>
							<SearchBox onSearch={handleSearch} />
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
									Customer
								</th>
								<th className="py-3 w-72 text-center">
									Suit
								</th>
								<th className="py-3 w-60 text-center">
									Mobile
								</th>
								<th className="py-3 w-60 text-center">
									Borrowed Date
								</th>
								<th className="py-3 w-60 text-center">
									To be handovered
								</th>
								<th className="py-3 w-60 text-center">
									Mark Damages
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
										<td className="hidden">{item.rentalId}</td>
										<td className="py-4 w-72">{item.customerId}</td>
										<td className="py-4 w-60 text-center">{item.costume}</td>
										<td className="py-4 w-60 text-center">{item.mobileNo}</td>
										<td className="py-4 w-60 text-center">{new Date(item.rentedDate).toLocaleDateString()}</td>
										<td className="py-4 w-60 text-center">{new Date(item.willHandover).toLocaleDateString()}</td>
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
						Showing data {startIndex + 1} to {endIndex} of {filteredHandovers.length} entries
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

			{/* <div className={`relative  ${isHandoverUpdate ? "hidden" : "hidden"}`}>
				<NewHandoverForm />
			</div> */}
			<div className={`relative  ${isHandoverUpdate ? "block" : "hidden"}`}>
				<ReturnFixConfForm
					isOpen={isHandoverUpdate}
					onClose={handleFormClose}
					cus_id={selectedHire.customer}
					suit_id={selectedHire.suit}
				/>
			</div>
		</div>
	);
};

export default Handover;