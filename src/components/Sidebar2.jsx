import React, { useState } from 'react'

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
        <div className=' bg-white max-w-max drop-shadow-2xl px-4 pt-20'>
            <ul className=" flex flex-col items-start m-auto">
                <li>
                    <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(1) }} data-dropdown-toggle="dropdown" data-dropdown-placement="right-start" className={`py-2 px-2 text-center w-44 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 1 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} type="button">
                        <div className='flex items-center'>
                            <ion-icon src="https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/ionicons/svg/document-outline.svg" className="mr-4"></ion-icon>
                            <span className='pl-2.5'>Lookbooks</span>
                        </div>
                        <svg className={`w-2.5 h-2.5 transform ${activeButtonId === 1 ? 'rotate-90' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </button>
                    {activeButtonId === 1 && (<div id="dropdown" className="shadow w-44 py-2 bg-white divide-y divide-gray-100">
                        <ul className=" text-md text-bg" aria-labelledby="multiLevelDropdownButton">
                            <li className={`rounded ${selected === "Shoes" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Shoes") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Shoes</a>
                            </li>
                            <li className={`rounded ${selected === "Belts" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Belts") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Belts</a>
                            </li>
                            <li className={`rounded ${selected === "Bow-ties" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Bow-ties") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Bow ties</a>
                            </li>

                        </ul>
                    </div>)}

                </li>
                <li>
                    <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(2) }} data-dropdown-toggle="dropdown" data-dropdown-placement="right-start" className={`py-2 px-2 text-center w-44 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 2 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} type="button">
                        <div className='flex items-center'>
                            <ion-icon src="https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/ionicons/svg/brush-outline.svg" className="text-bg"></ion-icon>
                            <span className='pl-2.5'>Custom Suits</span>

                        </div>
                        <svg className={`w-2.5 h-2.5 transform ${activeButtonId === 2 ? 'rotate-90' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </button>
                    {activeButtonId === 2 && (<div id="dropdown" className="py-2 shadow w-44 bg-white divide-y divide-gray-100">
                        <ul className=" text-md text-bg" aria-labelledby="multiLevelDropdownButton">
                            <li className={`rounded ${selected === "Shoes" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Shoes") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Shoes</a>
                            </li>
                            <li className={`rounded ${selected === "Belts" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Belts") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Belts</a>
                            </li>
                            <li className={`rounded ${selected === "Bow-ties" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Bow-ties") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Bow ties</a>
                            </li>

                        </ul>
                    </div>)}
                </li>
                <li>
                    <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(3) }} data-dropdown-toggle="dropdown" data-dropdown-placement="right-start" className={`py-2 px-2 text-center w-44 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 3 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} type="button">
                        <div className='flex items-center'>
                            <ion-icon src="https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/ionicons/svg/cut-outline.svg" className="text-bg mr-4"></ion-icon>
                            <span className='pl-2.5'>Accessories</span>
                        </div>
                        <svg className={`w-2.5 h-2.5 transform ${activeButtonId === 3 ? 'rotate-90' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </button>
                    {activeButtonId === 3 && (<div id="dropdown" className="py-2shadow w-44 bg-white divide-y divide-gray-100">
                        <ul className=" text-md text-bg" aria-labelledby="multiLevelDropdownButton">
                            <li className={`rounded ${selected === "Shoes" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Shoes") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Shoes</a>
                            </li>
                            <li className={`rounded ${selected === "Belts" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Belts") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Belts</a>
                            </li>
                            <li className={`rounded ${selected === "Bow-ties" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Bow-ties") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Bow ties</a>
                            </li>

                        </ul>
                    </div>)}
                </li>
                <li>
                    <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(4) }} data-dropdown-toggle="dropdown" data-dropdown-placement="right-start" className={`py-2 px-2 text-center w-44 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 4 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} type="button">
                        <div className='flex items-center'>
                            <ion-icon src="https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/ionicons/svg/people-outline.svg" className="text-bg mr-4"></ion-icon>
                            <span className='pl-2.5'>About Us</span>
                        </div>
                        <svg className={`w-2.5 h-2.5 transform ${activeButtonId === 4 ? 'rotate-90' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </button>
                    {activeButtonId === 4 && (<div id="dropdown" className="py-2 shadow w-44 bg-white divide-y divide-gray-100">
                        <ul className=" text-md text-bg" aria-labelledby="multiLevelDropdownButton">
                            <li className={`rounded ${selected === "Shoes" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Shoes") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Shoes</a>
                            </li>
                            <li className={`rounded ${selected === "Belts" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Belts") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Belts</a>
                            </li>
                            <li className={`rounded ${selected === "Bow-ties" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Bow-ties") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Bow ties</a>
                            </li>

                        </ul>
                    </div>)}
                </li>

                <li>
                    <button id="multiLevelDropdownButton" onClick={() => { handleToggleClick(5) }} data-dropdown-toggle="dropdown" data-dropdown-placement="right-start" className={`py-2 px-2 text-center w-44 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 5 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} type="button">
                        <div className='flex items-center'>
                            <ion-icon src="https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/ionicons/svg/person-circle-outline.svg" className="text-bg mr-4"></ion-icon>
                            <span className='pl-2.5'>Profile</span>
                        </div>
                        <svg className={`w-2.5 h-2.5 transform ${activeButtonId === 5 ? 'rotate-90' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </button>
                    {activeButtonId === 5 && (<div id="dropdown" className="py-2 shadow w-44 bg-white divide-y divide-gray-100">
                        <ul className=" text-md text-bg" aria-labelledby="multiLevelDropdownButton">
                            <li className={`rounded ${selected === "Shoes" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Shoes") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Shoes</a>
                            </li>
                            <li className={`rounded ${selected === "Belts" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Belts") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Belts</a>
                            </li>
                            <li className={`rounded ${selected === "Bow-ties" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Bow-ties") }}>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Bow ties</a>
                            </li>

                        </ul>
                    </div>)}


                </li>


            </ul>
        </div>
    )
}

export default Sidebar2;