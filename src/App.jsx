import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [jwt, setJwt] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(`JWT value is:\n${jwt}`);
  }, [jwt]);

  async function login(){ 
    console.log(username, password);

    let result = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/users/login",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username: username, password: password}),
      }
    );

    let data = await result.json();

    console.log(data);

  }

  return (
    <div className="App">
      <label data-testid="bananas">Username:</label>
      <input 
        type="text" 
        name="usernameInput" 
        id="usernameInput" 
        value={username} 
        onChange={(event) => setUsername(event.target.value)} 
      />

      <label>Password:</label>
      <input 
        type="password" 
        name="passwordInput" 
        id="passwordInput" 
        value={password} 
        onChange={(event) => setPassword(event.target.value)} 
      />
      
      <button onClick={login}>
        Log In
      </button>

    </div>
  );
}

export default App;
