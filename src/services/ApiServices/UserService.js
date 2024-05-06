import { get, patch } from "../../utils/request"

export const getAllUsers = async () => {
    const res = await get("users");
    return res.data;
}

export const countUsers = async () => {
    const res = await get("users/count");
    return res.data;
}

export const countArtists = async () => {
    const res = await get("users/artists/count");
    return res.data;
}

export const getUserById = async (idUser) => {
    const res = await get(`user/${idUser}`);
    return res.data;
}

export const getUserByEmail = async (email) => {
    const res = await get(`user?email=${email}`);
    return res.data;
}

export const updateUser = async (idUser, data) => {
    try {
        const res = await patch(`user/${idUser}`, data);
        console.log(res);
        return res.data;
    } catch(err) {
        console.error(err);
    }
}