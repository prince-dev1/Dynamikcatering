import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1 style= {{color:'red',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display:'flex',
    justifyContent:'center',

    overflow:'hidden', 
    margin:'0px',
    padding:'20px',
    textAlign:'center',
    fontFamily:'Helecta'}}> Welcome to Dynamik Caterings!</h1>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
