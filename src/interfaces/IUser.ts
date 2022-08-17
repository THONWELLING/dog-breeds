import { AxiosResponse } from "axios";

//Interface de dados do usuário
export interface UserDto {
  firstName?: string;
  lastName?: string;
  id: string;
  email: string;
  password?: string
}

//Interface para o login de usuário
export interface SignInData {
  email: string
  password?: string
}

//Interface para a Criação de usuários
export interface SignUpData {
  firstName: string
  lastName: string
  email: string
  password: string
}

// Interface para o Context
export interface ContextData {
  user: UserDto | null;
  userSignIn: (email: string, password: string) => Promise<boolean>;
  userSignOut: () => void;
}