import PropTypes from "prop-types";

import MaterialRecord from "./MaterialRecord";

const MaterialsRecords = ({ onOpen }) => {
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
                    onOpen={() => onOpen(item.mat_code, item.mat_name)}
                />
            ))}
        </div>
    );
};

MaterialsRecords.propTypes = {
    onOpen: PropTypes.func.isRequired,
};

export default MaterialsRecords;
