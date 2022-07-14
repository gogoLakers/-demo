import axios from 'axios'

const request = axios.create({
    baseURL: '/mock',
    timeout: 5000
})

export default request