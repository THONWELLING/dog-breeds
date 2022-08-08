import styled from "styled-components"


export const FooterContainer = styled.div`
  width: 100vw;
  height: 10vh;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  color: ${({theme}) => theme.colors.secondary};
  line-height: 25px;
  font-style: italic;
  text-shadow: 1px 1px 2px #DCDCDC;
  font-weight: 300;
  background: linear-gradient(0.25turn, #EEE8AA, #FFA500, #7B68EE, #483D8B);
  justify-content: space-between;
  align-items: center;
`
export const FooterInfo = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export const Media = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  a {
    width: 9%;
    height: 60%;
    margin-top: 10px;
    background-color: transparent;
    border: 1px solid black;
    color: #4B0082;
    margin-right: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      animation: spin 2s linear infinite;

      @keyframes spin { 
        100% { -webkit-transform: rotateZ(360deg); 
          transform: rotateZ(360deg);
        }
      }
    }
  }
`