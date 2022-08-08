import * as C from './styles'

interface CardProps {
  width?: string
  height?: string 
  children?: React.ReactNode
  noShadow?: boolean
}

const Card = ({
  children,
  width= '100%',
  height= 'auto',
  noShadow= false
}:CardProps) => {
  return (
    <C.CardContainer width={width} height={height} noShadow={noShadow}>
      {children}
    </C.CardContainer>
  )
}

export default Card