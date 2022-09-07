import { useState } from 'react'

import * as C from'./styles'
import Header from '../../components/Header'
import Card from '../../components/Card'
import PhotoList from '../../components/PhotoList'



const DashBoard = () => {

  const [breed, setBreed] = useState('chihuahua') // state sobre a raça
  const [dataList, setDataList] = useState([]) //state da lista de dados
  const [currentPage, setCurrentPage] = useState(0) // state da página atual

  const pageItems = 9  // variável de quantidade de itens por página
  const startIndex = currentPage * pageItems 
  const endIndex = startIndex + pageItems
  const currentItems = dataList.slice(startIndex, endIndex)


  return(
    <C.DashboardBackground>
      <Header />
     <C.BodyContainer>
       <div>
          <Card noShadow width='30%'>
            <h1>Lista de Raças dos Cães </h1>
              <C.Button onClick={() => setBreed("chihuahua")}>
            Chihuahua
            </C.Button>
            <C.Button onClick={() => setBreed("husky")}>Husky</C.Button>
            <C.Button onClick={() => setBreed("pug")}>Pug</C.Button>
            <C.Button onClick={() => setBreed("labrador")}>
              Labrador
            </C.Button>
          </Card>
          <Card>
            {dataList.length > 0 &&
          currentItems.map((dog, index) => {
            return <PhotoList dog={dog} key={index} />;
          })}
          </Card>
        </div>
     </C.BodyContainer>
    </C.DashboardBackground>
  )
}


export default DashBoard