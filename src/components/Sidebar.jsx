import React, { useState } from 'react'
import Group277 from '../assets/images/Group277.png';

const Sidebar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isInnerDropdownOpen, setIsInnerDropdownOpen] = useState(false);
    const [selected, setSelected] = useState('');

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setSelected("Accessories")
    };

    const handleInnerDropdownToggle = () => {
        setIsInnerDropdownOpen(!isInnerDropdownOpen);
        setSelected("Neckties")
    };


    return (
        <div className='flex flex-col justify-between bg-white h-60% lg:h-80% overflow-y-hidden  max-w-max drop-shadow-2xl px-5'>
            <ul className="pt-10 lg:pt-20">
                <li className={`rounded ${selected === "Lookbooks" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Lookbooks") }}>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Lookbooks</a>
                </li>
                <li className={`rounded ${selected === "Clothing" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Clothing") }}>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Clothing</a>
                </li>
                <li className={`rounded ${selected === "Footwear" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Footwear") }}>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Footwear</a>
                </li>
                <li>
                    <button id="multiLevelDropdownButton" onClick={handleDropdownToggle} data-dropdown-toggle="dropdown" data-dropdown-placement="right-start" className={`text-bg px-4 py-2 text-center flex items-center justify-between hover:bg-gray-100 rounded ${selected === "Accessories" || selected === "Shoes" || selected === "Belts" || selected === "Bow-ties" || selected === "Neckties" || selected === "Fabric" || selected === "Style" || selected === "Monogram" ? 'border-l-4 border-blue-500 font-bold' : ''}`} type="button">Accessories <svg className={`w-2.5 h-2.5 ml-2.5 transform ${isDropdownOpen ? 'rotate-90' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg></button>
                    {isDropdownOpen && (<div id="dropdown" className="ml-8 bg-white divide-y divide-gray-100">
                        <ul className=" text-md text-bg border-l-2 border-dashed border-blue-500" aria-labelledby="multiLevelDropdownButton">
                            <li className={`rounded ml-3 ${selected === "Shoes" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Shoes") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Shoes</a>
                            </li>
                            <li className={`rounded ml-3 ${selected === "Belts" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Belts") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Belts</a>
                            </li>
                            <li className={`rounded ml-3 ${selected === "Bow-ties" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Bow-ties") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Bow ties</a>
                            </li>
                            <li>
                                <button id="doubleDropdownButton" onClick={handleInnerDropdownToggle} data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className={`flex items-center justify-between px-4 ml-3 py-2 hover:bg-gray-100 rounded ${selected === "Neckties" || selected === "Fabric" || selected === "Style" || selected === "Monogram" ? 'border-l-4 border-blue-500 font-bold' : ''}`}>Neckties<svg className={`w-2.5 h-2.5 ml-2.5 transform ${isInnerDropdownOpen ? 'rotate-90' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg></button>
                                {isInnerDropdownOpen && (<div id="doubleDropdown" className="ml-10 bg-white divide-y divide-gray-100">
                                    <ul className="border-l-2 border-dashed border-blue-500 text-md text-gray-700" aria-labelledby="doubleDropdownButton">
                                        <li className={`rounded ml-3 ${selected === "Fabric" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Fabric") }}>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Fabric</a>
                                        </li>
                                        <li className={`rounded ml-3 ${selected === "Style" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Style") }}>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Style</a>
                                        </li>
                                        <li className={`rounded ml-3 ${selected === "Monogram" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Monogram") }}>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Monogram</a>
                                        </li>

                                    </ul>
                                </div>)}
                            </li>

                        </ul>
                    </div>)}


                </li>
                <li className={`rounded ${selected === "About-Us" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("About-Us") }}>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
                </li>


            </ul>

            <div className='flex items-center justify-center pb-5 pt-5'>
                <img src={Group277} alt="Group277" />
            </div>
        </div>
    )
}

export default Sidebar;