import styled from "styled-components";


export const ButtonContainer = styled.button`
  width: 100%;
  height: 55px;
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  margin-top:20px;
  margin-bottom: 10px;
  z-index: 100;

  &:hover {
    filter: opacity(0.7)
  }
  &:disable {
    filter: opacity(0.4)
  }
` 