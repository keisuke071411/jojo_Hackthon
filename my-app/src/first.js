import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import image from '/Users/morookakeisuke/Desktop/develop/product/React/my-app/src/image/fff.png';


const first = () => {
    return(
      <div>
        <img src={ image } />

        <h1>オレのこの『ザ・ハンド』の「右手」よォ～～～<br />
        けずり取ったモノはいったいどこへ<br />
        行っちまうんだろう？ってなあ～～～っ</h1>
        <Link to='/'　style={{ textDecoration: 'none' }}><button className='results_button'></button></Link>
      </div>
    )
}

export default first;