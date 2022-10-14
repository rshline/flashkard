import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import CreateDeckPage from './pages/deck/Create'
import OpenDeckPage from './pages/deck/Open';
import EditDeckPage from './pages/deck/Edit';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/create' element={<CreateDeckPage />} />
            <Route path='/deck/:deckId' element={<OpenDeckPage />} />
            <Route path='/deck/:deckId/edit' element={<EditDeckPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
