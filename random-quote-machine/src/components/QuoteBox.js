import React, { useState, useEffect } from 'react';
import { Card, Button, CardText } from 'reactstrap';
import axios from 'axios';

const QuoteBox = () => {
	const [ quotes, setQuotes ] = useState([]);
	const [ randomQuote, setRandomQuote ] = useState('');
	const [ colors, setColors ] = useState([
		'#16a085',
		'#27ae60',
		'#2c3e50',
		'#f39c12',
		'#e74c3c',
		'#9b59b6',
		'#FB6964',
		'#342224',
		'#472E32',
		'#BDBB99',
		'#77B1A9',
		'#73A857'
	]);
	const [ randomColor, setRandomColor ] = useState('#000');

	useEffect(() => {
		axios
			.get(
				'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
			)
			.then((res) => {
				setQuotes(res.data);
				setRandomQuote(res.data.quotes[Math.floor(Math.random() * res.data.quotes.length)]);
			});
	}, []);

	return (
		<div id='quote-box'>
			<Card id='card' body inverse style={{ backgroundColor: '#fff' }}>
				<CardText style={{ color: `${randomColor}` }} id='text'>
					{randomQuote.quote}
				</CardText>
				<CardText style={{ color: `${randomColor}` }} id='author'>
					Author: {randomQuote.author}
				</CardText>
				<div id='buttons'>
					<Button
						style={{ backgroundColor: `${randomColor}` }}
						onClick={() => {
							setRandomQuote(quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)]);
							setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
						}}
					>
						New Quote
					</Button>
				</div>
			</Card>
		</div>
	);
};

export default QuoteBox;
