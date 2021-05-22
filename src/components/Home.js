import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ListQuestion from './ListQuestion';


class Home extends React.Component {
    state = {
        buttonPressed: 'unanswered'
    }
    handleClick = (event) => {
        const { name } = event.target;
        if (name === 'answered') {
            this.setState((prevState) => ({
                buttonPressed: name
            }))
        } else if (name === 'unanswered') {
            this.setState((prevState) => ({
                buttonPressed: name
            }))
        }
    }

    render() {
        if (this.props.authedUser === null) {
            return <Redirect to='/login' />
        }
        let questions = this.props.questions;
        const { buttonPressed } = this.state;
        if (buttonPressed === 'answered') {
            questions = this.props.answeredQuestions;
        }

        return (
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="input-group justify-content-center">
                        <button
                            className={`btn btn-outline-primary ${buttonPressed === 'unanswered' ? 'active' : ''}`}
                            name="unanswered"
                            onClick={this.handleClick}>Unanswered Question
                        </button>
                        <button
                            className={`btn btn-outline-primary ${buttonPressed === 'answered' ? 'active' : ''}`}
                            name="answered"
                            onClick={this.handleClick}>Answered Question
                        </button>
                    </div>
                </div>
                <ListQuestion questions={questions}/>

            </div>
        );
    }
}
function mapStateToProps({authedUser, users, questions}) {
    if (authedUser !== null) {
        const answers = Object.keys(users[authedUser].answers);
        const questionIds = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp);
        const unansweredQuestions = questionIds.filter(questionId => !answers.includes(questionId));
        const answeredQuestions = questionIds.filter(questionId => answers.includes(questionId));

        return {
            questions: unansweredQuestions,
            answeredQuestions: answeredQuestions
        }
    }

    return {
        authedUser,
        questions: []
    }
}

export default connect(mapStateToProps)(Home);
