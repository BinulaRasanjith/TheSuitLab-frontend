// import { Button } from "@chakra-ui/react"
import { useEffect, useState } from 'react'
// import { AiFillPlusCircle } from 'react-icons/ai'

import { getMaterials } from "../../api/materialAPI"
import CardContainer from "../../components/MaterialCard/CardContainer"
import MaterialCard from "../../components/MaterialCard/MaterialCard"


const Interlinings = () => {
	const [interlinings, setInterlinings] = useState([]);

	useEffect(() => {
		const fetchButtonData = async () => {
			try {
				const response = await getMaterials({ materialType: "interlining"});
				setInterlinings(response.data.materials);
			} catch (error) {
				console.error("API Error:", error);
			}
		};

		fetchButtonData();
	}, []);

	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold p-7">Interlinings</h1>
			</div>


			<CardContainer>
				{interlinings.map((interlining, index) => {
					return (
						<MaterialCard
							image={interlining.image}
							key={index}
							materialName={interlining.materialName}
							supplierID={interlining.supplier}
						/>
					)
				})}
			</CardContainer>
		</>
	)
}

export default Interlinings;