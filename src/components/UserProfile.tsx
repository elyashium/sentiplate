import { auth } from "../config/firebase";
import { useState, useEffect } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      {user ? (
        <div>
          <img src={user.photoURL || "/default-avatar.png"} alt="Profile" className="profile-image" />
          <h2>{user.displayName}</h2>
          <p>Email: {user.email}</p>
          <p>UID: {user.uid}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;