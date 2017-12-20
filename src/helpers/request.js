import axios from 'axios'

const baseURL = 'https://randomuser.me/api'

const request = axios.create({ baseURL });

export default request
