import { Select } from '@chakra-ui/react'
import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { addNewAccessory } from "../../../api/accessoryAPI";
import Input from "../../Input/Input";

const NewAccessoryForm = ({ isOpen, onClose }) => {
    const [newAccessoryData, setNewAccessoryData] = useState({
        brand: "Unknown",
        itemName: "",
        materialType: "",
        colorCode: "",
        price: "",
        accessoryType: null,
        pattern: null,
        buckleType: null,
        shoeStyle: null,
        image: null,
        // image: "./images/default.png",
    });
    const [selectedFile, setSelectedFile] = useState(null);

    // const [showBeltInput, setShowBeltInput] = useState(false);
    // const [showTieInput, setShowTieInput] = useState(false);
    // const [showShoeInput, setShowShoeInput] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewAccessoryData({ ...newAccessoryData, [name]: value });
    };

    // const handleFileChange = (event) => {
    //     const fileset = event.target.files;
    //     setSelectedFile(fileset);

    //     setNewAccessoryData({ ...newAccessoryData, image: fileset ? Array.from(fileset) : null });
    // };

    const handleFileChange = (event) => {
        const fileset = event.target.file[0];
        setSelectedFile(fileset);

        setNewAccessoryData({ ...newAccessoryData, image: fileset ? fileset.name : null });
    };

    // const handleAddUserClick = async (event) => {
    //     event.preventDefault();

    //     try {
    //         await addNewAccessory(newAccessoryData);
    //         onClose();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const handleAddUserClick = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append("brand", newAccessoryData.brand);
            formData.append("itemName", newAccessoryData.itemName);
            formData.append("materialType", newAccessoryData.materialType);
            formData.append("colorCode", newAccessoryData.colorCode);
            formData.append("price", newAccessoryData.price);
            formData.append("accessoryType", newAccessoryData.accessoryType);
            formData.append("pattern", newAccessoryData.pattern);
            formData.append("buckleType", newAccessoryData.buckleType);
            formData.append("shoeStyle", newAccessoryData.shoeStyle);

            if (newAccessoryData.image) {
                for (const file of newAccessoryData.image) {
                    formData.append("image", file);
                }
            }

            const response = await addNewAccessory(formData);
            // const response = await axios.post("/api/accessories", formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={`relative  ${isOpen ? "block" : "hidden"}`}>
            {/* <div className={`relative  ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}> */}
            {/* <div className="relative"> */}

            <div className="fixed left-0 right-0 bottom-0 top-0 z-40 opacity-30 bg-black"></div>

            <div className="fixed top-16 bottom-0 right-0 left-0 z-40 flex flex-col items-center justify-center">
                <div className=" z-50 m-8 rounded-lg bg-white p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <div className="flex justify-between gap-x-4">
                        <div className="mb-12 text-2xl font-bold">
                            New Accessory
                        </div>
                        <div className="mt-1"><AiFillCloseCircle onClick={onClose} size={24} /></div>
                    </div>

                    <form onSubmit={handleAddUserClick}>
                        <div className=' flex gap-x-10'>

                            <div className='w-64'>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <Input
                                        type="text"
                                        placeholder="Brand"
                                        id="brandname"
                                        name="brandName"
                                        value={newAccessoryData.brandName}
                                        onChange={handleInputChange}
                                        className="mb-6"
                                    />
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <Input
                                        type="text"
                                        placeholder="Material"
                                        id="material-type"
                                        name="materialType"
                                        value={newAccessoryData.materialType}
                                        onChange={handleInputChange}
                                        className="mb-6"
                                    />
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <Select
                                        placeholder='Accessory Type'
                                        size="lg"
                                        fontSize="sm"
                                        id="accesory-type"
                                        name="accessoryType"
                                        value={newAccessoryData.accessoryType}
                                        onChange={(e) => {
                                            const selectedValue = e.target.value;
                                            setNewAccessoryData({ ...newAccessoryData, accessoryType: selectedValue });

                                            // Update the state variables to control the visibility of input fields
                                            // setShowBeltInput(selectedValue === 'Belt');
                                            // setShowTieInput(selectedValue === 'Tie');
                                            // setShowShoeInput(selectedValue === 'Shoe');
                                        }}
                                    >
                                        <option value='Belt'>Belt</option>
                                        <option value='Tie'>Tie</option>
                                        <option value='Shoe'>Shoe</option>
                                    </Select>
                                </div>
                                <div className={newAccessoryData.accessoryType == "Belt" ? "relative mb-6" : newAccessoryData.accessoryType == "Tie" ? "hidden" : newAccessoryData.accessoryType == "Shoe" ? "hidden" : "pointer-events-none"} data-te-input-wrapper-init>
                                    <Input
                                        type="text"
                                        placeholder="Buckle Type"
                                        id="buckle-type"
                                        name="buckleType"
                                        value={newAccessoryData.buckleType}
                                        onChange={handleInputChange}
                                        className="mb-6"
                                    />
                                </div>
                                <div className={newAccessoryData.accessoryType == "Tie" ? "relative mb-6" : "hidden"} data-te-input-wrapper-init>
                                    <Input
                                        type="text"
                                        placeholder="Pattern"
                                        id="design-pattern"
                                        name="pattern"
                                        value={newAccessoryData.pattern}
                                        onChange={handleInputChange}
                                        className="mb-6"
                                    />
                                </div>
                                <div className={newAccessoryData.accessoryType == "Shoe" ? "relative mb-6" : "hidden"} data-te-input-wrapper-init>
                                    <Input
                                        type="text"
                                        placeholder="Style"
                                        id="shoe_style"
                                        name="shoeStyle"
                                        value={newAccessoryData.shoeStyle}
                                        onChange={handleInputChange}
                                        className="mb-6"
                                    />
                                </div>
                            </div>

                            <div className='w-64'>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <Input
                                        type="text"
                                        placeholder="Item Name"
                                        id="item-name"
                                        name="itemName"
                                        value={newAccessoryData.itemName}
                                        onChange={handleInputChange}
                                        className="mb-6"
                                    />
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <Input
                                        type="text"
                                        placeholder="Colour"
                                        id="color-code"
                                        name="colorCode"
                                        value={newAccessoryData.colorCode}
                                        onChange={handleInputChange}
                                        className="mb-6"
                                    />
                                </div>
                                {/* <!--Email input--> */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <Input
                                        type="float"
                                        placeholder="Unit Price"
                                        id="item-price"
                                        name="unitPrice"
                                        value={newAccessoryData.unitPrice}
                                        onChange={handleInputChange}
                                        className="mb-6"
                                    />
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <Input
                                        type="number"
                                        placeholder={newAccessoryData.accessoryType == "Tie" ? "Width" : "Size"}
                                        id="item-size"
                                        name="size"
                                        value={newAccessoryData.size}
                                        onChange={handleInputChange}
                                        className="mb-6"
                                    />
                                </div>

                            </div>
                        </div>


                        <div className=' flex'>
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <label htmlFor="image" className=''>Add Images Here</label><br /><br />
                                <input
                                    type="file"
                                    accept="image/*"
                                    // value={newAccessoryData.image[0]}
                                    value={selectedFile}
                                    onChange={handleFileChange}
                                    multiple
                                />
                            </div>
                        </div>

                        {/* <!--Submit button--> */}
                        <button
                            type="submit"
                            className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            Add Accessory
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

NewAccessoryForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default NewAccessoryForm;
