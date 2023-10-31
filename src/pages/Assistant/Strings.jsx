import { Button } from "@chakra-ui/react"
import { AiFillPlusCircle } from 'react-icons/ai'

import img1 from "../../assets/images/buttons/button1.jpg"
import img2 from "../../assets/images/buttons/button2.jpg"
import img3 from "../../assets/images/buttons/button3.jpg"
import img4 from "../../assets/images/buttons/button4.jpg"
import img5 from "../../assets/images/buttons/button5.jpg"
import img6 from "../../assets/images/buttons/button6.jpg"
import img7 from "../../assets/images/buttons/button7.jpg"
import img8 from "../../assets/images/buttons/button8.gif"
import CardContainer from "../../components/MaterialCard/CardContainer"
import MaterialCard from "../../components/MaterialCard/MaterialCard"

const strings = [
	{
		buttonName: '10 mm Brass metal 4 hole',
		supplierID: 'S009',
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

const Strings = () => {
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
				{strings.map((button, index) => {
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

export default Strings;
