import { useState } from "react";

import ReturnFixConfForm from "../../components/Assistant/Confirmations/ReturnFixConfForm";
import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";
// import NewHandoverForm from "../../components/Assistant/Forms/HandoverDamagesForm";
// import Handovers from "../../components/Assistant/HandoveredItemSet";
import RentalRecord from "../../components/Assistant/HandoverRecord";


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
							<SearchBox />
						</div>
						<div>
							<DropDownFilter />
						</div>
					</div>
				</div>
				<div className=" flex flex-col">
					<div className=" flex justify-between text-sm font-medium text-gray-400">
						<div className=" w-40 text-">Customer Id</div>
						<div className=" w-32 text-">Suit Id</div>
						<div className=" w-32 text-">Phone Number</div>
						<div className=" w-32 text-">Borrowed Date</div>
						<div className=" w-32 text-">To be handovered</div>
						<div className=" w-40 px-5">Mark Damages</div>
					</div>
					<div className=" w-full border h-0 mt-3 mb-6 border-gray-300"></div>
				</div>
				<div>
					{/* <Handovers onOpen={handleFormOpen} /> */}
					<div className="flex flex-col gap-6">
						{records.length <= 0 ?
							<div>
								<div className='text-center text-black font-bold text-xl' width={100} height={320} colSpan="6">No data</div>
							</div>
							:
							records.slice(startIndex, endIndex).map((item, index) => ( // SLICE CUSTOMERS ARRAY TO DISPLAY ONLY 6 RECORDS PER PAGE
							// records.map((item, index) => (
								<RentalRecord
									key={index}
									CustomerId={item.cus_id}
									SuitId={item.suit_id}
									CustomerMobile={item.cus_mobile}
									BorrowedDate={item.rented}
									HandoverDate={item.handover}
									onOpen={() => handleFormOpen(item.cus_id, item.suit_id)}
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