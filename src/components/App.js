import React from 'react';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';


class App extends React.Component {

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(handleInitialData());
		console.log("Mounted");
	}
	render() {
		console.log("App")
		return (
			<div className='container mt-5'>
				<Nav />
				<hr />
				<Switch>
					<Route exact path='/'>
						I am home
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path='/leaderBoard'>
						<LeaderBoard />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default connect()(App);
