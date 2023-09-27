import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


const CustomerRecord = ({
    CustomerId,
    CustomerName,
    CustomerMobile,
    OrderCount,
    Status,
}) => {

    return (
        <>
            <div className=" flex flex-row justify-between w-full">
                <tr className="flex items-center text-center border hover:bg-gray-300 text-black whitespace-nowrap font-medium py-3">
                    <td className="w-40"> <Link to={`${CustomerId}`}>{CustomerId}</Link></td>
                    <td className="w-40">{CustomerName}</td>
                    <td className="w-40">{CustomerMobile}</td>
                    <td className="w-40">{OrderCount}</td>
                    <td className="w-40"> {Status}</td>
                </tr>
            </div>
        </>
    );
};

CustomerRecord.propTypes = {
    CustomerId: PropTypes.string.isRequired,
    CustomerName: PropTypes.string.isRequired,
    CustomerMobile: PropTypes.string.isRequired,
    OrderCount: PropTypes.number.isRequired,
    Status: PropTypes.string.isRequired,
};

export default CustomerRecord;