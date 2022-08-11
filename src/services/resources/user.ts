import api from "../api";
import { SignInData, SignUpData } from "../../interfaces/IUser";



//Este arquivo ficará responsável peles consultas na api

export const signIn = async (data: SignInData) => {
  const user = await api.post('/register', data)
  return user
}


export const signUp = async (data: SignUpData) => {
  const user = await api.post('/register', data)
  return user
}

export const List = async () => {
  return api.get('/list')
}