import api from "./api";

export const getNotifications = () => api.get("/notification");

export const setNotificationsToRead = () => api.put("/notification");

export const setNotificationToRead = (id) =>
    api.put("/notification/read", { id });

export const deleteNotifications = () => api.delete("/notification");