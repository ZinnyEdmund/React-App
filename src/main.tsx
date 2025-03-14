import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { AuthProvider } from './context/AuthContext';

// Create a root React element
ReactDOM.       (document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);