import React from 'react';
import Question from './Question';

function ListQuestion(props) {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
            {props.questions.map(question => <Question key={question} question={question}/>)}
        </div>
    )
}

export default ListQuestion;
