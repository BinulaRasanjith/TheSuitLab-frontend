import { Button } from "@chakra-ui/react"
import { AiFillPlusCircle } from 'react-icons/ai'

import img1 from "../../assets/images/fabrics/pattern/pattern- navy blue with red strips.jpg"
import img2 from "../../assets/images/fabrics/pattern/pattern-ark aegean suit.jpg"
import img3 from "../../assets/images/fabrics/pattern/pattern-black small square textured.jpg"
import img4 from "../../assets/images/fabrics/pattern/pattern-blue and navy check.jpg"
import CardContainer from "../../components/MaterialCard/CardContainer"
import MaterialCard from "../../components/MaterialCard/MaterialCard"

const materials = [
	{
		materialName: 'Cotton',
		supplierID: '123456',
		image: img1
	},
	{
		materialName: 'Silk',
		supplierID: '123456',
		image: img2
	},
	{
		materialName: 'Linen',
		supplierID: '123456',
		image: img3
	},
	{
		materialName: 'Wool',
		supplierID: '123456',
		image: img4
	},
	{
		materialName: 'Linen',
		supplierID: '123456',
		image: img3
	},
	{
		materialName: 'Wool',
		supplierID: '123456',
		image: img4
	},
	{
		materialName: 'Linen',
		supplierID: '123456',
		image: img3
	},
	{
		materialName: 'Wool',
		supplierID: '123456',
		image: img4
	},
]

const Fabrics = () => {
	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold p-7">Fabrics</h1>
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
				{materials.map((material, index) => {
					return (
						<MaterialCard
							image={material.image}
							key={index}
							materialName={material.materialName}
							supplierID={material.supplierID}
						/>
					)
				})}
			</CardContainer>
		</>
	)
}

export default Fabrics