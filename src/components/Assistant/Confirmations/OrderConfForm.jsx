import { useToast } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import PropTypes from "prop-types";

import { updateToCollected } from '../../../api/purchaseOrdersAPI';

const OrderConfForm = ({ isOpen, onClose, id }) => {
    const toast = useToast();
    const handleCollection = async (event) => {
        event.preventDefault();

        try {
            const response = await updateToCollected(id);
            console.log(response.data);
            toast({
                title: "Order has been marked as collected.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            console.error(error);
            toast({
                title: "An error occurred.",
                description: "Unable to mark order as collected.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
        onClose();
    };

    return (
        <div className={`relative  ${isOpen ? "block" : "hidden"}`}>

            <div className="fixed left-0 right-0 bottom-0 top-0 z-40 opacity-30 bg-black"></div>

            <div className="fixed top-16 bottom-0 right-0 left-0 z-40 flex flex-col items-center justify-center">
                <div className=" z-50 m-8 rounded-lg bg-white p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">

                    <form onSubmit={handleCollection}>

                        <div className=' flex flex-col gap-y-5'>
                            <div className=' text-center text-md'>
                                Please confirm if the customer has collected their order.<br />
                                Click &apos;Confirm&apos; if the order has been collected, <br />
                                or &apos;Cancel&apos; if it has not been collected yet.
                            </div>
                            <div className=' flex gap-5 justify-center'>
                                <div className="">
                                    <Button
                                        _hover={{
                                            bg: 'gray',
                                            textColor: 'white',
                                            border: '1px',
                                            borderColor: 'gray'
                                        }}
                                        bg={'white'}
                                        border={'1px'}
                                        height={'2rem'}
                                        onClick={onClose}
                                        textColor={'black'}
                                        shadow={'md'}
                                        // width={'5rem'}>{Status}</Button>
                                        width={'7rem'}>Cancel</Button>
                                </div>
                                <div className="">
                                    <Button
                                        type='submit'
                                        _hover={{
                                            bg: 'gray',
                                            textColor: 'white',
                                            border: '1px',
                                            borderColor: 'gray'
                                        }}
                                        bg={'black'}
                                        border={'1px'}
                                        borderColor={'black'}
                                        height={'2rem'}
                                        textColor={'white'}
                                        shadow={'md'}
                                        width={'7rem'}>Confirm</Button>
                                </div>


                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

OrderConfForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
};

export default OrderConfForm;