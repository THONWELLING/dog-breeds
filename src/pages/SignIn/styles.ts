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
  height: 60vh;
  background-image url(${({image}) => image});
  background-size: cover;
  z-index: 1;
`

