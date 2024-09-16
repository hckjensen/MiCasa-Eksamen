import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import FrontPage from './pages/FrontPage'
import LoginPage from './pages/LoginPage'
import ContactPage from './pages/ContactPage'
import AdminPage from './pages/AdminPage'
import SearchPage from './pages/SearchPage'
import EstatesPage from './pages/EstatesPage'



function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/søg" element={<SearchPage />} />
          <Route path="/boliger" element={<EstatesPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
