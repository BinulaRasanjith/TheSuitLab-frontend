import { Button } from '@chakra-ui/react'
import { useState } from "react"
import { AiFillPlusCircle } from 'react-icons/ai'
// import Customers from "../../components/Assistant/CustomersView"
import { Link } from 'react-router-dom';

import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown"
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox"
import Pagination from "../../components/Assistant/Controls/Pagination"
import NewCustomerForm from "../../components/Assistant/Forms/NewCustomerForm"
import NewCustomerOTPForm from "../../components/Assistant/Forms/NewCustomerOTP"

const ViewCustomers = () => {
    const customers = [
        {
            id: "1",
            name: 'Jane Cooper',
            phoneNumber: '+91 9876543210',
            orderCount: '3',
            lastOrder: '2023-07-07',
            status: 'Active',
        },
        {
            id: "2",
            name: 'Floyd Miles',
            phoneNumber: ' +91 3376443210',
            orderCount: '1',
            lastOrder: '2023-03-17',
            status: 'Active',
        },
        {
            id: "3",
            name: 'Jane Cooper',
            phoneNumber: '+91 9876543210',
            orderCount: '2',
            lastOrder: '2023-07-07',
            status: 'Inactive',
        },
        {
            id: "4",
            name: 'Ronald Richards',
            phoneNumber: '+91 987654256',
            orderCount: '5',
            lastOrder: '2023-06-27',
            status: 'Active',
        },
        {
            id: "5",
            name: 'Marvin Mackiney',
            phoneNumber: '+94 9876577210',
            orderCount: '1',
            lastOrder: '2023-05-11',
            status: 'Inactive',
        },
        {
            id: "6",
            name: 'Jacob Janes',
            phoneNumber: '+94 983343210',
            orderCount: '2',
            lastOrder: '2023-07-07',
            status: 'Active',
        }
    ];
    const [isNewCustomerForm, addNewCustomer] = useState(false);

    const handleFormClose = () => {
        addNewCustomer(false); // Set isNewReturnForm to false to close the form
    };

    const handleFormOpen = () => {
        addNewCustomer(true); // Set isNewReturnForm to false to close the form
    };

    return (
        <div>
            <div>
                {/* <Customers /> */}
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
                                    Add new
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <table className=''>
                            <thead className=" text-left text-md font-medium text-gray-400 py-4 w-full">
                                <tr>
                                    <th className=" w-40">
                                        Customer Id
                                    </th>
                                    <th className=" w-40">
                                        Customer Name
                                    </th>
                                    <th className=" w-40">
                                        Phone Number
                                    </th>
                                    <th className=" w-40">
                                        Order Count
                                    </th>
                                    <th className=" w-40">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=" text-left text-md font-medium text-gray-400 py-4 w-full">
                                {customers.map((item, index) => (
                                    // <CustomerData
                                    //     key={index}
                                    //     CustomerId={item.id}
                                    //     CustomerName={item.name}
                                    //     CustomerMobile={item.phoneNumber}
                                    //     OrderCount={item.orderCount}
                                    //     Status={item.status}
                                    // />
                                    <tr key={index} className="flex items-center text-center border hover:bg-gray-300 text-black whitespace-nowrap font-medium py-3 w-full">
                                        <td className="w-40"> <Link to={`${item.id}`}>{item.id}</Link></td>
                                        <td className="w-40">{item.name}</td>
                                        <td className="w-40">{item.phoneNumber}</td>
                                        <td className="w-40">{item.orderCount}</td>
                                        <td className="w-40"> {item.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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