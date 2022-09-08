import api from "../resources/api"



export const useApi = () => ({
  getList: async ( breed: string) => {

    const response = await api.get('/list')
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