import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LeaderBoardCard from './LeaderBoardCard';


function LeaderBoard(props) {
    const { users, userIds, authedUser } = props;

    if (authedUser === null) {
        return <Redirect to={{
                    pathname: '/login',
                    state: { from: '/leaderBoard' }
                }} />
    }
    return (
        <div className="mt-4">
            {userIds && userIds.map(id => (
                <LeaderBoardCard id={id} users={users} key={id}/>
            ))}
        </div>
    )
}

function mapStateToProps({users, questions, authedUser}) {
    const userIds = Object.keys(users).sort((a, b) => {
        const scoreForB = Object.keys(users[b].answers).length + Object.keys(users[b].questions).length;
        const scoreForA = Object.keys(users[a].answers).length + Object.keys(users[a].questions).length
        return scoreForB - scoreForA;
    });
    return {
        authedUser,
        userIds,
        users,
        questions
    }
}
export default connect(mapStateToProps)(LeaderBoard);
