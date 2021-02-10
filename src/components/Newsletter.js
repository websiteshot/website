import React from 'react';
import '../css/signup-form.css';

const handleSubmit = () => {
  window.open(
    `https://tinyletter.com/websiteshot`,
    'popupwindow',
    'scrollbars=yes,width=800,height=600'
  );
  return true;
};

const Newsletter = () => {
  return (
    <form
      action="https://tinyletter.com/websiteshot"
      method="post"
      target="popupwindow"
      onSubmit={handleSubmit}
      className="SignupForm"
    >
      <h2>Subscribe for more!</h2>
      <div className="Wrapper">
        <input
          aria-label="Email address"
          placeholder="Enter your email..."
          name="email"
          type="text"
          required
          id="tlemail"
        />
        <input type="hidden" value="1" name="embed" />
        <button type="submit">OK</button>
      </div>
    </form>
  );
};
export default Newsletter;
