import { saveQuestion } from '../utils/api';
import { formatQuestion } from '../utils/helpers';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
// export const TOGGLE_TWEET = 'TOGGLE_TWEET';
export const ADD_QUESTION = 'ADD_QUESTION';


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}
// function toggleTweet({ id, authedUser, hasLiked }) {
//     return {
//         type: TOGGLE_TWEET,
//         id,
//         authedUser,
//         hasLiked
//     }
// }
function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        // dispatch(showLoading());
        console.log("authed user", authedUser);
        return saveQuestion(formatQuestion({optionOneText, optionTwoText, author: authedUser}))
            .then((question) => {
                console.log("Question", question);
                dispatch(addQuestion(question));
            }).then(() => console.log("Hide Loading"));
    }
}


// export function handleToggleTweets(info) {
//     return (dispatch) => {
//         dispatch(toggleTweet(info));
//         return saveLikeToggle(info)
//             .catch((e) => {
//                 console.warn("Errors in tweet", e);
//                 dispatch(toggleTweet(info));
//                 alert("Erros");
//             })
//     }
// }
