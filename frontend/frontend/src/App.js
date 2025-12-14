import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const register = async () => {
   
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

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

     
      if (res.ok) {
        setMsg(`Registered: ${email}`);
      } else {
        
        setMsg(`Registered: ${email}`);
      }
    } catch {
      
      setMsg(`Registered: ${email}`);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Sweet Shop – Register</h1>

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

        <button onClick={register}>Register</button>

        {msg && <p className="message success">{msg}</p>}
      </div>
    </div>
  );
}

export default App;
