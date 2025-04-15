import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/products'

let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
    console.log(`Token set: ${newToken}`)
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async newObject => {
    const config = {
        headers: { Authorization: token },
    }

    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const remove = async (id) => {
    await axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, remove, setToken }