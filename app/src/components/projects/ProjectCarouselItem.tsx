import React from 'react';
import './ProjectCarouselItem.css';
import { Row } from 'react-bootstrap';

interface ProjectCarouselItemProps {
  title: string;
  description: string;
  image?: string;
}

const ProjectCarouselItem: React.FC<ProjectCarouselItemProps> = ({ title, description, image }) => {
  return (
    <div
      className="carousel-item-content"
      style={{
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: image ? 'cover' : undefined,
        backgroundPosition: image ? 'center' : undefined,
      }}
    >
      <Row>
        <h3>{title}</h3>
        <p>{description}</p>
      </Row>
    </div>
  );
};

export default ProjectCarouselItem;
