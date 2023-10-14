import React, { useState } from 'react';

function Home() {
  const [email, setEmail] = useState('');
  const [loginButtonClicked, setLoginButtonClicked] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLoginButtonClick = () => {
    // Handle the login button click event, e.g., perform authentication
    // For this example, we'll just log a message when the button is clicked.
    setLoginButtonClicked(true);
    console.log('Login button clicked');
  };

  return (
    <div className="home-background">
      <p>Please enter your email:</p>
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <button onClick={handleLoginButtonClick}>Login</button>
      </div>
      {loginButtonClicked && <p>Login button was clicked. You can handle authentication here.</p>}
      {/* Other content for the home page can go here. */}
    </div>
  );
}

export default Home;
