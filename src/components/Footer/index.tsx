import * as C from './styles'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from'react-icons/fa'

const Footer = () => {
  return (

    <C.FooterContainer>
      <C.FooterInfo>
        Feito Por Wellington Para Fim De Teste<br />
        Direitos De Imagem Para o Q9 Technology<br />
      </C.FooterInfo>
      <C.Media>
        <a href='https://www.facebook.com/profile.php?id=100028818758980'><FaFacebookF /></a>
        <a href='https://www.instagram.com/thonwellingd'><FaInstagram /></a>
        <a href='https://github.com/THONWELLING'><FaGithub /></a>
        <a href='https://www.linkedin.com/in/wellington-sousa-6494a6179'><FaLinkedinIn /></a>
      </C.Media>
    </C.FooterContainer>
  )
}

export default Footer