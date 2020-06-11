import React, { Component } from 'react';
import { Card, Button, CardText } from 'reactstrap';
import axios from 'axios';

class QuoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            randomQuote: '',
            colors: ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"],
            randomColor: '#000'
        }
    }

    componentDidMount() {
        axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').then(res => {
                this.setState({
                    quotes: res.data,
                    randomQuote: res.data.quotes[Math.floor(Math.random() * res.data.quotes.length)]
                })
        })
    }

    handleClick() {
        this.setState({
            randomQuote: this.state.quotes.quotes[Math.floor(Math.random() * this.state.quotes.quotes.length)],
            randomColor: this.state.colors[Math.floor(Math.random() * this.state.colors.length)]
        })
    }

	render() {
		return (
			<div id='quote-box'>
				<Card id="card" body inverse style={{ backgroundColor: '#fff'}}>
                    <CardText style={{color: `${this.state.randomColor}`}}id="text">{this.state.randomQuote.quote}</CardText>
                    <CardText style={{color: `${this.state.randomColor}`}} id="author">Author: {this.state.randomQuote.author}</CardText>
                    <div id="buttons">
                    <Button style={{backgroundColor: `${this.state.randomColor}`}}onClick={this.handleClick.bind(this)}>New Quote</Button>
                    </div>
                </Card>
			</div>
		);
	}
}

export default QuoteBox;