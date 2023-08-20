import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MATERIAL_IMAGES_URL } from "../../../config/config";
import { FABRIC } from "../../../constants";
import { setJacket } from "../../../store/slices/jacketCustomizationSlice";
import {
	selectFabrics,
	setMaterials,
} from "../../../store/slices/materialSlice";
import Container from "./Container";

const Materials_ViewAll = () => {
	const dispatch = useDispatch();

	const materials = useSelector(selectFabrics);

	useEffect(() => {
		dispatch(setMaterials(FABRIC));
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
							<p>{material.materialCode}</p>
						</div>
					);
				})}
		</Container>
	);
};

export default Materials_ViewAll;
