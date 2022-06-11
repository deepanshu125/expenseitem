import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);
	// const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {

		var requestOptions = {
			method: 'DELETE',
			redirect: 'follow'
		  };
		  
		  fetch(`http://127.0.0.1:3001/deleteThis/${props.id}`, requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));


		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	// const getD = async () => {
	// 	await getData()
	// 	// await setTime()
	// }
	// useEffect(() => {
	// 	getD()
	// }, [])

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span className='badge badge-primary badge-pill mr-3 ' style={{color: "red"}}>
					₹{props.cost} 
				</span>
				<TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
			</div>
		</li>
	);
};

export default ExpenseItem;