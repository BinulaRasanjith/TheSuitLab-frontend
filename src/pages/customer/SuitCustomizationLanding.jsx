import { useState } from 'react';

import Handsome from '../../assets/images/portrait-handsome-fashion-stylish-hipster-businessman-model-dressed-elegant-blue-suit-posing-gray 1.png'


const SuitCustomizationLanding = () => {


    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div>
            <img alt="" className="h-screen w-screen relative" src={Handsome} />
            <div className='flex flex-col items-start absolute top-20 left-2 md:left-10'>
                <h1 className='text-4xl md:text-6xl text-white font-bold pb-3 md:p-10'>Custom Suits</h1>
                <div className='text-white pb-5 md:px-10 w-full md:w-96 float-left'>100% Made to Measure Suits
                    Are you looking for a custom suit that will make you look
                    stunning and express your personal style to the fullest?
                    Our suits are not only high-quality but they are also hand
                    tailored to your measurements. Choose from more than 150
                    fabrics and various details and design your own outfit.</div>

                <button className="md:mx-10 border-2 border-black font-bold text-black bg-transparent rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-44" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" id="dropdownHoverButton" onClick={toggleDropdown} type="button">Dropdown hover <svg aria-hidden="true" className="w-2.5 h-2.5 ml-2.5" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                    <path d="m1 1 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg></button>

                <div className={`md:mx-10 ${isOpen ? 'opacity-100' : 'opacity-0'
                    } z-10 border-2 mt-5 font-bold border-black bg-transparent rounded-lg shadow w-44 transition-opacity duration-300`} id="dropdownHover">
                    <ul aria-labelledby="dropdownHoverButton" className="py-2 text-sm text-black">
                        <li>
                            <a className="block px-4 py-2 hover:bg-gray-100" href="#">Dashboard</a>
                        </li>
                        <li>
                            <a className="block px-4 py-2 hover:bg-gray-100" href="#">Settings</a>
                        </li>
                        <li>
                            <a className="block px-4 py-2 hover:bg-gray-100" href="#">Earnings</a>
                        </li>
                        <li>
                            <a className="block px-4 py-2 hover:bg-gray-100" href="#">Sign out</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SuitCustomizationLanding