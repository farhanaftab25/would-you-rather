import React from 'react';
import Avatar from './Avatar';

function LeaderBoardCard({users, id}) {
    const user = users[id];
    const answeredQuestion = Object.keys(user.answers).length;
    const createdQuestion = Object.keys(user.questions).length;
    const score = answeredQuestion + createdQuestion;
    return (
        <div className='row justify-content-center'>
            <div className="col-6">
                <div className="card mb-2" style={{ maxWidth: 540 }}>
                    <div className="row g-0 align-items-center">
                        <div className="col-md-3 text-center">
                            <Avatar height={80} avatarURL={user.avatarURL}/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title">{ user.name }</h5>
                                <p className="card-text m-0">Answered Questions: { answeredQuestion }</p>
                                <p className="card-text m-0">Created Questions: { createdQuestion }</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <p className="card-text">
                                <small className="text-muted">
                                    Score: { score }
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LeaderBoardCard;
