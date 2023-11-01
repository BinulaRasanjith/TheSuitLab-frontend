// import { Button } from "@chakra-ui/react"
import { useEffect, useState } from 'react'
// import { AiFillPlusCircle } from 'react-icons/ai'

import { getMaterials } from "../../api/materialAPI"
import CardContainer from "../../components/MaterialCard/CardContainer"
import MaterialCard from "../../components/MaterialCard/MaterialCard"


const Zippers = () => {
	const [zippers, setZippers] = useState([]);

	useEffect(() => {
		const fetchZipperData = async () => {
			try {
				const response = await getMaterials({ materialType: "zipper"});
				setZippers(response.data.materials);
			} catch (error) {
				console.error("API Error:", error);
			}
		};

		fetchZipperData();
	}, []);

	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold p-7">Zippers</h1>
			</div>


			<CardContainer>
				{zippers.map((zipper, index) => {
					return (
						<MaterialCard
							image={zipper.image}
							key={index}
							materialName={zipper.materialName}
							supplierID={zipper.supplierID}
						/>
					)
				})}
			</CardContainer>
		</>
	)
}

export default Zippers;