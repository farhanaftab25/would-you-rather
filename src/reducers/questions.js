import { ADD_QUESTION, RECEIVE_QUESTIONS } from '../actions/questions';
// import { TOGGLE_TWEET } from '../actions/tweets';
// import { ADD_TWEET } from '../actions/tweets';

export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        // case TOGGLE_TWEET:
        //     return {
        //         ...state,
        //         [action.id]: {
        //             ...state[action.id],
        //             likes: action.hasLiked === true ?
        //                 state[action.id].likes.filter((uid) => uid !== action.authedUser)
        //                 : state[action.id].likes.concat([action.authedUser])
        //         }
        //     }
        case ADD_QUESTION:
            const { question } = action

            console.log("Question", question);


            // let replyingTo = {}
            // if (tweet.replyingTo !== null) {
            //     replyingTo = {
            //     [tweet.replyingTo]: {
            //         ...state[tweet.replyingTo],
            //         'replies': state[tweet.replyingTo].replies.concat([tweet.id])
            //         }
            //     }
            // }
            // console.log(replyingTo);
            return {
                ...state,
                [action.question.id]: action.question,
            }

        default :
            return state
    }
}
