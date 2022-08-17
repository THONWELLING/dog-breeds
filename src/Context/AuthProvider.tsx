import { useState } from "react"
import { useApi } from "../hooks/useApi"
import { UserDto } from "../interfaces/IUser"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({children}: {children:JSX.Element}) => {
  const [user, setUser ] = useState<UserDto | null>(null)
  const api = useApi()


  const userSignIn = async (email: string, password: string) => {
    const data = await api.signIn( email, password )
    if(data.user && data.token) {
      setUser(data.user)
      return true
    }
    return false
  }

  const userSignOut = async () => {
    await api.logOut()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, userSignIn, userSignOut }}>
      {children}
    </AuthContext.Provider>
  )
}