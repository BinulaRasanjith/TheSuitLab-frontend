import { useState } from 'react'

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
            <ul className=" flex flex-col items-start">
                <li>
                    <button className={`py-2 px-2 text-center w-44 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 1 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} data-dropdown-placement="right-start" data-dropdown-toggle="dropdown" id="multiLevelDropdownButton" onClick={() => { handleToggleClick(1) }} type="button">
                        <div className='flex items-center'>
                            <ion-icon className="mr-4" src="https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/ionicons/svg/document-outline.svg"></ion-icon>
                            <span className='pl-2.5'>Lookbooks</span>
                        </div>
                        <svg aria-hidden="true" className={`w-2.5 h-2.5 transform ${activeButtonId === 1 ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="m1 9 4-4-4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </button>
                    {activeButtonId === 1 && (<div className="shadow w-44 py-2 bg-white divide-y divide-gray-100" id="dropdown">
                        <ul aria-labelledby="multiLevelDropdownButton" className=" text-md text-bg">
                            <li className={`rounded ${selected === "Shoes" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Shoes") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Shoes</a>
                            </li>
                            <li className={`rounded ${selected === "Belts" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Belts") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Belts</a>
                            </li>
                            <li className={`rounded ${selected === "Bow-ties" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Bow-ties") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Bow ties</a>
                            </li>

                        </ul>
                    </div>)}

                </li>
                <li>
                    <button className={`py-2 px-2 text-center w-44 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 2 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} data-dropdown-placement="right-start" data-dropdown-toggle="dropdown" id="multiLevelDropdownButton" onClick={() => { handleToggleClick(2) }} type="button">
                        <div className='flex items-center'>
                            <ion-icon className="text-bg" src="https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/ionicons/svg/brush-outline.svg"></ion-icon>
                            <span className='pl-2.5'>Custom Suits</span>

                        </div>
                        <svg aria-hidden="true" className={`w-2.5 h-2.5 transform ${activeButtonId === 2 ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="m1 9 4-4-4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </button>
                    {activeButtonId === 2 && (<div className="py-2 shadow w-44 bg-white divide-y divide-gray-100" id="dropdown">
                        <ul aria-labelledby="multiLevelDropdownButton" className=" text-md text-bg">
                            <li className={`rounded ${selected === "Shoes" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Shoes") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Shoes</a>
                            </li>
                            <li className={`rounded ${selected === "Belts" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Belts") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Belts</a>
                            </li>
                            <li className={`rounded ${selected === "Bow-ties" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Bow-ties") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Bow ties</a>
                            </li>

                        </ul>
                    </div>)}
                </li>
                <li>
                    <button className={`py-2 px-2 text-center w-44 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 3 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} data-dropdown-placement="right-start" data-dropdown-toggle="dropdown" id="multiLevelDropdownButton" onClick={() => { handleToggleClick(3) }} type="button">
                        <div className='flex items-center'>
                            <ion-icon className="text-bg mr-4" src="https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/ionicons/svg/cut-outline.svg"></ion-icon>
                            <span className='pl-2.5'>Accessories</span>
                        </div>
                        <svg aria-hidden="true" className={`w-2.5 h-2.5 transform ${activeButtonId === 3 ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="m1 9 4-4-4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </button>
                    {activeButtonId === 3 && (<div className="py-2shadow w-44 bg-white divide-y divide-gray-100" id="dropdown">
                        <ul aria-labelledby="multiLevelDropdownButton" className=" text-md text-bg">
                            <li className={`rounded ${selected === "Shoes" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Shoes") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Shoes</a>
                            </li>
                            <li className={`rounded ${selected === "Belts" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Belts") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Belts</a>
                            </li>
                            <li className={`rounded ${selected === "Bow-ties" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Bow-ties") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Bow ties</a>
                            </li>

                        </ul>
                    </div>)}
                </li>
                <li>
                    <button className={`py-2 px-2 text-center w-44 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 4 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} data-dropdown-placement="right-start" data-dropdown-toggle="dropdown" id="multiLevelDropdownButton" onClick={() => { handleToggleClick(4) }} type="button">
                        <div className='flex items-center'>
                            <ion-icon className="text-bg mr-4" src="https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/ionicons/svg/people-outline.svg"></ion-icon>
                            <span className='pl-2.5'>About Us</span>
                        </div>
                        <svg aria-hidden="true" className={`w-2.5 h-2.5 transform ${activeButtonId === 4 ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="m1 9 4-4-4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </button>
                    {activeButtonId === 4 && (<div className="py-2 shadow w-44 bg-white divide-y divide-gray-100" id="dropdown">
                        <ul aria-labelledby="multiLevelDropdownButton" className=" text-md text-bg">
                            <li className={`rounded ${selected === "Shoes" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Shoes") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Shoes</a>
                            </li>
                            <li className={`rounded ${selected === "Belts" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Belts") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Belts</a>
                            </li>
                            <li className={`rounded ${selected === "Bow-ties" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Bow-ties") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Bow ties</a>
                            </li>

                        </ul>
                    </div>)}
                </li>

                <li>
                    <button className={`py-2 px-2 text-center w-44 flex items-center justify-between hover:bg-gray-100 rounded ${activeButtonId === 5 ? 'text-white bg-black hover:bg-black' : 'text-bg'}`} data-dropdown-placement="right-start" data-dropdown-toggle="dropdown" id="multiLevelDropdownButton" onClick={() => { handleToggleClick(5) }} type="button">
                        <div className='flex items-center'>
                            <ion-icon className="text-bg mr-4" src="https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/ionicons/svg/person-circle-outline.svg"></ion-icon>
                            <span className='pl-2.5'>Profile</span>
                        </div>
                        <svg aria-hidden="true" className={`w-2.5 h-2.5 transform ${activeButtonId === 5 ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="m1 9 4-4-4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </button>
                    {activeButtonId === 5 && (<div className="py-2 shadow w-44 bg-white divide-y divide-gray-100" id="dropdown">
                        <ul aria-labelledby="multiLevelDropdownButton" className=" text-md text-bg">
                            <li className={`rounded ${selected === "Shoes" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Shoes") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Shoes</a>
                            </li>
                            <li className={`rounded ${selected === "Belts" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Belts") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Belts</a>
                            </li>
                            <li className={`rounded ${selected === "Bow-ties" ? "border-l-4 border-black rounded font-bold" : ""}`} onClick={() => { setSelected("Bow-ties") }}>
                                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Bow ties</a>
                            </li>

                        </ul>
                    </div>)}


                </li>


            </ul>
        </div>
    )
}

export default Sidebar2;