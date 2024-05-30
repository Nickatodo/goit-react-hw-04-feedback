import React from 'react';
import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';

export default function Statistics() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(oldState => oldState + 1);
  const handleNeutralClick = () => setNeutral(oldState => oldState + 1);
  const handleBadClick = () => setBad(oldState => oldState + 1);

  if (good + neutral + bad !== 0) {
    return (
      <>
        <FeedbackOptions
          onGoodClick={handleGoodClick}
          onNeutralClick={handleNeutralClick}
          onBadClick={handleBadClick}
        />
        <h3>Statistics</h3>
        <div>
          Good: {good}
          <br />
          Neutral: {neutral}
          <br />
          Bad : {bad}
          <br />
          Total: {good + neutral + bad}
          <br />
          Positive feedback: {Math.round(
            (good / (good + neutral + bad)) * 100
          )}{' '}
          %
        </div>
      </>
    );
  } else {
    return (
      <>
        <FeedbackOptions
          onGoodClick={handleGoodClick}
          onNeutralClick={handleNeutralClick}
          onBadClick={handleBadClick}
        />
        <h3>There is no feedback</h3>
      </>
    );
  }
}
