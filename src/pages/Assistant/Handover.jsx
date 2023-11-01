import { Button } from "@chakra-ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getHandovers } from "../../api/handoverAPI";
import ReturnFixConfForm from "../../components/Assistant/Confirmations/ReturnFixConfForm";
import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";
import NewHandoverForm from "../../components/Assistant/Forms/HandoverDamagesForm";

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

	useEffect(() => {
		const fetchHandovers = async () => {
			try {
				const response = await getHandovers();
				setHandovers(response.data);
				setFilteredHandovers(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchHandovers();
	}, []);

	const handleFormOpen = (cus_id, suit_id) => {
		setSelectedHire({ customer: cus_id, suit: suit_id });
		updateHandover(true);
	};

	const handleFormClose = () => {
		setSelectedHire({ customer: null, suit: null });
		updateHandover(false);
	};

	const handleSearch = (searchText) => {
		const filtered = handovers.filter((order) => {
			const matName = order.materialName;
			return matName.toLowerCase().includes(searchText.toLowerCase());
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
							<SearchBox onSearch={handleSearch} type={"material name"} />
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
									Customer Name
								</th>
								<th className="py-3 w-72 text-center">
									Suit Id
								</th>
								<th className="py-3 w-72 text-center">
									Phone Number
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
							{handovers.length === 0 ? <tr> No data to display </tr> :
								handovers.slice(startIndex, endIndex).map((item, index) => (
									<tr key={index} className="items-center text-centers border-b-2 hover:bg-gray-300 text-black whitespace-nowrap font-medium w-full">
										<td className="py-4 w-72 hidden"> <Link to={`${item.rentalId}`}>{item.rentalId}</Link></td>
										<td className="py-4 w-72">{item.Customer.User.firstName} {item.Customer.User.lastName}</td>
										<td className="py-4 w-72 text-center text-sm">{item.costume}</td>
										<td className="py-4 w-60 text-center">{item.mobileNo}</td>
										<td className="py-4 w-60 text-center">{item.rentedDate && item.rentedDate.split('T')[0]}</td>
										<td className="py-4 w-60 text-center">{item.willHandover && item.willHandover.split('T')[0]}</td>
										<td className="py-4 w-60 text-center">
											<Button
												_hover={{
													bg: '#6B9DCA',
													textColor: 'white'
												}}
												bg={'#BEE7FF80'}
												border={'1px'}
												borderColor={'#6B9DCA'}
												height={'2rem'}
												onClick={handleFormOpen}
												textColor={'#6B9DCA'}
												width={'5.5rem'}>
												Update
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
                                totalPages={Math.ceil(handovers.length / recordsPerPage)}
                                onPageChange={(newPage) => setCurrentPage(newPage)}
                            />
                        </div>
				</div>
			</div>

			<div className={`relative  ${isHandoverUpdate ? "hidden" : "hidden"}`}>
				<NewHandoverForm />
			</div>
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