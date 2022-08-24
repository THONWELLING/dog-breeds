import axios from "axios"


const api = axios.create({
  baseURL: import.meta.env. VITE_REACT_APP_API
})

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post('/register', { token })
    return response.data
  },
  signIn: async (email: string) => {
   const response = await api.post('/register',  email )
    return response.data
  },
  logOut: async () => {
    const response = await api.post('/register')
    return response.data
  }
})