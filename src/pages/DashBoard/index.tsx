import * as C from'./styles'
import Header from '../../components/Header'
import Card from '../../components/Card'
import { useParams } from 'react-router-dom'


const DashBoard = () => {
  const params = useParams()
  return(
    <C.DashboardBackground>
      <Header />
     <C.BodyContainer>
       <div>
          <Card noShadow width='90%'>
            <h1>Lista de Raças deos Cães </h1>
              <ul>
                <li>chihuahua</li>
                <li>husky</li>
                <li>labrador </li>
                <li>pug</li>
              </ul>
             
          </Card>
        </div>
     </C.BodyContainer>
    </C.DashboardBackground>
  )
}


export default DashBoard