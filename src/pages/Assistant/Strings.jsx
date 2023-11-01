import { useEffect, useState } from 'react'

import { getMaterials } from "../../api/materialAPI"
import CardContainer from "../../components/MaterialCard/CardContainer"
import MaterialCard from "../../components/MaterialCard/MaterialCard"


const Strings = () => {
	const [strings, setStrings] = useState([]);

	useEffect(() => {
		const fetchStringData = async () => {
			try {
				const response = await getMaterials({ materialType: "string"});
				setStrings(response.data.materials);
			} catch (error) {
				console.error("API Error:", error);
			}
		};

		fetchStringData();
	}, []);

	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold p-7">Strings</h1>
			</div>


			<CardContainer>
				{strings.map((thread, index) => {
					return (
						<MaterialCard
							image={thread.image}
							key={index}
							materialName={thread.materialName}
							supplierID={thread.supplier}
						/>
					)
				})}
			</CardContainer>
		</>
	)
}

export default Strings;