import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router";

import { getUsers } from "../../api/userAPI";
import Costume1 from "../../assets/images/costume1.jpeg";
import Costume2 from "../../assets/images/costume2.jpeg";
import Costume3 from "../../assets/images/costume3.jpeg";
import Costume4 from "../../assets/images/costume4.jpeg";
import Costume5 from "../../assets/images/costume5.jpeg";
import CardContainer from "../../components/EmployeeCard/CardContainer";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { PROFILE_PICTURE_URL } from "../../config/config";
import { OPERATION_ASSISTANT, PRODUCT_MANAGER, TAILOR } from "../../constants";
import displayRoleName from "../../utils/displayRoleName";

const employees = [
	{
		name: "Chamindu Sandaruwan",
		role: "Product Manager",
		image: Costume1,
	},
	{
		name: "Oshada Fernando",
		role: "Product Manager",
		image: Costume2,
	},
	{
		name: "Ravindra Gamage",
		role: "Product Manager",
		image: Costume3,
	},
	{
		name: "Kushan Liyanage",
		role: "Product Manager",
		image: Costume4,
	},
];

const TailorData = [
	{
		name: "Shayma Dissanayake",
		role: "Head Tailor",
		image: Costume5,
	},
	{
		name: "Dilahara Ranaweera",
		role: "Tailoring Supervisor",
		image: Costume5,
	},
	{
		name: "Thushara Udayanga",
		role: "Head Tailor",
		image: Costume1,
	},
	{
		name: "Jayanni Hemanthi",
		role: "Tailoring Supervisor",
		image: "",
	},
];

const Employees = () => {
	const navigate = useNavigate();

	const [managers, setManagers] = useState([]);
	const [tailors, setTailors] = useState([]);
	const [assistants, setAssistants] = useState([]);

	const handleAddUserClick = () => {
		navigate("/admin/add-employee");
	};

	useEffect(() => {
		const getEmployees = async () => {
			const response = await getUsers({
				roles: [PRODUCT_MANAGER, TAILOR, OPERATION_ASSISTANT],
			});

			const employees = response.data.users;

			const managers = employees.filter(
				(employee) => employee.role === PRODUCT_MANAGER
			);
			const tailors = employees.filter((employee) => employee.role === TAILOR);
			const assistants = employees.filter(
				(employee) => employee.role === OPERATION_ASSISTANT
			);

			setManagers(managers);
			setTailors(tailors);
			setAssistants(assistants);

			console.log(managers);
			console.log(tailors);
			console.log(assistants);
		};

		getEmployees();
	}, []);

	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold p-7">Product Manager</h1>

				<Button
					leftIcon={<AiFillPlusCircle />}
					m={3}
					onClick={handleAddUserClick}
					rounded={"full"}
					color={"white"}
					bgColor={"black"}
					_hover={{
						bg: "blue.500",
					}}
				>
					Add User
				</Button>
			</div>

			{/* cards*/}

			<CardContainer>
				{managers.map((employee, index) => {
					return (
						<EmployeeCard
							key={index}
							image={`${PROFILE_PICTURE_URL}/${employee.image}`}
							EmpName={employee.firstName + " " + employee.lastName}
							role={displayRoleName(employee.role)}
						/>
					);
				})}
			</CardContainer>

			<div className="flex flex-row mt-5 justify-start">
				<h1 className="text-xl font-semibold p-7">Tailors & Supervisors</h1>
			</div>

			<CardContainer>
				{tailors.map((employee, index) => {
					return (
						<EmployeeCard
							key={index}
							image={`${PROFILE_PICTURE_URL}/${employee.image}`}
							EmpName={employee.firstName + " " + employee.lastName}
							role={displayRoleName(employee.role)}
						/>
					);
				})}
			</CardContainer>

			<div className="flex flex-row mt-5 justify-start">
				<h1 className="text-xl font-semibold p-7">Operation Assistant</h1>
			</div>

			<CardContainer>
				{assistants.map((employee, index) => {
					return (
						<EmployeeCard
							key={index}
							image={`${PROFILE_PICTURE_URL}/${employee.image}`}
							EmpName={employee.firstName + " " + employee.lastName}
							role={displayRoleName(employee.role)}
						/>
					);
				})}
			</CardContainer>
		</>
	);
};

export default Employees;
