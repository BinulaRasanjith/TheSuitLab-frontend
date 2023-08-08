import React, { useState } from 'react';
import { BsBarChartFill } from "react-icons/bs"
import { HiColorSwatch } from "react-icons/hi"
import { HiCalendarDays, HiShoppingCart } from "react-icons/hi2"
import { TbArrowBackUp, TbLogout } from "react-icons/tb"
import { BiSolidMessageAltEdit } from "react-icons/bi"
import { FaUserCircle } from "react-icons/fa"


const Sidebar2 = () => {

    const [activeButtonId, setActiveButtonId] = useState(null);

    const handleToggleClick = (buttonId) => {
        if (buttonId === activeButtonId) {
            // If the same button is clicked twice, hide its dropdown instantly
            setActiveButtonId(null);
        } else {
            // If a different button is clicked, show its dropdown and hide the previous dropdown
            setActiveButtonId(buttonId);
        }
    };

    const [selected, setSelected] = useState('');

    return (
        <div className=' flex flex-col justify-between bg-white max-w-max drop-shadow-2xl px-4 py-4'>
            
            <div>
                <ul className=" flex flex-col items-start m-auto">

                    <li>
                        <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(1) }} data-dropdown-toggle="dropdown" data-dropdown-placement="right-start" className={`py-2 px-2 text-center w-56 h-9 mt-2 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 1 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} type="button">
                            <div className='flex items-center'>
                                <BsBarChartFill />
                                <span className='pl-2.5'>Dashboard</span>
                            </div>
                        </button>
                    </li>

                    <li>
                        <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(2) }} data-dropdown-toggle="dropdown" data-dropdown-placement="right-start" className={`py-2 px-2 text-center w-56 h-9 mt-2 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 2 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} type="button">
                            <div className='flex items-center'>
                                <HiColorSwatch />
                                <span className='pl-2.5'>Materials</span>
                            </div>
                        </button>
                    </li>

                    <li>
                        <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(3) }} data-dropdown-toggle="dropdown" data-dropdown-placement="right-start" className={`py-2 px-2 text-center w-56 h-9 mt-2 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 3 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} type="button">
                            <div className='flex items-center'>
                                <HiCalendarDays />
                                <span className='pl-2.5'>Handover</span>
                            </div>
                        </button>
                    </li>

                    <li>
                        <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(4) }} data-dropdown-toggle="dropdown" data-dropdown-placement="right-start" className={`py-2 px-2 text-center w-56 h-9 mt-2 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 4 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} type="button">
                            <div className='flex items-center'>
                                <HiShoppingCart />
                                <span className='pl-2.5'>Orders</span>
                            </div>
                        </button>
                    </li>

                    <li>
                        <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(5) }} data-dropdown-toggle="dropdown" data-dropdown-placement="right-start" className={`py-2 px-2 text-center w-56 h-9 mt-2 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 5 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} type="button">
                            <div className='flex items-center'>
                                <TbArrowBackUp />
                                <span className='pl-2.5'>Returns</span>
                            </div>
                        </button>
                    </li>

                    <li>
                        <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(6) }} data-dropdown-toggle="dropdown" data-dropdown-placement="right-start" className={`py-2 px-2 text-center w-56 h-9 mt-2 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 6 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} type="button">
                            <div className='flex items-center'>
                                <BiSolidMessageAltEdit />
                                <span className='pl-2.5'>Notifications</span>
                            </div>
                        </button>
                    </li>

                    <li>
                        <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(7) }} data-dropdown-toggle="dropdown" data-dropdown-placement="right-start" className={`py-2 px-2 text-center w-56 h-9 mt-2 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 7 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} type="button">
                            <div className='flex items-center'>
                                <FaUserCircle />
                                <span className='pl-2.5'>Profile</span>
                            </div>
                        </button>
                    </li>

                </ul>
            </div>

            <div>
                <ul className=" flex flex-col items-start m-auto">

                <li>
                    <button id="multiLevelDropdownButton" data-dropdown-toggle="dropdown" data-dropdown-placement="right-start" className={`py-2 px-2 text-center w-56 h-9 mt-2 flex items-center justify-between hover:bg-gray-100 rounded`} type="button">
                        <div className='flex items-center'>
                            <TbLogout />
                            <span className='pl-2.5'>Log Out</span>
                        </div>
                    </button>
                </li>

                </ul>
            </div>

        </div>
    )
}

export default Sidebar2;
