
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

    return (

        <div className=" flex flex-row">
            <div className='flex-auto ml-3'>
                <div className='flex flex-col'>

                    <div className='flex-row mt-6 grid grid-cols-2'>
                        <div className="flex ml-5 justify-start ">
                            <span className=' font-bold text-xl text-black  uppercase'>Product managers</span>
                        </div>
                        <div className="flex flex-row mr-5 justify-end ">
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white uppercase bg-black rounded-3xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">New User</a>

                        </div>
                    </div>

                    {/* cards*/}
                    <div className="bg-white">
                        <div className="mt-1 grid gap-10 lg:grid-cols-4 md-grid-cols-2 p-5">

                            {ProductMangerData.map((card, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow">
                                    <div className="flex justify-end px-1 pt-1">
                                        <button id={`closeButton-${index}`} data-close-toggle="close" className="inline-block focus:ring-6 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img className="w-36 h-36 mb-1 object-cover rounded-full shadow-lg" src={card.image} alt="image" />
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
                                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow">
                                    <div className="flex justify-end px-1 pt-1">
                                        <button id={`closeButton-${index}`} data-close-toggle="close" className="inline-block focus:ring-6 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img className="w-36 h-36 mb-1 object-cover rounded-full shadow-lg" src={card.image} alt="image" />
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