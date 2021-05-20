import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Login extends React.Component {
    state = {
        user: ''
    };

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState((prevState) => ({
            [name]: value
        }));
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const {dispatch} = this.props;
        dispatch(setAuthedUser(this.state.user));
    }
    render() {
        const { users } = this.props;

        return (
            <div className="row justify-content-center mt-5">
                <div className="col-6">
                    <h3>Login in</h3>
                    <form onSubmit={this.handleSubmit}>
                        <select className="form-select"
                            onChange={this.handleChange}
                            defaultValue={this.state.user}
                            name='user'>
                            <option value="" disabled>--Select User--</option>
                            {Object.keys(users).map(user => <option key={user} value={user}>{users[user].name}</option>)}
                        </select>
                        <button className="btn btn-primary mt-2">Login</button>
                        {/* <ul>
                            {Object.keys(users).map(user => (<li>
                                <img className="rounded-circle"
                                width={50}
                                src={`${process.env.PUBLIC_URL}/assets/avatars/${users[user].avatarURL}`}
                                alt={user}/>
                            </li>))}
                        </ul> */}
                    </form>
                </div>
            </div>
        )
    }
}


function mapStateToProps({ users }) {
    return {
        users: users
    }
}

export default connect(mapStateToProps)(Login);
