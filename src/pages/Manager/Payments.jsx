import { Button } from "@chakra-ui/react"
import { AiFillPlusCircle } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'


const payments = [
    {
        supplierId: '#00732',
        quantity: '+91 9876543210',
        orderId: '001',
        orderDate: '2023-04-27',
        amount: '30000',
        status: 'Pay',

    },
    {
        supplierId: '#00774',
        quantity: ' +91 3376443210',
        orderId: '002',
        orderDate: '2023-03-17',
        amount: '40000',
        status: 'Pay',
    },
    {
        supplierId: '#00922',
        quantity: '+91 9876543210',
        orderId: '003',
        orderDate: '2023-07-07',
        amount: '50000',
        status: 'Paid',
    },
    {
        supplierId: '#00737',
        quantity: '+91 987654256',
        orderId: '004',
        orderDate: '2023-06-27',
        amount: '20000',
        status: 'Pay',
    },
    {
        supplierId: '#00790',
        quantity: '+94 9876577210',
        orderId: '006',
        orderDate: '2023-05-11',
        amount: '90000',
        status: 'Paid',
    },
    {
        supplierId: '#00705',
        quantity: '+94 983343210',
        orderId: '007',
        orderDate: '2023-07-07',
        amount: '60000',
        status: 'Pay',
    }

];


const Payments = () => {

    return (

        <div className="h-full flex flex-row m-4">

            <div className='shadow-xl rounded-2xl p-2'>

                <div className="flex flex-row m-4 items-center">
                    <span className=' text-xl font-bold text-black p-1'>Supplier Payments</span>

                    <div className=" ml-96">
                        <label className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <BiSearch />
                            </div>
                            <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-3xl w-52
                                 focus:border-gray-400 " placeholder="Search" />
                        </div>
                    </div>

                    <div className=" ml-10">
                        <select id="Sort" className="block p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                            <option selected>Sort By</option>
                            <option value="US">All</option>
                            <option value="CA">ASC</option>
                            <option value="FR">DSC</option>
                        </select>
                    </div>


                </div>

                <div className="m-4 mt-9">

                    <table className="w-full text-sm text-left text-gray-400 rounded-3xl">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Supplier Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Order Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Order Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Amount
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => (
                                <tr
                                    key={index}
                                    className=" border hover:bg-gray-300 text-black whitespace-nowrap font-medium"
                                >
                                    <td className="px-6 py-4">{payment.supplierId}</td>
                                    <td className="px-6 py-4">{payment.quantity}</td>
                                    <td className="px-6 py-4 ">{payment.orderId}</td>
                                    <td className="px-6 py-4">{payment.orderDate}</td>
                                    <td className="px-6 py-4">{formatCurrency(payment.amount)}</td>
                                    <td className="px-6 py-4">
                                        {payment.status === "Pay" ? (
                                            <a
                                                href="#"
                                                className="px-3.5 py-2 text-white no-underline bg-green-600 rounded hover:bg-blue-400 hover:text-white"
                                            >
                                                Pay Now
                                            </a>
                                        ) : (
                                            <button
                                                className="px-7 py-1.5 text-white bg-red-500 rounded cursor-not-allowed"
                                                disabled
                                            >
                                                Paid
                                            </button>
                                        )}
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

function formatCurrency(amount) {
    return `Rs.${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`
}
export default Payments