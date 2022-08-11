import  { useState, createContext } from "react";
import { ContextData } from "../interfaces/IUser";







//criando o contexto 
export const AuthContext = createContext<ContextData>({} as ContextData)

