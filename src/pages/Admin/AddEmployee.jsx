import { Button } from "@chakra-ui/button"
import Costume1 from '../../assets/images/costume1.jpeg'
import { addUser } from "../../api/userAPI"
import React, { useState } from "react"

const AddEmployee = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [role, setRole] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleAddUserClick = async (e) => {

        e.preventDefault()

        const user = {
            mobileNo: mobileNumber,
            firstName: firstName,
            lastName: lastName,
            role: role,
            email: email,
            password: password
        }

        try {
            const response = await addUser(user);
            console.log(response);
            alert(response);
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <>
            <div className="h-full flex flex-row m-4 shadow-xl rounded-2xl p-2">
                <div className='bg-white border border-gray-200 m-10  rounded-lg shadow  p-6'>


                    <div className=" border-b-2 border-gray-300">
                        <h2 className="mb-4 mt-3 text-2xl  justify-start font-medium text-gray-900">Add New Employee</h2>
                    </div>
                    <form onSubmit={handleAddUserClick}>
                        <div className="flex flex-row mt-8">
                            <img className="w-52 h-52 object-cover mb-1 rounded-full shadow-lg" src={Costume1} alt="image" />

                            <div className="flex flex-col w-96 gap-5 ml-16">
                                <div className="flex flex-row justify-between">
                                    <label className="text-md text-gray-500">Role</label>
                                    <select id="role" name="role" className="border border-gray-200 rounded-xl focus:outline-none focus:border-gray-500"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <option value="">Select a Role</option>
                                        <option value="product_manager">Product Manager</option>
                                        <option value="operation_assistant">Operation Assistant</option>
                                        <option value="tailoring_supervisor">Tailoring Supervisor</option>
                                    </select>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <label className="text-md text-gray-500">First Name</label>
                                    <input
                                        id="firstName" name="firstName" className="border  border-gray-400 rounded-md  focus:outline-none focus:border-gray-500" type="text" value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="flex flex-row justify-between">
                                    <label className="text-md text-gray-500">Last Name</label>
                                    <input id="lastName" name="lastName" className="border  border-gray-400 rounded-md  focus:outline-none focus:border-gray-500" type="text" value={lastName}
                                        onChange={(e) => setLastName(e.target.value)} />                                </div>

                                <div className="flex flex-row justify-between">
                                    <label className="text-md text-gray-500">Contact</label>
                                    <input id="mobileNumber" name="mobileNumber" className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500" type="text" value={mobileNumber}
                                        onChange={(e) => setMobileNumber(e.target.value)} />                                </div>

                                <div className="flex flex-row justify-between">
                                    <label className="text-md text-gray-500">Email</label>
                                    <input id="email" name="email" className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500" type="text" value={email}
                                        onChange={(e) => setEmail(e.target.value)} />                                </div>
                                <div className="flex flex-row justify-between">
                                    <label className="text-md text-gray-500">Password</label>
                                    <input id="password" name="password" className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500"
                                        type="password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} />                                </div>
                                <div className="flex flex-row justify-between">
                                    <label className="text-md text-gray-500">Confirm Password</label>
                                    <input id="re-password" name="re-password" className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500"
                                        type="password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} />                                </div>

                                <div className="flex flex-row justify-between">
                                    <a href="#" className="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white uppercase bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Save</a>
                                </div>

                            </div >
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}

export default AddEmployee
