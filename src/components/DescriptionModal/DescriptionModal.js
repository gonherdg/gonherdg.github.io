import React, { useState } from "react";
import Modal from "react-modal";
import "./styles.css";

Modal.setAppElement("#root");

const ProjectDescriptionModal = ({
    isOpen,
    onClose,
    title,
    imageSrc,
    description,
    demoLink,
    sourceLink,
    techTags,
}) => {
    const [content, setContent] = useState("");

    const handleInputChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar alguna acción con el contenido ingresado en el formulario
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Project description"
            className={"Modal"}>
            <div className="TopView">
                <h2>{title}</h2>
                <button className="CrossButton" onClick={onClose}>
                    X
                </button>
            </div>

            <div className="MainContainer">
                <div className="LeftSide">
                    <img src={imageSrc} alt={title} className="ImageBox"></img>
                </div>
                <div className="DescriptionContainer">
                    <h3>Description:</h3>
                    <p>{description}</p>
                    {techTags && (
                        <div className="TagContainer">
                            {techTags.split(";").map((item, index, arr) => (
                                <span key={item} className="Tag">
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}
                    <div className="EmptyFlex"></div>
                    <div className="ButtonContainer">
                        <a
                            href={demoLink}
                            target="_blank"
                            className={demoLink ? "Link" : "DisabledLink"}
                            rel="noreferrer">
                            Open
                        </a>
                        <a
                            href={sourceLink}
                            target="_blank"
                            rel="noreferrer"
                            className={sourceLink ? "Link" : "DisabledLink"}>
                            Source code
                        </a>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProjectDescriptionModal;
