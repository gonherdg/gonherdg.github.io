import React, { useState } from "react";
import Modal from "react-modal";
import './styles.css';

Modal.setAppElement("#root");

const ProjectDescriptionModal = ({ isOpen, onClose, title, imageSrc, description, demoLink, sourceLink }) => {
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
    >
      <div className="TopView">
        <h2>{title}</h2>
        <button className="CrossButton" onClick={onClose}>X</button>
      </div>

      <div className="MainContainer">
        <div className="LeftSide">
          <img src={imageSrc} className="ImageBox"></img>
        </div>
        <div className="DescriptionContainer">
          <h3>Description:</h3>
          <p>{description}</p>
          <a href={demoLink} className="Link">Demo</a>
          <a href={sourceLink} className="Link">Source</a>
        </div>
      </div>

    </Modal>
  );
};

export default ProjectDescriptionModal;
 
