import { useState } from "react"

import NewCustomerForm from "../../components/Assistant/NewCustomerForm"
import NewCustomerOTPForm from "../../components/Assistant/NewCustomerOTP"
import Customers from "../../components/Customer/ViewCustomers"

const ViewCustomers = () => {
    const [isNewCustomerForm, addNewCustomer] = useState(false);

	const handleFormClose = () => {
		addNewCustomer(false); // Set isNewReturnForm to false to close the form
	};

	// const handleFormOpen = () => {
	// 	addNewCustomer(true); // Set isNewReturnForm to false to close the form
	// };

    return (
        <div>
            <div>
                <Customers />
            </div>

            <div className={`relative  ${isNewCustomerForm ? "block" : "hidden"}`}>
                <NewCustomerForm isOpen={isNewCustomerForm} onClose={handleFormClose} />
            </div>

            <div className={`relative  ${isNewCustomerForm ? "block" : "hidden"}`}>
                <NewCustomerOTPForm isOpen={isNewCustomerForm} onClose={handleFormClose} />
            </div>
        </div>
    )
}

export default ViewCustomers