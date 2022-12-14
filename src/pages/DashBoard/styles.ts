import styled from 'styled-components'



export const DashboardBackground = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.backgroundLight};

  h1 {
    font-size: 25px;
    margin-top: 40px;
    color: ${({theme}) => theme.colors.secondary};
  
  }
`

export const BodyContainer = styled.main`
  width: 88%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  > div {
    flex: 1;

    & > div {
      margin-bottom: 20px;
    }
      
    &:nth-child(2) {
      display: flex;
      justify-content: flex-end;
    }
  }
`

export const InlineTitle = styled.div`
  display: flex;
  width: 100%;
`

export const InlineContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;

  div {
    flex: 4;
    margin-right: 20px;
  }

  button {
    flex: 1;
  }
`

export const Button =styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.8rem;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
  color: #ebb365;


  &:hover {
    width: 80%;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }
`