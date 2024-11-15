import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (

    <div className="sign-in-container">
  <div className="sign-in-card">
    <h2 className="sign-in-title">Sign In</h2>
    <input
      type="email"
      placeholder="Email..."
      className="sign-in-input"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password..."
      className="sign-in-input"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button className="sign-in-button" onClick={handleSignIn}>
      Sign In
    </button>
  </div>
</div>
    
  );
};