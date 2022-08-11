import api from'../api'


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

export interface UserDto {
  accountDigit: number
  accountNumber: number
  email: string
  firstName: string
  id: string
  lastName: string
  wallet: number
}

export const signIn = async (data: SignInData) => {
 // MÉTODO  COMUN
   const user = await api.post('/register', data)
   return user

  // //MÉTODO SIMPLIFICADO
  // return api.post('/user/signin', data)
}

export const List = async () => {
  return api.get('/list')
}

export const signUp = async (data: SignUpData) => {
  return api.post('/register', data)
}