import axios from "axios"


const api = axios.create({
  baseURL: 'https://dogbreed-api.q9.com.br'
})


api.interceptors.request.use(config => {
  const token = localStorage.getItem('@Q9:authToken')
  config.headers = {
    'Authorization': `Bearer ${token}`
  }
  return config
})


export default api