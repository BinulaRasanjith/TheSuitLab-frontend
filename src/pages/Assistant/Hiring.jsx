import { Button } from "@chakra-ui/react"
import { useState } from "react"
import { AiFillPlusCircle } from 'react-icons/ai'
import { useNavigate } from "react-router-dom"

import img1 from "../../assets/images/rentsuits/black paisley suit/1.webp"
import img2 from "../../assets/images/rentsuits/black suit/1.webp"
import img3 from "../../assets/images/rentsuits/cafe brown suit/1.webp"
import img8 from "../../assets/images/rentsuits/cobolt blue suit/1.webp"
import img6 from "../../assets/images/rentsuits/green suit/1.webp"
import img5 from "../../assets/images/rentsuits/maroon suit/1.webp"
import img4 from "../../assets/images/rentsuits/pants/dark blue.webp"
import img7 from "../../assets/images/rentsuits/white palma suit/1.webp"
import CardContainer from "../../components/Assistant/CardContainer"
import NewHireCostume from "../../components/Assistant/Forms/NewHireCostumeForm"
import HiringItemCard from "../../components/Assistant/HiringItemCard"

const hiringcostumes = [
	{
		costumeName: 'Black two-piece suit',
		designType: 'Coat',
		rentalPrice: 'Rs. 1000.00',
		image: img1
	},
	{
		costumeName: 'Navy two-piece stretch suit',
		designType: 'Coat',
		rentalPrice: 'Rs. 1000.00',
		image: img2
	},
	{
		costumeName: 'Dark gray two-piece suit',
		designType: 'Coat',
		rentalPrice: 'Rs. 1000.00',
		image: img3
	},
	{
		costumeName: 'Cinnamon stretch chinos',
		designType: 'Trouser',
		rentalPrice: 'Rs. 1000.00',
		image: img4
	},
	{
		costumeName: 'Gray stretch suit pants',
		designType: 'Trouser',
		rentalPrice: 'Rs. 1000.00',
		image: img5
	},
	{
		costumeName: 'Black stretch suit pants',
		designType: 'Trouser',
		rentalPrice: 'Rs. 1000.00',
		image: img6
	},
	{
		costumeName: 'Gray stretch suit pants',
		designType: 'Trouser',
		rentalPrice: 'Rs. 1000.00',
		image: img7
	},
	{
		costumeName: 'Navy blue three-piece suit',
		designType: 'Trouser',
		rentalPrice: 'Rs. 1000.00',
		image: img8
	},
]

const Hiring = () => {
	const navigate = useNavigate();
	const [isNewCostumeForm, addNewCostume] = useState(false);

	const handleFormClose = () => {
		addNewCostume(false); // SET `isNewCostumeForm` TO FALSE TO CLOSE THE FORM
	};

	const handleFormOpen = () => {
		addNewCostume(true); // SET `isNewCostumeForm` TO TRUE TO OPEN THE FORM
	};

	const handleClick = (id) => {
		navigate(`/assistant/hiring/${id}`)
	}

	return (
		<div className="relative">
			<div className=" flex flex-col justify-between mx-10 my-8 border border-solid border-zinc-950 border-opacity-0 rounded-lg">
				<div className=" flex items-center justify-between my-4">
					<div className="text-xl font-semibold">Hire costume</div>
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
						onClick={handleFormOpen}

					>
						Add new
					</Button>
				</div>


				<CardContainer>
					{hiringcostumes.map((costume, index) => {
						return (
							<HiringItemCard
								image={costume.image}
								key={index}
								costumeName={costume.costumeName}
								costumeType={costume.designType}
								rentalPrice={costume.rentalPrice}
								onClick={() => handleClick(index)}
							/>
						)
					})}
				</CardContainer>
			</div>

			<div className={`relative  ${isNewCostumeForm ? "block" : "hidden"}`}>
				{/* PASS `isNewCostumeForm` VARIABLE AND `handleFormClose` FUNCTION TO THE FORM TO OPEN/CLOSE IT */}
				<NewHireCostume isOpen={isNewCostumeForm} onClose={handleFormClose} />
			</div>

		</div>
	)
}

export default Hiring