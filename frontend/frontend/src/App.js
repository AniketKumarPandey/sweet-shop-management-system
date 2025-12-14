import { useState } from "react";
import "./App.css";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const register = async () => {
  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    console.log("Status:", res.status);

    const data = await res.json();
    console.log("Response:", data);

    if (res.ok) {
      setMsg(`Registered: ${data.email}`);
    } else {
      setMsg(data.message || "Error");
    }
  } catch (err) {
    console.error(err);
    setMsg("Network error");
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

      {msg && <p className="message">{msg}</p>}
    </div>
  </div>
);


}

export default App;
