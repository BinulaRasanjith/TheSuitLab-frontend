// import React from "react";
import PropTypes from "prop-types";

const RentalRecord = ({
    CustomerId,
    SuitId,
    CustomerMonile,
    BorrowedDate,
    HandoverDate,
}) => {
    return (
        <>
            <div className=" flex flex-row justify-between w-full">
                <div className=" text-sm font-medium text-black">{CustomerId}</div>
                <div className=" text-sm font-medium text-black">{SuitId}</div>
                <div className=" text-sm font-medium text-black">{CustomerMonile}</div>
                <div className=" text-sm font-medium text-black">{BorrowedDate}</div>
                <div className=" text-sm font-medium text-black">{HandoverDate}</div>
                <div className=" text-sm font-medium text-gray-500">
                    <button>Mark</button>
                </div>
            </div>
            <div className=" w-full border border-b-zinc-600"></div>
        </>
    );
};

RentalRecord.propTypes = {
    CustomerId: PropTypes.string.isRequired,
    SuitId: PropTypes.number.isRequired,
    CustomerMonile: PropTypes.object.isRequired,
    BorrowedDate: PropTypes.object.isRequired,
    HandoverDate: PropTypes.number.isRequired,
};

export default RentalRecord;