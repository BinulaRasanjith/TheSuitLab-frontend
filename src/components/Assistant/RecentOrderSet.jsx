import { useEffect, useState } from "react"

import { recentOrders } from "../../api/assistantAPI"



const RecentOrders = () => {

    const [recentorders, setRecentOrders] = useState([]);

    useEffect(() => {
        const fetchRecentOrders = async () => {
            try {
                const response = await recentOrders();
                console.log(response.data);
                setRecentOrders(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecentOrders();
    }, []);


    return (
        <div className="flex flex-col gap-6">
            <table className="">
                <thead className=" text-left text-sm font-medium border-b-2 border-gray-200 text-gray-400 w-full">
                    <tr className="py-4">
                        <th className="py-3 w-72">
                            Customer
                        </th>
                        <th className="py-3 w-72 text-center">
                            No.of items
                        </th>
                        <th className="py-3 w-72 text-center">
                            Total
                        </th>
                        <th className="py-3 w-60 text-center">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody className=" text-left text-md font-medium text-gray-400 w-full">
                    {recentorders.length === 0 ? <tr> No data to display </tr> :
                        recentorders.map((item, index) => (
                            <tr key={index} className="items-center text-centers border-b-2  text-black whitespace-nowrap text-sm w-full">
                                <td className="py-4 w-72">{item.Customer.User.firstName}<br/>{item.Customer.User.lastName}</td>
                                <td className="py-4 w-72 text-center text-sm">{item.quantity}</td>
                                <td className="py-4 w-60 text-center">{item.totalAmount.toFixed(2)}</td>
                                <td className={`py-4 w-60 text-center ${item.status === 'COLLECTED' ? 'text-green-600' : item.status === 'PLACED' ? 'text-orange-600' : ''}`}>{item.status}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};


export default RecentOrders;