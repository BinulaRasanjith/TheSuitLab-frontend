import { Button } from "@chakra-ui/react"
import { AiFillPlusCircle } from 'react-icons/ai'

import img1 from "../../assets/images/string/beige.jpg"
import img2 from "../../assets/images/string/purple.jpg"
import img3 from "../../assets/images/string/mint 1.jpg"
import img4 from "../../assets/images/string/maroon.jpg"
import img5 from "../../assets/images/string/mint 2.jpg"
import img6 from "../../assets/images/string/mint 3.jpg"
import MaterialCard from "../../components/MaterialCard/MaterialCard"
import CardContainer from "../../components/MaterialCard/CardContainer"

const string = [
	{
		buttonName: '10 mm Brass metal 4 hole',
		supplierID: 'S007',
		image: img1
	},
	{
		buttonName: '10 mm Gold metal 2 hole',
		supplierID: 'S142',
		image: img2
	},
	{
		buttonName: '8 mm black and silver 1 hole',
		supplierID: 'S453',
		image: img3
	},
	{
		buttonName: '10 mm grey & black 4 hole',
		supplierID: 'S654',
		image: img4
	},
	{
		buttonName: '8 mm black and metal 2 hole',
		supplierID: 'S110',
		image: img5
	},
	{
		buttonName: '10 mm navy & white 2 hole',
		supplierID: 'S354',
		image: img6
	},
	{
		buttonName: '10 mm matt grey 2 hole',
		supplierID: 'S143',
		image: img7
	},
	{
		buttonName: '8 mm black and gold 1 hole',
		supplierID: 'S001',
		image: img8
	},
]

const String = () => {
	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold p-7">Strings</h1>
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
							materialName={button.buttonName}
							supplierID={button.supplierID}
						/>
					)
				})}
			</CardContainer>
		</>
	)
}

export default String