import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import image from '/Users/morookakeisuke/Desktop/develop/product/React/my-app/src/image/aaa.png';


const final = () => {
    return(
      <div>
        <img src={ image } />
        <h1>やっ！やったぞッ！発動したぞッ！</h1>
        <Link to='/'　style={{ textDecoration: 'none' }}><button　className='finish_button'></button></Link>
      </div>
    )
}

export default final;