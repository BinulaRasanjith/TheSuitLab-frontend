/* eslint-disable perfectionist/sort-jsx-props */
// import React from "react";

import ReturnRecord from "./HandoverRecord";

const RentedItems = () => {
    const records = [
        {
            order_id: "#T38624953556",
            cus_id: "#CS974953556",
            suit_id: "S00322",
            cus_mobile: "+94765765000",
            sold: "2023-08-10",
        },
        {
            order_id: "#T38687942356",
            cus_id: "#CS974357256",
            suit_id: "S00330",
            cus_mobile: "+94765760985",
            sold: "2023-08-06",
        },
        {
            order_id: "#T386627824556",
            cus_id: "#CS979814556",
            suit_id: "S00390",
            cus_mobile: "+94765761010",
            sold: "2023-08-06",
        },
        {
            order_id: "#T38008274556",
            cus_id: "#CS991562856",
            suit_id: "S00310",
            cus_mobile: "+94765769842",
            sold: "2023-08-06",
        },
        {
            order_id: "#T38603248556",
            cus_id: "#CS903420156",
            suit_id: "S00229",
            cus_mobile: "+94765763883",
            sold: "2023-08-06",
        },
        {
            order_id: "#T38668732456",
            cus_id: "#CS970045356",
            suit_id: "S00369",
            cus_mobile: "+94765765108",
            sold: "2023-08-06",
        },
        {
            order_id: "#T3119733456",
            cus_id: "#CS974900000",
            suit_id: "S00342",
            cus_mobile: "+94765761919",
            sold: "2023-08-06",
        },
    ];

    return (
        <div className="flex flex-col gap-6">
            {records.map((item, index) => (
                <ReturnRecord
                    key={index}
                    OrderId={item.order_id}
                    CustomerId={item.cus_id}
                    SuitId={item.suit_id}
                    CustomerMobile={item.cus_mobile}
                    SoldOn={item.sold}
                />
            ))}
        </div>
    );
};

export default RentedItems;
