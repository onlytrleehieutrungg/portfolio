import axios from "axios"

const axiosClient = axios.create({
    baseURL: process.env.BASE_API_URL || 'https://dummyjson.com',
    headers: {
      'Content-Type': 'application/json',
    },
  })

export default axiosClient