import React from 'react';
import { connect } from 'react-redux';
import { unSetAuthedUser } from '../actions/authedUser';
import { NavLink, withRouter } from 'react-router-dom';

function Nav(props) {
    return (
        <nav className="border-bottom border-primary border-2 pb-2">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/home" activeClassName='active'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/add" activeClassName='active'>New Question</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/leaderBoard" activeClassName='active'>LeaderBoard</NavLink>
                </li>
                {(props.authedUser !== null) &&
                    <li className="nav-item">
                        <span className="text-muted">Hello, {props.authedUser}</span>
                        <button
                            className="btn btn-outline-danger"
                            style={{ marginLeft: '2em' }}
                            onClick={() => {
                                props.dispatch(unSetAuthedUser());
                                props.history.push(`/login`);
                            }}>
                            Logout
                        </button>
                    </li>}
            </ul>
        </nav>
    )
}
function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Nav));
