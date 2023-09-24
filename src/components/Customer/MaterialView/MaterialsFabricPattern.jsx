import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MATERIAL_IMAGES_URL } from "../../../config/config";
import { FABRIC_PATTERN } from "../../../constants";
import { setJacket } from "../../../store/slices/jacketCustomizationSlice";
import {
	selectFabricPattern,
	setMaterials,
} from "../../../store/slices/materialSlice";
import Container from "./Container";

const MaterialsFabricPattern = () => {
	const dispatch = useDispatch();

	const materials = useSelector(selectFabricPattern);

	useEffect(() => {
		dispatch(setMaterials(FABRIC_PATTERN));
	}, [dispatch]);

	return (
		<div className="flex flex-col ">
			<span className="flex text-3xl font-bold p-5">Choose Material</span>
			<Container>
				{materials &&
					materials.map((material, index) => {
						return (
							<div
								key={index}
								onClick={() =>
									dispatch(setJacket({ fabric: material.materialCode }))
								}
								className="flex flex-col border-black-2 border rounded-lg items-center justify-center gap-y-2 cursor-pointer"
							>
								<img
									className="h-24 w-full rounded-lg"
									src={`${MATERIAL_IMAGES_URL}/${material.image}`}
									alt={material.materialCode}
								/>
								<div className="absolute text-white font-bold">
									<p>{material.materialName}</p>
									<p>Len: Rs. {material.unitPrice}</p> {/* TODO: Add currency */}

								</div>
							</div>
						);
					})}
			</Container>
		</div>
	);
};

export default MaterialsFabricPattern;
