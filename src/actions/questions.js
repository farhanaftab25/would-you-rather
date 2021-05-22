import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { formatQuestion } from '../utils/helpers';
import { addQuestionAnswerToAuthedUser, addQuestionToAuthedUser } from './users';
import { showLoading, hideLoading } from 'react-redux-loading-bar';


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}
function addQuestionAnswer({ authedUser, qid, answer }) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}
function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());
        return saveQuestion(formatQuestion({optionOneText, optionTwoText, author: authedUser}))
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(addQuestionToAuthedUser(question, question.author));
            }).then(() => dispatch(hideLoading()));
    }
}


export function handleSaveQuestionAnswer(info) {
    return (dispatch) => {
        dispatch(showLoading());
        return saveQuestionAnswer(info)
            .then(() => {
                dispatch(addQuestionAnswerToAuthedUser(info));
                dispatch(addQuestionAnswer(info));
                dispatch(hideLoading());
            })
    }
}
