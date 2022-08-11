import { useState } from 'react'
import { AuthContext } from './AuthContext'

import { signIn, signUp, List } from '../services/resources/user'
import { UserDto, SignInData, SignUpData, } from '../interfaces/IUser'



export const AuthProvider = ({ children }: {children: JSX.Element}) => {

  const [user, setUser] = useState<UserDto>({} as UserDto)

  //Logando o Usuário
  const userSignIn = async (userData: SignInData) => {

    const { data } = await signIn(userData)
    if(data?.status === 'error') {
      return data
    }
    if(data.token) {
      localStorage.setItem('@Q9 TechnologyToken: ', data.token)
      console.log(data)
    }
    return getCurrentUser()
  }

  const getCurrentUser = async() => {
    const {data} = await List()
    setUser(data)
    return data
  }

  //Cadastrando Novo Usuário
  const userSignUp = async (userData: SignUpData) => {
    const {data} = await signUp(userData)
    localStorage.setItem('@Q9 TechnologyToken: ', data.token)

    return getCurrentUser();
  }

  return(
    <AuthContext.Provider value={{
        user,
        userSignIn,
        userSignUp,
        getCurrentUser
      }}>
      {children}
    </AuthContext.Provider>
  )
}