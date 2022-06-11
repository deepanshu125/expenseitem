import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState();
    const [desc, setDesc] = useState("")
    const [date, setDate] = useState(new Date());
    const [expense, setExpense] = useState([]);
    // const [description, setDescription] = useDescription('');
    // const [description, setDescription] = useDescription('');
    
    
    // const expensedata =[];
    const onSubmit = (event) => {
        event.preventDefault();

        // const url = `http://127.0.0.1:3001/exp/4?date=${date}?paymentType=${name}?description=${desc}?amount=${cost}`;
        // console.log(url);

        // console.log(date);
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
            // amount: amount,
            date: date,
            desc: desc
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
        // console.log(date);
        // console.log(cost);
        // console.log(name);
        // console.log(desc);

        // const data = fetch(url);
        // // console.log(fetchedData);
        // const res= data.json();
        // console.log(res);

        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({
        //     "date": date,
        //     "paymentType": name,
        //     "description": desc,
        //     "amount": cost
        // });

        // // console.log(raw);
        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };

        // fetch("http://127.0.0.1:3001/exp/1", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "date": date,
            "paymentType": name,
            "description": desc,
            "amount": cost
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:3001/createExpense/4", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    };

    return (
        <>
{/*        
        {expense.length > 0 && (
            expense.map((val)=>{
                return (
                    <p>{val.date}</p>
                )
            })
        )} */}
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label >Payment Type</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        autoComplete="off"
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>
                <div className='col-sm'>
                    <label >Amount</label>
                    <input
                        required='required'
                        type='number'
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>
                <div className='col-sm'>
                    <label >Date</label>
                    <input
                        required='required'
                        type='date'
                        className='form-control'
                        id='date'
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                    ></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm'>
                    <label >Description</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='desc'
                        value={desc}
                        onChange={(event) => setDesc(event.target.value)}
                    ></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    </>
    );
};

export default AddExpenseForm;