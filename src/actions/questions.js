// import { saveLikeToggle, saveTweet } from '../utils/api';


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

export function handleAddQuestion(text, replyingTo) {
    // return (dispatch, getState) => {
    //     const { authedUser } = getState();
    //     dispatch(showLoading());

    //     return saveTweet({text, 'author': authedUser, replyingTo})
    //         .then((tweet) => {
    //             console.log("Tweet", tweet);
    //             dispatch(addTweet(tweet));
    //         }).then(() => dispatch(hideLoading()));
    // }
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
