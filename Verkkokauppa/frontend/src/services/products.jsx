import axios from 'axios'
const baseUrl = 'http://localhost:3000/products'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async newObject => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

const remove = async (id) => {
    await axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, remove }