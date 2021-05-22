import React from 'react';

function ResultCard({question, selectedOption, option}) {
    function calculatePercentage(count, total) {
        const percentage = (count / total) * 100;
        return Math.floor(percentage) + '%';
    }

    const votesTotal = question.optionOne.votes.length + question.optionTwo.votes.length;
    const votesCount = question[option].votes.length;
    return (
        <div className={`mt-2 card ${selectedOption === option ? 'border border-4 border-success' : ''}`}>
            <div className="card-body">
                { question[option].text }
            </div>
            <div className="card-body pt-0">
                <div className="progress">
                    <div className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: calculatePercentage(votesCount, votesTotal)}}>
                        {calculatePercentage(votesCount, votesTotal)}
                    </div>
                </div>
                <h6 className="text-center pt-2">{`${votesCount} out of ${votesTotal} votes`}</h6>
            </div>
        </div>
    );
}
export default ResultCard;
