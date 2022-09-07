import { useState } from 'react'
import Modal from "react-modal";
import * as C from './styles'
import Card from "../Card";



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
}

const PhotoList = (dog: any) => {

  const [open, setOpen] = useState(false)

  const handleModalOpen = () => {
    setOpen(true)
  }

  const HandleCloseModal = () => {
    setOpen(false)
  }

  return (
    <C.Container>
      <C.Photos src={`${dog.dog}`} alt='dog' onClick={handleModalOpen} />
      <Modal 
        isOpen={open}
        onRequestClose={HandleCloseModal}
        style={customStyles}
      >
        <Card>
          <C.ModalArea src={`${dog.dog}`} alt='dog'  />
        </Card>
      </Modal>

    </C.Container>
  )
}


export default PhotoList