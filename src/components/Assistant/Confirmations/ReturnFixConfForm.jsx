import { Button } from '@chakra-ui/react'
import PropTypes from "prop-types";
// import { useState } from "react";

// import { addNewAccessory } from "../../api/accessoryAPI";
// import Input from "../../components/Input/Input";

const ReturnFixConfForm = ({ isOpen, onClose }) => {

    return (
        <div className={`relative  ${!isOpen ? "block" : "hidden"}`}>
            {/* <div className={`relative  ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}> */}
            {/* <div className="relative"> */}

            <div className="fixed left-0 right-0 bottom-0 top-0 z-40 opacity-30 bg-black"></div>

            <div className="fixed top-16 bottom-0 right-0 left-0 z-40 flex flex-col items-center justify-center">
                <div className=" z-50 m-8 rounded-lg bg-white p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">

                    <form >

                        <div className=' flex flex-col gap-y-5'>
                            <div className=' text-center text-md'>
                                If the costume is complete and in satisfactory condition, <br /> 
                                please click &apos;Confirm&apos; to proceed with the collection. If there are <br /> 
                                any issues or it is not yet completed, click &apos;Cancel&apos;.
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
                                        // onClick={handleLoginClick}
                                        textColor={'white'}
                                        shadow={'md'}
                                        // width={'5rem'}>{Status}</Button>
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

ReturnFixConfForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default ReturnFixConfForm;