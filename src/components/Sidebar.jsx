import { useState } from 'react'

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
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">Lookbooks</a>
                </li>
                <li className={`rounded ${selected === "Clothing" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Clothing") }}>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">Clothing</a>
                </li>
                <li className={`rounded ${selected === "Footwear" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Footwear") }}>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">Footwear</a>
                </li>
                <li>
                    <button className={`text-bg px-4 py-2 text-center flex items-center justify-between hover:bg-gray-100 rounded ${selected === "Accessories" || selected === "Shoes" || selected === "Belts" || selected === "Bow-ties" || selected === "Neckties" || selected === "Fabric" || selected === "Style" || selected === "Monogram" ? 'border-l-4 border-blue-500 font-bold' : ''}`} data-dropdown-placement="right-start" data-dropdown-toggle="dropdown" id="multiLevelDropdownButton" onClick={handleDropdownToggle} type="button">Accessories <svg aria-hidden="true" className={`w-2.5 h-2.5 ml-2.5 transform ${isDropdownOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="m1 9 4-4-4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg></button>
                    {isDropdownOpen && (<div className="ml-8 bg-white divide-y divide-gray-100" id="dropdown">
                        <ul aria-labelledby="multiLevelDropdownButton" className=" text-md text-bg border-l-2 border-dashed border-blue-500">
                            <li className={`rounded ml-3 ${selected === "Shoes" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Shoes") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Shoes</a>
                            </li>
                            <li className={`rounded ml-3 ${selected === "Belts" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Belts") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Belts</a>
                            </li>
                            <li className={`rounded ml-3 ${selected === "Bow-ties" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Bow-ties") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Bow ties</a>
                            </li>
                            <li>
                                <button className={`flex items-center justify-between px-4 ml-3 py-2 hover:bg-gray-100 rounded ${selected === "Neckties" || selected === "Fabric" || selected === "Style" || selected === "Monogram" ? 'border-l-4 border-blue-500 font-bold' : ''}`} data-dropdown-placement="right-start" data-dropdown-toggle="doubleDropdown" id="doubleDropdownButton" onClick={handleInnerDropdownToggle} type="button">Neckties<svg aria-hidden="true" className={`w-2.5 h-2.5 ml-2.5 transform ${isInnerDropdownOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m1 9 4-4-4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg></button>
                                {isInnerDropdownOpen && (<div className="ml-10 bg-white divide-y divide-gray-100" id="doubleDropdown">
                                    <ul aria-labelledby="doubleDropdownButton" className="border-l-2 border-dashed border-blue-500 text-md text-gray-700">
                                        <li className={`rounded ml-3 ${selected === "Fabric" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Fabric") }}>
                                            <a className="block px-4 py-2 hover:bg-gray-100" href="#">Fabric</a>
                                        </li>
                                        <li className={`rounded ml-3 ${selected === "Style" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Style") }}>
                                            <a className="block px-4 py-2 hover:bg-gray-100" href="#">Style</a>
                                        </li>
                                        <li className={`rounded ml-3 ${selected === "Monogram" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("Monogram") }}>
                                            <a className="block px-4 py-2 hover:bg-gray-100" href="#">Monogram</a>
                                        </li>

                                    </ul>
                                </div>)}
                            </li>

                        </ul>
                    </div>)}


                </li>
                <li className={`rounded ${selected === "About-Us" ? "border-l-4 border-blue-500 rounded font-bold" : ""}`} onClick={() => { setSelected("About-Us") }}>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">About Us</a>
                </li>
            </ul>

            <div className='flex items-center justify-center pb-5 pt-5'>
                <img alt="Group277" src={Group277} />
            </div>
        </div>
    )
}

export default Sidebar;