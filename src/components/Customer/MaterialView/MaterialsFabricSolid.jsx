import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MATERIAL_IMAGES_URL } from "../../../config/config";
import { FABRIC_SOLID } from "../../../constants";
import { setJacket, selectJacket } from "../../../store/slices/jacketCustomizationSlice";
import {
	selectFabricSolid,
	setMaterials,
} from "../../../store/slices/materialSlice";
import Container from "./Container";
import {MdDoneOutline} from "react-icons/md";



const MaterialsFabricSolid = () => {

	const dispatch = useDispatch();
	const fabricSelected = useSelector(selectJacket).fabric;
	const materials = useSelector(selectFabricSolid);

	useEffect(() => {
		dispatch(setMaterials(FABRIC_SOLID));
	}, [dispatch]);

	return (
		<div className="flex flex-col">
			<span className="flex text-2xl font-bold p-5">Choose Material</span>
			<Container>
				{materials &&
					materials.map((material, index) => {
						return (

							<div
								key={index}
								onClick={() => {
									dispatch(setJacket({ fabric: material.materialCode }))
								}}
								// className={`${fabricSelected === material.materialCode ? "border-4 border-green-600 rounded-lg" : ""
								// 	}`}
							>
								<div className="flex rounded-lg flex-col items-center justify-center gap-y-2 cursor-pointer relative shadow-lg">
									{fabricSelected === material.materialCode && (
										<div className="absolute z-5 top-2 right-2">
											<MdDoneOutline size={24} color="white" />
										</div>
									)}
									<img
										className="h-24 w-full rounded-lg"
										src={`${MATERIAL_IMAGES_URL}/${material.image}`}
										alt={material.materialCode}
									/>
									<div className="absolute text-white font-bold">
										<p >{material.materialName}</p>
										{/* <p>Unit Price: Rs. {material.unitPrice}</p> TODO: Add currency */}
									</div>
								</div>
								<p className="text-sm font-semibold">Unit Price: Rs.{material.unitPrice}</p>
							</div>
						);
					})}
			</Container>
		</div>
	);
};

export default MaterialsFabricSolid;
