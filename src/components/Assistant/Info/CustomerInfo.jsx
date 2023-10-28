import { useToast } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { addMaterialQuantity } from "../../../api/materialAPI";
import { MATERIAL_IMAGES_URL } from "../../../config/config";
import Input from "../../Input/Input";

const CustomerInfo = ({
    isOpen,
    onClose,
    image,
    materialCode,
    materialName,

    CustomerName,
    Mobile,
    Orders,
}) => {
    const toast = useToast();
    const [newStock, setNewStock] = useState({
        material_id: materialCode,
        quantity: null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewStock({ ...newStock, [name]: value });
    };

    const handleAddUserClick = async (event) => {
        event.preventDefault();

        if (newStock.quantity === "" || newStock.quantity === null) {
            toast({
                title: "Quantity is required!",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            try {
                await addMaterialQuantity(newStock);
                toast({
                    title: "Quantity Updated Successfully",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                onClose();
            } catch (error) {
                console.error(error);
                toast({
                    title: "Quantity Update Failed: " + error.response.data.message + "!",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }
        }
    };

    return (
        <div className={`relative  ${isOpen ? "block" : "hidden"}`}>

            <div className="fixed left-0 right-0 bottom-0 top-0 z-40 opacity-30 bg-black"></div>

            <div className="fixed top-16 bottom-0 right-0 left-0 z-40 flex flex-col items-center justify-center">
                
                <div className="hidden z-50 m-8 max-w-md w-96 rounded-lg bg-white p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <div className="flex justify-between gap-x-4">
                        <div className="mb-12 text-2xl font-bold">
                            Stock Update
                        </div>
                        <div className="mt-1"><AiFillCloseCircle onClick={onClose} size={24} /></div>
                    </div>

                    <form onSubmit={handleAddUserClick}>
                        <div className="mb-10 flex justify-center">
                            <img src={`${MATERIAL_IMAGES_URL}/${image}`} alt="material" className="w-64 h-32 rounded-xl" />
                        </div>
                        <div className="mb-1">
                            <b>Material Code: </b>{materialCode}
                        </div>
                        <div>
                            <b>Material Name:</b> {materialName}
                        </div>

                        <div className="hidden" data-te-input-wrapper-init>
                            <Input
                                type="text"
                                id="material-id"
                                name="material_id"
                                value={materialCode}
                                className="hidden"
                            />
                        </div>
                        <div className="relative my-6" data-te-input-wrapper-init>
                            <Input
                                type="number"
                                placeholder="Arrived Stock Quantity"
                                id="arrived-count"
                                name="quantity"
                                value={newStock.quantity}
                                onChange={handleInputChange}
                                className="mb-6"
                            />
                        </div>

                        <button
                            type="submit"
                            className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            Update Stock
                        </button>
                    </form>
                </div>

                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">
                        <AiFillCloseCircle onClick={onClose} size={24} />
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{CustomerName}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{Mobile}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Order Count: {Orders}</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <a onClick={onClose} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CustomerInfo.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    materialCode: PropTypes.string.isRequired,
    materialName: PropTypes.string.isRequired,

    CustomerName: PropTypes.string.isRequired,
    Mobile: PropTypes.string.isRequired,
    Orders: PropTypes.number.isRequired,

};

export default CustomerInfo;