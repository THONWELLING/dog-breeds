import axios from "axios"


const api = axios.create({
  baseURL: 'https://dogbreed-api.q9.com.br',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post('/register', { token })
    return response.data
  },
  signIn: async (email: string, password: string) => {
   const response = await api.post('/register', { email, password })
    return response.data
  },
  logOut: async () => {
    const response = await api.post('/register')
    return response.data
  }
})