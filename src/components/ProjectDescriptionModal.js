import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ProjectDescriptionModal = ({ isOpen, onClose, title, imageSrc, description }) => {
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
      <h2>{title}</h2>
      <img src={imageSrc}></img>
      <h3>Description:</h3>
      <p>{description}</p>

      <button onClick={onClose}>X</button>
    </Modal>
  );
};

export default ProjectDescriptionModal;
 
