import * as C from './styles'
import { useNavigate } from 'react-router-dom'
import logoQ9 from '../../assets/images/logoq9.png'
import Button from '../Buttom'



const Header = () => {
  return(
    <C.HeaderContainer>
      <C.HeaderWrapper>
        <img src={logoQ9} width={150} height={62} alt="Logotipo Da Q9"  />
      </C.HeaderWrapper>
      <C.UserInfo>
        <div>
          <p>Olá, <span className='primary-color font-bold'>
            Wellington Oliveira</span>
          </p>
          
            <Button style={{height:'16px'}} >
            Sair
          </Button>
        </div>
     </C.UserInfo>
    </C.HeaderContainer>
  )
}


export default Header