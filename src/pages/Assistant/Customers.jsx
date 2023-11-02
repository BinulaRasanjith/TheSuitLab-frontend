import { Button } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { AiFillPlusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';

import { getCustomers } from "../../api/customerAPI";
// import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown"
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox"
import Pagination from "../../components/Assistant/Controls/Pagination"
import NewCustomerForm from "../../components/Assistant/Forms/NewCustomerForm"
import NewCustomerOTPForm from "../../components/Assistant/Forms/NewCustomerOTP"

const ViewCustomers = () => {

    const [customers, setReturns] = useState([]);
    const [filteredCustomers, setFilteredReturns] = useState([]);

    useEffect(() => {
        const fetchReturns = async () => {
            try {
                const response = await getCustomers();
                setReturns(response.data.customers);
                setFilteredReturns(response.data.customers)
            } catch (error) {
                console.error(error);
            }
        };

        fetchReturns();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;

    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;

    const [isNewCustomerForm, addNewCustomer] = useState(false);

    const handleFormClose = () => {
        addNewCustomer(false); // SET isNewReturnForm TO FALSE TO CLOSE THE FORM
    };

    const handleFormOpen = () => {
        addNewCustomer(true); // SET isNewReturnForm TO FALSE TO CLOSE THE FORM
    };

    const handleSearch = (searchText) => {
        const filtered = customers.filter((order) => {
            const cusName = order.firstName + " " + order.lastName;
            return cusName.toLowerCase().includes(searchText.toLowerCase());
        });

        setFilteredReturns(filtered);
    };

    return (
        <div>
            <div>
                <div className=" flex flex-col justify-between mx-10 my-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
                    <div className=" flex justify-between align-middle pb-5">
                        <div className="flex flex-col">
                            <div className=" text-2xl font-semibold">Customers list</div>
                            <div className=" text-sm font-regular text-gray-400">
                                Customer details
                            </div>
                        </div>
                        <div className=" flex gap-4 align-middle">
                            <div>
                                <SearchBox onSearch={handleSearch} type={"customer name"} />
                            </div>
                            {/* <div>
                                <DropDownFilter />
                            </div> */}
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
                                    Add new
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <table className="">
                            <thead className=" text-left text-sm font-medium border-b-2 border-gray-200 text-gray-400 w-full">
                                <tr className="py-4">
                                    <th className="py-3 w-72">
                                        Customer Id
                                    </th>
                                    <th className="py-3 w-72">
                                        Customer Name
                                    </th>
                                    <th className="py-3 w-60 text-center">
                                        Phone Number
                                    </th>
                                    <th className="py-3 w-60 text-center">
                                        Email
                                    </th>
                                    <th className="py-3 w-60 text-center">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=" text-left text-md font-medium text-gray-400 w-full">
                                {filteredCustomers.length === 0 ? <tr> No data to display </tr> :
                                filteredCustomers.slice(startIndex, endIndex).map((item, index) => (
                                    <tr key={index} className="items-center text-centers border-b-2 hover:bg-gray-300 text-black whitespace-nowrap font-medium w-full">
                                        <td className="py-4 w-72"> <Link to={`${item.userId}`}>{item.userId}</Link></td>
                                        <td className="py-4 w-72">{item.firstName} {item.lastName}</td>
                                        <td className="py-4 w-60 text-center">{item.mobileNo}</td>
                                        <td className="py-4 w-60 text-center">{item.email ? item.email : "-"}</td>
                                        <td className={`py-4 w-60 text-center font-bold ${item.progress ? 'text-green-600' : 'text-red-600'}`}>{item.progress ? "In Progress" : "Blocked"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className=" flex justify-between">
                        <div className=" py-3 text-sm font-medium text-neutral-400">
                            Showing data {startIndex + 1} to {endIndex} of {filteredCustomers.length} entries
                        </div>
                        <div className=" py-3">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={Math.ceil(customers.length / recordsPerPage)}
                            onPageChange={(newPage) => setCurrentPage(newPage)}
                        />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`relative  ${isNewCustomerForm ? "block" : "hidden"}`}>
                <NewCustomerForm isOpen={isNewCustomerForm} onClose={handleFormClose} />
            </div>

            <div className={`relative  ${isNewCustomerForm ? "block" : "hidden"}`}>
                <NewCustomerOTPForm isOpen={isNewCustomerForm} onClose={handleFormClose} />
            </div>
        </div>
    )
}

export default ViewCustomers