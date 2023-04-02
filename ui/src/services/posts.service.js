import axios from 'axios'
const baseUrl = 'http://localhost:3000/api'

const getAll = async (page, limit) => {
    const url = `${baseUrl}/posts?page=${page}&limit=${limit}`
    const req = await axios.get(url)
    return req.data
}

export default { getAll }
