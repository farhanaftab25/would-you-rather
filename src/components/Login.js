import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
class Login extends React.Component {
    state = {
        user: '',
        goBack: false
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

        this.setState((prevState) => ({
            user: '',
            goBack: this.props.location.state ? this.props.location.state.from : null
        }));
    }
    render() {
        if (this.state.goBack) {
            return <Redirect to={`${this.state.goBack}`} />
        } else if (this.state.goBack === null) {
            return <Redirect to='/home' />
        }

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
                    </form>
                </div>
            </div>
        )
    }
}


function mapStateToProps({ users }) {
    return {
        users
    }
}

export default withRouter(connect(mapStateToProps)(Login));
