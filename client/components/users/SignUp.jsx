import React from 'react';

const SignUp = () => {
  return (
    <form>
      <input placeholder="enter email" type="email" />
      <br />
      <input placeholder="choose a username" type="text" />
      <br />
      <input placeholder="choose a password" type="text" />
      <br />
      <button type="submit">Create Account</button>
    </form>
  )
};

export default SignUp;