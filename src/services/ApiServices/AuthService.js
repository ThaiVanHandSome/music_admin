import { get, post } from "../../utils/request"

export const authenticate = async (data) => {
    try {
        const res = await post("auth/authenticate", data);
        console.log(res.data);
        return res.data;
    } catch(err) {
        console.error(err);
    }
}

export const sendEmail = async (data) => {
    try {
        const res = await post("auth/send", data);
        console.log(res.data);
        return res.data;
    } catch(err) {
        console.error(err);
    }
}