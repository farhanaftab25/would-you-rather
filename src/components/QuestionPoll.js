import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class QuestionPoll extends React.Component {
    state = {
        option: ""
    }
    handleChange = (event) => {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {
        // const { question_id } = this.props.match.params;
        const { question, user } = this.props;
        // console.log("In component Redner", this.props);
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>{question.author} says</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 text-center">
                                    <img style={{height: 100}}
                                        src={`${process.env.PUBLIC_URL}/assets/avatars/${user.avatarURL}`}
                                        alt={question.author}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <h5 className="card-title">Would you rather...</h5>
                                    <form>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="option"
                                                checked={this.state.option === question.optionOne.text}
                                                onChange={this.handleChange}
                                                value={ question.optionOne.text }/>
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
                                                checked={this.state.option === question.optionTwo.text}
                                                value={ question.optionTwo.text }/>
                                            <label
                                                className="form-check-label">
                                                { question.optionTwo.text }
                                            </label>
                                        </div>
                                        <button className="btn btn-success mt-3">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps ({ questions, users }, props) {
    const { question_id } = props.match.params;
    const question = questions[question_id];
    const user = question ? users[question.author] : null;
    return {
        question_id,
        question: question,
        user: user
    }
}
export default withRouter(connect(mapStateToProps)(QuestionPoll));
