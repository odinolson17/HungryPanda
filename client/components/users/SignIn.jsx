import React from 'react';

const SignIn = () => {
  return (
    <>
      <form>
        <input placeholder="email or username" type="text" />
        <br />
        <input placeholder="password" type="text" />
        <br />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account?
      </p>
      <a><p>Sign Up Here</p></a>
    </>
  )
};

export default SignIn;