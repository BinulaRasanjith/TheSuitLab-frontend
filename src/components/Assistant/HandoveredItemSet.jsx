import PropTypes from "prop-types";

import RentalRecord from "./HandoverRecord";

const RentedItems = ({ onOpen }) => {
    const records = [
        {
            cus_id: "CS974953556",
            suit_id: "S00322",
            cus_mobile: "+94765765000",
            rented: "2023-08-10",
            handover: "2023-08-14",
        },
        {
            cus_id: "CS974357256",
            suit_id: "S00330",
            cus_mobile: "+94765760985",
            rented: "2023-08-06",
            handover: "2023-08-10",
        },
        {
            cus_id: "CS979814556",
            suit_id: "S00390",
            cus_mobile: "+94765761010",
            rented: "2023-08-06",
            handover: "2023-08-11",
        },
        {
            cus_id: "CS991562856",
            suit_id: "S00310",
            cus_mobile: "+94765769842",
            rented: "2023-08-06",
            handover: "2023-08-09",
        },
    ];

    return (
        <div className="flex flex-col gap-6">
            {records.map((item, index) => (
                <RentalRecord
                    key={index}
                    CustomerId={item.cus_id}
                    SuitId={item.suit_id}
                    CustomerMobile={item.cus_mobile}
                    BorrowedDate={item.rented}
                    HandoverDate={item.handover}
                    onOpen={() => onOpen(item.cus_id, item.suit_id)}
                />
            ))}
        </div>
    );
};

RentedItems.propTypes = {
    onOpen: PropTypes.func.isRequired,
};

export default RentedItems;
