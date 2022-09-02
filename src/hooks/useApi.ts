import axios from "axios"


const api = axios.create({
  baseURL: 'https://dogbreed-api.q9.com.br'
})


export const useApi = () => ({
  validateToken: async (token: string) => {
    //  return {
    //   user: { email: "thon@thon.com", _id: "62f31d7ecdd2a8a1ce763e5a" },
    // }
    const response = await api.post('/validate', { token })
    return response.data
  },
  signin: async (email: string) => {

    const response = await api.post('/register', { email })
    return response.data
  },
  logout: async () => {
    return { status: true}
    const response = await api.post('/signout')
    return response.data
  }
})