
import { Button, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { HiOutlineCalendar } from "react-icons/hi";
import { IoArrowBackCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

import { addHireCostumeToCart as addHireCostumeToCartAPI } from "../../api/customerAPI";
// import { getHireCostume } from "../../api/hireCostumesAPI";
import { getPreDesignedCostumeById } from "../../api/preDesignedCostumesAPI";
import { PRE_DESIGNED_COSTUME_IMAGES_URL } from "../../config/config";
import { selectUser } from "../../store/slices/authSlice";


const PreDesignedItemDescription = () => {
    // Get the suitId from the route parameters
    const { suitId } = useParams();
    const toast = useToast();
    const navigate = useNavigate();
    const maxRating = 5;
    const location = useLocation();
    const pathname = location.pathname;
    const segments = pathname.split('/');
    const hireCostumeType = segments[segments.length - 2];

    const user = useSelector(selectUser);
    const [suitDetails, setSuitDetails] = useState({
        images: [],
        name: "",
        size: [],
        price: 0,
        rentStatus: "",
    }); // Create state variable for suit details
    const [selectedImage, setSelectedImage] = useState("");
    // const [selectedItems, setSelectedItems] = useState({}); // {size: quantity}
    const [selectedSize, setSelectedSize] = useState("L");
    const [quantity, setQuantity] = useState(0);
    const [enabled, setEnabled] = useState({
        increment: true,
        decrement: false,
    }); // Disable the buttons

    useEffect(() => {
        getPreDesignedCostumeById(suitId)
            .then((response) => {
                console.log(suitId);
                setSuitDetails(response.data);
                console.log(response.data);
                setSelectedImage(response.data.images[0]);
            })
            .catch((error) => {
                console.log(error); // TODO: Handle error
            });
    }, []);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleSelectSize = (size) => {
        setSelectedSize(size);
        setQuantity(0);
    }

    const incrementQuantity = () => {
        if (quantity < suitDetails.size[selectedSize]) {
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

    const handleAddToCart = () => {
        // check if size and quantity are selected
        if (selectedSize === "" && quantity === 0) {
            toast({
                title: "Error",
                description: "Please select a size and quantity",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        addHireCostumeToCartAPI({
            customerId: user.id,
            itemId: suitId,
            price: suitDetails.price,
            quantity,
            status: "available",
            description: {
                type: "hire",
                name: suitDetails.name,
                size: selectedSize,
            },
        })
            .then((response) => {
                if (response.status === 201) {
                    toast({
                        title: "Item added to cart",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    });
                }
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (!suitDetails) {
        return (
            <div>
                <h2>Suit Not Found</h2>
                <p>The requested suit does not exist.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-y-scroll h-full py-4 w-full">
            <IoArrowBackCircle className="text-5xl absolute top-24 left-64 z-20" onClick={() => navigate(`/customer/purchase-suit/${hireCostumeType}`)} />

            <div className="flex flex-col">
                <div className="mb-6 lg:mb-10 h-96 flex justify-center items-center">
                    <img
                        src={`${PRE_DESIGNED_COSTUME_IMAGES_URL}/${selectedImage}`}
                        alt="Selected Image"
                        className=" object-cover h-full rounded"
                    />
                </div>
                <div className="flex md:flex-row flex-col items-center md:items-start justify-center md:justify-between mb-4 px-4">
                    {suitDetails.images.map((image, index) => (

                        <div key={index} className="h-28 w-20">
                            <img
                                onClick={() => handleImageClick(image)}
                                src={`${PRE_DESIGNED_COSTUME_IMAGES_URL}/${image}`}
                                alt={`Image ${index + 1}`}
                                className="block h-full m-1 object-cover rounded"
                            />

                        </div>
                    ))}
                </div>

            </div>


            <div className="pl-10 w-full border-l-2 border-gray-600 md:h-full md:overflow-y-scroll">
                <div className="mb-6 ">
                    <h2 className="max-w-xl mb-6 text-2xl font-bold md:text-4xl text-gray-600 ">
                        {suitDetails.name}
                    </h2>
                    <p className="flex flex-col text-4xl font-bold text-gray-400 ">
                        <span className="text-gray-600 text-xl font-semibold">Price</span>
                        <div className="inline-block">
                            <span>LKR. {suitDetails.price}</span>
                            <span className="text-base font-normal text-gray-500 line-through ">
                                {" "}
                                LKR. {suitDetails.price * (112 / 100)}
                            </span>
                            <span className="flex text-xl">
                                {suitDetails.price === 0 ? <p className="text-red-600">-0%</p> : <p className="text-red-600">-12%</p>}

                                <p>OFF</p>
                            </span>

                        </div>
                    </p>
                    <div className="flex items-center">

                        {[...Array(maxRating)].map((_, index) => (
                            <svg
                                key={index}
                                aria-hidden="true"
                                className={`w-4 h-4 ${index < suitDetails.rating ? 'text-yellow-300' : 'text-gray-300'} mr-1`}
                                fill="currentColor"
                                viewBox="0 0 22 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                />
                            </svg>
                        ))}

                    </div>
                    <p className={`text-gray-700 font-semibold`}>
                        {suitDetails.rentStatus === "available" ? "Available for Rent" : "Not Available for Rent"}
                    </p>
                </div>

                <div className="mb-6 ">
                    <h2 className="w-16 mb-4 text-xl text-gray-600 font-semibold  ">
                        Sizes
                    </h2>
                    <div>
                        <div className="flex flex-wrap -mb-2">
                            {suitDetails.size &&
                                Object.entries(suitDetails.size).map(
                                    ([key, value], index) => (
                                        <div

                                            key={index}
                                        >
                                            <button
                                                className={`px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:bg-gray-400 ${selectedSize === key ? 'bg-black text-white' : ''} `}
                                                onClick={() => handleSelectSize(key)}
                                            >

                                                {key} : {value}
                                            </button>
                                        </div>
                                    )
                                )}
                        </div>
                    </div>
                </div>
                <div className="w-36 mb-6">
                    <label className="w-full pb-1 text-xl font-semibold text-gray-600 ">
                        Quantity
                    </label>

                    <div className="flex items-center justify-between w-full mt-4">
                        <button
                            className="px-4 py-2 font-semibold text-gray-700 border rounded cursor-pointer hover:bg-gray-400"
                            onClick={decrementQuantity}
                        >
                            -
                        </button>
                        <p className="px-4 py-2 font-semibold text-gray-700 border rounded">
                            {quantity}
                        </p>
                        <button
                            className="px-4 py-2 font-semibold text-gray-700 border rounded cursor-pointer hover:bg-gray-400"
                            onClick={incrementQuantity}
                        >
                            +
                        </button>
                    </div>
                </div>


                <div className="flex flex-wrap items-center gap-4">
                    <Button
                        className="flex flex-col justify-center w-1/3 py-6"
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
                        className="flex flex-col justify-center w-1/3 py-6"
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

                </div>
            </div>

        </div>
    );
};

export default PreDesignedItemDescription;
