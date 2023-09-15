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
import AccessoryCard from "../../components/Assistant/AccessoryCard"
import CardContainer from "../../components/Assistant/CardContainer"

const accessories = [
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

const Accessories = () => {
	return (
        <div className=" flex flex-col justify-between mx-10 my-8 border border-solid border-zinc-950 border-opacity-0 rounded-lg">
            <div className=" flex items-center justify-between my-4">
				<div className="text-xl font-semibold">Accessories</div>
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
					m={0}
					rounded={'full'}

				>
					Add new
				</Button>
			</div>


			<CardContainer>
				{accessories.map((accessory, index) => {
					return (
						<AccessoryCard
							image={accessory.image}
							key={index}
							materialName={accessory.buttonName}
							supplierID={accessory.supplierID}
						/>
					)
				})}
			</CardContainer>
		</div>
	)
}

export default Accessories