import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { AiFillPlusCircle } from 'react-icons/ai'
import { useNavigate } from "react-router-dom"

import { getHireCostumes } from "../../api/hireCostumesAPI"
import CardContainer from "../../components/Assistant/CardContainer"
import NewHireCostume from "../../components/Assistant/Forms/NewHireCostumeForm"
import HiringItemCard from "../../components/Assistant/HiringItemCard"

const Hiring = () => {

	const navigate = useNavigate();
	const [hiringcostumes, setCostumes] = useState([]);
	const [isNewCostumeForm, addNewCostume] = useState(false);

	useEffect(() => {
		const fetchHireCostumes = async () => {
			try {
				const response = await getHireCostumes({});
				setCostumes(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchHireCostumes();
	}, []);


	const handleFormClose = () => {
		addNewCostume(false);
	};

	const handleFormOpen = () => {
		addNewCostume(true);
	};

	const handleClick = (id) => {
		navigate(`/assistant/hiring/${id}`)
	}
	console.log(hiringcostumes)

	return (
		<div className="relative">
			<div className=" flex flex-col justify-between mx-10 my-8 border border-solid border-zinc-950 border-opacity-0 rounded-lg">
				<div className=" flex items-center justify-between my-4">
					<div className="text-2xl font-semibold">Hire costume</div>
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
					{hiringcostumes && hiringcostumes.map((item, index) => {
						return (
							<HiringItemCard
								image={item.HireCostume.images && item.HireCostume.images[0]}
								key={index}
								costumeName={item.HireCostume && item.HireCostume.name}
								costumeType={item.HireCostume && item.HireCostume.costumeType}
								rentalPrice={item.price && item.price.toFixed(2)}
								onClick={() => handleClick(item.itemId)}
							/>
						)
					})}
				</CardContainer>
			</div>

			<div className={`relative  ${isNewCostumeForm ? "block" : "hidden"}`}>
				<NewHireCostume isOpen={isNewCostumeForm} onClose={handleFormClose} />
			</div>

		</div>
	)
}

export default Hiring