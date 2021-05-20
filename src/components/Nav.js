import React from 'react';
import { connect } from 'react-redux';
import { unSetAuthedUser } from '../actions/authedUser';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <nav>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <Link className="nav-link active" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/add">New Question</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/leaderBoard">LeaderBoard</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link"
                        onClick={() => {
                            props.dispatch(unSetAuthedUser());
                        }}>({props.authedUser}) -- Logout</a>
                </li>
            </ul>
        </nav>
    )
}
function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Nav);
