import { Button } from "@chakra-ui/react"
import { useEffect, useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'

import { getMaterials } from "../../api/materialAPI"
import CardContainer from "../../components/MaterialCard/CardContainer"
import MaterialCard from "../../components/MaterialCard/MaterialCard"


// const buttons = [
// 	{
// 		buttonName: '10 mm Brass metal 4 hole',
// 		supplierID: 'S009',
// 		image: img1
// 	},
// ]

const Buttons = () => {
	const [buttons, setButtons] = useState([]);

	useEffect(() => {
		const fetchButtonData = async () => {
			try {
				const response = await getMaterials();
				setButtons(response.data.materials);
				console.log(response.data);
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
				<Button
					_hover={
						{
							bgColor: 'primary.100',
							color: 'primary.200'
						}
					}
					bgColor={'primary.100'}
					color={'primary.200'}
					leftIcon={<AiFillPlusCircle />}
					m={7}
					rounded={'full'}

				>
					Add new
				</Button>
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