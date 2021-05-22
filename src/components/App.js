import React from 'react';
import Nav from './Nav';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import AddNewQuestion from './AddNewQuestion';
import LeaderBoard from './LeaderBoard';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import VotingPoll from './VotingPoll';


class App extends React.Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(handleInitialData());
	}
	render() {
		return (
			<React.Fragment>
				<LoadingBar />
				<div className='container mt-5'>
					<Nav />
					{this.props.loading === true
						? null
						:
						<Switch>
							<Route exact path='/'>
								{this.props.authedUser === null ? <Redirect to='/login' /> : <Redirect to='/home' />}
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
							<Route path='/add'>
								<AddNewQuestion />
							</Route>
							<Route path='/questions/:question_id'>
								<VotingPoll />
							</Route>
						</Switch>
						}
				</div>
			</React.Fragment>
		);
	}
}
function mapStateToProps({authedUser, users}) {
	return {
		authedUser,
	    loading: Object.keys(users).length === 0
	}
}

export default connect(mapStateToProps)(App);
