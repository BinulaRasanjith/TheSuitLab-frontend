import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

// import CustomerData from "./CustomerRecord";

const RentalRecord = () => {
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

    return (
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
                <tr key={index} className="flex items-center text-center border hover:bg-gray-300 text-black whitespace-nowrap font-medium py-3">
                    <td className="w-40"> <Link to={`${item.id}`}>{item.id}</Link></td>
                    <td className="w-40">{item.name}</td>
                    <td className="w-40">{item.phoneNumber}</td>
                    <td className="w-40">{item.orderCount}</td>
                    <td className="w-40"> {item.status}</td>
                </tr>
            ))}
        </tbody>
    );
};

RentalRecord.propTypes = {
    CustomerId: PropTypes.string.isRequired,
    SuitId: PropTypes.number.isRequired,
    CustomerMobile: PropTypes.object.isRequired,
    BorrowedDate: PropTypes.object.isRequired,
    HandoverDate: PropTypes.number.isRequired,
};

export default RentalRecord;