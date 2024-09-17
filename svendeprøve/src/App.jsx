import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import FrontPage from './pages/FrontPage'
import LoginPage from './pages/LoginPage'
import ContactPage from './pages/ContactPage'
import AdminPage from './pages/AdminPage'
import SearchPage from './pages/SearchPage'
import EstatesPage from './pages/EstatesPage'
import EstateList from './components/Estates/EstateList'
import EstateDetail from './components/Estates/EstateDetail'





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
          <Route path="/boliger" element={<EstatesPage />} >
            <Route index element={<EstateList />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
