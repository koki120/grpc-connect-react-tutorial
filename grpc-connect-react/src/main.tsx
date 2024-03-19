import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Client } from "./client.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Client baseUrl='http://localhost:8080'>
    <App />
    </Client>
  </React.StrictMode>,
)
