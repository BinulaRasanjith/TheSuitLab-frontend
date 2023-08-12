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
            <div className="flex flex-row">
                <div className='flex-auto flex-col'>
                    <div className="bg-white border border-gray-200 ml-10 mt-10  rounded-lg shadow ">
                        <div className="flex flex-col p-6">
                            <div className=" border-b-2 border-gray-300">
                                <h2 className="mb-4 mt-3 text-2xl  justify-start font-medium text-gray-900">Add New User</h2>
                            </div>
                            <form onSubmit={handleAddSupplierClick}>
                                <div className="flex flex-row mt-8">
                                    
                                    <div className="flex flex-col ml-20">

                                        <div className="flex-row mt-6 grid grid-cols-2 mb-1">
                                            <label className="text-md text-gray-500">First Name</label>
                                            <input id="name" name="name" className="border border-gray-200 rounded-xl  focus:outline-none focus:border-gray-500" type="text" value={name}
                                                onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        

                                        <div className="flex-row mt-6 grid grid-cols-2 mb-1">
                                            <label className="text-md text-gray-500">Mobile Number</label>
                                            <input id="contactNo" name="contactNo" className="border border-gray-200 rounded-xl  focus:outline-none focus:border-gray-500" type="text" value={contactNo}
                                                onChange={(e) => setcontactNo(e.target.value)} />
                                        </div>
                                        <div className="flex-row mt-6 grid grid-cols-2 mb-1">
                                            <label className="text-md text-gray-500">Email</label>
                                            <input id="email" name="email" className="border border-gray-200 rounded-xl  focus:outline-none focus:border-gray-500" type="text" value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </div>

                                        <div className="flex flex-row mr-4 mt-5 justify-start ">
                                            <Button 
                                            color={'white'} 
                                            bgColor={"black"}
                                            _hover={{
                                                bg: 'blue.500',

                                            }}
                                            type="submit">
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
        </>
    )
}

export default AddSupplier
