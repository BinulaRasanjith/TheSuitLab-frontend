import React from "react";

const staffCard = ({ name, role, profilePic }) => {
  return (
    <div className="">
      <img src={profilePic} alt={`${name} Profile`} className="profile-pic" />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default staffCard;