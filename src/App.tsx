
import Footer from "./components/Footer"
import { ThemeProvider } from 'styled-components'

import Router from './Routes';
import { theme } from './styles/theme'
import GlobalStyle from './styles/globalStyles'


function App() {
  return (
    <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Router />
          <Footer />
        </>
    </ThemeProvider>
  );
}

export default App;
