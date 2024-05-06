import React, { useEffect } from 'react'

const Login = () => {

  useEffect(() => {
    // Get the current URL using window.location.href
    const currentURL = window.location.href;
    console.log('Current URL:', currentURL);
  }, []);

  return (
    <div>
      <h1>My Component</h1>
    </div>
  )
}

export default Login