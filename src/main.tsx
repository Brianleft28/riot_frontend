import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className='dark text-foreground bg-background min-h-[100vh]' data-theme="dark">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)
