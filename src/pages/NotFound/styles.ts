import styled from "styled-components";


export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 350px;
  width: 100%;
  height: 70vh;
  font-size: 50px;
`

export const Background = styled.div<{image: any}>`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background-image url(${({image}) => image});
  background-size: cover;
  z-index: -1;
`