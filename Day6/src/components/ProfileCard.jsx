function ProfileCard({
  name,
  role,
  age,
  image,
  city = "Unknown"
}) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p>{role}</p>

      <p>Age: {age}</p>

      <p>City: {city}</p>
    </div>
  );
}

export default ProfileCard;