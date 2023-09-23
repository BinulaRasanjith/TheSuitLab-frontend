
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import None from '../../assets/images/button_colors/None.png'
import { MATERIAL_IMAGES_URL } from '../../config/config'
import { FABRIC_SOLID } from '../../constants'
import { FABRIC_PATTERN } from "../../constants";
import { setJacket } from '../../store/slices/jacketCustomizationSlice'
import {
    selectFabricPattern,
    selectFabricSolid,
    setMaterials
} from '../../store/slices/materialSlice'
import Container from './MaterialView/Container'


const ChoosePocketColor = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMaterials(FABRIC_PATTERN));
        dispatch(setMaterials(FABRIC_SOLID));
    }, [dispatch]);


    const solidMaterials = useSelector(selectFabricSolid);
    const patternMaterials = useSelector(selectFabricPattern);

    const materials = solidMaterials.concat(patternMaterials);


    return (

        <div className='p-5 flex flex-col'>
            <span className="p-5 text-2xl font-bold">Choose Pocket Color</span>
            <Container>
                <div onClick={() => dispatch(setJacket({ pocketColor: null }))} className='flex p-2 flex-col justify-center items-center'>
                    <img alt="" className="pb-3 h-24" src={None} />
                    <label className='text-sm'>None</label>
                </div>
                {materials &&
                    materials.map((material, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() =>
                                    dispatch(setJacket({ pocketColor: material.materialCode }))
                                }
                                className="flex flex-col justify-center items-center cursor-pointer"
                            >
                                <img
                                    className="h-24"
                                    src={`${MATERIAL_IMAGES_URL}/${material.image}`}
                                    alt={material.materialCode}
                                />
                                <p>{material.materialName}</p>
                                <p>Rs. {material.unitPrice}</p> {/* TODO: Add currency */}
                            </div>
                        );
                    })}

            </Container>
        </div>


    )
}

export default ChoosePocketColor