// import { Button } from "@chakra-ui/react"
import { useEffect, useState } from 'react'
// import { AiFillPlusCircle } from 'react-icons/ai'

import { getMaterials } from "../../api/materialAPI"
import CardContainer from "../../components/MaterialCard/CardContainer"
import MaterialCard from "../../components/MaterialCard/MaterialCard"


const Buttons = () => {
	const [buttons, setButtons] = useState([]);

	useEffect(() => {
		const fetchButtonData = async () => {
			try {
				const response = await getMaterials({ materialType: "button" });
				setButtons(response.data.materials);
			} catch (error) {
				console.error("API Error:", error);
			}
		};

		fetchButtonData();
	}, []);

	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold p-7">Buttons</h1>
			</div>


			<CardContainer>
				{buttons.map((button, index) => {
					return (
						<MaterialCard
							image={button.image}
							key={index}
							materialName={button.materialName}
							supplierID={button.supplierID}
						/>
					)
				})}
			</CardContainer>
		</>
	)
}

export default Buttons;