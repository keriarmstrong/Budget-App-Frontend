import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import NewTransactionPage from './pages/NewTransactionPage';
import ShowTransaction from './pages/ShowTransaction';
import EditTransaction from './pages/EditTransaction';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/budget' element={<Index />} />
        <Route path='/budget/new' element={<NewTransactionPage />} />
        <Route path='/budget/:id' element={<ShowTransaction />} />
        <Route path='/budget/:id/edit' element={<EditTransaction />} />
      </Routes>
    
    </div>
  );
}

export default App;
