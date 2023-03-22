import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
    const { title, imageSrc, webLink, codeLink } = props;

    return (
          <div className="ProjectCard">
            <a href={webLink} target="_blank" rel="noopener noreferrer">
              <img src={imageSrc} alt={title} className="ProjectCard__image" />
              <div className="ProjectCard__title">{title}</div>
            </a>
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="ProjectCard__code-link">
              Source Code
            </a>
          </div>
        );
}

export default ProjectCard;

