import styled from "styled-components";


export const InputContainer = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 18px;
  margin-bottom: 25px;
  align-items: center;
  z-index: 100;

  
  input {
    width:100%
    font-size: 1.2rem;
    font-weight: 400;
    font-style: italic;
    background: transparent;
    border: 0;
    margin: 0 42px;
    outline: 0;
  }
`

