
import Footer from "./components/Footer"
import { ThemeProvider } from 'styled-components'

import Router from './Routes';
import { theme } from './styles/theme'
import GlobalStyle from './styles/globalStyles'
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Router />
        <Footer />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
