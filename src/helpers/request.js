import axios from 'axios'

const baseURL = 'http://localhost:8888'
const request = axios.create({ baseURL })

export const { all } = axios

export default request
