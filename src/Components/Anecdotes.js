import React from 'react';

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
}

const Anecdotes = ({ anecdotes, selected, vote, setVoteCount, setRandom }) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>It has {vote[selected]} votes</p>
      <Button handleClick={setVoteCount} text='Vote' />
      <Button handleClick={setRandom} text='Next Anecdote' />
    </>
  )
}

export default Anecdotes;
