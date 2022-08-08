import styled from 'styled-components'


export const Container = styled.main`
width: 100vw;
height: 100vh;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Background = styled.div<{image: any}>`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  height: 67vh;
  background-image url(${({image}) => image});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`

export const InputContainer = styled.div`
  margin-top: 67px;
  width: 90%;
  flex: 1
`
export const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 0.75rem;
    font-weight: 400;
    font-family: Roboto, sans-serif;
    color: ${({theme}) => theme.colors.green};
    
    a {
      font-family: Roboto, sans-serif;
      font-size: 1rem;
      font-weight: 700;
    }
  }

`
