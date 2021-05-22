import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Avatar from './Avatar';

function Question(props) {
    const { question:question_id, questions, users } = props;
    const question = questions[question_id];
    const author = question.author;
    const user = users[author];

    return (
        <div className='col'>
            <div className="card mb-3">
                <div className="row g-0 align-items-center justify-content-center">
                    <div className="col-md-3 text-center">
                        <Avatar height={80} avatarURL={user.avatarURL}/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{author} says</h5>
                            <p className="card-text m-0">Would you rather</p>
                            <p className="card-text"><small className="text-muted">{question.optionOne.text}...</small></p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <NavLink
                            className="btn btn-sm btn-outline-success"
                            to={`/questions/${question_id}`}>
                                view poll
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}


function mapStateToProps({questions, authedUser, users}, {question}) {
    return {
        question,
        questions,
        authedUser,
        users
    };
}
export default connect(mapStateToProps)(Question);
