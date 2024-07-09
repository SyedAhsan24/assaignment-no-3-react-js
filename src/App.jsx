// import React , { useState } from 'react';
// import './App.css'
// function App() {
//   return (
//     <div className='parent'>      
//         <h1>Login & Sign up page</h1>
//         <div className="child1">
//           <h4>Login</h4> 
//           <form >
//              <h3 id='email'>Email</h3> <br />
//             <input id='input' type="text"  placeholder='Enter your Email' /> <br />
//              <h3 id='password'>Password</h3> <br />
//             <input id='input' type="text" placeholder='Enter your password' /> <br />
//             <button id='btn1'>Login</button>
//           </form>
//         </div>
//         <button id='btn2'>Create Account</button>
      
//         <div className="child1">
//           <h4>Sign up</h4> 
//           <form >
//              <h3 id='email'>Email</h3> <br />
//             <input id='input' type="text"  placeholder='Enter your Email' /> <br />
//              <h3 id='password'>Password</h3> <br />
//             <input id='input' type="text" placeholder='Enter your password' /> <br />
//             <button id='btn1'>Sign up</button>
//           </form>
//         </div>
//         <button id='btn2'>Log in</button>
      
//     </div>
//   )
//   rgba(184, 207, 9, 0.626)
// }

// export default App


import React, { useState } from 'react';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className='parent'>      
      <h1>Login & Sign up page</h1>
      
      {/* Login Form */}
      {showLogin && (
        <div className="child1">
          <h4>Login</h4> 
          <form>
            <h3 id='email'>Email</h3> <br />
            <input id='input' type="text" placeholder='Enter your Email' /> <br />
            <h3 id='password'>Password</h3> <br />
            <input id='input' type="password" placeholder='Enter your password' /> <br />
            <button id='btn1'>Login</button>
          </form>
        </div>
      )}

      {/* Signup Form */}
      {!showLogin && (
        <div className="child1">
          <h4>Sign up</h4> 
          <form>
            <h3 id='email'>Email</h3> <br />
            <input id='input' type="text" placeholder='Enter your Email' /> <br />
            <h3 id='password'>Password</h3> <br />
            <input id='input' type="password" placeholder='Enter your password' /> <br />
            <button id='btn1'>Sign up</button>
          </form>
        </div>
      )}


      {/* Toggle Buttons */}
      <div id='forbtn2'>
      <button id='btn2' onClick={toggleForm}>
        {showLogin ? 'Create Account' : 'Log in'}
      </button>
      </div>
    </div>
  );
}

export default App;