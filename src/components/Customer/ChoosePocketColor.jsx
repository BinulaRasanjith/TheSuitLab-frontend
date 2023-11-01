
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

import None from '../../assets/images/button_colors/None.png'
import { MATERIAL_IMAGES_URL } from '../../config/config'
import { FABRIC_PATTERN } from "../../constants";
import { FABRIC_SOLID } from '../../constants'
import { setJacket, selectJacket } from '../../store/slices/jacketCustomizationSlice'
import {
    selectFabricPattern,
    selectFabricSolid,
    setMaterials
} from '../../store/slices/materialSlice'
import { setRotation } from "../../store/slices/rotationHandleSlice"
import Container from './MaterialView/Container'
import { MdDoneOutline } from "react-icons/md";


const ChoosePocketColor = () => {
    const dispatch = useDispatch();
    const pocketColorSelected = useSelector(selectJacket).pocketColor;
    const location = useLocation();

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
                <div onClick={() => {
                    dispatch(setJacket({ pocketColor: null }))
                    if (location.pathname.includes('pant')) {
                        dispatch(setRotation(Math.PI));
                    } else {
                        dispatch(setRotation(2 * Math.PI));
                    }

                }} className='flex relative flex-col justify-center items-center text-black font-bold border-black-2 border rounded-lg h-24 shadow-lg'>
                    {pocketColorSelected === null && (
                        <div className="absolute z-5 top-2 right-2">
                            <MdDoneOutline size={24} color="black" />
                        </div>
                    )}
                    <img alt="" className="pb-3 h-24" src={None} />
                    <label className='text-sm mb-2'>None</label>
                </div>
                {materials &&
                    materials.map((material, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => {
                                    dispatch(setJacket({ pocketColor: material.materialCode }))
                                    if (location.pathname.includes('pant')) {
                                        dispatch(setRotation(Math.PI));
                                    } else {
                                        dispatch(setRotation(2 * Math.PI));
                                    }
                                }
                                }   
                            >
                                <div className="flex rounded-lg flex-col items-center justify-center gap-y-2 cursor-pointer relative shadow-lg">
                                    {pocketColorSelected === material.materialCode && (
                                        <div className="absolute z-5 top-0 right-2">
                                            <MdDoneOutline size={24} color="white" />
                                        </div>
                                    )}
                                    <img
                                        className="h-24 w-full font-bold rounded-lg text-white"
                                        src={`${MATERIAL_IMAGES_URL}/${material.image}`}
                                        alt={material.materialCode}
                                    />
                                    <div className="absolute text-white font-bold">
                                        <p>{material.materialName}</p>
                                        {/* <p>Unit Price: Rs.{material.unitPrice}</p> TODO: Add currency */}
                                    </div>
                                </div>
                                <p className="text-sm font-semibold" >Unit Price: Rs.{material.unitPrice}</p> {/* TODO: Add currency */}
                            </div>
                        );
                    })}

            </Container>
        </div>


    )
}

export default ChoosePocketColor