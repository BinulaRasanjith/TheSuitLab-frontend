import { useState } from 'react'

import DropDownFilter from '../../components/Assistant/Controls/HeaderDropDown'
import SearchBox from '../../components/Assistant/Controls/HeaderSearchBox'
import Pagination from '../../components/Assistant/Controls/Pagination'
import MaterialStockUpdateForm from "../../components/Assistant/Forms/MaterialUpdateForm"
import MaterialItems from '../../components/Assistant/MaterialItemSet'

const Materials = () => {
    const [isStockUpdate, updateMatStock] = useState(false);

	const handleFormClose = () => {
		updateMatStock(false); // Set isNewReturnForm to false to close the form
	};

    return (
        <div>
            <div className=" flex flex-col justify-between mx-10 my-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
                <div className=" flex justify-between align-middle pb-5">
                    <div className='flex flex-col'>
                        <div className=' text-2xl font-semibold'>Materials</div>
                        <div className=' text-sm font-regular text-blue-400'>Materials should be updated</div>
                    </div>
                    <div className=" flex gap-4 align-middle">
                        <div>
                            <SearchBox />
                        </div>
                        <div>
                            <DropDownFilter />
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col">
                    <div className=' flex justify-between text-sm font-medium text-gray-400'>
                        <div className=" w-40 text-">Material Name</div>
                        <div className=" w-32 text-">Material Code</div>
                        <div className=" w-32 text-">Supplier Id</div>
                        <div className=" w-32 text-">Supplier mobile</div>
                        <div className=" w-32 text-">Last Order</div>
                        <div className=" w-40 px-10">Status</div>
                    </div>
                    <div className=" w-full border h-0 mt-3 mb-6 border-gray-200"></div>

                </div>
                <div><MaterialItems /></div>
                <div className=" flex justify-between">
                    <div className=" py-3 text-sm font-medium text-neutral-400">Showing data 1 to 8 of 256K entries</div>
                    <div className=" py-3">
                        <Pagination />
                    </div>
                </div>
            </div>

            <div className={`relative  ${isStockUpdate ? "block" : "hidden"}`}>
				<MaterialStockUpdateForm isOpen={isStockUpdate} onClose={handleFormClose} />
			</div>


            {/* <div className=" flex justify-center w-full">
                <div className=" flex flex-col justify-center h-screen">
                    <div className=" text-4xl font-semibold text-zinc-400">This materials page is under development :(</div>
                </div>
            </div> */}
        </div>
    )
}

export default Materials