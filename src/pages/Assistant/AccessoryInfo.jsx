import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getAccessory } from "../../api/accessoryAPI";
import DeleteConfirmation from "../../components/Assistant/Confirmations/ItemDelete";
import EditAccessory from "../../components/Assistant/Forms/EditAccessoryForm";
import { ACCESSORY_IMAGES_URL } from "../../config/config";

const Accessory = () => {

    const { id } = useParams();

    const [accessoryInfo, setAccessory] = useState({}); // ACCESSORY DATA FROM THE API
    const [specificInfo, setType] = useState({});
    const [itemInfo, setItem] = useState({});
    
    const [selectedImage, setSelectedImage] = useState(null); // SELECTED IMAGE
    
    const [editInfo, setEdit] = useState({}); // EDIT FORM DATA

    const [isEditForm, setEditForm] = useState(false); // EDIT FORM STATE
    const [isDeleteConfirm, setDeleteConfirm] = useState(false); // DELETE CONFIRMATION STATE

    useEffect(() => {
        const fetchAccessoryData = async () => {
            try {
                const response = await getAccessory(id);

                setEdit(response.data);

                setAccessory(response.data.accessory);
                setType(response.data[Object.keys(response.data)[1]]);
                setItem(response.data.item);

            } catch (error) {
                console.error(error);
            }
        };

        fetchAccessoryData();
    }, [id]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleEditFormClose = () => {
        setEditForm(false); // SET isNewReturnForm TO FALSE TO CLOSE THE FORM
    };

    const handleEditFormOpen = () => {
        setEditForm(true); // SET isNewReturnForm TO FALSE TO OPEN THE FORM
    };

    const handleDeleteConfirmationClose = () => {
        setDeleteConfirm(false); // SET isNewReturnForm TO FALSE TO CLOSE THE FORM
    };

    const handleDeleteConfirmationOpen = () => {
        setDeleteConfirm(true); // SET isNewReturnForm TO FALSE TO OPEN THE FORM
    };

    return (
        <>
            <div className="fixed right-0 2xl:px-20 md:px-6 px-4 pt-5 ">
                <a href="/assistant/accessories/" className="text-gray-200 bg-black hover:bg-gray-500 border-2 border-white transition-all py-2 px-5 rounded-md">
                    Back
                </a>
            </div>
            <div className="md:flex items-start justify-center py-20 2xl:px-20 md:px-6 px-4">

                <div className="xl:w-2/6 lg:w-2/5 w-100">
                    <div className="w-72 h-64 m-auto overflow-hidden">
                        <img
                            className=" object-cover"
                            alt="Accessory main image"
                            src={selectedImage || (accessoryInfo.image && `${ACCESSORY_IMAGES_URL}/${accessoryInfo.image[0]}`)}
                        />
                    </div>
                    <div className="flex items-center flex-wrap md:justify-center justify-start gap-3 mt-5">
                        {Array.isArray(accessoryInfo.image) && accessoryInfo.image.map((image, index) => (
                            <img key={index} alt={`Image ${index}`} className="md:w-32 md:h-32 w-24 h-24" src={`${ACCESSORY_IMAGES_URL}/${image}`} onClick={() => handleImageClick(`${ACCESSORY_IMAGES_URL}/${image}`)} />
                        ))}
                    </div>
                </div>

                <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-8">
                    <div>
                        <h1 className="lg:text-3xl text-2xl font-semibold lg:leading-6 leading-7 text-gray-900 mt-2">
                            {accessoryInfo.itemName}
                        </h1>
                        <p className="text-lg py-2 leading-none text-gray-600 ">Accessory type:
                            <b>
                                {
                                    accessoryInfo.accessoryType === 'belt' ? " Belt" :
                                        accessoryInfo.accessoryType === 'shoe' ? " Shoe" :
                                            accessoryInfo.accessoryType === 'tie' ? " Tie" : "Unknown"
                                }
                            </b>
                        </p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                        <p className="text-base leading-4 mt-7 text-gray-600">
                            Product code: {accessoryInfo.itemId}
                        </p>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Material:</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-gray-600 ">
                                {accessoryInfo.material}
                            </p>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800 ">Remaining quantity:</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-gray-600  mr-3">
                                {accessoryInfo.quantity}
                            </p>
                        </div>
                    </div>
                    <div className=" border-gray-200 pb-6">
                        <p className="text-base leading-4 mt-7 text-gray-600">Colour: {accessoryInfo.color}</p>
                        <p className="text-base leading-4 mt-4 text-gray-600">
                            {
                                accessoryInfo.accessoryType === 'belt' ? `Buckle type: ${specificInfo.buckleType}` :
                                    accessoryInfo.accessoryType === 'shoe' ? `Style: ${specificInfo.style}` :
                                        accessoryInfo.accessoryType === 'tie' ? `Pattern: ${specificInfo.pattern}` : ""
                            }
                        </p>
                        <p className="text-base leading-4 mt-4 text-gray-600">
                            {
                                accessoryInfo.accessoryType === 'belt' ? `Size: ${specificInfo.size}` :
                                    accessoryInfo.accessoryType === 'shoe' ? `Size: ${specificInfo.size}` :
                                        accessoryInfo.accessoryType === 'tie' ? `Width: ${specificInfo.width}` : ""
                            }
                        </p>
                    </div>
                    <div>
                        <div className="border-t border-b py-4 mt-7 border-gray-200">
                            <div data-menu className="flex justify-between items-center cursor-pointer">
                                <p className="text-base leading-4 text-gray-800">Unit Price: Rs. {itemInfo.price && itemInfo.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <button onClick={handleDeleteConfirmationOpen} className="mt-5 text-base flex items-center justify-center leading-none text-white bg-red-700 w-full py-4 rounded-md hover:bg-red-200 hover:text-red-950 focus:outline-none">
                            Remove
                        </button>
                        <button onClick={handleEditFormOpen} className="mt-5 text-base flex items-center justify-center leading-none text-white bg-black w-full py-4 rounded-md hover:bg-gray-600 focus:outline-none">
                            Update details
                        </button>
                    </div>
                </div>
            </div>

            <div className={`relative  ${isEditForm ? "block" : "hidden"}`}>
                <EditAccessory isOpen={isEditForm} onClose={handleEditFormClose} thisItem={editInfo} />
            </div>
            <div className={`relative  ${isDeleteConfirm ? "block" : "hidden"}`}>
                <DeleteConfirmation isOpen={isDeleteConfirm} onClose={handleDeleteConfirmationClose} thisItem={accessoryInfo.itemId} />
            </div>
        </>
    );
};

export default Accessory;