import api from "../api";


export interface SignInData {
  email: string
  password: string
}


export interface SignUpData {
  firstName: string
  lastName: string
  email: string
  password: string
}


//Este arquivo ficará responsável peles consultas na api

export const signIn = async (data: SignInData) => {
  const user = await api.post('/signin', data)
  return user
}


export const signUp = async (data: SignUpData) => {
  const user = await api.post('/register', data)
  return user
}

export const List = async () => {
  return api.get('/list')
}