import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            navigate("/")
        } catch (err) {
            console.error(err);
        }
    }

    const logout = async () => {
        try {
            await signOut(auth)
        } catch (err) {
            console.error(err)
        }
    }

    return (

        <div>

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

                    <button onClick={signInWithGoogle}>sign in with google</button>
                    <button onClick={logout}>LogOut</button>

                </div>
            </div>
            </div>

            );
};