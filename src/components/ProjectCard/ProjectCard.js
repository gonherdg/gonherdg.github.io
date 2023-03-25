import React, {useState} from 'react';
import './styles.css';
import DescriptionModal from "../DescriptionModal/DescriptionModal.js";

function ProjectCard(props) {
    const { title, imageSrc, webLink, sourceLink, description } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      console.log("ClICK");
      setIsModalOpen(true);
    }

    const closeModal = () => {
      console.log("CLOSE");
      setIsModalOpen(false);
    }

    return (
          <div className="ProjectCard">
              <a href={webLink} target="_blank"><img src={imageSrc} alt={title} className="ProjectCard__image" /></a>
    <div className="ProjectCard__bar">
      {webLink != null && <a href={webLink} target="_blank"><div className="ProjectCard__title">{title}</div></a>}
      {webLink == null && <div className="ProjectCard__title" >{title}</div>}
    <div className="ProjectCard__bar">
      {description && <button onClick={openModal} className="ProjectCard__code-link">+info</button>}
      {!description && <div className="ProjectCard__code-link Disabled">+info</div>}
      
      {sourceLink && <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="ProjectCard__code-link">&lt;/&gt;</a>}
      {!sourceLink && <div className="ProjectCard__code-link Disabled">&lt;/&gt;</div>}
                </div>
              </div>
        
      {description && isModalOpen && <DescriptionModal isOpen={true} onClose={closeModal} title={title} imageSrc={imageSrc} description={description}/>}
          </div>
        );
}

export default ProjectCard;

