import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as C from './styles'

import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Buttom'


import background from '../../assets/images/banner_dog.jpg'
import logoQ9 from'../../assets/images/logoq9.png'
import { AuthContext } from '../../contexts/Auth/AuthContext'







const SignIn = () => {
  const auth = useContext(AuthContext)
    const [email, setEmail] = useState('')

    const navigate = useNavigate()
   
  
  const handleSignIn = async () => {
    const isLogged = await auth.signin(email)
    console.log('EMAIL DO HANDLESIGNIN =>',email)
    if (email) {
      if (isLogged) {
        navigate('/dashboard') 
      } else {
        alert('Não deu Certo')
      }
    }
  }

  return(
    <C.Container>
      <C.Background image={background} />
      <Card  width='450px'>
        <img src={logoQ9} width={150} height={62} alt="Logotipo Da Q9"  />
        <C.InputContainer>
          <Input placeholder='Registre-Se Com Email'
            type={'email'}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </C.InputContainer>
        <C.ButtonContainer>
          <Button 
            type='button'
            onClick={handleSignIn}
          >
            Registrar
          </Button>
        </C.ButtonContainer>
      </Card>
    </C.Container>
  )
}



export default SignIn