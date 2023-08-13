// import React from "react";
import { Button } from '@chakra-ui/react'
import PropTypes from "prop-types";

const OrderRecord = ({
    OrderId,
    ItemCount,
    MobileNo,
    Customer,
    OrderedDate,
    Status,
}) => {

    return (
        <>
            <div className=" flex flex-row justify-between w-full">
                <div className=" w-40 text-sm font-medium text-black">{OrderId}</div>
                <div className=" w-32 text-sm font-medium text-black">{ItemCount}</div>
                <div className=" w-32 text-sm font-medium text-black">{MobileNo}</div>
                <div className=" w-32 text-sm font-medium text-black">{Customer}</div>
                <div className=" w-32 text-sm font-medium text-black">{OrderedDate}</div>

                <div className=" w-32 text-sm font-medium text-gray-500">
                    <Button
                        _hover={{
                            bg: 'gray',
                            textColor: 'white'
                        }}
                        bg={'black'}
                        border={'1px'}
                        height={'2rem'}
                        // onClick={handleLoginClick}
                        textColor={'white'}
                        width={'7rem'}>{Status}</Button>
                </div>
            </div>
            <div className=" w-full border border-gray-200"></div>
        </>
    );
};

OrderRecord.propTypes = {
    OrderId: PropTypes.string.isRequired,
    ItemCount: PropTypes.number.isRequired,
    MobileNo: PropTypes.string.isRequired,
    Customer: PropTypes.string.isRequired,
    OrderedDate: PropTypes.object.isRequired,
    Status: PropTypes.string.isRequired,
};

export default OrderRecord;