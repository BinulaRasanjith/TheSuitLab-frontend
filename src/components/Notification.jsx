import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { selectUser } from "../store/slices/authSlice";
import { IoArrowBackCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdDone } from "react-icons/md";


import {
    ADMIN,
    CUSTOMER,
    OPERATION_ASSISTANT,
    PRODUCT_MANAGER,
    TAILOR,
} from "../constants";

const Notifications = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            subject: 'This is Subject 1',
            message: 'This is Message 1',
            isRead: false,
        },
        {
            id: 2,
            subject: 'This is Subject 2',
            message: 'This is Message 2',
            isRead: true,
        },
        {
            id: 3,
            subject: 'This is Subject 3',
            message: 'This is Message 3',
            isRead: true,
        },
        {
            id: 4,
            subject: 'This is Subject 4',
            message: 'This is Message 4',
            isRead: false,
        },
    ]);

    const user = useSelector(selectUser);
    const navigate = useNavigate();


    const handleBack = () => {
        if (user.role === TAILOR) {
            navigate("/tailor");
        }
        if (user.role === PRODUCT_MANAGER) {
            navigate("/manager");
        }
        if (user.role === CUSTOMER) {
            navigate("/customer");
        }
        if (user.role === OPERATION_ASSISTANT) {
            navigate("/assistant");
        }
        if (user.role === ADMIN) {
            navigate("/admin");
        }
    };

    const handleMarkAsRead = (notificationId) => {
        dispatch(markNotificationAsRead(notificationId)); // Dispatch action to mark notification as read
        const updatedNotifications = notifications.map((notification) =>
            notification.id === notificationId ? { ...notification, isRead: true } : notification
        );
        setNotifications(updatedNotifications);
    };

    const sortedNotifications = [...notifications].sort((a, b) => (a.isRead === b.isRead ? 0 : a.isRead ? 1 : -1));

    return (
        <>
            <div className="flex flex-col w-full h-full">
                <div className="flex flex-row mt-5 items-center gap-x-8 ">
                    <button onClick={handleBack} className="flex m-2 items-center gap-2 cursor-pointer text-primary">
                        <IoArrowBackCircle className="text-3xl cursor-pointer" />
                    </button>

                    <div className='flex gap-2'>
                        <MdOutlineNotificationsActive className='text-4xl' />
                        <h1 className="text-3xl font-semibold">Notifications</h1>
                    </div>
                </div>
                <div className="flex flex-col rounded-2xl shadow-xl mt-10 m-20">
                    {sortedNotifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`m-2 p-2 border-b-2 flex items-center justify-between rounded-xl border-gray-500 ${!notification.isRead ? 'bg-gray-200' : ''}`}
                        >
                            {/* <div className='border-2 border-gray-600 w-full'></div> */}
                            <h3>{notification.subject}</h3>
                            <p>{notification.message}</p>
                            {!notification.isRead && (
                                <button
                                    onClick={() => handleMarkAsRead(notification.id)}
                                    className="text-white flex items-center bg-green-500 px-4 py-2 mt-2 rounded-2xl"
                                >
                                    <MdDone className="mr-1 text-2xl" />
                                    Mark as Read
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Notifications;
