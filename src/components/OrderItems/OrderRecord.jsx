import { Button } from '@chakra-ui/react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const OrderRecord = ({
    OrderId,
    CustomerId,
    ItemCount,
    Amount,
    OrderedDate,
    Status,
    key,
}) => {
    return (
        <>

            <tr className="flex items-center text-center border hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                <td className="w-40"> <Link to={`${OrderId}`}>{OrderId}</Link></td>
                <td className="w-40 pl-4">{CustomerId}</td>
                <td className="w-40">{ItemCount}</td>
                <td className="w-40">{Amount}</td>
                <td className="w-40">{OrderedDate}</td>
                <td className="w-40"> {Status}</td>
                <td className="w-40 py-2">

                    <Link to={`${OrderId}`}>
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

        </>
    );
};

OrderRecord.propTypes = {
    CustomerId: PropTypes.string.isRequired,
    OrderId: PropTypes.string.isRequired,
    ItemCount: PropTypes.number.isRequired,
    Amount: PropTypes.number.isRequired,
    Status: PropTypes.string.isRequired,
};

export default OrderRecord;