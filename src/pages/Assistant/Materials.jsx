import { Button } from "@chakra-ui/react"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getMaterials } from '../../api/materialAPI'
import DropDownFilter from '../../components/Assistant/Controls/HeaderDropDown'
import SearchBox from '../../components/Assistant/Controls/HeaderSearchBox'
import Pagination from '../../components/Assistant/Controls/Pagination'
import MaterialStockUpdateForm from "../../components/Assistant/Forms/MaterialUpdateForm"


const Materials = () => {
    const [materials, setMaterials] = useState([]);
    const [filteredMaterials, setFilteredMaterials] = useState([]);

    const [isStockUpdate, updateMatStock] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState({
        code: null,
        name: null,
    });

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;


    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                const response = await getMaterials();
                setMaterials(response.data.materials);
                setFilteredMaterials(response.data.materials);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMaterials();
    }, []);

    const handleFormOpen = (materialCode, materialName) => {
        setSelectedMaterial({ code: materialCode, name: materialName });
        updateMatStock(true);
    };

    const handleFormClose = () => {
        setSelectedMaterial({ code: null, name: null });
        updateMatStock(false);
    };

    const handleSearch = (searchText) => {
        const filtered = materials.filter((order) => {
            const matName = order.materialName;
            return matName.toLowerCase().includes(searchText.toLowerCase());
        });

        setFilteredMaterials(filtered);
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
                            <SearchBox onSearch={handleSearch} type={"material name"} />
                        </div>
                        <div>
                            <DropDownFilter />
                        </div>
                    </div>
                </div>
                <div>
                    <table className="">
                        <thead className=" text-left text-sm font-medium border-b-2 border-gray-200 text-gray-400 w-full">
                            <tr className="py-4">
                                <th className="py-3 w-72">
                                    Material
                                </th>
                                <th className="py-3 w-72">
                                    Material Name
                                </th>
                                <th className="py-3 w-72">
                                    Color
                                </th>
                                <th className="py-3 w-60">
                                    Unit Price
                                </th>
                                <th className="py-3 w-60">
                                    Current Stock
                                </th>
                                <th className="py-3 w-60">
                                    Stock Update
                                </th>
                            </tr>
                        </thead>
                        <tbody className=" text-left text-md font-medium text-gray-400 w-full">
                            {filteredMaterials.length === 0 ? <tr> No data to display </tr> :
                            filteredMaterials.slice(startIndex, endIndex).map((item, index) => (
                                <tr key={index} className="items-center text-centers border-b-2 hover:bg-gray-300 text-black whitespace-nowrap font-medium w-full">
                                    <td className="py-4 w-72 hidden"> <Link to={`${item.materialCode}`}>{item.materialCode}</Link></td>
                                    <td className="py-4 w-72"><img src={item.image} alt="Material Image" /></td>
                                    <td className="py-4 w-72">{item.materialName}</td>
                                    <td className="py-4 w-60">{item.color}</td>
                                    <td className="py-4 w-60">{item.unitPrice}</td>
                                    <td className="py-4 w-60">{item.quantity}</td>
                                    <td className="py-4 w-60">
                                        <Button
                                            _hover={{
                                                bg: '#6B9DCA',
                                                textColor: 'white'
                                            }}
                                            bg={'#BEE7FF80'}
                                            border={'1px'}
                                            borderColor={'#6B9DCA'}
                                            height={'2rem'}
                                            onClick={handleFormOpen}
                                            textColor={'#6B9DCA'}
                                            width={'5.5rem'}>
                                            Update
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className=" flex justify-between">
                        <div className=" py-3 text-sm font-medium text-neutral-400">
                            Showing data {startIndex + 1} to {endIndex} of {filteredMaterials.length} entries
                        </div>
                        <div className=" py-3">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={Math.ceil(materials.length / recordsPerPage)}
                                onPageChange={(newPage) => setCurrentPage(newPage)}
                            />
                        </div>
                </div>
            </div>

            <div className={`relative  ${isStockUpdate ? "block" : "hidden"}`}>
                <MaterialStockUpdateForm
                    isOpen={isStockUpdate}
                    onClose={handleFormClose}
                    materialCode={selectedMaterial.code}
                    materialName={selectedMaterial.name}
                />
            </div>
        </div>
    )
}

export default Materials