// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup welcome="Welcome Back!" create="Create Account" />} />
        <Route path="/signup" element={<Signin />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
