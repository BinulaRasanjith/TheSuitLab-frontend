import { useParams } from 'react-router-dom';
import { useState } from 'react';

// Import the images for suits
import SuitImage1 from '../../assets/images/rentsuits/black suit/1.webp';
import SuitImage3 from '../../assets/images/rentsuits/black suit/3.webp';
import SuitImage4 from '../../assets/images/rentsuits/black suit/4.webp';
import SuitImage5 from '../../assets/images/rentsuits/black suit/5.webp';
import SuitImage6 from '../../assets/images/rentsuits/black suit/6.webp';
import SuitImage7 from '../../assets/images/rentsuits/black paisley suit/1.webp';
// import SuitImage8 from '../../assets/images/rentsuits/black paisley suit/3.webp';
// import SuitImage9 from '../../assets/images/rentsuits/black paisley suit/3.webp';
// import SuitImage10 from '../../assets/images/rentsuits/black paisley suit/4.webp';
// import SuitImage11 from '../../assets/images/rentsuits/black paisley suit/5.webp';
// import SuitImage12 from '../../assets/images/rentsuits/black paisley suit/6.webp';
import SuitImage13 from '../../assets/images/rentsuits/burgandy strech/1.webp';
// import SuitImage14 from '../../assets/images/rentsuits/burgandy strech/3.webp';
// import SuitImage15 from '../../assets/images/rentsuits/burgandy strech/3.webp';
// import SuitImage17 from '../../assets/images/rentsuits/burgandy strech/4.webp';
// import SuitImage18 from '../../assets/images/rentsuits/burgandy strech/5.webp';
// import SuitImage19 from '../../assets/images/rentsuits/burgandy strech/6.webp';
import SuitImage20 from '../../assets/images/rentsuits/burgundy suit/1.webp';
// import SuitImage21 from '../../assets/images/rentsuits/burgundy suit/3.webp';
// import SuitImage22 from '../../assets/images/rentsuits/burgundy suit/3.webp';
// import SuitImage23 from '../../assets/images/rentsuits/burgundy suit/4.webp';
// import SuitImage24 from '../../assets/images/rentsuits/burgundy suit/5.webp';
// import SuitImage26 from '../../assets/images/rentsuits/burgundy suit/6.webp';




const SuitDescription = () => {
    // Get the suitId from the route parameters

    const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const [selectedSize, setSelectedSize] = useState('Medium'); // Initialize with the default size

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const { suitId } = useParams();



    // Create an array of suit data
    const suitData = [
        { id: 1, name: "Sample Suit 1", description: "Clarks Men's Tilden Cap Oxford", images: [SuitImage1, SuitImage3, SuitImage4, SuitImage5], price: 9500 },
        { id: 2, name: "Sample Suit 2", description: "Clarks Men's Tilden Cap Oxford", images: [SuitImage7, SuitImage7, SuitImage3, SuitImage4], price: 7000 },
        { id: 3, name: "Sample Suit 3", description: "Clarks Men's Tilden Cap Oxford", images: [SuitImage13, SuitImage3, SuitImage4, SuitImage5], price: 5500 },
        { id: 4, name: "Sample Suit 4", description: "Clarks Men's Tilden Cap Oxford", images: [SuitImage20, SuitImage3], price: 1800 },
        { id: 5, name: "Sample Suit 5", description: "Clarks Men's Tilden Cap Oxford", images: [SuitImage5, SuitImage3], price: 9000 },
        { id: 6, name: "Sample Suit 6", description: "Description for Suit 6", images: [SuitImage6], price: 6500 },
    ];

    // Find the suit details based on suitId
    const suitDetails = suitData.find((suit) => suit.id === parseInt(suitId));

    const [selectedImage, setSelectedImage] = useState(suitDetails.images[0]); // Initialize with the first image

    const handleImageClick = (image) => {
        setSelectedImage(image);
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
        <div className="flex items-start flex-wrap bg-white w-full h-screen overflow-auto">
            <section class=" bg-white my-10 w-full font-poppins">
                <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full mb-8 md:w-1/2 md:mb-0">
                            <div class="sticky top-0 z-50 overflow-hidden">
                                <div className=" mb-6 lg:mb-10 h-60 items-center">
                                    <img src={selectedImage} alt="Selected Image" className=" object-cover w-52 h-52" />
                                </div>
                                <div className="flex-wrap hidden md:flex">
                                    {suitDetails.images.map((image, index) => (
                                        <div key={index} className="w-1/2 p-2 sm:w-1/4">
                                            <a href="#" className="block border border-blue-300 hover:border-blue-300" onClick={() => handleImageClick(image)}>
                                                <img src={image} alt={`Image ${index + 1}`} className="object-cover w-full h-36 lg:h-20" />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div class="w-full px-4 md:w-1/2 ">
                            <div class="lg:pl-20">
                                <div class="mb-8 ">
                                    <h2 class="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                        {suitDetails.name}</h2>
                                    <p class="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                        <span>Rs {suitDetails.price}</span>
                                        <span
                                            class="text-base font-normal text-gray-500 line-through dark:text-gray-400"> Rs {suitDetails.price + 2150}</span>
                                    </p>
                                    <p class="max-w-md text-gray-700 dark:text-gray-400">
                                        {suitDetails.description}
                                    </p>
                                </div>

                                <div class="mb-8 ">
                                    <h2
                                        class="w-16 pb-1 mb-4 text-xl font-semibold border-b border-blue-300 dark:border-gray-600 dark:text-gray-400">
                                        Size</h2>
                                    <div>
                                        <div className="flex flex-wrap -mb-2">
                                            <button
                                                className={`px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 ${selectedSize === 'Medium' ? ' text-white bg-black' : 'dark:border-gray-400 dark:text-gray-400'
                                                    }`}
                                                onClick={() => handleSizeClick('Medium')}
                                            >
                                                Medium
                                            </button>
                                            <button
                                                className={`px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 ${selectedSize === 'Large' ? 'text-white bg-black' : 'dark:border-gray-400 dark:text-gray-400'
                                                    }`}
                                                onClick={() => handleSizeClick('Large')}
                                            >
                                                Large
                                            </button>
                                            <button
                                                className={`px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 ${selectedSize === 'XL' ? 'text-white bg-black' : 'dark:border-gray-400 dark:text-gray-400'
                                                    }`}
                                                onClick={() => handleSizeClick('XL')}
                                            >
                                                XL
                                            </button>
                                            <button
                                                className={`px-4 py-2 mb-2 font-semibold border rounded-md hover:border-blue-400 ${selectedSize === 'XXL' ? 'text-white bg-black' : 'dark:border-gray-400 dark:text-gray-400'
                                                    }`}
                                                onClick={() => handleSizeClick('XXL')}
                                            >
                                                XXL
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-32 mb-8">
                                    <label
                                        className="w-full pb-1 text-xl font-semibold text-gray-700 border-b border-blue-300 dark:border-gray-600 dark:text-gray-400">
                                        Quantity
                                    </label>
                                    <div className="relative flex flex-row w-full h-10 mt-6 bg-transparent rounded-lg">
                                        <button
                                            onClick={handleDecrement}
                                            className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                            <span className="m-auto text-2xl font-thin">-</span>
                                        </button>
                                        <input
                                            type="number"
                                            className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                            placeholder="1"
                                            value={quantity}
                                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                                        />
                                        <button
                                            onClick={handleIncrement}
                                            className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                            <span className="m-auto text-2xl font-thin">+</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex flex-wrap items-center gap-4">
                                    <button
                                        class="w-full p-4 bg-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700">
                                        Add to cart</button>
                                    <button
                                        class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-500 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default SuitDescription;
