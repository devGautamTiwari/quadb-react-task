import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store' // Import the store

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Wrap the App with Redux store provider  */}
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
)
