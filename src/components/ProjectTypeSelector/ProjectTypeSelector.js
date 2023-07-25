import React from "react";
import "./styles.css";

const ProjectTypeSelector = (prop) => {
    return (
        <div className="SelectorContainer">
            <button
                className={
                    "SelectorButton " +
                    (prop.type === "web" ? "ButtonOn" : "ButtonOff")
                }
                onClick={() => prop.onClick("web")}>
                Web
            </button>
            <button
                className={
                    "SelectorButton " +
                    (prop.type === "mobile" ? "ButtonOn" : "ButtonOff")
                }
                onClick={() => prop.onClick("mobile")}>
                Mobile
            </button>
            <button
                className={
                    "SelectorButton " +
                    (prop.type === "games" ? " ButtonOn" : "ButtonOff")
                }
                onClick={() => prop.onClick("games")}>
                Games
            </button>
        </div>
    );
};

export default ProjectTypeSelector;
