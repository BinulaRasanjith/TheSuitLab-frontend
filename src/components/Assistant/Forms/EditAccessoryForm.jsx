import { Button, Select, useToast } from '@chakra-ui/react'
import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { addNewAccessory } from "../../../api/accessoryAPI";
import Input from "../../Input/Input";

const EditAccessoryForm = ({ isOpen, onClose, thisItem }) => {

    const [newAccessoryData, setNewAccessoryData] = useState({
        itemId: thisItem.accessory && thisItem.itemId,
        brand: thisItem.accessory && thisItem.accessory.brand,
        itemName: thisItem.accessory && thisItem.accessory.itemName,
        materialType: thisItem.accessory && thisItem.accessory.material,
        colorCode: thisItem.accessory && thisItem.accessory.color,
        price: thisItem.item && thisItem.item.price,
        accessoryType: thisItem.accessory && thisItem.accessory.accessoryType,
        pattern: thisItem.accessory && thisItem.accessory.accessoryType === "tie" ? thisItem.tie.pattern : "",
        buckleType: thisItem.accessory && thisItem.accessory.accessoryType === "belt" ? thisItem.belt.buckleType : "",
        shoeStyle: thisItem.accessory && thisItem.accessory.accessoryType === "shoe" ? thisItem.shoe.style : "",
        // size: thisItem.accessory && thisItem.accessory.accessoryType === "shoe" ? thisItem.shoe && thisItem.shoe.size : thisItem.accessory && thisItem.accessory.accessoryType === "belt" ? thisItem.belt && thisItem.belt.size : thisItem.accessory && thisItem.accessory.accessoryType === "tie" ? thisItem.accessory && thisItem.tie.width : "",
    });
    console.log(thisItem); // TODO: REMOVE THIS

    const toast = useToast();
    const [selectedFile, setSelectedFile] = useState(null);

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
    const handleUpdate = async (event) => {
        event.preventDefault();
        if (
            newAccessoryData.itemName === ""
        ) {
            toast({
                title: "Please fill all the fields!",
                status: "error",
                duration: 3000,
                isClosable: true,
            });

        } else if (
            newAccessoryData.brand === "" ||
            newAccessoryData.itemName === "" ||
            newAccessoryData.materialType === "" ||
            newAccessoryData.colorCode === "" ||
            newAccessoryData.price === "" ||
            newAccessoryData.accessoryType === "" || (
                newAccessoryData.pattern === "" &&
                newAccessoryData.buckleType === "" &&
                newAccessoryData.shoeStyle === "" ) ||

            newAccessoryData.image === null
        ) {
            toast({
                title: "Please fill all the fields!",
                status: "error",
                duration: 3000,
                isClosable: true,
            });

        } else {
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
                console.log(response.data);

                toast({
                    title: "Success!",
                    description: "Accessory update completed!",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });

                onClose();
            } catch (error) {
                toast({
                    title: "Error!",
                    description: error.message,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
                console.error(error);
            }
        }
    };

    return (
        <div className={`relative  ${isOpen ? "block" : "hidden"}`}>

            <div className="fixed left-0 right-0 bottom-0 top-0 z-40 opacity-30 bg-black"></div>

            <div className="fixed top-16 bottom-0 right-0 left-0 z-40 flex flex-col items-center justify-center">
                <div className=" z-50 m-8 rounded-lg bg-white p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <div className="flex justify-between gap-x-4">
                        <div className="mb-12 text-2xl font-bold">
                            Update Accessory
                        </div>
                        <div className="mt-1"><AiFillCloseCircle onClick={onClose} cursor={'pointer'} size={24} /></div>
                    </div>

                    <form onSubmit={handleUpdate}>
                        <div className=' flex gap-x-10'>

                            <div className='w-64'>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <Input
                                        type="text"
                                        placeholder="Brand"
                                        id="brandname"
                                        name="brandName"
                                        value={newAccessoryData.brand}
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
                                        }}
                                    >
                                        <option value='belt'>Belt</option>
                                        <option value='tie'>Tie</option>
                                        <option value='shoe'>Shoe</option>
                                    </Select>
                                </div>
                                <div className={newAccessoryData.accessoryType == "belt" ? "relative mb-6" : newAccessoryData.accessoryType == "tie" ? "hidden" : newAccessoryData.accessoryType == "shoe" ? "hidden" : "pointer-events-none"} data-te-input-wrapper-init>
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
                                <div className={newAccessoryData.accessoryType == "tie" ? "relative mb-6" : "hidden"} data-te-input-wrapper-init>
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
                                <div className={newAccessoryData.accessoryType == "shoe" ? "relative mb-6" : "hidden"} data-te-input-wrapper-init>
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
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <Input
                                        type="float"
                                        placeholder="Unit Price"
                                        id="item-price"
                                        name="unitPrice"
                                        value={newAccessoryData.price}
                                        onChange={handleInputChange}
                                        className="mb-6"
                                    />
                                </div>
                                <div className={newAccessoryData.accessoryType || newAccessoryData.accessoryType == "tie" || newAccessoryData.accessoryType == "shoe" ? "relative mb-6" : "pointer-events-none"} data-te-input-wrapper-init>
                                    <Input
                                        type="number"
                                        placeholder={newAccessoryData.accessoryType == "tie" ? "Width" : "Size"}
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
                                    // accept="image/*"
                                    // value={newAccessoryData.image[0]}
                                    value={selectedFile}
                                    onChange={handleFileChange}
                                    multiple
                                />
                            </div>
                        </div>

                        {/* <!--SUBMIT BUTTON--> */}
                        <Button
                            type="submit"
                            size="lg"
                            width={'full'}
                            bg="primary"
                            color="white"
                            _hover={{
                                bg: 'primary.300',
                            }}
                            _active={{
                                bg: 'primary.700',
                            }}
                        >
                            Add Accessory
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

EditAccessoryForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    thisItem: PropTypes.object.isRequired,
};

export default EditAccessoryForm;
