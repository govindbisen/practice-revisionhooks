import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React from 'react';
import { AuthProvider } from './react-hooks/AuthProvider.jsx';

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
