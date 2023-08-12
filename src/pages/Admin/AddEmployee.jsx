import { Button } from "@chakra-ui/button"

import { addUser } from "../../api/userAPI"

const AddEmployee = () => {
    const handleAddUserClick = async () => {
        const user = {
            mobileNo: "0123456893434",
            firstName: "First",
            lastName: "Last",
            role: "TAILOR",
            password: "password"
        }

        addUser(user)
            .then((res) => {
                console.log(res)
            })
    }

    return (
        <>
            <h1>Add Employee</h1>

            <Button onClick={handleAddUserClick}>
                add
            </Button>
        </>
    )
}

export default AddEmployee