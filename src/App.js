import Navbar from './components/layouts/Navbar';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import AuthProvider from './contexts/AuthenticationContext/AuthProvider'
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DetailPage from './components/Detail';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
   
   <Router>
        <AuthProvider>
        <Routes>
          <Route path='/' element={<Home/>} />  
          <Route path='/detail' element={<DetailPage/>} />  
          <Route path='/register' element={<Register/>} />  
          <Route path='/login' element={<Login/>} />  
        </Routes>
          </AuthProvider>
      </Router>
   </>
  );
}

export default App;
