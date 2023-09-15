import { Button } from "@chakra-ui/react"
import { AiFillPlusCircle } from 'react-icons/ai'

import img1 from "../../assets/images/rentsuits/black paisley suit/1.webp"
import img2 from "../../assets/images/rentsuits/black suit/1.webp"
import img3 from "../../assets/images/rentsuits/cafe brown suit/1.webp"
import img8 from "../../assets/images/rentsuits/cobolt blue suit/1.webp"
import img6 from "../../assets/images/rentsuits/green suit/1.webp"
import img5 from "../../assets/images/rentsuits/maroon suit/1.webp"
import img4 from "../../assets/images/rentsuits/pants/dark blue.webp"
import img7 from "../../assets/images/rentsuits/white palma suit/1.webp"
"/Users/bhanuka/Documents/Group Project II/SYSTEM/TheSuitLab-frontend/src/assets/images/rentsuits/black paisley suit/1.webp"
import CardContainer from "../../components/Assistant/CardContainer"
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
	return (
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
							materialName={costume.costumeName}
							supplierID={costume.designType}
						/>
					)
				})}
			</CardContainer>
		</div>
	)
}

export default Hiring