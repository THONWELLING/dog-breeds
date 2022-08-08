import * as C from './styles'

import backgroud404 from '../../assets/images/404-bg.jpg'

const NotFoundPage = () => {
  return(
    <C.Container>
      <C.Title>Page Not Found!!!</C.Title>
      <C.Background image={backgroud404} />
    </C.Container>
  )
}

export default NotFoundPage