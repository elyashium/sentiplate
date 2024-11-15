import { auth } from "../config/firebase";

const ProfileWidget = () => {
  const user = auth.currentUser;

  return (
    <div className="profile-widget">
      <img src={user.photoURL || "/default-avatar.png"} alt="Profile" className="profile-image" />
      <div className="profile-info">
        <h3 className="profile-name">{user.displayName || "Anonymous"}</h3>
        <p className="profile-email">{user.email}</p>
      </div>
    </div>
  );
};

export default ProfileWidget;