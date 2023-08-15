import OrderRecord from "./OrderRecord";

const Records = () => {
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
        {
            mat_name: "Cotton twill",
            mat_code: "00029",
            sup_id: "S115",
            sup_mobile: "+94765765112",
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