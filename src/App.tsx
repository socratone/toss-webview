import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Bank from './pages/Bank';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bank" element={<Bank />} />
    </Routes>
  );
}

export default App;
