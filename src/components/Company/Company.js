import React from "react";
import "./styles.css";

const Company = ({ name, imageSrc }) => {
    return (
        <div className="Company" style={{ textAlign: "center" }}>
            <img src={imageSrc} alt={name} className="Image" style={{}} />
            <h3 style={{ margin: "0", padding: "0", fontSize: "24px" }}>
                {name}
            </h3>
        </div>
    );
};

export default Company;
