import React from 'react';
import ResultCard from './ResultCard';

function PollResults({question, selectedOption}) {
    return (
        <>
            <ResultCard
                question={question}
                selectedOption={selectedOption}
                option={'optionOne'}/>
            <ResultCard
                question={question}
                selectedOption={selectedOption}
                option={'optionTwo'}/>
        </>
    );
}
export default PollResults;
