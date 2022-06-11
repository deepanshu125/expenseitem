import React from 'react';
// import Budget from './components/Budget';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Remaining from './components/Remaining';
// import ExpenseTotal from './components/ExpenseTotal';
// import ExpenseList from './components/ExpenseList';
// import AddExpenseForm from './components/AddExpenseForm';
// import { AppProvider } from './context/AppContext';
import Login from './components/login';
import './index.css'
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Expenses from './components/Expenses';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path= '/Expenses' exact element = {<Expenses/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;