import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/FireAlarm/Theme.tsx';
import store from './store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
  <ThemeProvider theme={theme}>
     <Provider store={store}>
     <App />
  </ThemeProvider>,
     </Provider>
  
  </React.StrictMode>,
)
