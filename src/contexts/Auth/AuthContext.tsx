import { createContext } from 'react'
import { UserDto } from '../../interfaces/IUser'


export type AuthContextType = {
  user: UserDto | null
  signin: (email: string) => Promise<boolean>
  signout: () => void
  getList: ( dataList: string[], breed: string) => Promise<string[]>
}

export const AuthContext = createContext<AuthContextType>(null!)