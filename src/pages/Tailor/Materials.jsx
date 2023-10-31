import React, { useState } from 'react';
import { Button } from "@chakra-ui/react";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoArrowBackCircle } from "react-icons/io5";
import FabricListComponent from '../../components/FabricData';
import ButtonListComponent from '../../components/ButtonData';
import StringListComponent from '../../components/StringData';
import { useLocation, useNavigate } from "react-router-dom";


const ViewMaterials = () => {

    const [sortByPrice, setSortByPrice] = useState(null);
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    const [selectedOption, setSelectedOption] = useState('fabrics');
    const handleBack = () => {
        navigate("/tailor");
    };

    return (
        <>
            <div className="flex flex-row">
                <div className="flex-auto">
                    <div className='flex flex-col '>
                        <div className='flex-col mt-3 shadow-lg sm:rounded-lg'>
                            <div className='flex flex-col m-8 sm:rounded-full'>
                                {/* back  button */}
                                <div className="flex items-center gap-4 pt-2 justify-around">
                                    <button
                                        onClick={handleBack}
                                        className="flex items-center gap-2 text-primary"
                                    >
                                        <IoArrowBackCircle className="text-3xl cursor-pointer" />
                                    </button>
                                    <h1 className=' text-3xl font-semibold justify-start'>Materials</h1>
                                    <div className=" ml-9 flex">
                                        <select
                                            className=" p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                            onChange={(e) => setSelectedOption(e.target.value)}
                                            value={selectedOption}>
                                            <option value="fabrics">Fabrics</option>
                                            <option value="buttons">Buttons</option>
                                            <option value="strings">Strings</option>
                                        </select>
                                    </div>
                                    <div className=" ml-32 flex">
                                        <label className="sr-only">Search</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            </div>
                                            <input
                                                type="text"
                                                id="table-search"
                                                className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-3xl w-60 focus:border-gray-400"
                                                placeholder="Search"
                                                value={searchInput}
                                                onChange={(e) => setSearchInput(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-32 flex w-40 ">
                                        <span className=" flex w-full items-center">Sort Price</span>
                                        <select id="Sort" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                            onChange={(e) => setSortByPrice(e.target.value)}
                                            value={sortByPrice}>
                                            <option value="">All</option>
                                            <option value="ASC">ASC</option>
                                            <option value="DSC">DSC</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-row ml-4">
                                </div>

                                <div>
                                    {/* {selectedOption === 'fabrics' && <FabricListComponent sortByPrice={sortByPrice} />}
                                    {selectedOption === 'buttons' && <ButtonListComponent sortByPrice={sortByPrice} />}
                                    {selectedOption === 'strings' && <StringListComponent sortByPrice={sortByPrice} />} */}
                                    {selectedOption === 'fabrics' && <FabricListComponent searchInput={searchInput} sortByPrice={sortByPrice} />}
                                    {selectedOption === 'buttons' && <ButtonListComponent searchInput={searchInput} sortByPrice={sortByPrice} />}
                                    {selectedOption === 'strings' && <StringListComponent searchInput={searchInput} sortByPrice={sortByPrice} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewMaterials;