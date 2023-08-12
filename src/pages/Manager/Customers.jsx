import { Button } from "@chakra-ui/react"
import { AiFillPlusCircle } from 'react-icons/ai'

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


const ViewCustomers = () => {

    return (

        <div className="flex flex-row">
            <div className="flex-auto">

                <div className='flex flex-col '>
                    <div className='flex-col mt-4  ml-8 shadow-lg sm:rounded-lg'>
                        <div className='flex flex-col m-6 sm:rounded-full'>

                            <div className="flex items-center justify-between ml-4">
                                <span className=' text-xl font-bold text-black p-1'>All Customers</span>

                                <div className=" ml-96">
                                    <label className="sr-only">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-4 h-4  dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-3xl w-60
                                         focus:border-gray-400 " placeholder="Search" />
                                    </div>
                                </div>
                                <div className=" flex">
                                    <div className=" ml-5 flex-col">
                                        {/* <label for="Sort" className="text-sm font-medium text-gray-900 ">Small select</label> */}
                                        <select id="Sort" className="block p-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                                            <option selected>Sort By</option>
                                            <option value="US">All</option>
                                            <option value="CA">ASC</option>
                                            <option value="FR">DSC</option>
                                        </select>
                                    </div>
                                </div>
                                <Button
                                   
                                    leftIcon={<AiFillPlusCircle />}
                                    m={3}
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

                            <div className=" min-h-screen bg-white m-5">

                                <div className="relative overflow-x-hidden shadow-md">
                                    <table className="w-full text-sm text-left text-gray-400 rounded-3xl">
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
                                                    className="bg-white border rounded-3xl hover:bg-gray-300 text-black whitespace-nowrap font-medium"
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
                    </div>
                </div>
            </div>

        </div >


    )
}

export default ViewCustomers