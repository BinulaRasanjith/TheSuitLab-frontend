import { Select } from '@chakra-ui/react'
import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { addHireCostume } from "../../../api/hireCostumesAPI";
import Input from "../../Input/Input";

const NewHireCostume = ({ isOpen, onClose }) => {
    const [newCostumeData, setNewCostumeData] = useState({
        costumeName: "",
        costumeType: null,
        size: "",
        color: "",
        fabric: null,
        price: null,

        // COAT
        lapel: null, // COLLAR
        pockets: null, // POCKET TYPE
        pocketColor: null,
        sleeveButton: null, // BUTTONS ON BACK HAND

        // COMMON
        buttons: null, // STYLE OR FRONT BUTTON COUNT
        buttonColor: null,

        // TROUSER
        vent: null, // FOLT SIZE (MD, LG)
        backPocket: null, // BUTTON AVAILABLE OR NOT

        image: null,
        // image: "./images/default.png",
    });
    const [selectedFile, setSelectedFile] = useState(null);

    // const [showBeltInput, setShowBeltInput] = useState(false);
    // const [showTieInput, setShowTieInput] = useState(false);
    // const [showShoeInput, setShowShoeInput] = useState(false);

    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    // SET THE VALUES OF USER INPUTS WHEN THERE IS A CHANGE IN THE INPUT
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewCostumeData({ ...newCostumeData, [name]: value });
    };

    const handleFileChange = (event) => {
        const fileset = event.target.files;
        setSelectedFile(fileset);

        setNewCostumeData({ ...newCostumeData, image: fileset ? Array.from(fileset) : null });
    };
    // const handleFileChange = (event) => {
    //     const fileset = event.target.file[0];
    //     setSelectedFile(fileset);

    //     setNewCostumeData({ ...newCostumeData, image: fileset ? fileset.name : null });
    // };



    // const handleAddUserClick = async (event) => {
    //     event.preventDefault();

    //     try {
    //         await addNewAccessory(newAccessoryData);
    //         onClose();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const handleAddAccessory = async (event) => {
    //     event.preventDefault();
    //     // Handle the form submission logic here
    //     // ...
    // };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append("costumeName", newCostumeData.costumeName);
            formData.append("costumeType", newCostumeData.costumeType);
            formData.append("size", newCostumeData.size);
            formData.append("color", newCostumeData.color);
            formData.append("fabric", newCostumeData.fabric);
            formData.append("price", newCostumeData.price);
            formData.append("lapel", newCostumeData.lapel);
            formData.append("pockets", newCostumeData.pockets);

            formData.append("pocketColor", newCostumeData.pocketColor);
            formData.append("sleeveButton", newCostumeData.sleeveButton);
            formData.append("buttons", newCostumeData.buttons);
            formData.append("buttonColor", newCostumeData.buttonColor);

            formData.append("vent", newCostumeData.vent);
            formData.append("backPocket", newCostumeData.backPocket);

            if (newCostumeData.image) {
                for (const file of newCostumeData.image) {
                    formData.append("image", file);
                }
            }

            const response = await addHireCostume(formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={`relative  ${isOpen ? "block" : "hidden"}`}>

            <div className="fixed left-0 right-0 bottom-0 top-0 z-40 opacity-30 bg-black"></div>

            <div className="fixed top-16 bottom-0 right-0 left-0 z-40 flex flex-col items-center justify-center">
                <div className=" z-50 m-8 rounded-lg bg-white p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <div className="flex justify-between gap-x-4">
                        <div className="mb-12 text-2xl font-bold">
                            Adding new costume
                        </div>
                        <div className="mt-1"><AiFillCloseCircle onClick={onClose} size={24} /></div>
                    </div>
                    {/* <form> */}
                    <form onSubmit={handleFormSubmit}>
                        {step === 1 && (
                            <>
                                {/* <form> */}
                                {/* Step 1 content */}
                                <div className=' flex gap-x-10'>

                                    <div className='w-64'>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <Input
                                                type="text"
                                                placeholder="Costume Name"
                                                id="costumeName"
                                                name="costumeName"
                                                value={newCostumeData.costumeName}
                                                onChange={handleInputChange}
                                                className="mb-6"
                                            />
                                        </div>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <Input
                                                type="text"
                                                placeholder="Fabric"
                                                id="fabric"
                                                name="fabric"
                                                value={newCostumeData.fabric}
                                                onChange={handleInputChange}
                                                className="mb-6"
                                            />
                                        </div>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <Input
                                                type="number"
                                                placeholder="Price"
                                                id="price"
                                                name="price"
                                                value={newCostumeData.price}
                                                onChange={handleInputChange}
                                                className="mb-6"
                                            />
                                        </div>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <Input
                                                type="text"
                                                placeholder="Button Color"
                                                id="button-color"
                                                name="buttonColor"
                                                value={newCostumeData.buttonColor}
                                                onChange={handleInputChange}
                                                className="mb-6"
                                            />
                                        </div>
                                    </div>

                                    <div className='w-64'>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <Select
                                                placeholder='Costume Type'
                                                size="lg"
                                                fontSize="sm"
                                                id="costume-type"
                                                name="costumeType"
                                                value={newCostumeData.costumeType}
                                                onChange={(e) => {
                                                    const selectedValue = e.target.value;
                                                    setNewCostumeData({ ...newCostumeData, costumeType: selectedValue });
                                                }}
                                            >
                                                <option value='Jacket'>Jacket</option>
                                                <option value='Trouser'>Trouser</option>
                                                {/* <option value='Shirt'>Shirt</option> */}
                                            </Select>
                                        </div>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <Input
                                                type="text"
                                                placeholder="Color"
                                                id="color"
                                                name="color"
                                                value={newCostumeData.color}
                                                onChange={handleInputChange}
                                                className="mb-6"
                                            />
                                        </div>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <Select
                                                size="lg"
                                                fontSize="sm"
                                                id="costume-size"
                                                name="costumeSize"
                                                value={newCostumeData.costumeType}
                                            >
                                                <option disabled selected>Costume size</option>
                                                <option value='XS'>Extra Small</option>
                                                <option value='S'>Small</option>
                                                <option value='M'>Medium</option>
                                                <option value='L'>Large</option>
                                                <option value='XL'>Extra Large</option>
                                            </Select>
                                        </div>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <Select
                                                placeholder='Buttons'
                                                size="lg"
                                                fontSize="sm"
                                                id="button-count"
                                                name="buttons"
                                                value={newCostumeData.buttons}
                                            >
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='4'>4</option>
                                                <option value='6'>6</option>
                                                <option value='8'>8</option>
                                            </Select>
                                        </div>
                                    </div>

                                </div>
                                {/* Other input fields for step 1 */}
                                {/* ... */}

                                {/* Navigation buttons for step 1 */}
                                <div className="flex justify-between gap-8">
                                    <button
                                        type="button"
                                        className="w-full dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        onClick={onClose}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        onClick={handleNext}
                                    >
                                        Next
                                    </button>
                                </div>
                                {/* </form> */}
                            </>
                        )}

                        {step === 2 && (
                            <>
                                {/* <form onSubmit={handleAddAccessory}> */}
                                {/* Step 2 content */}
                                <div className=' flex gap-x-10'>

                                    <div className='w-64'>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <Select
                                                // placeholder='Lapel Type'
                                                size="lg"
                                                fontSize="sm"
                                                id="lapel-type"
                                                name="lapel"
                                                value={newCostumeData.lapel}
                                            >
                                                <option disabled selected>Lapel type</option>
                                                <option value='Standard'>Standard</option>
                                                <option value='Wide'>Wide</option>
                                            </Select>
                                        </div>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <Select
                                                placeholder='Pocket Type'
                                                size="lg"
                                                fontSize="sm"
                                                id="pocket-type"
                                                name="pocket"
                                                value={newCostumeData.pockets}
                                            >
                                                <option value='Standard'>Standard</option>
                                                <option value='Wide'>Wide</option>
                                            </Select>
                                        </div>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <Select
                                                placeholder='Vent Type'
                                                size="lg"
                                                fontSize="sm"
                                                id="vent-type"
                                                name="vent"
                                                value={newCostumeData.vent}
                                            >
                                                <option value='Standard'>Standard</option>
                                                <option value='Thin'>Thin</option>
                                                <option value='Wide'>Wide</option>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className='w-64'>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <Select
                                                placeholder='Sleeve Buttons'
                                                size="lg"
                                                fontSize="sm"
                                                id="sleeve-button"
                                                name="sleeveButton"
                                                value={newCostumeData.sleeveButton}
                                            >
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                                <option value='5'>5</option>
                                            </Select>
                                        </div>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <Select
                                                placeholder='Pocket Color'
                                                size="lg"
                                                fontSize="sm"
                                                id="pocket-color"
                                                name="pocketColor"
                                                value={newCostumeData.pocketColor}
                                            >
                                                <option value='Same Color'>Same Color</option>
                                                <option value='Black'>Black</option>
                                                <option value='White'>White</option>
                                            </Select>
                                        </div>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <Select
                                                placeholder="Back Pocket"
                                                size="lg"
                                                fontSize="sm"
                                                id="back-pocket"
                                                name="backPocket"
                                                value={newCostumeData.backPocket}
                                            >
                                                <option value='none'>No button</option>
                                                <option value='single'>One Button</option>
                                            </Select>
                                        </div>
                                    </div>

                                </div>

                                <div className=' flex'>
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <label htmlFor="image" className='italic'>*Add Images Here</label><br />
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
                                {/* Navigation buttons for step 2 */}
                                <div className="flex justify-between gap-8">
                                    <button
                                        type="button"
                                        className="w-full dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        onClick={handlePrevious}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-full dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg_primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    >
                                        Add Accessory
                                    </button>
                                </div>
                                {/* </form> */}
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

NewHireCostume.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default NewHireCostume;