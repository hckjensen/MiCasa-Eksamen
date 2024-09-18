import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './providers/AuthProvider.jsx'
import { SupabaseProvider } from './providers/supabaseProvider.jsx'
import { ContextProvider } from './providers/ContextProvider.jsx'
import Modal from 'react-modal';

Modal.setAppElement('#root');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SupabaseProvider>
      <ContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ContextProvider>
    </SupabaseProvider>
  </StrictMode>,
)
