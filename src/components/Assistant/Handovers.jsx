/* eslint-disable perfectionist/sort-jsx-props */
// import React from "react";

import RentalRecord from "./HandoverRecord";

const RentedItems = () => {
    const records = [
        {
            cus_id: "#CS974953556",
            suit_id: "S00322",
            cus_mobile: "+94765765000",
            rented: "2023-08-10",
            handover: "2023-08-14",
        },
        {
            cus_id: "#CS974357256",
            suit_id: "S00330",
            cus_mobile: "+94765760985",
            rented: "2023-08-06",
            handover: "2023-08-10",
        },
        {
            cus_id: "#CS979814556",
            suit_id: "S00390",
            cus_mobile: "+94765761010",
            rented: "2023-08-06",
            handover: "2023-08-11",
        },
        {
            cus_id: "#CS991562856",
            suit_id: "S00310",
            cus_mobile: "+94765769842",
            rented: "2023-08-06",
            handover: "2023-08-09",
        },
        {
            cus_id: "#CS903420156",
            suit_id: "S00229",
            cus_mobile: "+94765763883",
            rented: "2023-08-06",
            handover: "2023-08-08",
        },
        // {
        //     cus_id: "#CS970045356",
        //     suit_id: "S00369",
        //     cus_mobile: "+94765765108",
        //     rented: "2023-08-06",
        //     handover: "2023-08-10",
        // },
        // {
        //     cus_id: "#CS974900000",
        //     suit_id: "S00342",
        //     cus_mobile: "+94765761919",
        //     rented: "2023-08-06",
        //     handover: "2023-08-09",
        // },
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
                />
            ))}
        </div>
    );
};

export default RentedItems;
