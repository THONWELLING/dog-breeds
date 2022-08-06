import * as C from './styles'

import backgroud404 from '../../assets/images/404-bg.jpg'

const NotFoundPage = () => {
  return(
    <C.Container>
      <h1>Page Not Found!!!</h1>
      <C.Background image={backgroud404} />
    </C.Container>
  )
}

export default NotFoundPage