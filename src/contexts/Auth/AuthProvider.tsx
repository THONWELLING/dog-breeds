import { useState } from "react"
import { useApi } from "../../hooks/useApi"
import { UserDto } from "../../interfaces/IUser"
import { AuthContext } from "./AuthContext"



export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const api = useApi()

  const [user, setUser] = useState<UserDto>(() => {

    //esta função passada no useState vai no localStorage e pega o usuário e
    //logo em seguida faz uma validação  se o usuário existe ele joga dentro do state caso não exista  ele retorna um objeto vazio
    
    const user = localStorage.getItem("@Q9:User");

    if(user) {
      return JSON.parse(user);
    }

    return {} as UserDto
  })

  const signin = async ( email: string ) => {

    const { user } = await api.signin(email)
    console.log('User', user)

    if( user.token ) {
      localStorage.setItem('@Q9:authToken', user.token)
      console.log('@Q9:authToken =>', user.token)
      setUser(user)
      return true
    }
    return false
  }

 const signout = async () => {
  await api.logout()
  setUser('')
  // setToken('')
 }

  // const setToken = (token: string) => {
  //   localStorage.setItem('authToken', token)
  // }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}