import { ThemeProvider } from "styled-components"
import Footer from "./components/Footer"


import Router from "./Routes"
import GlobalStyle from "./styles/globalStyles"
import { theme } from'./styles/theme'


function App() {
  return ( 
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
      <Footer />
    </ThemeProvider>
  )
}

export default App
