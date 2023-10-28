import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { getMaterials } from "../../api/materialAPI";
import MaterialRecord from "./MaterialRecord";

const MaterialsRecords = ({ onOpen }) => {

	const [materials, setMaterialData] = useState([]);

    useEffect(() => {
        const fetchMaterialData = async () => {
            try {
                const response = await getMaterials();
                setMaterialData(response.data.materials);
            } catch (error) {
                console.error("API Error:", error);
            }
        };
    
        fetchMaterialData();
    }, []);


    return (
        <div className="flex flex-col gap-6">
            {materials.map((item, index) => (
                <MaterialRecord
                    key={index}
                    MaterialImage={item.image}
                    MaterialName={item.materialName}
                    // MaterialCode={item.materialCode}
                    UnitPrice={item.unitPrice}
                    Color={item.color}
                    ColorCode={item.colorCode}
                    onOpen={() => onOpen(item.materialCode, item.materialName)}
                />
            ))}
        </div>
    );
};

MaterialsRecords.propTypes = {
    onOpen: PropTypes.func.isRequired,
};

export default MaterialsRecords;