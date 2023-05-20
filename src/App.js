import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import NewTransactionPage from './pages/NewTransactionPage';
import ShowTransaction from './pages/ShowTransaction';
import EditTransaction from './pages/EditTransaction';
import Subtotal from './components/Subtotal'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

 const subtotal = <Subtotal />
  

  return (
    <div className="App">
      <Navbar subtotal={subtotal} />
      <Routes>
        <Route path='/budget' element={<Index subtotal={subtotal}/>} />
        <Route path='/budget/new' element={<NewTransactionPage />} />
        <Route path='/budget/:id' element={<ShowTransaction />} />
        <Route path='/budget/:id/edit' element={<EditTransaction />} />
      </Routes>

    </div>
  );
}

export default App;
