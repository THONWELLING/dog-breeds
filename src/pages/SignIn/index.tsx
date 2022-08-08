import * as C from './styles'
import background from '../../assets/images/banner_dog.jpg'
import Card from '../../components/Card'
import Input from '../../components/Input'
import { useState } from 'react'
import Button from '../../components/Buttom'



const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <C.Container>
      <C.Background image={background} />
      <Card  width='450px'>
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
          <Button type='button'>
            Entrar
          </Button>
        </C.ButtonContainer>
      </Card>
    </C.Container>
  )
}



export default SignIn