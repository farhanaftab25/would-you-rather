export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION_TO_AUTHED_USER = 'ADD_QUESTION_TO_AUTHED_USER';
export const ADD_QUESTION_ANSWER_TO_AUTHED_USER = 'ADD_QUESTION_ANSWER_TO_AUTHED_USER';


export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}
export function addQuestionToAuthedUser(question, authedUser) {
    return {
        type: 'ADD_QUESTION_TO_AUTHED_USER',
        question,
        authedUser
    }
}
export function addQuestionAnswerToAuthedUser({ authedUser, qid, answer }) {
    return {
        type: 'ADD_QUESTION_ANSWER_TO_AUTHED_USER',
        authedUser,
        qid,
        answer
    }
}
