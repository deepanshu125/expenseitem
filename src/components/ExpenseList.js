import React, { useContext, useEffect, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    // const [expenses, setExpenses] = useState([]);
    // const fetchExpenses = () => {
        
    //     var config = {
    //         method: 'get',
    //         url: 'http://127.0.0.1:3001/expenses/2?date=10-10-2022',
    //         headers: { }
    //       };
          
    //       axios(config)
    //       .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //         setExpenses(JSON.parse(JSON.stringify(response.data)));
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
    // useEffect(()=>{
    //     fetchExpenses();
    // },[])

    const [expense, setExpense] = useState([]);
    // const [description, setDescription] = useDescription('');
    // const [description, setDescription] = useDescription('');
    const getData = () => {
        //get user id/ user token from cookies
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            // headers: {
            //     'Authorization': "Bearer" + ' the id or token'
            //     // 'Content-Type': 'application/x-www-form-urlencoded',
            //   },
        };
        fetch("http://127.0.0.1:3001/expenses/4", requestOptions)
            .then(response => response.text())
            .then((result) => {
                console.log(result)
                setExpense(result)
            }
            )
            .catch (error => console.log('error', error));
    }
useEffect(() => {
    getData()
}, [])
    return (
        <ul className='list-group'>
            {expenses.map((expense) => (
				<ExpenseItem id={expense.id} name={expense.desc} cost={expense.cost} />
			))}
        </ul>
    );
};

export default ExpenseList;