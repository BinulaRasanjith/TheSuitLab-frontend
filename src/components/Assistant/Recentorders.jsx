/* eslint-disable perfectionist/sort-jsx-props */
/* eslint-disable perfectionist/sort-imports */
// import React from "react";

import RecentOrderRecord from "./RecentOrderRecord"

import light_olive_1 from '../../assets/images/costume1.jpeg'
import midnight_gray_1 from '../../assets/images/costume2.jpeg'
import navy_suit_1 from '../../assets/images/costume3.jpeg'
import purple_texture_1 from '../../assets/images/costume4.jpeg'

const RecentOrders = () => {

    const records = [
        {
            image: <img alt="" className=' w-14 h-14 rounded-lg' src={light_olive_1} />,
            itemname: 'Black taill suit',
            attributes: 'Black, Teill',
            payment: 'Paid',
            price: '28,990.00',
        },
        {
            image: <img alt="" className=' w-14 h-14 rounded-lg' src={midnight_gray_1} />,
            itemname: 'Cotton Tuxedo',
            attributes: 'Brown, Cotton',
            payment: 'Paid',
            price: '12,990.00',
        },
        {
            image: <img alt="" className=' w-14 h-14 rounded-lg' src={navy_suit_1} />,
            itemname: 'Notch Lapel Tuxedo',
            attributes: 'Blue, Lapel',
            payment: 'Paid',
            price: '15,990.00',
        },
        {
            image: <img alt="" className=' w-14 h-14 rounded-lg' src={purple_texture_1} />,
            itemname: 'Notch Lapel Tuxedo',
            attributes: 'Grey, Lapel',
            payment: 'Paid',
            price: '10,990.00',
        },
    ]


    return (
        <div className="flex flex-col gap-6">
            {records.map((item, index) => (
                <RecentOrderRecord
                    key={index}
                    Image={item.image}
                    ItemName={item.itemname}
                    Attributes={item.attributes}
                    Payment={item.payment}
                    Price={item.price}
                />
            ))}
        </div>
    );
};


export default RecentOrders;