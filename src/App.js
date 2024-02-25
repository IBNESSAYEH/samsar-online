import Navbar from './components/Navbar';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import AuthProvider from './contexts/AuthenticationContext/AuthProvider'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
   <>
   
   <Router>
        <AuthProvider>
        <Routes>
          <Route path='/register' element={<Register/>} />  
          <Route path='/login' element={<Login/>} />  
        </Routes>
          </AuthProvider>
      </Router>
   </>
  );
}

export default App;
