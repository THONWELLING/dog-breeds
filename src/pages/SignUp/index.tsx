import { useState } from 'react'

import * as C from './styles'


import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Buttom'

import background from '../../assets/images/banner_dog.jpg'
import logoQ9 from'../../assets/images/logoq9.png'
import { Link, useNavigate } from 'react-router-dom'



const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSignUp = () => {
    navigate('/dashboard')
  }

  return(
    <C.Container>
      <C.Background image={background} />
      <Card  width='450px'>
        <img src={logoQ9} width={150} height={62} alt="Logotipo Da Q9"  />
        <C.InputContainer>
          <Input placeholder='Nome'/>
          <Input placeholder='SobreNome'/>
          <Input placeholder='Email'/>
          <Input placeholder='Senha'/>
          <Input placeholder='Confirme A Senha'/>
        </C.InputContainer>
        <C.ButtonContainer>
          <Button type='button' onClick={handleSignUp}>
            Entrar
          </Button>
          <p>Já Tem Uma Conta? <Link to='/'>Entre Já</Link> </p>
        </C.ButtonContainer>
      </Card>
    </C.Container>
  )
}



export default SignUp