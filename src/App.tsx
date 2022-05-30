import React from 'react';
import Header from './components/Header';
import GlobalStyle from './styles/global'
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/userPersistedState';
import { BrowserRouter } from "react-router-dom";
import { dark, light } from './styles/themes';
import Routes from './routes';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme( theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header toggleTheme={toggleTheme}/>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
     </ThemeProvider>
  );
}

export default App;
