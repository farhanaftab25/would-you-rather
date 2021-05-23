import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { handleSaveQuestionAnswer } from '../actions/questions';
import PollResults from './PollResults';
import Avatar from './Avatar';

class VotingPoll extends React.Component {
    state = {
        option: ""
    };
    handleChange = (event) => {
        const {name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
    }
    handleSubmit = (event) => {
        event.preventDefault();

        const { dispatch, authedUser, question_id:qid } = this.props;
        const { option:answer } = this.state;

        dispatch(handleSaveQuestionAnswer({
            authedUser,
            qid,
            answer
        }));

        this.setState((prevState) => ({
            option: answer
        }));

    }
    render() {
        const { question, user, authedUser, selectedOption, pollCategory } = this.props;

        console.log(this.props.location.pathname);



        if (authedUser === null) {
            return <Redirect to={{
                        pathname: `/login`,
                        state: { from: `${this.props.location.pathname}` }
                    }} />;
        }

        if (!question) {
            return <h2 className="text-center mt-5 text-muted">Not Found</h2>;
        }

        const author = question.author;

        return (
            <div className="row justify-content-center mt-5">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>
                                {pollCategory === 'answered' ? `Asked By ${author}` :  `${author} says`}
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 text-center align-self-center">
                                    <Avatar height={100} avatarURL={user.avatarURL}/>
                                </div>
                                <div className="col-md-8">
                                    <h5 className="card-title">
                                        {pollCategory === 'answered' ? `Results` :  `Would you rather...`}
                                    </h5>
                                    {pollCategory === 'unanswered' ?
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="option"
                                                    checked={this.state.option === 'optionOne'}
                                                    onChange={this.handleChange}
                                                    value='optionOne'/>
                                                <label
                                                    className="form-check-label">
                                                    { question.optionOne.text }
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="option"
                                                    onChange={this.handleChange}
                                                    checked={this.state.option === 'optionTwo'}
                                                    value='optionTwo'/>
                                                <label
                                                    className="form-check-label">
                                                    { question.optionTwo.text }
                                                </label>
                                            </div>
                                            <button className="btn btn-success mt-3">Submit</button>
                                        </form>
                                        : <PollResults
                                            question={question}
                                            selectedOption={selectedOption}/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps ({ questions, users, authedUser }, props) {
    const { question_id } = props.match.params;

    let pollCategory = "";
    let selectedOption = null;
    if (authedUser && Object.keys(users[authedUser].answers).includes(question_id)) {
        pollCategory = 'answered';
        selectedOption = users[authedUser].answers[question_id];
    } else {
        pollCategory = 'unanswered';
    }

    const question = questions[question_id];
    const user = question ? users[question.author] : null;

    return {
        pollCategory,
        selectedOption,
        question_id,
        question,
        user,
        authedUser
    }
}
export default withRouter(connect(mapStateToProps)(VotingPoll));
