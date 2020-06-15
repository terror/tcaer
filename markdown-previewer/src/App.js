import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'reactstrap';

const App = () => {
	const [ input, setInput ] = useState(
		'## Live Markdown Previewer!  \n *Using React-Markdown* \n\n [Link](https://google.com) \n\n ~~Nice~~ '
	);

	return (
		<div className='App'>
			<AppNavbar />
			<div id='preview'>
				<Input type='textarea' value={input} rows='20' onChange={(e) => setInput(e.target.value)} />
				<ReactMarkdown source={input} />
			</div>
		</div>
	);
};

export default App;
