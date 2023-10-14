import React, { useState } from 'react';

function Feedback() {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const submitFeedback = () => {
    // Handle the submission of feedback, e.g., send it to a server
    console.log('Feedback submitted:', feedback);
    // You can implement the actual submission logic here.
  };

  return (
    <div>
      <h1>Feedback</h1>
      <p>Please provide your feedback:</p>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your feedback here"
        value={feedback}
        onChange={handleFeedbackChange}
      ></textarea>
      <br />
      <button onClick={submitFeedback}>Submit Feedback</button>
    </div>
  );
}

export default Feedback;
