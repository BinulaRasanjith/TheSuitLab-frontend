import { useParams } from 'react-router-dom';
import { useState } from 'react';

// Import the images for suits
import SuitImage1 from '../../assets/images/rentsuits/black suit/1.webp';
import SuitImage3 from '../../assets/images/rentsuits/black suit/3.webp';
import SuitImage4 from '../../assets/images/rentsuits/black suit/4.webp';
import SuitImage5 from '../../assets/images/rentsuits/black suit/5.webp';
import SuitImage6 from '../../assets/images/rentsuits/black suit/6.webp';
import SuitImage7 from '../../assets/images/rentsuits/black paisley suit/1.webp';
import SuitImage8 from '../../assets/images/rentsuits/black paisley suit/3.webp';
import SuitImage9 from '../../assets/images/rentsuits/black paisley suit/3.webp';
import SuitImage10 from '../../assets/images/rentsuits/black paisley suit/4.webp';
import SuitImage11 from '../../assets/images/rentsuits/black paisley suit/5.webp';
import SuitImage12 from '../../assets/images/rentsuits/black paisley suit/6.webp';
import SuitImage13 from '../../assets/images/rentsuits/burgandy strech/1.webp';
import SuitImage14 from '../../assets/images/rentsuits/burgandy strech/3.webp';
import SuitImage15 from '../../assets/images/rentsuits/burgandy strech/3.webp';
import SuitImage16 from '../../assets/images/rentsuits/burgandy strech/4.webp';
import SuitImage17 from '../../assets/images/rentsuits/burgandy strech/5.webp';
import SuitImage18 from '../../assets/images/rentsuits/burgandy strech/6.webp';
import SuitImage19 from '../../assets/images/rentsuits/burgundy suit/1.webp';
import SuitImage20 from '../../assets/images/rentsuits/burgundy suit/3.webp';
import SuitImage21 from '../../assets/images/rentsuits/burgundy suit/3.webp';
import SuitImage22 from '../../assets/images/rentsuits/burgundy suit/4.webp';
import SuitImage23 from '../../assets/images/rentsuits/burgundy suit/5.webp';
import SuitImage24 from '../../assets/images/rentsuits/burgundy suit/6.webp';
import SuitImage25 from '../../assets/images/rentsuits/cafe brown suit/1.webp';
import SuitImage26 from '../../assets/images/rentsuits/cafe brown suit/3.webp';
import SuitImage27 from '../../assets/images/rentsuits/cafe brown suit/3.webp';
import SuitImage28 from '../../assets/images/rentsuits/cafe brown suit/4.webp';
import SuitImage29 from '../../assets/images/rentsuits/cafe brown suit/5.webp';
import SuitImage30 from '../../assets/images/rentsuits/cafe brown suit/6.webp';
import SuitImage31 from '../../assets/images/rentsuits/caremal suit/1.webp';
import SuitImage32 from '../../assets/images/rentsuits/caremal suit/3.webp';
import SuitImage33 from '../../assets/images/rentsuits/caremal suit/3.webp';
import SuitImage34 from '../../assets/images/rentsuits/caremal suit/4.webp';
import SuitImage35 from '../../assets/images/rentsuits/caremal suit/5.webp';
import SuitImage36 from '../../assets/images/rentsuits/caremal suit/6.webp';
import SuitImage37 from '../../assets/images/rentsuits/cobolt blue suit/1.webp';
import SuitImage38 from '../../assets/images/rentsuits/cobolt blue suit/3.webp';
import SuitImage39 from '../../assets/images/rentsuits/cobolt blue suit/3.webp';
import SuitImage40 from '../../assets/images/rentsuits/cobolt blue suit/4.webp';
import SuitImage41 from '../../assets/images/rentsuits/cobolt blue suit/5.webp';
import SuitImage42 from '../../assets/images/rentsuits/cobolt blue suit/6.webp';
import SuitImage43 from '../../assets/images/rentsuits/dark blue suit/1.webp';
import SuitImage44 from '../../assets/images/rentsuits/dark blue suit/3.webp';
import SuitImage45 from '../../assets/images/rentsuits/dark blue suit/3.webp';
import SuitImage46 from '../../assets/images/rentsuits/dark blue suit/4.webp';
import SuitImage47 from '../../assets/images/rentsuits/dark blue suit/5.webp';
import SuitImage48 from '../../assets/images/rentsuits/dark blue suit/6.webp';
import SuitImage49 from '../../assets/images/rentsuits/dark green/1.webp';
import SuitImage50 from '../../assets/images/rentsuits/dark green/3.webp';
import SuitImage51 from '../../assets/images/rentsuits/dark green/3.webp';
import SuitImage52 from '../../assets/images/rentsuits/dark green/4.webp';
import SuitImage53 from '../../assets/images/rentsuits/dark green/5.webp';
import SuitImage54 from '../../assets/images/rentsuits/dark green/6.webp';
import SuitImage55 from '../../assets/images/rentsuits/green suit/1.webp';
import SuitImage56 from '../../assets/images/rentsuits/green suit/3.webp';
import SuitImage57 from '../../assets/images/rentsuits/green suit/3.webp';
import SuitImage58 from '../../assets/images/rentsuits/green suit/4.webp';
import SuitImage59 from '../../assets/images/rentsuits/green suit/5.webp';
import SuitImage60 from '../../assets/images/rentsuits/green suit/6.webp';
import SuitImage61 from '../../assets/images/rentsuits/light brown suit/1.webp';
import SuitImage62 from '../../assets/images/rentsuits/light brown suit/2.webp';
import SuitImage63 from '../../assets/images/rentsuits/light brown suit/3.webp';
import SuitImage64 from '../../assets/images/rentsuits/light brown suit/4.webp';
import SuitImage65 from '../../assets/images/rentsuits/light brown suit/5.webp';
import SuitImage66 from '../../assets/images/rentsuits/light brown suit/6.webp';
import SuitImage67 from '../../assets/images/rentsuits/marine blue suit/1.webp';
import SuitImage68 from '../../assets/images/rentsuits/marine blue suit/2.webp';
import SuitImage69 from '../../assets/images/rentsuits/marine blue suit/3.webp';
import SuitImage70 from '../../assets/images/rentsuits/marine blue suit/4.webp';
import SuitImage71 from '../../assets/images/rentsuits/marine blue suit/5.webp';
import SuitImage72 from '../../assets/images/rentsuits/marine blue suit/6.webp';
import SuitImage73 from '../../assets/images/rentsuits/maroon suit/1.webp';
import SuitImage74 from '../../assets/images/rentsuits/maroon suit/2.webp';
import SuitImage75 from '../../assets/images/rentsuits/maroon suit/3.webp';
import SuitImage76 from '../../assets/images/rentsuits/maroon suit/4.webp';
import SuitImage77 from '../../assets/images/rentsuits/maroon suit/5.webp';
import SuitImage78 from '../../assets/images/rentsuits/maroon suit/6.webp';
import SuitImage79 from '../../assets/images/rentsuits/rose pink venice suit/1.webp';
import SuitImage80 from '../../assets/images/rentsuits/rose pink venice suit/2.webp';
import SuitImage81 from '../../assets/images/rentsuits/rose pink venice suit/3.webp';
import SuitImage82 from '../../assets/images/rentsuits/rose pink venice suit/4.webp';
import SuitImage83 from '../../assets/images/rentsuits/rose pink venice suit/5.webp';
import SuitImage84 from '../../assets/images/rentsuits/rose pink venice suit/6.webp';
import SuitImage85 from '../../assets/images/rentsuits/white n black suit/1.webp';
import SuitImage86 from '../../assets/images/rentsuits/white n black suit/2.webp';
import SuitImage87 from '../../assets/images/rentsuits/white n black suit/3.webp';
import SuitImage88 from '../../assets/images/rentsuits/white n black suit/4.webp';
import SuitImage89 from '../../assets/images/rentsuits/white n black suit/5.webp';
import SuitImage90 from '../../assets/images/rentsuits/white n black suit/6.webp';
import SuitImage91 from '../../assets/images/rentsuits/white palma suit/1.webp';
//import SuitImage92 from '../../assets/images/rentsuits/white palma suit/2.webp';
//import SuitImage93 from '../../assets/images/rentsuits/white palma suit/3.webp';
//import SuitImage94 from '../../assets/images/rentsuits/white palma suit/4.webp';
//import SuitImage95 from '../../assets/images/rentsuits/white palma suit/5.webp';
//import SuitImage96 from '../../assets/images/rentsuits/white palma suit/6.webp';


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
        { id: 2, name: "Sample Suit 2", description: "Clarks Men's Tilden Cap Oxford", images: [SuitImage7, SuitImage8, SuitImage9, SuitImage10, SuitImage11, SuitImage12], price: 7000 },
        { id: 3, name: "Sample Suit 3", description: "Clarks Men's Tilden Cap Oxford", images: [SuitImage13, SuitImage14, SuitImage15, SuitImage16, SuitImage17, SuitImage18], price: 5500 },
        { id: 4, name: "Sample Suit 4", description: "Clarks Men's Tilden Cap Oxford", images: [SuitImage19, SuitImage20, SuitImage21, SuitImage22, SuitImage23, SuitImage24], price: 1800 },
        { id: 5, name: "Sample Suit 5", description: "Clarks Men's Tilden Cap Oxford", images: [SuitImage25, SuitImage26, SuitImage27, SuitImage28, SuitImage29, SuitImage30], price: 9000 },
        { id: 6, name: "Sample Suit 6", description: "Description for Suit 6", images: [SuitImage31, SuitImage32, SuitImage33, SuitImage34, SuitImage35, SuitImage36], price: 6500 },
        { id: 7, name: "Sample Suit 7", description: "Description for Suit 7", images: [SuitImage37, SuitImage38, SuitImage39, SuitImage40, SuitImage41, SuitImage42], price: 7500 },
        { id: 8, name: "Sample Suit 8", description: "Description for Suit 8", images: [SuitImage43, SuitImage44, SuitImage45, SuitImage46, SuitImage47, SuitImage48], price: 8500 },
        { id: 9, name: "Sample Suit 9", description: "Description for Suit 9", images: [SuitImage49, SuitImage50, SuitImage51, SuitImage52, SuitImage53, SuitImage54], price: 9500 },
        { id: 10, name: "Sample Suit 10", description: "Description for Suit 10", images: [SuitImage55, SuitImage56, SuitImage57, SuitImage58, SuitImage59, SuitImage60], price: 10500 },
        { id: 11, name: "Sample Suit 11", description: "Description for Suit 11", images: [SuitImage61, SuitImage62, SuitImage63, SuitImage64, SuitImage65, SuitImage66], price: 11500 },
        { id: 12, name: "Sample Suit 12", description: "Description for Suit 12", images: [SuitImage67, SuitImage68, SuitImage69, SuitImage70, SuitImage71, SuitImage72], price: 12500 },
        { id: 13, name: "Sample Suit 13", description: "Description for Suit 13", images: [SuitImage73, SuitImage74, SuitImage75, SuitImage76, SuitImage77, SuitImage78], price: 13500 },
        { id: 14, name: "Sample Suit 14", description: "Description for Suit 14", images: [SuitImage79, SuitImage80, SuitImage81, SuitImage82, SuitImage83, SuitImage84], price: 14500 },
        { id: 15, name: "Sample Suit 15", description: "Description for Suit 15", images: [SuitImage85, SuitImage86, SuitImage87, SuitImage88, SuitImage89, SuitImage90], price: 15500 },
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
