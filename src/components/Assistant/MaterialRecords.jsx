// import React from "react";
import { Button } from '@chakra-ui/react'
import PropTypes from "prop-types";


const MaterialRecord = ({
    CustomerId,
    SuitId,
    CustomerMobile,
    BorrowedDate,
    HandoverDate,
}) => {
    return (
        <>
            <div className=" flex flex-row justify-between w-full">
                <div className=" w-40 text-sm font-medium text-black">{CustomerId}</div>
                <div className=" w-32 text-sm font-medium text-black">{SuitId}</div>
                <div className=" w-32 text-sm font-medium text-black">{CustomerMobile}</div>
                <div className=" w-32 text-sm font-medium text-black">{BorrowedDate}</div>
                <div className=" w-32 text-sm font-medium text-black">{HandoverDate}</div>
                <div className=" w-40 px-7 text-sm font-medium text-gray-500">
                    <Button
                        _hover={{
                            bg: '#6B9DCA',
                            textColor: 'white'
                        }}
                        bg={'#BEE7FF80'}
                        border={'1px'}
                        borderColor={'#6B9DCA'}
                        height={'2rem'}
                        // onClick={handleLoginClick}
                        textColor={'#6B9DCA'}
                        width={'5.5rem'}>Update</Button>
                </div>
            </div>
            <div className=" w-full border border-b-zinc-200"></div>
        </>
    );
};

MaterialRecord.propTypes = {
    CustomerId: PropTypes.string.isRequired,
    SuitId: PropTypes.number.isRequired,
    CustomerMobile: PropTypes.object.isRequired,
    BorrowedDate: PropTypes.object.isRequired,
    HandoverDate: PropTypes.number.isRequired,
};

export default MaterialRecord;