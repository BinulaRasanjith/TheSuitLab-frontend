import PropTypes from "prop-types";


const RecentOrderRecord = ({ Image, ItemName, Attributes, Payment, Price }) => {
    return (
        <div className=" flex flex-row justify-between w-full">
            <div className=" ">{Image}</div>
            <div className=" flex w-36">
                <div className=" flex flex-col justify-center">
                    <div className=" text-xs font-semibold text-black">{ItemName}</div>
                    <div className=" text-xs font-regular text-gray-500">{Attributes}</div>
                </div>
            </div>
            <div className=" flex justify-center">
                <div className=" flex flex-col justify-center ">
                    <div className=" text-sm font-medium w-16 leading-6 rounded-3xl text-center  bg-green-200 text-green-600">{Payment}</div>
                </div>
            </div>

            <div className=" flex justify-end w-28">
                <div className=" flex flex-col justify-center">
                    <div className=" text-sm font-semibold text-black">Rs. {Price}</div>
                </div>
            </div>
        </div>
    );
};

RecentOrderRecord.propTypes = {
    Image: PropTypes.string.isRequired,
    ItemName: PropTypes.number.isRequired,
    Attributes: PropTypes.object.isRequired,
    Payment: PropTypes.object.isRequired,
    Price: PropTypes.number.isRequired,
};

export default RecentOrderRecord;