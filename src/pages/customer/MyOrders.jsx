import { HiShoppingBag } from 'react-icons/hi'
import DropDownFilter from "../../components/Assistant/HeaderDropDown"
import SearchBox from "../../components/Assistant/HeaderSearchBox"
import { Link, useNavigate } from "react-router-dom";


const MyOrders = () => {
    const orders = [
        {
            orderId: "Order001",
            productName: "New suit 1",
            style: "Italic Minimal Design",
            
            size: "Small",
            color: "Light Blue",
            status: "Processing",
            quantity: 1,
            price: 3000,
        },
        {
            orderId: "Order002",
            productName: "New suit 2",
            style: "Italic Minimal Design",
            size: "Small",
            color: "Light Blue",
            status: "Collected",
            quantity: 1,
            price: 4600,
        },
        {
            orderId: "Order002",
            productName: "New suit 2",
            style: "Italic Minimal Design",
            size: "Small",
            color: "Light Blue",
            status: "Collected",
            quantity: 1,
            price: 4600,
        },
    ];

    const navigate=useNavigate();
    const handleNavigate=(id)=>{
        navigate(`/customer/my-orders/${id}`)
    }

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
                            <DropDownFilter />
                        </div>
                    </div>
                    <div className=" flex items-center gap-4 align-middle">
                    </div>
                </div>
                <div className="flex flex-col w-3/4 justify-center p-4 mb-4 ">

                    {orders.map((order, index) => (
                        
                            <Link to={`/customer/my-orders/${order.orderId}`} key={index} className='flex flex-col p-4 ml-3 cursor-pointer bg-slate-400 w-full h-full rounded-md mt-4'>
                                <div className="flex flex-col md:flex-row justify-start items-start h-full md:items-center md:space-x-6 xl:space-x-8 w-full">
                                    <div className="items-center ">
                                        <img className="w-full block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                                    </div>
                                    <div className="md:flex-row flex-col flex w-full">
                                        <div className="w-full flex flex-col space-y-2">
                                            <h3 className="text-xl md:text-md font-semibold text-gray-800">OrderId: {order.orderId}</h3>
                                            <div className="flex justify-start items-start flex-col">
                                                <h3 className="text-xl md:text-md font-semibold text-gray-800">{order.productName}</h3>
                                                <div className="text-sm text-gray-800">
                                                    <span>Style: </span> {order.style}<br />
                                                    <span>Size: </span> {order.size} <br />
                                                    <span>Color: </span> {order.color} <br />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            <p className="text-base xl:text-lg">{order.status}</p>
                                            <p className="text-base xl:text-lg text-gray-800">{order.quantity}</p>
                                            <p className="text-base xl:text-lg font-semibold text-gray-800">${order.price.toFixed(2)}</p>
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
