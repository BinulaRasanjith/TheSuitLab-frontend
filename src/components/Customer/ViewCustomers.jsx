import { Button } from "@chakra-ui/react"
import { AiFillPlusCircle } from 'react-icons/ai'
import { useNavigate } from "react-router"
import { BiSearch } from 'react-icons/bi'
import SearchBox from "../../components/Assistant/HeaderSearchBox"
import DropDownFilter from "../../components/Assistant/HeaderDropDown"
import Pagination from "../../components/Assistant/Pagination"
import { Link } from 'react-router-dom';
import { selectUser } from "../../store/slices/authSlice"
import { useSelector } from "react-redux";
import { OPERATION_ASSISTANT } from "../../constants";
import { MANAger } from "../../constants";

const ViewCustomers = () => {

    const navigate = useNavigate()
    const user = useSelector(selectUser)

    const handleAddCustomerClick = () => {
        navigate('/manager/add-customer')
    }


    const customers = [
        {
            id: "1",
            name: 'Jane Cooper',
            phoneNumber: '+91 9876543210',
            email: 'jane@gmail.com',
            lastOrder: '2023-07-07',
            status: 'Active',
        },
        {
            id: "2",
            name: 'Floyd Miles',
            phoneNumber: ' +91 3376443210',
            email: 'floyd@yahoo.com',
            lastOrder: '2023-03-17',
            status: 'Active',
        },
        {
            id: "3",
            name: 'Jane Cooper',
            phoneNumber: '+91 9876543210',
            email: 'jane@gmail.com',
            lastOrder: '2023-07-07',
            status: 'Inactive',
        },
        {
            id: "4",
            name: 'Ronald Richards',
            phoneNumber: '+91 987654256',
            email: 'ronald@gmail.com',
            lastOrder: '2023-06-27',
            status: 'Active',
        },
        {
            id: "5",
            name: 'Marvin Mackiney',
            phoneNumber: '+94 9876577210',
            email: 'marvin@gmail.com',
            lastOrder: '2023-05-11',
            status: 'Inactive',
        },
        {
            id: "6",
            name: 'Jacob Janes',
            phoneNumber: '+94 983343210',
            email: 'jane@gmail.com',
            lastOrder: '2023-07-07',
            status: 'Active',
        }
    ];

    return (
        <div>
            <div className=" flex flex-col justify-between mx-10 my-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
                <div className=" flex justify-between align-middle pb-5">
                    <div className='flex flex-col'>
                        <div className=' text-2xl font-semibold'>All Customers</div>
                    </div>
                    <div className=" flex gap-4 align-middle">
                        <div>
                            <SearchBox />
                        </div>
                        <div>
                            <DropDownFilter />
                        </div>



                        {user.role === OPERATION_ASSISTANT && <Button
                            _hover={
                                {
                                    bgColor: 'blue.500',
                                }
                            }
                            color={'white'}
                            bgColor={"black"}
                            leftIcon={<AiFillPlusCircle />}
                            ml={3}
                            //onClick={(handleAddSupplierClick)}
                            rounded={'full'}
                        >
                            Add Customer
                        </Button>}


                    </div>
                </div>

                <div className=" flex flex-col">
                    <table className=' flex flex-col justify-between text-sm font-medium text-gray-500'>
                        <thead className=" uppercase bg-gray-100 py-4 w-full">
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
                                    Email
                                </th>
                                <th className=" w-40">
                                    Status
                                </th>
                                <th className="w-40 px-10">
                                    Option
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <div className="flex flex-col gap-1">
                                {customers.map((item, index) => (

                                    <tr className="flex items-center text-center border hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                        <td className="w-40"> <Link to={`${item.id}`}>{item.id}</Link></td>
                                        <td className="w-40">{item.name}</td>
                                        <td className="w-40">{item.phoneNumber}</td>
                                        <td className="w-40">{item.email}</td>
                                        <td className="w-40"> {item.status}</td>
                                        <td className="w-40 py-2">

                                            {<Link to={`${item.id}`}>
                                                <Button
                                                    className="block"
                                                    rounded={"md"}
                                                    color={"white"}
                                                    bgColor={"black"}
                                                    size="sm"
                                                    _hover={{
                                                        bg: "blue",
                                                        color: "blue-50",
                                                    }}
                                                >
                                                    View
                                                </Button>
                                            </Link>}
                                        </td>
                                    </tr>
                                ))}
                            </div>
                        </tbody>

                    </table>
                    <div className=" w-full border h-0 mt-3 mb-6 border-gray-200"></div>

                </div>
                <div className=" flex justify-between">
                    <div className=" py-3 text-sm font-medium text-neutral-400">Showing data 1 to 8 of 256K entries</div>
                    <div className=" py-3">
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ViewCustomers