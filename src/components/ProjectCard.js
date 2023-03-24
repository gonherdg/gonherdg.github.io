import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
    const { title, imageSrc, webLink, sourceLink } = props;

    return (
          <div className="ProjectCard">
              <a href={webLink} target="_blank"><img src={imageSrc} alt={title} className="ProjectCard__image" /></a>
              <div className="ProjectCard__bar">
                <a href={sourceLink} target="_blank"><div className="ProjectCard__title">{title}</div></a>
                <div className="ProjectCard__bar">
                <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="ProjectCard__code-link">+info</a>
                <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="ProjectCard__code-link">&lt;/&gt;</a>
                </div>
              </div>
          </div>
        );
}

export default ProjectCard;

