import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import store from './redux'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ConfigProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
)
