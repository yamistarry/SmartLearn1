import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducer/index';
import { Toaster } from 'react-hot-toast'
import rootReducer from './reducer/index';
import { AuthProvider } from './contexts/AuthContext'; 

const store = configureStore({
  reducer: rootReducer
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
      <AuthProvider> 
          <App />
          <Toaster />
        </AuthProvider>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
)
