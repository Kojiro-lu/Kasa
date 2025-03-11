import "./Profile.scss";

function Profile({ name, picture }) {
  return (
    <div className="profile">
      <h3 className="profile__name">{name}</h3>
      <img src={picture} alt={name} className="profile__picture" />
    </div>
  );
}

export default Profile;
