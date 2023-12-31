import { Button } from '@chakra-ui/react'
import PropTypes from "prop-types";


const RentalRecord = ({
    CustomerId,
    SuitId,
    CustomerMobile,
    BorrowedDate,
    HandoverDate,
    onOpen,
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
                            bg: 'gray',
                            textColor: 'white'
                        }}
                        bg={'black'}
                        border={'1px'}
                        height={'2rem'}
                        onClick={onOpen}
                        textColor={'white'}
                        width={'5.5rem'}>Mark</Button>
                </div>
            </div>
            <div className=" w-full border border-b-zinc-300"></div>
        </>
    );
};

RentalRecord.propTypes = {
    CustomerId: PropTypes.string.isRequired,
    SuitId: PropTypes.string.isRequired,
    CustomerMobile: PropTypes.string.isRequired,
    BorrowedDate: PropTypes.object.isRequired,
    HandoverDate: PropTypes.object.isRequired,
    onOpen: PropTypes.func.isRequired,
};

export default RentalRecord;