import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getHireCostume } from "../../api/hireCostumesAPI";
import DeleteConfirmation from "../../components/Assistant/Confirmations/ItemDelete";
import EditHireCostume from "../../components/Assistant/Forms/EditHireCostumeForm";
import { HIRE_COSTUME_IMAGES_URL } from "../../config/config";


const Costume = () => {

    const { id } = useParams();

    const [costumeInfo, setCostume] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);

    const [isEditForm, setEditForm] = useState(false);
    const [isDeleteConfirm, setDeleteConfirm] = useState(false);

    useEffect(() => {
        const fetchCostumeData = async () => {
            try {
                const response = await getHireCostume(id);
                setCostume(response.data.hireCostume);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCostumeData();
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
                <a href="/assistant/hiring/" className="text-gray-200 bg-black hover:bg-gray-500 border-2 border-white transition-all py-2 px-5 rounded-md">
                    Back
                </a>
            </div>
            <div className="md:flex items-start justify-center py-20 2xl:px-20 md:px-6 px-4">

                <div className="xl:w-2/6 lg:w-2/5 w-100">
                    <div className="w-72 h-64 m-auto overflow-hidden">
                        <img
                            className=" object-cover"
                            alt="Accessory main image"
                            src={selectedImage || (costumeInfo.HireCostume && `${HIRE_COSTUME_IMAGES_URL}/${costumeInfo.HireCostume.images[0]}`)}
                        />
                    </div>
                    <div className="flex items-center flex-wrap md:justify-center justify-start gap-3 mt-5">
                        {costumeInfo.HireCostume && Array.isArray(costumeInfo.HireCostume.images) && costumeInfo.HireCostume.images.map((image, index) => (
                            <img key={index} alt={`Image ${index}`} className="md:w-32 md:h-32 w-24 h-24" src={`${HIRE_COSTUME_IMAGES_URL}/${image}`} onClick={() => handleImageClick(`${HIRE_COSTUME_IMAGES_URL}/${image}`)} />
                        ))}
                    </div>
                </div>

                <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="">
                        <h1 className="lg:text-3xl text-xl font-semibold lg:leading-6 leading-7 text-gray-900 mt-2">{costumeInfo.HireCostume && costumeInfo.HireCostume.name}</h1>
                        <p className="text-lg py-4 leading-none text-gray-600 ">Accessory type:
                            <b>
                                {
                                    costumeInfo.HireCostume && costumeInfo.HireCostume.costumeType === 'Jacket' ? " Jacket" :
                                        costumeInfo.HireCostume && costumeInfo.HireCostume.costumeType === 'Pant' ? " Trouser" : "Unknown"
                                }
                            </b>
                        </p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                        <p className="text-base leading-4 mt-7 text-gray-600">Product Code: {costumeInfo.itemId}</p>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Color:</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-gray-600 ">{costumeInfo.HireCostume && costumeInfo.HireCostume.color}</p>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800 ">Availability:</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-gray-600">{costumeInfo.HireCostume && costumeInfo.HireCostume.rentStatus}</p>
                        </div>
                    </div>
                    <div className="pb-8">
                        <p className="text-base leading-4 mt-7 text-gray-600">Small: {costumeInfo.HireCostume && costumeInfo.HireCostume.size.S} items</p>
                        <p className="text-base leading-4 mt-4 text-gray-600">Medium: {costumeInfo.HireCostume && costumeInfo.HireCostume.size.M} items</p>
                        <p className="text-base leading-4 mt-4 text-gray-600">Large: {costumeInfo.HireCostume && costumeInfo.HireCostume.size.L} items</p>
                    </div>
                    <div>
                        <div className="border-t border-b py-4 mt-7 border-gray-200">
                            <div data-menu className="flex justify-between items-center cursor-pointer">
                                <p className="text-base leading-4 text-gray-800">Rental Price: Rs. {costumeInfo.price && costumeInfo.price.toFixed(2)} per day</p>
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
                <EditHireCostume isOpen={isEditForm} onClose={handleEditFormClose} thisItem={costumeInfo} />
            </div>
            <div className={`relative  ${isDeleteConfirm ? "block" : "hidden"}`}>
                <DeleteConfirmation isOpen={isDeleteConfirm} onClose={handleDeleteConfirmationClose} thisItem={costumeInfo.itemId} />
            </div>
        </>
    );
};

export default Costume;