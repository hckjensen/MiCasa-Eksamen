import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './providers/AuthProvider.jsx'
import { SupabaseProvider } from './providers/SupabaseProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SupabaseProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </SupabaseProvider>
  </StrictMode>,
)
