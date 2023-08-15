import OrderRecord from "./OrderRecord";

const Records = () => {
    const records = [
        {
            mat_name: "#001",
            mat_code: "2",
            sup_mobile: "+94765734109",
            sup_id: "Malini Fonseka",
            last_order: "2023-08-14",
        },
        {
            mat_name: "#002",
            mat_code: "9",
            sup_mobile: "+94765765109",
            sup_id: "Siril Piyadasa",
            last_order: "2023-08-10",
        },
        {
            mat_name: "#003",
            mat_code: "2",
            sup_mobile: "+94766765109",
            sup_id: "Anne Perera",
            last_order: "2023-08-11",
        },
        {
            mat_name: "#004",
            mat_code: "6",
            sup_mobile: "+94765754785",
            sup_id: "James Peiris",
            last_order: "2023-08-09",
        },
        {
            mat_name: "#005",
            mat_code: "3",
            sup_mobile: "+94765123765",
            sup_id: "Rakisa Jayaweera",
            last_order: "2023-08-08",
        },
    ];

    return (
        <div className="flex flex-col gap-6">
            {records.map((item, index) => (
                <OrderRecord
                    BorrowedDate={item.sup_mobile}
                    CustomerId={item.mat_name}
                    CustomerMobile={item.sup_id}
                    HandoverDate={item.last_order}
                    SuitId={item.mat_code}
                    key={index}
                />
            ))}
        </div>
    );
};

export default Records;