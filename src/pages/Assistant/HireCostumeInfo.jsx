import { useState } from "react";

import ReturnFixConfForm from "../../components/Assistant/Confirmations/ReturnFixConfForm";
import DropDownFilter from "../../components/Assistant/Controls/HeaderDropDown";
import SearchBox from "../../components/Assistant/Controls/HeaderSearchBox";
import Pagination from "../../components/Assistant/Controls/Pagination";
// import NewHandoverForm from "../../components/Assistant/Forms/HandoverDamagesForm";
import Handovers from "../../components/Assistant/HandoveredItemSet";

const Handover = () => {
    const [isHandoverUpdate, updateHandover] = useState(false);
    const [selectedHire, setSelectedHire] = useState({
        customer: "",
        suit: "",
    });

    const handleFormOpen = (cus_id, suit_id) => {
        setSelectedHire({ customer: cus_id, suit: suit_id });
        updateHandover(true);
    };

    const handleFormClose = () => {
        setSelectedHire({ customer: null, suit: null });
        updateHandover(false);
    };

    return (
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">

            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img className="w-full" alt="image of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
                <img className="mt-6 w-full" alt="image of a girl posing" src="https://i.ibb.co/qxkRXSq/component-image-two.png" />
            </div>
            <div className="md:hidden">
                <img className="w-full" alt="image of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
                <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                    <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                    <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                    <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                    <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                </div>
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="">
                    <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-900 mt-2">SUIT NAME</h1>
                    <p className="text-sm py-2 leading-none text-gray-600 ">SUIT TYPE</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-base leading-4 mt-7 text-gray-600">Product Code: 8BN321AF2IF0NYA</p>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Fabric</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600 ">Smoke Blue</p>
                        <div className="w-6 h-6 bg-gradient-to-b from-gray-900 to-indigo-500 ml-3 mr-4 cursor-pointer"></div>
                        <svg className="cursor-pointer text-gray-300 " width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800 ">Size</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600  mr-3">Medium</p>
                        <svg className="text-gray-300  cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-base leading-4 mt-7 text-gray-600">Fabric: Cotton Gray</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Length: 13.2 inches</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Height: 10 inches</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Depth: 5.1 inches</p>
                </div>
                <div>
                    <p className="text-base leading-normal text-gray-600 mt-4">Colour: COLOUR, Button Colour: BLACK, Button Style: 6 Buttons 2 lines, Lapel Type: STANDARD, Sleeve Buttons: 5, Pocket Type: , Pocket Colour: BLACK, Vent Type: STANDARD, Back Pocket: NO BUTTON</p>
                </div>
                <div>
                    <div className="border-t border-b py-4 mt-7 border-gray-200">
                        <div data-menu className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Rental Price: Rs. 750.00 per day</p>
                        </div>
                        <div className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600" id="sect">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable</div>
                    </div>
                </div>
                <div className="hidden">
                    <div className="border-b py-4 border-gray-200">
                        <div data-menu className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Contact us</p>
                            <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" role="button" aria-label="show or hide">
                                <svg className="transform text-gray-300" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600" id="sect">If you have any questions on how to return your item to us, contact us.</div>
                    </div>
                </div>
                <button className="mt-5 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
                    Update details
                </button>
            </div>
        </div>
    );
};

export default Handover;