import React, { useContext, useEffect, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const [expense, setExpense] = useState([]);
    const { dispatch } = useContext(AppContext);
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

    const getData = async () => {
      console.log("chekinggnngngngnngnggnngnng");
      //get user id/ user token from cookies
      var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          // headers: {
          //     'Authorization': "Bearer" + ' the id or token'
          //     // 'Content-Type': 'application/x-www-form-urlencoded',
          //   },
      };
     await fetch("http://127.0.0.1:3001/expenses/4", requestOptions)
          .then(response => response.text())
          .then(res => JSON.parse(res))
          .then((results) => {
            console.log(results);
              const n = results.map((data)=>{
                return {
                  id: uuidv4(),
                  name: data.paymentType,
                  cost: data.amount,
                  date: data.date,
                  desc: data.description
              };
             
              })
              setExpense(n)
          }
          )
          .catch(error => console.log('error', error));
  }
  // const setTime = async () => {
  //     expense.map((data)=>{
  //         const expense = {
  //           id: uuidv4(),
  //           name: data.paymentType,
  //           cost: data.amount,
  //           date: data.date,
  //           desc: data.description
  //       };
  //       dispatch({
  //           type: 'ADD_EXPENSE',
  //           payload: expense,
  //       });
  //       })
  // } 
  const getD = async () => {
      await getData()
      // await setTime()
  }
  useEffect(() => {
      getD()
  }, [])
    return (
        <ul className='list-group'>
            {expense.map((e) => (
				<ExpenseItem id={e.id} name={e.desc} cost={e.cost} />
			))}
        </ul>
    );
};

export default ExpenseList;