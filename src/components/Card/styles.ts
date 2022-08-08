import styled, { css } from "styled-components";


export const CardContainer = styled.div<{
  width: string
  height: string
  noShadow: boolean
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${({theme}) => theme.colors.background};
  opacity: .7;

  ${(props) => !props.noShadow && css`
    box-shadow: 6px 6px 5px rgba(0,0,0,0.4)
  `};
  border-radius: 25px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 100;
`