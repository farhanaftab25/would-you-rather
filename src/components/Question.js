import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Question(props) {
    const { question, questions, users } = props;
    return (
        <div className='col'>
            <div className="card mb-3">
                <div className="row g-0 align-items-center justify-content-center">
                    <div className="col-md-3 text-center">
                        <img style={{height: 80}}
                            src={`${process.env.PUBLIC_URL}/assets/avatars/${users[questions[question].author].avatarURL}`}
                            alt={questions[question].author}
                            className="rounded-circle"
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{questions[question].author} says</h5>
                            <p className="card-text m-0">Would you rather</p>
                            <p className="card-text"><small className="text-muted">{questions[question].optionOne.text}...</small></p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <NavLink
                            className="btn btn-sm btn-outline-success"
                            to={`/questions/${question}`}>
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
