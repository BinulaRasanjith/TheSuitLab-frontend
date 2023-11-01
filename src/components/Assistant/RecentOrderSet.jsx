/* eslint-disable perfectionist/sort-jsx-props */
/* eslint-disable perfectionist/sort-imports */
/* eslint-disable react/jsx-max-depth */
import RecentOrderRecord from "./RecentOrderRecord"
import PropTypes from 'prop-types'

const RecentOrders = ({ orderData }) => {


    return (
        <div className="flex flex-col gap-6">
            {orderData && orderData.map((item, index) => (
                <RecentOrderRecord
                    key={index}
                    cname={item.costumeName}
                    ctype={item.costumeType}
                    quantity={item.quantity}
                    creation={item.createdAt}
                />
            ))}
        </div>
    );
};


RecentOrders.propTypes = {
    orderData: PropTypes.arrayOf(PropTypes.shape({
        costumeName: PropTypes.string.isRequired,
        costumeType: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        createdAt: PropTypes.object.isRequired,
    })).isRequired,
};


export default RecentOrders;