import './App.css';
import SignUp from './components/SignUp.js';
import VerifyOTP from './components/VerifyOTP.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
