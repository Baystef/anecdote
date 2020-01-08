import React from 'react';

const AnecdoteMostVote = ({ anecdotes, vote }) => {
  const getHighestVote = () => {
    const arr = Object.values(vote)
    const max = Math.max(...arr);
    return arr.indexOf(max);
  };

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[getHighestVote()]}</p>
      <p>It has {vote[getHighestVote()]} votes</p>
    </div>
  )
}

export default AnecdoteMostVote;
