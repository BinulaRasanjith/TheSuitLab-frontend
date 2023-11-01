import { useEffect } from "react";
import { MdDoneOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { MATERIAL_IMAGES_URL } from "../../../config/config";
import { FABRIC_PATTERN } from "../../../constants";
import { selectJacket, setJacket } from "../../../store/slices/jacketCustomizationSlice";
import {
	selectFabricPattern,
	setMaterials,
} from "../../../store/slices/materialSlice";
import Container from "./Container";

const MaterialsFabricPattern = () => {
	const dispatch = useDispatch();

	const materials = useSelector(selectFabricPattern);
	const patternSelected = useSelector(selectJacket).fabric;


	useEffect(() => {
		dispatch(setMaterials(FABRIC_PATTERN));
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
								onClick={() =>
									dispatch(setJacket({ fabric: material.materialCode }))
								}
							// className={`${patternSelected === material.materialCode ? "border-4 border-green-600 rounded-lg" : ""
							// 	}`}
							>
								<div className="flex flex-col border-black-2 border rounded-lg items-center justify-center gap-y-2 cursor-pointer shadow-lg relative">
									{patternSelected === material.materialCode && (
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
										<p>{material.materialName}</p>

									</div>
								</div>
								<p className="text-sm font-semibold">Unit Price: Rs.{material.unitPrice}</p> {/* TODO: Add currency */}
							</div>
						);
					})}
			</Container>
		</div>
	);
};

export default MaterialsFabricPattern;
