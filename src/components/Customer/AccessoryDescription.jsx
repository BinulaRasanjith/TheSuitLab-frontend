import { Button, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5"
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getAccessory } from "../../api/accessoryAPI";
import { addAccessoryToCart } from "../../api/accessoryAPI"
import { ACCESSORY_IMAGES_URL } from "../../config/config";
import { selectUser } from "../../store/slices/authSlice";

const AccessoryDescription = () => {
    const user = useSelector(selectUser);
    const toast = useToast();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(0);
    const { accessoryType, accessoryId } = useParams();
    const [selectedImage, setSelectedImage] = useState("");
    const [accessoryDetails, setAccessoryDetails] = useState({
        accessoryType: "",
        brand: "",
        color: "",
        createdAt: "",
        image: [],
        itemId: "",
        itemName: "",
        itemType: "",
        material: "",
        price: 0,
        quantity: 0,
        status: "",
        updatedAt: "",
        style: "",
        size: 0,
        pattern: "",
        width: 0,
        buckleType: "",
    });

    const [enabled, setEnabled] = useState({
        increment: true,
        decrement: false,
    }); // Disable the buttons
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const incrementQuantity = () => {
        if (quantity < accessoryDetails.quantity) {
            setQuantity(quantity + 1);
        } else {
            setEnabled({ ...enabled, increment: false });
        }
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        } else {
            setEnabled({ ...enabled, decrement: false });
        }
    };



    useEffect(() => {
        getAccessory(accessoryType, accessoryId)
            .then((response) => {
                // console.log(response.data);
                setAccessoryDetails(response.data);
                setSelectedImage(response.data.image[0]);

            })
            .catch((error) => {
                console.log(error); // TODO: Handle error
            });
    }, [accessoryType, accessoryId]);




    const handleAddToCart = () => {
        // check if size and quantity are selected
        if (quantity === 0) {
            toast({
                title: "Error",
                description: "Please select a quantity",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        addAccessoryToCart({
            customerId: user.id,
            itemId: accessoryDetails.itemId,
            price: accessoryDetails.price,
            quantity: quantity,
            status: "available",
            description: {
                type: accessoryDetails.accessoryType,
                brand: accessoryDetails.brand,
                color: accessoryDetails.color,
                material: accessoryDetails.material,
                name: accessoryDetails.itemName,
                size: accessoryDetails.size,
            }

        })
            .then((res) => {
                if (res.status === 201) {
                    toast({
                        title: "Success",
                        description: "Item added to cart",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    });
                }

            })
            .catch((error) => {
                console.log(error); // TODO: Handle error
            });

    };

    if (!accessoryDetails) {
        return (
            <p className="flex items-center justify-center m-auto">No Available Data</p>
        )
    }


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-y-scroll h-full py-10 w-full">


            <IoArrowBackCircle className="text-5xl absolute top-24 left-64 z-20" onClick={() => navigate(`/customer/accessories/${accessoryType}`)} />


            <div className="flex flex-col border-r-4 border-gray-600">
                <div className="mb-6 lg:mb-10 h-96 flex justify-center items-center">
                    <img
                        src={`${ACCESSORY_IMAGES_URL}/${selectedImage}`}
                        alt="Selected Image"
                        className=" object-cover h-full rounded"
                    />
                </div>
                <div className="flex gap-4 mb-4 px-2">
                    {accessoryDetails && accessoryDetails.image.map((image, index) => (

                        <div key={index} className="h-28 w-32">
                            <img
                                onClick={() => handleImageClick(image)}
                                src={`${ACCESSORY_IMAGES_URL}/${image}`}
                                alt={`Image ${index + 1}`}
                                className="block h-full m-1 object-cover rounded"
                            />

                        </div>
                    ))}
                </div>

            </div>




            <div className="pl-8 pt-5 w-full">
                <div className="mb-8 ">
                    <h2 className="mb-6 text-xl font-bold md:text-4xl text-gray-600 ">
                        {accessoryDetails.itemName}
                    </h2>
                    <div>
                        <span className="flex flex-col text-2xl text-black font-semibold">Price</span>
                        <p className="flex flex-col text-4xl font-bold text-gray-400 ">
                            <div className="flex items-center">
                                <span>LKR. {accessoryDetails.price}</span>
                                <span className="text-base font-normal text-gray-500 line-through ">
                                    {" "}
                                    LKR {accessoryDetails.price * (125 / 100)}
                                </span>

                            </div>
                            <span className="flex">
                                <p className="text-red-500">25%</p>
                                <p>OFF</p>
                            </span>

                        </p>

                    </div>
                    <p className={accessoryDetails.status === 'available' ? 'text-green' : 'text-red'}>
                        {accessoryDetails.status === "available" ? "In Stock" : "Out of Stock"}
                    </p>
                </div>
                <div className="flex flex-wrap md:flex-row flex-col justify-around mb-8 max-w-48 gap-x-4">

                    <div className="flex flex-col">
                        <div className="mb-8 ">
                            <h2 className="text-2xl text-black font-semibold  ">
                                Available Size
                            </h2>
                            {accessoryDetails.accessoryType === "shoe" ? <p className="text-xl font-bold text-gray-700">{accessoryDetails.size}</p> : <p className="text-xl font-bold text-gray-700">{accessoryDetails.size + "Inches"}</p>}
                        </div>
                        <div className="w-36 mb-8">
                            <label className="text-2xl font-semibold text-black ">
                                Quantity
                            </label>

                            <div className="flex items-center justify-between w-full mt-4">
                                <button
                                    className="px-4 py-2 font-semibold text-gray-700 border-2 rounded cursor-pointer hover:bg-gray-400"
                                    onClick={decrementQuantity}
                                >
                                    -
                                </button>
                                <p className="px-4 py-2 font-semibold text-gray-700 border-2 rounded">
                                    {quantity}
                                </p>
                                <button
                                    className="px-4 py-2 font-semibold text-gray-700 border-2 rounded cursor-pointer hover:bg-gray-400"
                                    onClick={incrementQuantity}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">

                        <span className="text-2xl mb-4 text-black font-semibold">Description</span>
                        <div className="flex flex-col text-gray-700">
                            <p className="text-lg font-semibold">Accessory Type : {accessoryDetails.accessoryType}</p>
                            <p className="text-lg font-semibold">Brand : {accessoryDetails.brand}</p>
                            <p className="text-lg font-semibold">Color : {accessoryDetails.color}</p>
                            <p className="text-lg font-semibold">Material : {accessoryDetails.material}</p>
                            {accessoryDetails.accessoryType === "shoe" ? <p className="text-lg font-semibold">Style : {accessoryDetails.style}</p> : ""}
                            {accessoryDetails.accessoryType === "tie" ? <p className="text-lg font-semibold">Pattern : {accessoryDetails.pattern}</p> : ""}
                            {accessoryDetails.accessoryType === "tie" ? <p className="text-lg font-semibold">Width : {accessoryDetails.width}</p> : ""}
                            {accessoryDetails.accessoryType === "belt" ? <p className="text-lg font-semibold">Buckle Type : {accessoryDetails.buckleType}</p> : ""}

                        </div>
                    </div>
                </div>


                <div className="flex gap-x-8">
                    <Button
                        className="flex flex-col justify-center py-6 w-30"
                        rounded={"md"}
                        color={"white"}
                        bgColor={"black"}
                        size="sm"
                        _hover={{
                            bg: "gray",
                        }}
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </Button>

                    <Button
                        className="flex flex-col justify-center w-30 py-6"
                        rounded={"md"}
                        color={"white"}
                        bgColor={"black"}
                        size="sm"
                        _hover={{
                            bg: "gray",
                        }}
                        onClick={() => navigate("/customer/cart")}
                    >
                        View Cart
                    </Button>
                    {/* <Button
                        className="flex flex-col justify-center py-6"
                        rounded={"md"}
                        color={"white"}
                        bgColor={"black"}
                        size="sm"
                        _hover={{
                            bg: "gray",
                        }}
                        
                    >
                        Back to Gallery
                    </Button> */}


                </div>
            </div>

        </div >
    )
}

export default AccessoryDescription