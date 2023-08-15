import { Button } from "@chakra-ui/button"
import { addSupplier } from "../../api/supplierAPI"
import React, { useState } from "react"

const AddSupplier = () => {

    const [name, setName] = useState("");
    const [contactNo, setcontactNo] = useState("");
    const [email, setEmail] = useState("");

    const handleAddSupplierClick = async (e) => {

        e.preventDefault()
        const supplier = {
            contactNo: contactNo,
            name: name,
            email: email,
        }

        try {
            const response = await addSupplier(supplier);
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
                        <h2 className="mb-4 mt-3 text-2xl  justify-start font-medium text-gray-900">Add New Supplier</h2>
                    </div>

                    <form onSubmit={handleAddSupplierClick}>
                        <div className="flex flex-row mt-8 gap-24">
                            <div className="flex flex-col w-96 gap-3 ml-16">

                                <div className="flex flex-row justify-between">
                                    <label className="text-md text-gray-500">Name</label>
                                    <input
                                        id="firstName" name="firstName" className="border  border-gray-400 rounded-md  focus:outline-none focus:border-gray-500" type="text" value={name}
                                        onChange={(e) => setFirstName(e.target.value)} />
                                </div>

                                <div className="flex flex-row justify-between">
                                    <label className="text-md text-gray-500">Mobile Number</label>
                                    <input id="contactNo" name="contactNo" className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500" type="text" value={contactNo}
                                        onChange={(e) => setcontactNo(e.target.value)} />                                </div>

                                <div className="flex flex-row justify-between">
                                    <label className="text-md text-gray-500">Email</label>
                                    <input id="email" name="email" className="border border-gray-400 rounded-md  focus:outline-none focus:border-gray-500" type="text" value={email}
                                        onChange={(e) => setEmail(e.target.value)} />                                </div>

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

export default AddSupplier

