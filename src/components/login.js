// import React from "react";
import { findByLabelText } from '@testing-library/react';
import React, { useContext, useState } from 'react';
// import { useHistory } from "react-router-dom";
// import ReactDOM from 'react-dom';
// import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import './login.css';
// import  Prompt  from 'react-router';



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();
  const data="";
  const onSubmit = async (e) => {
    // const userLoginUrl = `http://127.0.0.1:3001/user?username=${username}&password=${password}`;
    //   const logindata = await fetch(userLoginUrl);
    //   console.log(logindata)
    //   const res=await JSON.parse( JSON.stringify(logindata))
    //   // console.log(res)
    e.preventDefault()
    var axios = require('axios');

    var config = {
      method: 'get',
      url: `http://127.0.0.1:3001/user?username=${username}&password=${password}`,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        const data=response.data
        //if correct and backend has given user id / token, store in cookie
        
        if(data === username) {
          window.location.href = "/Expenses";
        }else {
          swal("Wrong username or password")
        }
        // history.push('/Expenses')
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
        

      
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="application">
        <div className=''>
          <h1 className='logo'>Expense Tracker</h1>
          <img src="logo.png" className='imagelogo' alt='mywallet' />
          <span className='login'>LOG IN</span>
          <img src="https://www.pngkit.com/png/full/88-885453_login-white-on-clear-user-icon.png" className='loginlogo' alt='' />
          <img src="https://icon-library.com/images/icon-password/icon-password-25.jpg" className='passwordlogo' alt='' />
          <input
            type="text"
            name="login"
            value={username}
            placeholder="User ID"
            className='UserName userLoggin'
            onChange={(event) => setUsername(event.target.value)} />

          <input
            type='password'
            value={password}
            placeholder='password'
            className='UserPassword userLoggin'
            onChange={(event) => setPassword(event.target.value)} />
          {/* <button className='btn btn-3' >Log In</button> */}
          {/* <div class="box-3">
                <div class="btn btn-three">
                  <span>HOVER ME</span>
                </div>
              </div> */}
         
            <button className='button' onClick={onSubmit}>Login</button>
       
          <br />
          <span className='or'>or</span>
          <a href='www.facebook.com'><img src='https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-png-transparent-svg-vector-bie-supply-18.png' className='facebook'></img></a>
          <a href='www.gmail.com/login'><img src='google.png' className='google'></img></a>
        </div>
      </div>
    </form>
  );
}
export default Login;
