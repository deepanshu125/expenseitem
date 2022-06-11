import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Budget from './Budget';
import Remaining from './Remaining';
import ExpenseTotal from './ExpenseTotal';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';
import { AppProvider } from '../context/AppContext';

const Expenses = (props) => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>My Budget Planner</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                </div>
                <h3 className='mt-3'>Expenses</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Add Expense</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AddExpenseForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default Expenses;