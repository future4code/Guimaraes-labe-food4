import React from 'react';
import Router from './routes/Router'
import { GlobalStateContext } from "./global/GlobalStateContext";

const App = () => {
  return (
    <GlobalStateContext>
    <Router/>
    </GlobalStateContext>
  );
}

export default App;
