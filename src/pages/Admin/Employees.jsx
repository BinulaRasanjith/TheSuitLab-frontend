import { Button } from "@chakra-ui/react"
import { AiFillPlusCircle } from 'react-icons/ai'
import { useNavigate } from "react-router"

//images
import Costume1 from '../../assets/images/costume1.jpeg'
import Costume2 from '../../assets/images/costume2.jpeg'
import Costume3 from '../../assets/images/costume3.jpeg'
import Costume4 from '../../assets/images/costume4.jpeg'
import Costume5 from '../../assets/images/costume5.jpeg'

const ProductMangerData = [
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

        <div className=" flex flex-row">
            <div className='flex-auto ml-3'>
                <div className='flex flex-col'>

                    <div className="flex items-center justify-between ml-4 mt-3 mr-2">
                        <span className=' font-bold text-xl text-black  uppercase'>Product managers</span>

                        <Button
                            leftIcon={<AiFillPlusCircle />}
                            m={3}
                            onClick={(handleAddUserClick)}
                            rounded={'full'}
                        >
                            Add User
                        </Button>
                    </div>

                    {/* cards*/}
                    <div className="bg-white">
                        <div className="mt-1 grid gap-10 lg:grid-cols-4 md-grid-cols-2 p-5">

                            {ProductMangerData.map((card, index) => (
                                <div className="bg-white border border-gray-200 rounded-lg shadow" key={index}>
                                    <div className="flex justify-end px-1 pt-1">
                                        <button className="inline-block focus:ring-6 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" data-close-toggle="close" id={`closeButton-${index}`} type="button">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" fillRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img alt="image" className="w-36 h-36 mb-1 object-cover rounded-full shadow-lg" src={card.image} />
                                        <h5 className="mb-1 text-md uppercase font-medium text-gray-900">{card.name}</h5>
                                        <span className="mb-3 text-sm text-gray-500">{card.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 2nd grid*/}

                        <div className="flex flex-row ml-5 mt-5">
                            <span className=' font-bold text-xl text-black  uppercase'>Tailors & Supervisors</span>
                        </div>
                        <div className="mt-1 grid gap-10 lg:grid-cols-4 md-grid-cols-2 p-5">

                            {TailorData.map((card, index) => (
                                <div className="bg-white border border-gray-200 rounded-lg shadow" key={index}>
                                    <div className="flex justify-end px-1 pt-1">
                                        <button className="inline-block focus:ring-6 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" data-close-toggle="close" id={`closeButton-${index}`} type="button">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" fillRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img alt="image" className="w-36 h-36 mb-1 object-cover rounded-full shadow-lg" src={card.image} />
                                        <h5 className="mb-1 text-md uppercase font-medium text-gray-900">{card.name}</h5>
                                        <span className="mb-3 text-sm text-gray-500">{card.role}</span>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Employees