import { useEffect, useState } from "react"
import { useApi } from "../hooks/useApi"
import { UserDto } from "../interfaces/IUser"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({children}: {children:JSX.Element}) => {
  const [user, setUser ] = useState<UserDto | null>(null)
  const api = useApi()


  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('authToken')
      if(storageData) {
        const data = await api.validateToken(storageData)
        if(data.user) {
          setUser(data.user)
        }
      }
    }
    validateToken()
  },[api])

  const userSignIn = async (email: string) => {
    const data = await api.signIn( email )
    if(data._id && data.token) {
      setUser(data.user)
      setToken(data.token)
      console.log(data.token)
      return true
    }
    return false
  }

  const userSignOut = async () => {
    await api.logOut()
    setUser(null)
  }

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token)
  }

  return (
    <AuthContext.Provider value={{ user, userSignIn, userSignOut }}>
      {children}
    </AuthContext.Provider>
  )
}