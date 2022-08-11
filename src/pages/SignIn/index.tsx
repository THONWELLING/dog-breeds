import { useEffect, useState } from 'react'

import * as C from './styles'

import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Buttom'

import background from '../../assets/images/banner_dog.jpg'
import logoQ9 from'../../assets/images/logoq9.png'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'






const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
      const { userSignIn } = useAuth()


    const handleToSignIn = async () => {
      const data = {
        email,
        password
      }
      const response = await userSignIn(data)
      if(response.id) {
        navigate('/dashboard')
        return
      }
      alert('Usuário e/ou Senha Inválidos')
    
    }
  
  return(
    <C.Container>
      <C.Background image={background} />
      <Card  width='450px'>
        <img src={logoQ9} width={150} height={62} alt="Logotipo Da Q9"  />
        <C.InputContainer>
          <Input placeholder='Entre Com O Email'
            type={'email'}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input placeholder='Insira A Senha'
            type={'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </C.InputContainer>
        <C.ButtonContainer>
          <Button type='button' onClick={handleToSignIn}>
            Entrar
          </Button>
          <p>Ainda Não É Cadastrado? <Link to='/signup'>Cadastre-se Já</Link> </p>
        </C.ButtonContainer>
      </Card>
    </C.Container>
  )
}



export default SignIn