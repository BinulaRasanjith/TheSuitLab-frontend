import { HiShoppingBag } from 'react-icons/hi2'
import { Link, useNavigate } from "react-router-dom";

import suite1 from "../../assets/images/rentsuits/black paisley suit/1.webp"
import suite2 from "../../assets/images/rentsuits/caremal suit/1.webp"
import suite3 from "../../assets/images/rentsuits/maroon suit/2.webp"
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";

const MyOrders = () => {
    const orders = [
        {
            orderId: "001",
            productName: "New suit 1",
            style: "Italic Minimal Design",
            size: "Small",
            color: "black",
            status: "Processing",
            quantity: 1,
            price: 8000,
            image: suite1,
        },
        {
            orderId: "002",
            productName: "New suit 2",
            style: "Italic Minimal Design",
            size: "Small",
            color: "Light caramel",
            status: "Collected",
            quantity: 1,
            price: 5600,
            image: suite2,
        },
        {
            orderId: "003",
            productName: "New pant 2",
            style: "Italic Minimal Design",
            size: "large",
            color: "Light maroon",
            status: "Collected",
            quantity: 1,
            price: 4600,
            image: suite3,
        },
    ];

    const navigate = useNavigate();
    // const handleNavigate = (id) => {
    //     navigate(`/customer/my-orders/${id}`)
    // }

    
    return (
        <>
            <div className=" flex flex-col justify-between m-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg items-center flex-wrap shadow-xl w-full ">
                <div className=" flex justify-center items-center w-full">
                    <div className='flex items-center gap-80 mt-4'>

                        <div className='flex gap-3'>
                            <HiShoppingBag style={{ fontSize: "2rem" }} />
                            <div className=' text-2xl font-semibold'>My Orders</div>
                        </div>
                        <div className='flex gap-4'>
                            <SearchBox />
                            {/* <DropDownFilter /> */}
                        </div>
                    </div>
                    <div className=" flex items-center gap-4 align-middle">
                    </div>
                </div>
                <div className="flex flex-col w-3/4 justify-center p-4 mb-4 ">

                    {orders.map((order, index) => (
                        <Link to={`${order.orderId}`} key={index} className='flex flex-col p-4 ml-3 cursor-pointer bg-slate-300 w-full h-full mt-4 rounded-2xl'>
                                        <h3 className="text-lg md:text-md font-semibold text-gray-800">OrderId: {order.orderId}</h3>
                            <div className="flex flex-col md:flex-row justify-start items-start h-full md:items-center md:space-x-6 xl:space-x-8 w-full">
                                <div className="w-32 h-full items-center ">
                                    <img className="object-cover" src={order.image} alt={order.productName} />
                                </div>
                                <div className="md:flex-row flex-col flex w-full">
                                    <div className="w-full flex flex-col space-y-2">
                                        <div className="flex justify-start items-start flex-col">
                                            <h3 className="text-xl md:text-md font-semibold text-gray-800">{order.productName}</h3>
                                            <div className="text-sm text-gray-800">
                                                <span>Style: </span> {order.style}<br />
                                                <span>Size: </span> {order.size} <br />
                                                <span>Color: </span> {order.color} <br />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between items-start w-full">
                                        <span className="text-base xl:text-lg">Order Status: {order.status}</span>
                                        <span className="text-base xl:text-lg font-semibold ">Total Amount: Rs.{order.price.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className=" w-full border h-0 mt-3 mb-6 border-gray-200"></div>
            </div>
        </>
    )
};

export default MyOrders;
