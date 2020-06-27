import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import image from '/Users/morookakeisuke/Desktop/develop/product/React/my-app/src/image/bbb.png';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    handleToAbout = () => {
        if (this.state.count === 0) {
            this.props.history.push('/special');
        }
        else if (this.state.count < 10) {
            this.props.history.push('/first');
        }
        else if (this.state.count < 20) {
            this.props.history.push('/second');
        }
        else if (this.state.count < 30) {
            this.props.history.push('/third');
        }
        else if (this.state.count < 40) {
            this.props.history.push('/fourth');
        }
        else if (this.state.count === 48) {
            this.props.history.push('/final');
        }
        else {
            this.props.history.push('/other');
        }
    }

    CountUp = () => {
        this.setState({
            count: this.state.count +1
        });
    }

    render(){
        return (
        <div className='container'>
            <img src={ image } />
            <h1>バイツァ・ダストを発動させろッ！</h1>
            <p> PUSH回数： { this.state.count } </p>
            <button className='second_button' onClick={ this.CountUp } ></button>
            <button className='enter_button'　onClick={ this.handleToAbout}></button>
        </div>
        )
    }
}

export default withRouter(Home);