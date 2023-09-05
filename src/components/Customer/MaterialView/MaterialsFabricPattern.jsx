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
		<Container>
			{materials &&
				materials.map((material, index) => {
					return (
						<div
							key={index}
							onClick={() =>
								dispatch(setJacket({ fabric: material.materialCode }))
							}
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
	);
};

export default MaterialsFabricPattern;
