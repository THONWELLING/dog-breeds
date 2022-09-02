import * as C from './styles'
import { useNavigate } from 'react-router-dom'
import logoQ9 from '../../assets/images/logoq9.png'
import Button from '../Buttom'
import UserCircle from '../UserCircle'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'



const Header = () => {
  const auth = useContext(AuthContext)

  const navigate = useNavigate()

  const handlelogOut = () => {
    navigate('/')
  }

  return(
    <C.HeaderContainer>
      <C.HeaderWrapper>
        <img src={logoQ9} width={150} height={62} alt="Logotipo Da Q9"  />
      </C.HeaderWrapper>
      <C.UserInfo>
        <UserCircle initials='WO' />
        <div>
          <p>Olá, <span className='primary-color font-bold'>
            {auth.user?.email}</span>
          </p>
          
            <Button style={{height:'16px'}} 
              onClick={handlelogOut}
            >
            Sair
          </Button>
        </div>
     </C.UserInfo>
    </C.HeaderContainer>
  )
}


export default Header