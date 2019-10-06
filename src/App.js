import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes'
import { Header } from './components'

function App() {
  return (
    <>
      <Header />
      <main >
        <Routes />
      </main>
      <GlobalStyle/>
    </>
  );
}

export default App;
