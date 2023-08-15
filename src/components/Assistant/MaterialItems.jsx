/* eslint-disable perfectionist/sort-jsx-props */
// import React from "react";

import MaterialRecord from "./MaterialRecords";

const RentedItems = () => {
    const records = [
        {
            mat_name: "Linen",
            mat_code: "00002",
            sup_id: "S002",
            sup_mobile: "+94765765108",
            last_order: "2023-08-14",
        },
        {
            mat_name: "Stretch wool",
            mat_code: "00092",
            sup_id: "S119",
            sup_mobile: "+94765765109",
            last_order: "2023-08-10",
        },
        {
            mat_name: "Worsted wool",
            mat_code: "00012",
            sup_id: "S101",
            sup_mobile: "+94765765110",
            last_order: "2023-08-11",
        },
        {
            mat_name: "Wool twill",
            mat_code: "00010",
            sup_id: "S002",
            sup_mobile: "+94765765111",
            last_order: "2023-08-09",
        },
        // {
        //     mat_name: "Cotton twill",
        //     mat_code: "00029",
        //     sup_id: "S115",
        //     sup_mobile: "+94765765112",
        //     last_order: "2023-08-08",
        // },
        // {
        //     mat_name: "Silk blend",
        //     mat_code: "00019",
        //     sup_id: "+94765765108",
        //     sup_mobile: "2023-08-06",
        //     last_order: "2023-08-10",
        // },
    ];

    return (
        <div className="flex flex-col gap-6">
            {records.map((item, index) => (
                <MaterialRecord
                    key={index}
                    CustomerId={item.mat_name}
                    SuitId={item.mat_code}
                    CustomerMobile={item.sup_id}
                    BorrowedDate={item.sup_mobile}
                    HandoverDate={item.last_order}
                />
            ))}
        </div>
    );
};

export default RentedItems;
