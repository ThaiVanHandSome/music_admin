import { get } from "~/utils/request"

export const countSongs = async () => {
    const res = await get("songs/count");
    return res.data;
}