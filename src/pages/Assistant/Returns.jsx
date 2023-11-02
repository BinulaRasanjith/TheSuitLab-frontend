import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { AiFillPlusCircle } from "react-icons/ai"

import { getReturns } from '../../api/returnAPI'
import ReturnFixConfForm from "../../components/Assistant/Confirmations/ReturnFixConfForm";
import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";
import NewReturnForm from "../../components/Assistant/Forms/NewReturnForm";
import Returnset from "../../components/Assistant/ReturnedItemSet";

const Returns = () => {

	const [isNewReturnForm, addNewReturn] = useState(false);
    const [returns, setReturns] = useState([]);
    const [filteredReturns, setFilteredReturns] = useState([]);

	
	const handleFormClose = () => {
		addNewReturn(false);
	};

	const handleFormOpen = () => {
		addNewReturn(true);
	};

	useEffect(() => {
        const fetchReturns = async () => {
            try {
                const response = await getReturns();
                setReturns(response.data);
                setFilteredReturns(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchReturns();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;

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
					<table className="">
                        <thead className=" text-left text-sm font-medium border-b-2 border-gray-200 text-gray-400 w-full">
                            <tr className="py-4">
                                <th className="py-3 w-72">
                                    Material
                                </th>
                                <th className="py-3 w-72">
                                    Material Name
                                </th>
                                <th className="py-3 w-72">
                                    Color
                                </th>
                                <th className="py-3 w-60">
                                    Unit Price
                                </th>
                                <th className="py-3 w-60">
                                    Current Stock
                                </th>
                                <th className="py-3 w-60">
                                    Stock Update
                                </th>
                            </tr>
                        </thead>
                        <tbody className=" text-left text-md font-medium text-gray-400 w-full">
                            {filteredReturns.length === 0 ? <tr> No data to display </tr> :
                                filteredReturns.slice(startIndex, endIndex).map((item, index) => (
                                    <tr key={index} className="items-center text-centers border-b-2 text-black whitespace-nowrap font-medium w-full">
                                        <td className="py-4 w-72 hidden"> <Link to={`${item.materialCode}`}>{item.materialCode}</Link></td>
                                        <td className="py-4 w-72"><img className="rounded" width={64} src={`${MATERIAL_IMAGES_URL}/${item.image}`} alt="Material Image" /></td>
                                        <td className="py-4 w-72">{item.materialName}</td>
                                        <td className="py-4 w-60">{item.color}</td>
                                        <td className="py-4 w-60">Rs. {item.unitPrice.toFixed(2)}</td>
                                        <td className="py-4 w-60">{item.quantity}</td>
                                        <td className="py-4 w-60">
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
				<div className=" flex my-4 justify-center">
					{/* <Button colorScheme='gray' onClick={() => addNewReturn(!isNewReturnForm)} size='md'>New Inquery</Button> */}
				</div>
				<div className=" flex justify-between">
					<div className=" py-3 text-sm font-medium text-neutral-400">
					Showing data {startIndex + 1} to {endIndex} of {filteredReturns.length} entries
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
