import React from 'react';
import logo from './logo.svg';
import { Switch, Route, Link } from 'react-router-dom';
import TopMenu from './components/TopMenu/TopMenu';



import './App.scss';

function App() {
	return (
		<div className="App">
			<header>
				<TopMenu/>
			</header>

			<Switch>
				{/* <Route exact path="/" component={HomePage} /> */}
			</Switch>

    </div>
  );
}

export default App;
