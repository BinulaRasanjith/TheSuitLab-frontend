import PropTypes from "prop-types";
// import React from "react";


const RecentOrderRecord = ({ cname, ctype, quantity, creation }) => {
    return (
        <div className=" flex flex-row justify-between w-full">
            <div className="text-4xl">{cname}</div>
            <div className=" flex w-36">
                    <div className=" text-xs font-semibold text-black">{ctype == 'all' ? 'Full Suit' : ctype == 'jacket' ? 'Jacket' : 'Pant' }</div>
            </div>
            <div className=" flex justify-center">
                <div className=" flex flex-col justify-center ">
                    <div className=" text-sm font-medium w-16 leading-6 rounded-3xl text-center  bg-green-200 text-green-600">{quantity}</div>
                </div>
            </div>

            <div className=" flex justify-end w-28">
                    <div className=" text-sm font-semibold text-black">{creation}</div>
            </div>
        </div>
    );
};

RecentOrderRecord.propTypes = {
    cname: PropTypes.string.isRequired,
    ctype: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    creation: PropTypes.object.isRequired,
};

export default RecentOrderRecord;