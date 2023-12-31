import { Button } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { getTailorsPurchaseOrders } from '../../api/purchaseOrdersAPI';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/authSlice';

// import OrderRecord from "../../components/OrderItems/OrderRecord";
// import { OPERATION_ASSISTANT, PRODUCT_MANAGER, TAILOR } from "../../constants";
// import { selectUser } from "../../store/slices/authSlice"
// const orders = [
//     {
//         orderId: 1,
//         custname: "Nimal Fonseka",
//         itemCount: 5,
//         status: "completed",
//         orderedDate: '2023-10-22',
//         requiredDate: '2023-11-22',
//     },
//     {
//         orderId: 2,
//         custname: "Siril Piyadasa",
//         itemCount: 2,
//         status: "Pending",
//         orderedDate: '2023-10-22',
//         requiredDate: '2023-11-22',
//     },
//     {
//         orderId: 3,
//         custname: "Anne Perera",
//         itemCount: 3,
//         status: "Processing",
//         orderedDate: '2023-10-22',
//         requiredDate: '2023-11-22',
//     },
//     {
//         orderId: 4,
//         custname: "James Peiris",
//         itemCount: 8,
//         status: "Completed",
//         orderedDate: '2023-09-10',
//         requiredDate: '2023-10-22',
//     },
//     {
//         orderId: 5,
//         custname: "Rakisa Jayaweera",
//         itemCount: 1,
//         status: "Pending",
//         orderedDate: '2023-10-12',
//         requiredDate: '2023-11-28',
//     },
// ];

const AssignedOrders = () => {
    const user = useSelector(selectUser)

    const [orders, setOrders] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [sortByDate, setSortByDate] = useState("relevant");

    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/tailor");
    };
    const [sortedOrderData, setSortedByDate] = useState([]);

    useEffect(() => {
        const sortedData = [...orders].sort((a, b) => {
            if (sortByDate === "recent") {
                return new Date(b.orderedDate) - new Date(a.orderedDate);
            } else if (sortByDate === "older") {
                return new Date(a.orderedDate) - new Date(b.orderedDate);
            }
            return 0;
        });
        setSortedByDate(sortedData);
    }, [sortByDate]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await getTailorsPurchaseOrders(user.id);
                console.log(res.data);
                setOrders(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchOrders();
    }, [])

    const filteredOrder = sortedOrderData.filter((order) => {

        const orderIdMatch = order.orderId && order.orderId.toString().includes(searchInput.toLowerCase());
        const custnameMatch = order.custname && order.custname.toString().toLowerCase().includes(searchInput.toLowerCase());
        const quantityMatch = order.itemCount && order.itemCount.toString().toLowerCase().includes(searchInput.toLowerCase());
        const statusMatch = order.status && order.status.toString().toLowerCase().includes(searchInput.toLowerCase());
        const orderedDateMatch = order.orderedDate && order.orderedDate.toString().toLowerCase().includes(searchInput.toLowerCase());
        const requiredDateMatch = order.requiredDate && order.requiredDate.toString().toLowerCase().includes(searchInput.toLowerCase());

        return orderIdMatch || custnameMatch || quantityMatch || statusMatch || orderedDateMatch || requiredDateMatch;
    });

    return (
        <>
            <div className="flex flex-row w-full ">
                <div className="flex-auto">
                    <div className='flex flex-col  '>
                        <div className='flex-col mt-3 shadow-lg sm:rounded-lg'>
                            <div className='flex flex-col m-8'>
                                <div className="flex flex-row items-center gap-10 w-full">
                                    <button
                                        onClick={handleBack}
                                        className="flex items-center gap-2 text-primary"
                                    >
                                        <IoArrowBackCircle className="text-3xl cursor-pointer" />
                                    </button>
                                    <h1 className=' text-3xl font-semibold justify-start'>Assigned Orders</h1>
                                    <div className=" ml-32 flex">
                                        <label className="sr-only">Search</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                id="table-search"
                                                className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-3xl w-60 focus:border-gray-400"
                                                placeholder="Search"
                                                value={searchInput}
                                                onChange={(e) => setSearchInput(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-32 flex w-52 ">
                                        <span className=" flex w-full items-center">Sort By Date</span>
                                        <select
                                            id="Sort"
                                            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                            onChange={(e) => setSortByDate(e.target.value)}
                                            value={sortByDate}
                                        >
                                            <option value="">Relevant</option>
                                            <option value="recent">Recent</option>
                                            <option value="older">Older</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className=" flex flex-col justify-between mx-10 my-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
                                <div className=" flex flex-col">
                                    <table className=' flex flex-col justify-between text-sm font-medium text-gray-500'>
                                        <thead className=" uppercase bg-gray-100 py-4 ">
                                            <tr>
                                                <th className=" w-40">
                                                    Order Id
                                                </th>

                                                <th className=" w-40">
                                                    Item Count
                                                </th>
                                                <th className=" w-40">
                                                    Ordered Date
                                                </th>
                                                <th className=" w-40">
                                                    Required Date
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
                                                {orders.map((item, index) => (
                                                    <tr key={index} className="flex items-center text-center border hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                                        <td className="w-40"> <Link to={`${item.orderId}`}>{item.orderId}</Link></td>
                                                        <td className="w-40">{item.quantity}</td>
                                                        <td className="w-40">{item.orderedDate.split("T")[0]}</td>
                                                        <td className="w-40">
                                                            {item.requiredDate ? item.requiredDate : "Pending"}
                                                        </td>
                                                        <td className="w-40"> {item.status}</td>
                                                        <td className="w-40 py-2">

                                                            <Link to={`${item.orderId}`}>
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
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </div>
                                        </tbody>
                                    </table>
                                    <div className=" w-full border h-0 mt-3 mb-6 border-gray-200"></div>

                                </div>
                                {/* <div><Records /></div> */}
                                <div className=" flex justify-between">
                                    {/* <div className=" py-3 text-sm font-medium text-neutral-400">Showing data 1 to 8 of 256K entries</div>
                    <div className=" py-3">
                        <Pagination />
                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AssignedOrders;