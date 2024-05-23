import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://sofaraa-center-back.gt-dev.ly/api/',
  headers: {
    accept: '*/*',
    // 'Content-Type': 'multipart/form-data',
    // 'Content-Type': 'multipart/form-data',
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
})

export default apiClient
