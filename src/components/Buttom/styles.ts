import styled from "styled-components";


export const ButtonContainer = styled.button`
  width: 80%;
  height: 52px;
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  margin-bottom: 22px;
  z-index: 100;

  &:hover {
    filter: opacity(0.7)
  }
  &:disable {
    filter: opacity(0.4)
  }
` 