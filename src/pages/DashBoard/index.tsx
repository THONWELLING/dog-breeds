import * as C from'./styles'
import Header from '../../components/Header'
import Card from '../../components/Card'


const DashBoard = () => {
  return(
    <C.DashboardBackground>
      <Header />
     <C.BodyContainer>
       <div>
          <Card noShadow width='90%'>
              
             
          </Card>
        </div>
     </C.BodyContainer>
    </C.DashboardBackground>
  )
}


export default DashBoard