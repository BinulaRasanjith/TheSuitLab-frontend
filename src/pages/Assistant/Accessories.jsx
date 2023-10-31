import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { AiFillPlusCircle } from 'react-icons/ai'
import { useNavigate } from "react-router-dom"

import { getAccessories } from "../../api/accessoryAPI"
import AccessoryCard from "../../components/Assistant/AccessoryCard"
import CardContainer from "../../components/Assistant/CardContainer"
import NewAccessoryForm from "../../components/Assistant/Forms/NewAccessoryForm"

const Accessories = () => {

	const navigate = useNavigate();
	const [accessories, setAccessories] = useState([]);
	const [isNewAccessoryForm, addNewAccessory] = useState(false);

	useEffect(() => {
		const fetchAccessories = async () => {
			try {
				const response = await getAccessories();
				setAccessories(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchAccessories();
	}, []);


	const handleFormClose = () => {
		addNewAccessory(false);
	};

	const handleFormOpen = () => {
		addNewAccessory(true);
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
								image={accessory.Accessory.image && accessory.Accessory.image[0]}
								key={index}
								accessoryName={accessory.Accessory && accessory.Accessory.itemName}
								brand={accessory.Accessory && accessory.Accessory.brand}
								unitPrice={accessory.price && accessory.price.toFixed(2)}
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