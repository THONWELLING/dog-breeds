
//Interface de dados do usuário
export interface UserDto {
  _id: string;
  email: string;
}

//Interface para o login de usuário
export interface RegisterDTO {
  email: string
}

// Interface para o Context
export interface ContextData {
  user: UserDto | null;
  userSignIn: ( email: RegisterDTO ) => Promise<boolean>;
  userSignOut: () => void;
}