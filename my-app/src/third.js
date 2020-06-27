import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import image from '/Users/morookakeisuke/Desktop/develop/product/React/my-app/src/image/ddd.png';


const third = () => {
    return(
      <div>
        <img src={ image } />
        <h1>スタープラチナ・ザ・ワールド!</h1>
        <Link to='/'　style={{ textDecoration: 'none' }}><button className='results_button'></button></Link>
      </div>
    )
}

export default third;