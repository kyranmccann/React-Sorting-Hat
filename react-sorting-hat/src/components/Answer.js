import React from 'react';

const Answer = props => {
  const target = (event) => {
    event.preventDefault();
    props.handleAnswerChange(props.value)
  }
  return(
    <div className='answer-button-container'>
      <button
        className='answer-button'
        value={props.value}
        onClick={target}>
          {props.text}
        </button>
    </div>
  )
}

export default Answer;
