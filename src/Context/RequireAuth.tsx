import { useContext } from "react"
import SignIn from "../pages/SignIn"
import { AuthContext } from "./AuthContext"

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
  const Auth = useContext(AuthContext)

  if (!Auth.user) {
    return <SignIn />
  }
  return children
}