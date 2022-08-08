import  { useEffect, useState, useCallback, createContext } from "react";

import { signIn, signUp, SignInData, SignUpData, List } from '../services/resources/user'



interface UserDto {
  firstName: string;
  lastName: string;
  id: string;
  email: string;
}
interface ContextData {
  user: UserDto;
  userSignIn: (userData: SignInData) => Promise<UserDto>;
  userSignUp: (userData: SignUpData) => Promise<UserDto>;
  getCurrentUser: () => Promise<UserDto>;
}

//criando o contexto 
export const AuthContext = createContext<ContextData>({} as ContextData)

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<UserDto>({} as UserDto)

  //Logando o Usuário
  const userSignIn = async (userData: SignInData) => {

    const {data} = await signIn(userData)
    if(data?.status === 'error') {
      return data
    }
    if(data.token) {
      localStorage.setItem('@Q9 Technology:Token', data.token)
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
    localStorage.setItem('@Q9 Technology:Token', data.token)

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