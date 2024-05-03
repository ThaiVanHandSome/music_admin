import { get, post } from "../../utils/request"

export const getAllUsers = async () => {
    const res = await get("users");
    return res.data;
}

export const getUserById = async (idUser) => {
    const res = await get(`user/${idUser}`);
    return res.data;
}