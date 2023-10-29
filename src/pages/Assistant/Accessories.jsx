import { Button } from "@chakra-ui/react"
import { useState } from "react"
import { AiFillPlusCircle } from 'react-icons/ai'
import { useNavigate } from "react-router-dom"

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
import NewAccessoryForm from "../../components/Assistant/Forms/NewAccessoryForm"

const accessories = [
	{
		itemId: 'ITM0001',
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
		image: img1
	},
	{
		itemId: 'ITM0002',
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
		image: img2
	},
	{
		itemId: 'ITM0003',
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
		image: img3
	},
	{
		itemId: 'ITM0004',
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
		image: img4
	},
	{
		itemId: 'ITM0005',
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
		image: img5
	},
	{
		itemId: 'ITM0006',
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
		image: img6
	},
	{
		itemId: 'ITM0007',
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
		image: img7
	},
	{
		itemId: 'ITM0008',
		itemName: 'Luxe View leather belt',
		brand: 'Luxe View',
		price: 'Rs. 1000.00',
		image: img8
	},
]

const Accessories = () => {
	const navigate = useNavigate();
	const [isNewAccessoryForm, addNewAccessory] = useState(false);

	const handleFormClose = () => {
		addNewAccessory(false); // Set isNewReturnForm to false to close the form
	};

	const handleFormOpen = () => {
		addNewAccessory(true); // Set isNewReturnForm to false to close the form
	};

	const handleClick = (id) => {
		navigate(`/assistant/accessories/${id}`)
	}

	return (
		<div className="relative">
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
						onClick={handleFormOpen}
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
								accessoryName={accessory.itemName}
								brand={accessory.brand}
								unitPrice={accessory.price}
								onClick={() => handleClick(accessory.itemId)}
							/>
						)
					})}
				</CardContainer>
			</div>

			<div className={`relative  ${isNewAccessoryForm ? "block" : "hidden"}`}>
				<NewAccessoryForm isOpen={isNewAccessoryForm} onClose={handleFormClose} />
			</div>
		</div>

	)
}

export default Accessories