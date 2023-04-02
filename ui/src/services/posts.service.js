import axios from "axios";
const baseUrl = "http://localhost:3000/api";

const getAll = async (page, limit) => {
    try {
        const url = `${baseUrl}/posts`;
        const req = await axios.get(url);
        return req.data;
    } catch (err) {
        throw new Error(err);
    }
};

export default { getAll };
