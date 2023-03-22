import React from "react";

const Company = ({ name, imageSrc }) => {
  return (
    <div style={{ textAlign: "center" }}>
    <img src={imageSrc} alt={name} style={{ width: "250px", height: "150px", objectFit: "contain"}} />
      <h3 style={{ margin: "0", padding: "0", fontSize: "24px" }}>{name}</h3>
    </div>
  );
};

export default Company;

