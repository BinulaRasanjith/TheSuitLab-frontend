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
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
		image: img1
	},
	{
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
		image: img2
	},
	{
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
		image: img3
	},
	{
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
		image: img4
	},
	{
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
		image: img5
	},
	{
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
		image: img6
	},
	{
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
		image: img7
	},
	{
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
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
							materialName={accessory.itemName}
							supplierID={accessory.brand}
						/>
					)
				})}
			</CardContainer>
		</div>
	)
}

export default Accessories