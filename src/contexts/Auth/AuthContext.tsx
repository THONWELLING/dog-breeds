import { createContext } from 'react'
import { UserDto } from '../../interfaces/IUser'


export type AuthContextType = {
  user: UserDto | null
  signin: (email: string) => Promise<boolean>
  signout: () => void
}

export const AuthContext = createContext<AuthContextType>(null!)