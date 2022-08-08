import styled, { css } from "styled-components";


export const CardContainer = styled.div<{
  width: string
  height: string
  noShadow: boolean
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${({theme}) => theme.colors.background};
  opacity: .5;

  ${(props) => !props.noShadow && css`
    box-shadow: 5px 4px 6px rgba(0,0,0,0.25)
  `};
  border-radius: 25px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 100;
`