import DropDownFilter from '../../../components/Assistant/Controls/HeaderDropDown'
import SearchBox from '../../../components/Assistant/Controls/HeaderSearchBox'
import Pagination from '../../../components/Assistant/Controls/Pagination'
import Records from "../../../components/OrderItems/Records"
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import React, { useState } from 'react';


const AllOrders = () => {

    const navigate = useNavigate();
    const [sortByPrice, setSortByPrice] = useState(null);
    const [selectedOption, setSelectedOption] = useState('fabrics');
    const handleBack = () => {
        navigate("/tailor");
    };

    return (
        <>
            <div className="flex flex-row">
                <div className="flex-auto">
                    <div className='flex flex-col '>
                        <div className='flex-col mt-8 shadow-lg sm:rounded-lg'>
                            <div className="flex items-center gap-4 pt-2 justify-around">
                                <button
                                    onClick={handleBack}
                                    className=" ml-3 flex items-center gap-2 text-primary"
                                >
                                    <IoArrowBackCircle className="text-3xl cursor-pointer" />
                                </button>
                                <h1 className=' text-2xl font-semibold'>Assigned Orders</h1>
                            
                                <div className=" ml-32 flex">
                                    <label className="sr-only">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        </div>
                                        <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-3xl w-60
                                            focus:border-gray-400 " placeholder="Search" />
                                    </div>
                                </div>
                                <div className="ml-32 flex gap-x-1 w-40 ">
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

                            <div><Records /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllOrders