import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const Photos = styled.img`
  width: 22rem;
  height: 22rem;
  margin: 1rem;
  border-radius: 10px;
  transition: 0.3s;
  
  :hover {
    transition: 0.3s;
    transform: scale(1.3);
    box-shadow: 1px 1px 3px #656770;
  }
`

export const ModalArea = styled.img`
  width: 40rem;
  height: 40rem;

  :hover {
    transition: 0.3s;
    transform: scale(1.3);
    box-shadow: 1px 1px 3px #656770;
  }
`