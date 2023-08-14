import CardContainer from "../../components/EmployeeCard/CardContainer"
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard"
import Costume5 from '../../assets/images/costume5.jpeg'
import Costume1 from '../../assets/images/costume1.jpeg'
import Costume2 from '../../assets/images/costume2.jpeg'
import Costume3 from '../../assets/images/costume3.jpeg'
import Costume4 from '../../assets/images/costume4.jpeg'
import { AiFillPlusCircle } from 'react-icons/ai'
import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router"

const employees = [
    {
        name: "Chamindu Sandaruwan",
        role: "Product Manager",
        image: Costume1
    },
    {
        name: "Oshada Fernando",
        role: "Product Manager",
        image: Costume2
    },
    {
        name: "Ravindra Gamage",
        role: "Product Manager",
        image: Costume3
    },
    {
        name: "Kushan Liyanage",
        role: "Product Manager",
        image: Costume4
    }

];


const TailorData = [
    {
        name: "Shayma Dissanayake",
        role: "Head Tailor",
        image: Costume5
    },
    {
        name: "Dilahara Ranaweera",
        role: "Tailoring Supervisor",
        image: Costume5
    },
    {
        name: "Thushara Udayanga",
        role: "Head Tailor",
        image: Costume1
    },
    {
        name: "Jayanni Hemanthi",
        role: "Tailoring Supervisor",
        image: ""
    }

];


const Employees = () => {
    const navigate = useNavigate()
    const handleAddUserClick = () => {
        navigate('/admin/add-employee')
    }

    return (

        <>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold p-7">Product Manager</h1>

                <Button
                    leftIcon={<AiFillPlusCircle />}
                    m={3}
                    onClick={(handleAddUserClick)}
                    rounded={'full'}
                    color={'white'}
                    bgColor={"black"}
                    _hover={
                        {
                            bg: 'blue.500',
                        }
                    }
                >
                    Add User
                </Button>
            </div>

            {/* cards*/}

            <CardContainer>
                {employees.map((employee, index) => {
                    return (
                        <EmployeeCard
                            image={employee.image}
                            key={index}
                            EmpName={employee.name}
                            role={employee.role}
                        />
                    )
                })}
            </CardContainer>

            <div className="flex flex-row mt-5 justify-start">
                <h1 className="text-xl font-semibold p-7">Tailors & Supervisors</h1>
            </div>

            <CardContainer>
                {TailorData.map((employee, index) => {
                    return (
                        <EmployeeCard
                            image={employee.image}
                            key={index}
                            EmpName={employee.name}
                            role={employee.role}
                        />
                    )
                })}
            </CardContainer>

            <div className="flex flex-row mt-5 justify-start">
                <h1 className="text-xl font-semibold p-7">Operation Assistant</h1>
            </div>

            <CardContainer>
                {TailorData.map((employee, index) => {
                    return (
                        <EmployeeCard
                            image={employee.image}
                            key={index}
                            EmpName={employee.name}
                            role={employee.role}
                        />
                    )
                })}
            </CardContainer>
        </>
    )
}


export default Employees