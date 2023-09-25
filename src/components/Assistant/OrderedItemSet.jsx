import OrderRecord from "./OrderRecord";

const OrderedItems = () => {
    const records = [
        {
            order_id: "#007324786345",
            item_count: 1,
            mobile: "(225) 555-0118",
            customer: "Malin Perera",
            ordered_date: "2023-02-07",
            status: "Collected",
        },
        {
            order_id: "#007908322342",
            item_count: 2,
            mobile: "(208) 555-0112",
            customer: "Janaka Ishan",
            ordered_date: "2023-02-22",
            status: "Collected",
        },
        {
            order_id: "#007373652783",
            item_count: 1,
            mobile: "(302) 321-0107",
            customer: "Chameera Dilshan",
            ordered_date: "2023-02-12",
            status: "Collected",
        },
        {
            order_id: "#007765876554",
            item_count: 3,
            mobile: "(252) 533-0120",
            customer: "Kalana Perera",
            ordered_date: "2023-02-07",
            status: "Collected",
        },
    ];

    return (
        <>
            <div className="flex flex-col gap-6">
                {records.map((item, index) => (
                    <OrderRecord
                        key={index}
                        OrderId={item.order_id}
                        ItemCount={item.item_count}
                        MobileNo={item.mobile}
                        Customer={item.customer}
                        OrderedDate={item.ordered_date}
                        Status={item.status}
                    />
                ))}
            </div>
        </>
    );
};

export default OrderedItems;