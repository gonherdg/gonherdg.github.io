import React, { useEffect, useState } from "react";
import "./styles.css";
import DescriptionModal from "../DescriptionModal/DescriptionModal.js";

function ProjectCard(props) {
    const {
        title,
        imageSrc,
        webLink,
        sourceLink,
        description,
        demoLink,
        techTags,
    } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleImageClick = () => {
        if (demoLink) {
            window.open(demoLink, "_blank");
        }
    };

    return (
        <div className="ProjectCard">
            <a href={webLink} target="_blank" rel="noreferrer">
                <img
                    src={imageSrc}
                    alt={title}
                    className="ProjectCard__image"
                    onClick={handleImageClick}
                />
            </a>
            <div className="ProjectCard__bar">
                {webLink != null && (
                    <a href={webLink} target="_blank" rel="noreferrer">
                        <div className="ProjectCard__title">{title}</div>
                    </a>
                )}
                {webLink == null && (
                    <div className="ProjectCard__title">{title}</div>
                )}
                <div className="ProjectCard__bar">
                    {description && (
                        <button
                            onClick={openModal}
                            className="ProjectCard__code-link">
                            +info
                        </button>
                    )}
                    {!description && (
                        <div className="ProjectCard__code-link Disabled">
                            +info
                        </div>
                    )}

                    {sourceLink && (
                        <a
                            href={sourceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ProjectCard__code-link">
                            &lt;/&gt;
                        </a>
                    )}
                    {!sourceLink && (
                        <div className="ProjectCard__code-link Disabled">
                            &lt;/&gt;
                        </div>
                    )}
                </div>
            </div>
            <div className="ProjectCard__tagbar">
                {techTags && (
                    <ul className="TagContainer">
                        {techTags.split(";").map((item, index, arr) => (
                            <li key={item} className="Tag">
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {description && isModalOpen && (
                <DescriptionModal
                    isOpen={true}
                    onClose={closeModal}
                    title={title}
                    imageSrc={imageSrc}
                    description={description}
                    demoLink={demoLink}
                    sourceLink={sourceLink}
                    techTags={techTags}
                />
            )}
        </div>
    );
}

export default ProjectCard;
