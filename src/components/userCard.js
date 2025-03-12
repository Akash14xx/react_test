import React from "react";
import "./UserCard.css"; // Import CSS

const UserCard = ({ image, name, description, email }) => {
  return (
    <div className="user-card">
      <img src={image} alt={name} className="user-image" />
      <h2 className="user-name">{name}</h2>
      <p className="user-description">{description}</p>
      <p className="user-email">{email}</p>
    </div>
  );
};

export default UserCard;