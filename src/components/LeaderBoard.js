import React from 'react';
import { connect } from 'react-redux';


function LeaderBoard(props) {
    const { users, userIds } = props;
    return (
        <div>
            {userIds && userIds.map(id => (
                <div className='row justify-content-center' key={id}>
                    <div className="col-6">
                        <div className="card mb-2" style={{ maxWidth: 540 }}>
                            <div className="row g-0 align-items-center">
                                <div className="col-md-3">
                                    <img style={{height: 80}}
                                        src={`${process.env.PUBLIC_URL}/assets/avatars/${users[id].avatarURL}`}
                                        alt={id}
                                        className="rounded-circle"
                                    />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title">{ users[id].name }</h5>
                                        <p className="card-text m-0">Answered Questions: { Object.keys(users[id].answers).length }</p>
                                        <p className="card-text m-0">Created Questions: { Object.keys(users[id].questions).length }</p>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <p className="card-text">
                                        <small className="text-muted">
                                            Score: { Object.keys(users[id].answers).length + Object.keys(users[id].questions).length}
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function mapStateToProps({users, questions}) {
    const userIds = Object.keys(users).sort((a, b) => {
        const scoreForB = Object.keys(users[b].answers).length + Object.keys(users[b].questions).length;
        const scoreForA = Object.keys(users[a].answers).length + Object.keys(users[a].questions).length
        return scoreForB - scoreForA;
    });
    return {
        userIds,
        users,
        questions
    }
}
export default connect(mapStateToProps)(LeaderBoard);
