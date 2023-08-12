// import React from "react";
import PropTypes from "prop-types";

const ReturnRecord = ({
    OrderId,
    ItemCount,
    OrderedDate,
    ReturnedDate,
    Reason,
}) => {

    return (
        <>
            <div className=" flex flex-row justify-between w-full">
                <div className=" text-sm font-medium text-black">{OrderId}</div>
                <div className=" text-sm font-medium text-black">{ItemCount}</div>
                <div className=" text-sm font-medium text-black">{OrderedDate}</div>
                <div className=" text-sm font-medium text-black">{ReturnedDate}</div>
                <div className=" text-sm font-medium text-black">{Reason}</div>
                <div className="relative mb-3" data-te-input-wrapper-init>
                    <textarea className="peer block w-30 h-12 border border-solid border-zinc-600 rounded bg-transparent "
                        id="exampleFormControlTextarea1"
                        placeholder="Your message"
                        rows="3"></textarea>
                </div>
                <div className=" text-sm font-medium text-gray-500">
                    <button>Mark</button>
                </div>
            </div>
            <div className=" w-full border border-b-zinc-600"></div>
        </>
    );
};

ReturnRecord.propTypes = {
    OrderId: PropTypes.string.isRequired,
    ItemCount: PropTypes.number.isRequired,
    OrderedDate: PropTypes.object.isRequired,
    ReturnedDate: PropTypes.object.isRequired,
    Reason: PropTypes.number.isRequired,
};

export default ReturnRecord;