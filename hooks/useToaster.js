import { toast } from "react-toastify";

export const showNotification = (message, options) => {
    toast(message, {
        theme: "colored",
        position: "top-right",
        hideProgressBar: false,
        autoClose:2000,
        ...options,
    });
};