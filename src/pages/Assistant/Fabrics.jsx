import { useEffect, useState } from 'react'

import { getMaterials } from "../../api/materialAPI"
import CardContainer from "../../components/MaterialCard/CardContainer"
import MaterialCard from "../../components/MaterialCard/MaterialCard"


const Fabrics = () => {
	const [fabrics, setFabrics] = useState([]);

	useEffect(() => {
		const fetchButtonData = async () => {
			try {
				const response = await getMaterials("fabric");
				setFabrics(response.data.materials);
			} catch (error) {
				console.error("API Error:", error);
			}
		};

		fetchButtonData();
	}, []);

	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold p-7">Fabrics</h1>
			</div>


			<CardContainer>
				{fabrics.map((fabric, index) => {
					return (
						<MaterialCard
							image={fabric.image}
							key={index}
							materialName={fabric.materialName}
							supplierID={fabric.supplier}
						/>
					)
				})}
			</CardContainer>
		</>
	)
}

export default Fabrics;