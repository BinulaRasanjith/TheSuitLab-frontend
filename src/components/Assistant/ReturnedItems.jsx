/* eslint-disable perfectionist/sort-jsx-props */
// import React from "react";

import ReturnRecord from "./ReturnRecord";

const ReturnedItems = () => {
    const records = [
        {
            order_id: "#007324786345",
            item_count: "1",
            ordered_date: "2023-02-07",
            return_date: "2023-02-09",
            reason: "A small patch on right hand's elbow",
        },
        {
            order_id: "#007324778765",
            item_count: "1",
            ordered_date: "2023-02-22",
            return_date: "2023-02-23",
            reason: "Buttons are unstable",
        },

    ];

    return (
        <>
            <div className="flex flex-col gap-6">
                {records.map((item, index) => (
                    <ReturnRecord
                        key={index}
                        OrderId={item.order_id}
                        ItemCount={item.item_count}
                        OrderedDate={item.ordered_date}
                        ReturnedDate={item.return_date}
                        Reason={item.reason}
                    />
                ))}
            </div>
        </>
    );
};

export default ReturnedItems;
