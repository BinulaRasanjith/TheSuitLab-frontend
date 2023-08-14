import { Button } from "@chakra-ui/react"
import { AiFillPlusCircle } from 'react-icons/ai'
import { useNavigate } from "react-router"
import { BiSearch } from 'react-icons/bi'

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
        status: 'Active',
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
        status: 'Active',
    },
    {
        name: 'Jacob Janes',
        phoneNumber: '+94 983343210',
        email: 'jane@gmail.com',
        lastOrder: '2023-07-07',
        status: 'Active',
    }

];


const Suppliers = () => {

    const navigate = useNavigate()
    const handleAddSupplierClick = () => {
        navigate('/manager/add-supplier')
    }

    return (

        <div className="w-full p-5">
            <div className="shadow-xl rounded-2xl mx-2 mt-8">
                <div className="flex flex-row  m-4 items-center justify-between">
                    <div>
                        <span className=' text-xl font-bold text-black p-1'>All Suppliers</span>
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

                        <select id="Sort" className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                            <option selected>Sort By</option>
                            <option value="US">All</option>
                            <option value="CA">ASC</option>
                            <option value="FR">DSC</option>
                        </select>


                        <Button
                            _hover={
                                {
                                    bgColor: 'blue.500',
                                }
                            }
                            color={'white'}
                            bgColor={"black"}
                            leftIcon={<AiFillPlusCircle />}
                            ml={3}
                            onClick={(handleAddSupplierClick)}
                            rounded={'full'}

                        >
                            Add Supplier
                        </Button>
                    </div>
                </div>

                <div className="m-4">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-100 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Supplier Name
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
                                        <a
                                            href="#"
                                            className="px-4 py-2 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >

    )
}

export default Suppliers