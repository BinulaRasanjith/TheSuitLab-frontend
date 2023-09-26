import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";
import Handovers from "../../components/Assistant/HandoveredItemSet";

const Handover = () => {
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
					<Handovers />
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

			{/* <div className=" flex justify-center w-full">
                <div className=" flex flex-col justify-center h-screen">
                    <div className=" text-4xl font-semibold text-zinc-400">This handover page is under development :(</div>
                </div>
            </div> */}
		</div>
	);
};

export default Handover;
