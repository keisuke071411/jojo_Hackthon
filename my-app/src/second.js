import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import image from '/Users/morookakeisuke/Desktop/develop/product/React/my-app/src/image/ccc.png';


const second = () => {
    return(
      <div>
        <img src={ image } />
        <h1>ACT3! 3 FREEZE!</h1>
        <Link to='/'　style={{ textDecoration: 'none' }}><button className='results_button'></button></Link>
      </div>
    )
}

export default second;