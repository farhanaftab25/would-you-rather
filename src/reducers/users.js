import { ADD_QUESTION_ANSWER_TO_AUTHED_USER,
        ADD_QUESTION_TO_AUTHED_USER,
    RECEIVE_USERS }
from '../actions/users';

export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_AUTHED_USER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.question.id])
                }
            }
        case ADD_QUESTION_ANSWER_TO_AUTHED_USER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        default:
            return state;
    }
}
