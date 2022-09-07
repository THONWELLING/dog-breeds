import api from "../resources/api"



export const useApi = () => ({
  getList: async ( breed: string) => {
    try {
    const response = await api.get(`/list?breed=${breed}` )
    return response.data
    console.log(response.data)
    } catch (error) {
      console.error(error)
    }
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