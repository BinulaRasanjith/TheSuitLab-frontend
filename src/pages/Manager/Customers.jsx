import { Button } from "@chakra-ui/react"
import { AiFillPlusCircle } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import ViewCustomers from "../../components/Customer/ViewCustomers"

const customers = [
    {
        name: 'Jane Cooper',
        phoneNumber: '+91 9876543210',
        email: 'jane@gmail.com',
        lastOrder: '2023-07-07',
        status: 'Active',
    },
    {
        name: 'Floyd Miles',
        phoneNumber: ' +91 3376443210',
        email: 'floyd@yahoo.com',
        lastOrder: '2023-03-17',
        status: 'Active',
    },
    {
        name: 'Jane Cooper',
        phoneNumber: '+91 9876543210',
        email: 'jane@gmail.com',
        lastOrder: '2023-07-07',
        status: 'Inactive',
    },
    {
        name: 'Ronald Richards',
        phoneNumber: '+91 987654256',
        email: 'ronald@gmail.com',
        lastOrder: '2023-06-27',
        status: 'Active',
    },
    {
        name: 'Marvin Mackiney',
        phoneNumber: '+94 9876577210',
        email: 'marvin@gmail.com',
        lastOrder: '2023-05-11',
        status: 'Inactive',
    },
    {
        name: 'Jacob Janes',
        phoneNumber: '+94 983343210',
        email: 'jane@gmail.com',
        lastOrder: '2023-07-07',
        status: 'Active',
    }
];


const Customers = () => {

    return (
        <div>
            <ViewCustomers />

        {/* <div className="w-full p-5">
            <div className='shadow-xl rounded-2xl mx-2 mt-8'>

                <div className="flex flex-row m-4 justify-between">
                    <div>
                        <span className=' text-xl font-bold text-black p-1'>All Customers</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <label className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <BiSearch />
                            </div>
                            <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-3xl w-52
                                 focus:border-gray-400 " placeholder="Search" />
                        </div>

                        <select id="Sort" className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                            <option selected>Sort By</option>
                            <option value="US">All</option>
                            <option value="CA">ASC</option>
                            <option value="FR">DSC</option>
                        </select>


                        <Button

                            leftIcon={<AiFillPlusCircle />}
                            ml={3}
                            rounded={'full'}
                            color={'white'}
                            bgColor={"black"}
                            _hover={
                                {
                                    bg: 'blue.500',
                                }
                            }

                        >
                            Add Customer
                        </Button>
                    </div>
                </div>

                <div className="m-4">

                    <div className="relative overflow-x-hidden shadow-md">
                        <table className="w-full text-sm text-left text-gray-400">
                            <thead className="text-xs text-gray-500 uppercase bg-gray-100 rounded-3xl">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Customer Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone Number
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Last Order
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Option
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer, index) => (
                                    <tr
                                        key={index}
                                        className="border hover:bg-gray-300 text-black whitespace-nowrap font-medium"
                                    >
                                        <td className="px-6 py-4">{customer.name}</td>
                                        <td className="px-6 py-4">{customer.phoneNumber}</td>
                                        <td className="px-6 py-4">{customer.email}</td>
                                        <td className="px-6 py-4">{customer.lastOrder}</td>
                                        <td className="px-6 py-4">{customer.status}</td>
                                        <td className="px-6 py-4">
                                            {customer.status === "Active" ? (
                                                <a
                                                    href="#"
                                                    className="px-4 py-2 text-white no-underline bg-green-600 rounded hover:bg-blue-400 hover:text-white"
                                                >
                                                    Active
                                                </a>
                                            ) : (
                                                <button
                                                    className="px-3 py-1.5 text-white bg-red-500 rounded cursor-not-allowed"
                                                    disabled
                                                >
                                                    Inactive
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div > */}

        </div>
    )
}

export default Customers