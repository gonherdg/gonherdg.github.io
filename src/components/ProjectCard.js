import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
    const { title, imageSrc, webLink, codeLink } = props;

    return (
          <div className="ProjectCard">
              <a href={webLink} target="_blank"><img src={imageSrc} alt={title} className="ProjectCard__image" /></a>
              <div className="ProjectCard__bar">
                <a href={codeLink} target="_blank"><div className="ProjectCard__title">{title}</div></a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="ProjectCard__code-link">&lt;/&gt;</a>
              </div>
          </div>
        );
}

export default ProjectCard;

