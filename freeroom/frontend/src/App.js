import React from 'react';
import { AuthProvider } from './Context/auth';
import './App.css';

import Routes from './routes';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;