/* eslint-disable perfectionist/sort-imports */
/* eslint-disable no-unused-vars */
/* eslint-disable perfectionist/sort-jsx-props */
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { BsBarChartFill } from "react-icons/bs"
import { HiColorSwatch } from "react-icons/hi"
import { HiCalendarDays, HiShoppingCart } from "react-icons/hi2"
import { TbArrowBackUp, TbLogout } from "react-icons/tb"
import { BiSolidMessageAltEdit } from "react-icons/bi"
import { FaUserCircle } from "react-icons/fa"

import { Link } from 'react-router-dom';

const AssistantSidebar = () => {

    const [activeButtonId, setActiveButtonId] = useState(null);

    const location = useLocation();
    const currentPath = location.pathname;

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
        <div className=' flex flex-col justify-between bg-white max-w-max drop-shadow-xl px-4 py-4'>

            <div>
                <ul className=" flex flex-col items-start m-auto">

                    <li>
                        <Link to="/assistant/dashboard">
                            <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(1) }} className={`py-2 px-2 text-center w-56 mt-2 flex items-center justify-between rounded ${currentPath === "/assistant/dashboard"
                                ? 'text-white bg-black hover:bg-black'
                                : 'text-bg hover:bg-gray-100'
                                }`} type="button">
                                {/* <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(1) }} data-dropdown-toggle="dropdown" data-dropdown-placement="right-start" className={`py-2 px-2 text-center w-56 mt-2 flex items-center justify-between rounded ${activeButtonId === 1 ? 'text-white bg-black hover:bg-black' : 'text-bg hover:bg-gray-100'}`} type="button"> */}
                                <div className='flex items-center'>
                                    <BsBarChartFill size={20} />
                                    <span className='pl-2.5'>Dashboard</span>
                                </div>
                            </button>
                        </Link>
                    </li>

                    <li>
                        <Link to="/assistant/materials">
                            <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(2) }} className={`py-2 px-2 text-center w-56 mt-2 flex items-center justify-between rounded ${currentPath === "/assistant/materials" ? 'text-white bg-black hover:bg-black' : 'text-bg hover:bg-gray-100'}`} type="button">
                                <div className='flex items-center'>
                                    <HiColorSwatch size={20} />
                                    <span className='pl-2.5'>Materials</span>
                                </div>
                            </button>
                        </Link>
                    </li>

                    <li>
                        <Link to="/assistant/handover">
                            <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(3) }} className={`py-2 px-2 text-center w-56 mt-2 flex items-center justify-between rounded ${currentPath === "/assistant/handover" ? 'text-white bg-black hover:bg-black' : 'text-bg hover:bg-gray-100'}`} type="button">
                                <div className='flex items-center'>
                                    <HiCalendarDays size={20} />
                                    <span className='pl-2.5'>Handover</span>
                                </div>
                            </button>
                        </Link>
                    </li>

                    <li>
                        <Link to="/assistant/orders">
                            <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(4) }} className={`py-2 px-2 text-center w-56 mt-2 flex items-center justify-between rounded ${currentPath === "/assistant/orders" ? 'text-white bg-black hover:bg-black' : 'text-bg hover:bg-gray-100'}`} type="button">
                                <div className='flex items-center'>
                                    <HiShoppingCart size={20} />
                                    <span className='pl-2.5'>Orders</span>
                                </div>
                            </button>
                        </Link>
                    </li>

                    <li>
                        <Link to="/assistant/returns">
                            <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(5) }} className={`py-2 px-2 text-center w-56 mt-2 flex items-center justify-between rounded ${currentPath === "/assistant/returns" ? 'text-white bg-black hover:bg-black' : 'text-bg hover:bg-gray-100'}`} type="button">
                                <div className='flex items-center'>
                                    <TbArrowBackUp size={20} />
                                    <span className='pl-2.5'>Returns</span>
                                </div>
                            </button>
                        </Link>
                    </li>

                    <li>
                        <Link to="/assistant/profile">
                            <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(7) }} className={`py-2 px-2 text-center w-56 mt-2 flex items-center justify-between rounded ${currentPath === "/assistant/profile" ? 'text-white bg-black hover:bg-black' : 'text-bg hover:bg-gray-100'}`} type="button">
                                <div className='flex items-center'>
                                    <FaUserCircle size={20} />
                                    <span className='pl-2.5'>Profile</span>
                                </div>
                            </button>
                        </Link>
                    </li>

                </ul>
            </div>

            <div>
                <ul className=" flex flex-col items-start m-auto">

                    <li>
                        <button id="multiLevelDropdownButton" className={`py-2 px-2 text-center w-56 mt-2 flex items-center justify-between hover:bg-gray-100 rounded`} type="button">
                            <div className='flex items-center'>
                                <TbLogout size={20} />
                                <span className='pl-2.5'>Log Out</span>
                            </div>
                        </button>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default AssistantSidebar;
