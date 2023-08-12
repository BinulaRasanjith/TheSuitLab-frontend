import { Button } from "@chakra-ui/button"
import Costume1 from '../../assets/images/costume1.jpeg'
import { addUser } from "../../api/userAPI"
import React, { useState } from "react"

const AddEmployee = () => {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleAddUserClick = async () => {

        // const user = {
        //     mobileNo: "03456822567834",
        //     firstName: "First",
        //     lastName: "Last",
        //     role: "TAILOR",
        //     password: "password"
        // }

        const user = {
            mobileNo: mobileNumber,
            firstName: firstName,
            lastName: lastName,
            role: role,
            password: password
        }

        addUser(user)
            .then((res) => {
                console.log(res)
            })
    }

    return (
        <>
            {/* <h1>Add Employee</h1> */}

            <div className="flex flex-row">
                <div className='flex-auto flex-col'>
                    <div className="bg-white border border-gray-200 ml-10 mt-10  rounded-lg shadow ">
                        <div className="flex flex-col p-6">
                            <div className=" border-b-2 border-gray-300">
                                <h2 className="mb-4 mt-3 text-2xl  justify-start font-medium text-gray-900">Add New User</h2>
                            </div>
                            <form onSubmit={handleAddUserClick}>
                                <div className="flex flex-row mt-8">
                                    <img className="w-52 h-52 object-cover mb-1 rounded-full shadow-lg" src={Costume1} alt="image" />

                                    <div className="flex flex-col ml-20">

                                        <div className="flex-row mt-6 grid grid-cols-2 mb-1">
                                            <label className="text-md text-gray-500">Role</label>
                                            <select className="border border-gray-200 rounded-xl focus:outline-none focus:border-gray-500"
                                                value={role}
                                                onChange={(e) => setRole(e.target.value)}
                                            >
                                                <option value="">Select a Role</option>
                                                <option value="product_manager">Product Manager</option>
                                                <option value="operation_assistant">Operation Assistant</option>
                                                <option value="tailoring_supervisor">Tailoring Supervisor</option>
                                            </select>
                                        </div>
                                        <div className="flex-row mt-6 grid grid-cols-2 mb-1">
                                            <label className="text-md text-gray-500">First Name</label>
                                            <input className="border border-gray-200 rounded-xl  focus:outline-none focus:border-gray-500" type="text" value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                        <div className="flex-row mt-6 grid grid-cols-2 mb-1">
                                            <label className="text-md text-gray-500">Last Name</label>
                                            <input className="border border-gray-200 rounded-xl  focus:outline-none focus:border-gray-500" type="text" value={lastName}
                                                onChange={(e) => setLastName(e.target.value)} />
                                        </div>

                                        <div className="flex-row mt-6 grid grid-cols-2 mb-1">
                                            <label className="text-md text-gray-500">Mobile Number</label>
                                            <input className="border border-gray-200 rounded-xl  focus:outline-none focus:border-gray-500" type="text" value={mobileNumber}
                                                onChange={(e) => setMobileNumber(e.target.value)} />
                                        </div>
                                        <div className="flex-row mt-6 grid grid-cols-2 mb-1">
                                            <label className="text-md text-gray-500">Email</label>
                                            <input className="border border-gray-200 rounded-xl  focus:outline-none focus:border-gray-500" type="text" value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </div>

                                        <div className="flex-row mt-6 grid grid-cols-2 mb-1">
                                            <label className="text-md text-gray-500">Password</label>
                                            <input className="border border-gray-200 rounded-xl  focus:outline-none focus:border-gray-500"
                                                type="password" value={password}
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </div>


                                        <div className="flex flex-row mr-4 mt-5 justify-start ">
                                            {/* <a href="#" class="inline-flex items-center px-10 py-2 text-sm font-medium text-center
                                         text-white uppercase bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Save</a> */}
                                            <Button type="submit">
                                                SAVE
                                            </Button>

                                        </div>

                                    </div >


                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>

            {/* <Button onClick={handleAddUserClick}>
                add
            </Button> */}
        </>
    )
}

export default AddEmployee