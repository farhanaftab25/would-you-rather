import React from 'react';
import { connect } from 'react-redux';
import ListQuestion from './ListQuestion';


class Home extends React.Component {
    state = {
        questions: []
    }
    handleClick = (event) => {
        const { name } = event.target;
        if (name === 'answered') {
            this.setState((prevState) => ({
                questions: this.props.answeredQuestions
            }))
        } else if (name === 'unanswered') {
            this.setState((prevState) => ({
                questions: this.props.questions
            }))
        }
    }

    componentDidMount() {
        this.setState((prevState) => ({
            questions: this.props.questions
        }));
    }

    render() {
        console.log(this.props);
        const { questions } = this.props;
        return (
            <div>
                <div class="input-group mb-3">
                    <button
                        className="btn btn-info"
                        name="unanswered"
                        onClick={this.handleClick}>Unanswered Question
                    </button>
                    <button
                        className="btn btn-info"
                        name="answered"
                        onClick={this.handleClick}>Answered Question
                    </button>
                </div>
                <ListQuestion questions={this.state.questions}/>

            </div>

        )
    }
}
function mapStateToProps({authedUser, users, questions}) {
    if (authedUser !== null) {
        const user = users[authedUser].answers;

        // console.log(authedUser);
        // console.log(users[authedUser]);

        const answers = Object.keys(users[authedUser].answers);

        const questionIds = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp);

        const unansweredQuestions = questionIds.filter(questionId => !answers.includes(questionId));

        const answeredQuestions = questionIds.filter(questionId => answers.includes(questionId));
        // console.log(user.answers);
        // console.log(answerQuestions);
        // // console.log(questionsIds);
        // console.log(unansweredQuestions);
        return {
            questions: unansweredQuestions,
            answeredQuestions: answeredQuestions
        }
    }

    return {
        questions: []
    }
}

export default connect(mapStateToProps)(Home);
