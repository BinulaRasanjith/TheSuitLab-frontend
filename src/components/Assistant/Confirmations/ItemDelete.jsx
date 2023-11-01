import { Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import PropTypes from "prop-types";
import { MdErrorOutline } from "react-icons/md";

import { removeThisItem } from '../../../api/assistantAPI';

const DeleteConfirmation = ({ isOpen, onClose, id }) => {

    const toast = useToast();

    const handleDeletion = async (event) => {
        event.preventDefault();

        try {
            const response = await removeThisItem(id);
            console.log(response.data); // TODO: REMOVE
            toast({
                title: "Successful!",
                description: "The item has been removed.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            console.error(error);
            toast({
                title: "An error occurred.",
                description: "Unable to remove the item.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
        onClose();
    };

    return (
        <div className={`relative  ${isOpen ? "block" : "hidden"}`}>

            <div className="fixed left-0 right-0 bottom-0 top-0 z-40 opacity-40 bg-black"></div>

            <div className="fixed top-16 bottom-0 right-0 left-0 z-40 flex flex-col items-center justify-center">
                <div className=" z-50 m-8 rounded-lg bg-white p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">

                    <form onSubmit={handleDeletion}>

                        <div className=' flex flex-col gap-y-5'>
                            <div className="flex items-center justify-center text-red-700 gap-x-2">
                                <MdErrorOutline size={48} />
                                <p>
                                    <b>Caution!</b> This will permanently remove this item <br />
                                    from your stock. This action cannot be <b>undone.</b>
                                </p>
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
                                        width={'7rem'}>Cancel</Button>
                                </div>
                                <div className="">
                                    <Button
                                        type='submit'
                                        _hover={{
                                            bg: 'red.900',
                                            textColor: 'white',
                                            border: '1px',
                                            borderColor: 'red.600'
                                        }}
                                        bg={'red.600'}
                                        border={'1px'}
                                        borderColor={'red.600'}
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

DeleteConfirmation.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
};

export default DeleteConfirmation;