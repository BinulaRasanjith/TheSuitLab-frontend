import { useState } from 'react'

import DropDownFilter from '../../components/Assistant/Controls/HeaderDropDown'
import SearchBox from '../../components/Assistant/Controls/HeaderSearchBox'
import Pagination from '../../components/Assistant/Controls/Pagination'
import MaterialStockUpdateForm from "../../components/Assistant/Forms/MaterialUpdateForm"
import MaterialItems from '../../components/Assistant/MaterialItemSet'

const Materials = () => {
    const [isStockUpdate, updateMatStock] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState({
        image: null,
        code: null,
        name: null,
    });

    const handleFormOpen = (image, materialCode, materialName) => {
        setSelectedMaterial({image:image, code: materialCode, name: materialName });
        updateMatStock(true);
    };

    const handleFormClose = () => {
        setSelectedMaterial({ image:null, code: null, name: null });
        updateMatStock(false);
    };

    return (
        <div>
            <div className=" flex flex-col justify-between mx-10 my-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
                <div className=" flex justify-between align-middle pb-5">
                    <div className='flex flex-col'>
                        <div className=' text-2xl font-semibold'>Materials</div>
                        <div className=' text-sm font-regular text-blue-400'>Material Details</div>
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
                        <div className=" w-40 text-">Material</div>
                        <div className=" w-32 text-">Material Name</div>
                        <div className=" w-32 text-">Unit Price (per Yard)</div>
                        <div className=" w-32 text-">Color</div>
                        <div className=" w-32 text-">Color code</div>
                        <div className=" w-40">Quantity Update</div>
                    </div>
                    <div className=" w-full border h-0 mt-3 mb-6 border-gray-200"></div>

                </div>
                <div><MaterialItems onOpen={handleFormOpen} /></div>
                <div className=" flex justify-between">
                    <div className="opacity-0 py-3 text-sm font-medium text-neutral-400">Showing data 1 to 8 of 256K entries</div>
                    <div className=" py-3">
                        <Pagination />
                    </div>
                </div>
            </div>

            <div className={`relative  ${isStockUpdate ? "block" : "hidden"}`}>
				<MaterialStockUpdateForm
                    isOpen={isStockUpdate}
                    onClose={handleFormClose}
                    image={selectedMaterial.image}
                    materialCode={selectedMaterial.code}
                    materialName={selectedMaterial.name}
                    />
			</div>
        </div>
    )
}

export default Materials