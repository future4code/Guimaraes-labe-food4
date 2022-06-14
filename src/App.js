import React from 'react';
import Router from './routes/Router'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme';
import GlobalState from './global/GlobalState';



const App = () => {
  return (
    <GlobalState>
    <ThemeProvider theme={theme}>
    <Router/>
    </ThemeProvider>
    </GlobalState>
  );
}

export default App;
