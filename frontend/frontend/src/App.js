import { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const login = () => {
    // frontend validation only
    if (!email || !password) {
      setMsg("Email and password are required");
      return;
    }

    if (!isValidEmail(email)) {
      setMsg("Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      setMsg("Password must be at least 6 characters");
      return;
    }

    // simulate successful login
    setMsg("");
    setIsLoggedIn(true);
  };

  // show dashboard after login
  if (isLoggedIn) {
    return <Dashboard />;
  }

  // login screen
  return (
    <div className="container">
      <div className="card">
        <h1>Sweet Shop – Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>

        {msg && <p className="message error">{msg}</p>}
      </div>
    </div>
  );
}

export default App;
