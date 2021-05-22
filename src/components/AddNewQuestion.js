import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';

class AddNewQuestion extends React.Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState((prevState) => ({
            [name]: value
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const { dispatch } = this.props;
        const { optionOne, optionTwo } = this.state;

        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState((prevState) => ({
            optionOne: '',
            optionTwo: '',
            toHome: true
        }));
    }
    isDisabled = () => {
        return this.state.optionOne === '' || this.state.optionTwo === '';
    }
    render() {
        if (this.props.authedUser === null) {
            return <Redirect to='/login' />
        }
        if (this.state.toHome === true) {
            return <Redirect to='/home' />
        }
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Create New Question</h3>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Complete the Question</p>
                            <h5 className="card-title">Would you rather...</h5>
                            <form onSubmit={this.handleSubmit} className="text-center">
                                <div className="">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Option One Text here"
                                        name="optionOne"
                                        value={this.state.optionOne}
                                        onChange={this.handleChange}/>
                                </div>
                                <h5 className="m-0">OR</h5>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Option One Text here"
                                        name="optionTwo"
                                        value={this.state.optionTwo}
                                        onChange={this.handleChange}/>
                                </div>
                                <div>
                                    <button
                                        className="btn btn-primary"
                                        disabled={this.isDisabled()}>
                                            Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(AddNewQuestion);
