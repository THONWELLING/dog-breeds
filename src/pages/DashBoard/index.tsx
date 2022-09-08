import { useContext, useEffect, useState } from 'react'

import * as C from'./styles'
import Header from '../../components/Header'
import Card from '../../components/Card'
import PhotoList from '../../components/PhotoList'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { useApi } from '../../hooks/useApi'



const DashBoard = () => {


  const api = useApi()

  const [breed, setBreed] = useState('chihuahua') // state sobre a raça
  const [dataList, setDataList] = useState([]) //state da lista de dados
  const [currentPage, setCurrentPage] = useState(0) // state da página atual

  const pageItems = 9  // variável de quantidade de itens por página
  const startIndex = currentPage * pageItems 
  const endIndex = startIndex + pageItems
  const currentItems = dataList.slice(startIndex, endIndex)

   const auth = useContext(AuthContext)
  // useEffect(() => {
  //    api.getList(setDataList, breed)
  
  // },[breed])

  return(
    <C.DashboardBackground>
      <Header />
      <h1>Olá <span>{auth.user?.email}</span>, seja bem vindo! Escolha abaixo a raça de cães a qual quer visualizar. </h1>
     <C.BodyContainer>
       <div>
          <Card noShadow width='30%'>
            <h1>Lista de Raças dos Cães </h1>
              <C.Button onClick={() => setBreed("chihuahua")}
              style={{marginTop: '20px'}}>
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